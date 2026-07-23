/**
 * Image Optimization Utilities
 * Provides lazy loading, WebP support detection, and responsive image handling
 */

export const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  try {
    return canvas.toDataURL('image/webp').indexOf('image/webp') === 5;
  } catch {
    return false;
  }
};

export const getOptimizedImageUrl = (
  url: string,
  width?: number,
  format: 'webp' | 'auto' = 'auto'
): string => {
  if (!url) return '';
  
  // If it's a data URL or external URL, return as-is
  if (url.startsWith('data:') || url.startsWith('http')) {
    return url;
  }
  
  // For local images, you could add image optimization service here
  // Example: Cloudinary, Imgix, or similar
  return url;
};

export interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
}

/**
 * Create a picture element with WebP support and lazy loading
 */
export const createPictureElement = (props: LazyImageProps): string => {
  const { src, alt, width, height, placeholder } = props;
  
  return `
    <picture>
      <source srcset="${src}" type="image/webp" media="(prefers-color-scheme: dark)" />
      <img 
        src="${src}" 
        alt="${alt}"
        ${width ? `width="${width}"` : ''}
        ${height ? `height="${height}"` : ''}
        loading="lazy"
        decoding="async"
      />
    </picture>
  `;
};
