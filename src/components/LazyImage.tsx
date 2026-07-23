import { useState, useEffect, useRef } from 'react';
import { supportsWebP } from '@/lib/imageOptimization';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
}

/**
 * LazyImage Component
 * Provides lazy loading, WebP support detection, and responsive image handling
 */
export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder,
  onLoad,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imgRef.current) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <picture>
      {supportsWebP() && src.endsWith('.png') && (
        <source srcSet={src.replace('.png', '.webp')} type="image/webp" />
      )}
      {supportsWebP() && src.endsWith('.jpg') && (
        <source srcSet={src.replace('.jpg', '.webp')} type="image/webp" />
      )}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
      />
    </picture>
  );
}
