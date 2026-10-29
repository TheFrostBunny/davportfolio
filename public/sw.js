const VERSION = "v2";
const STATIC_CACHE = `davportfolio-static-${VERSION}`;
const RUNTIME_CACHE = `davportfolio-runtime-${VERSION}`;
const MAX_RUNTIME_ENTRIES = 50;

const ASSETS_TO_CACHE = ["/", "/index.html", "/manifest.json", "/offline.html"];

const CACHEABLE_DESTINATIONS = new Set(["style", "script", "image", "font"]);

async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length > maxEntries) {
    await cache.delete(keys[0]);
    return trimCache(cacheName, maxEntries);
  }
}

function isSafeToCache(response) {
  if (!response || response.status !== 200) return false;
  if (response.type !== "basic") return false;

  const cacheControl = response.headers.get("Cache-Control") || "";
  if (/no-store|private/i.test(cacheControl)) return false;
  if (response.headers.has("Set-Cookie")) return false;

  return true;
}

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE);
      await Promise.allSettled(
        ASSETS_TO_CACHE.map(url =>
          cache.add(new Request(url, { cache: "reload" }))
        )
      );
    })()
  );
});

// Activate
self.addEventListener("activate", event => {
  event.waitUntil(
    (async () => {
      const keep = new Set([STATIC_CACHE, RUNTIME_CACHE]);
      const names = await caches.keys();
      await Promise.all(
        names
          .filter(name => name.startsWith("davportfolio-") && !keep.has(name))
          .map(name => caches.delete(name))
      );

      if (self.registration.navigationPreload) {
        await self.registration.navigationPreload.enable();
      }
      await self.clients.claim();
    })()
  );
});

// Update on request from the page
self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Fetch
self.addEventListener("fetch", event => {
  const { request } = event;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;
  if (!["http:", "https:"].includes(url.protocol)) return;
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/admin"))
    return;
  if (request.headers.has("range")) return;

  // Pages: network first
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preload = await event.preloadResponse;
          return preload || (await fetch(request));
        } catch (err) {
          return (
            (await caches.match(request)) ||
            (await caches.match("/offline.html")) ||
            (await caches.match("/index.html")) ||
            new Response("You are offline.", {
              status: 503,
              headers: { "Content-Type": "text/plain; charset=utf-8" },
            })
          );
        }
      })()
    );
    return;
  }

  // Assets: stale-while-revalidate
  if (CACHEABLE_DESTINATIONS.has(request.destination)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(RUNTIME_CACHE);
        const cached = await cache.match(request);

        const networkFetch = fetch(request)
          .then(async response => {
            if (isSafeToCache(response)) {
              await cache.put(request, response.clone());
              trimCache(RUNTIME_CACHE, MAX_RUNTIME_ENTRIES);
            }
            return response;
          })
          .catch(() => null);

        if (cached) {
          event.waitUntil(networkFetch);
          return cached;
        }

        const response = await networkFetch;
        return (
          response || new Response("", { status: 504, statusText: "Offline" })
        );
      })()
    );
  }
});
