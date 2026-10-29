import { useEffect } from "react";
import { toast } from "sonner";

export const useServiceWorker = (swUrl = "/sw.js") => {
  useEffect(() => {
    if (!import.meta.env.PROD || !("serviceWorker" in navigator)) return;

    const sw = navigator.serviceWorker;
    const hadController = !!sw.controller;
    let reloading = false;
    let registration: ServiceWorkerRegistration | undefined;
    let installingWorker: ServiceWorker | null = null;

    // Reload once when a new version takes over (not on first install)
    const onControllerChange = () => {
      if (!hadController || reloading) return;
      reloading = true;
      window.location.reload();
    };

    const onStateChange = () => {
      if (installingWorker?.state === "installed" && sw.controller) {
        const worker = installingWorker;
        toast("New version available", {
          duration: Infinity,
          action: {
            label: "Reload",
            onClick: () => worker.postMessage({ type: "SKIP_WAITING" }),
          },
        });
      }
    };

    const onUpdateFound = () => {
      installingWorker?.removeEventListener("statechange", onStateChange);
      installingWorker = registration?.installing ?? null;
      installingWorker?.addEventListener("statechange", onStateChange);
    };

    sw.addEventListener("controllerchange", onControllerChange);

    sw.register(swUrl)
      .then(reg => {
        registration = reg;
        reg.addEventListener("updatefound", onUpdateFound);
      })
      .catch(error =>
        console.error("Service worker registration failed:", error)
      );

    return () => {
      sw.removeEventListener("controllerchange", onControllerChange);
      registration?.removeEventListener("updatefound", onUpdateFound);
      installingWorker?.removeEventListener("statechange", onStateChange);
    };
  }, [swUrl]);
};
