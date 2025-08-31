import React, { useEffect } from 'react';
import { useImageCache } from '@/hooks/useImageCache';

interface ImagePreloaderProps {
  images: string[];
  onProgress?: (loaded: number, total: number) => void;
  onComplete?: () => void;
  priority?: boolean;
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({
  images,
  onProgress,
  onComplete,
  priority = false
}) => {
  const { preloadImages } = useImageCache();

  useEffect(() => {
    if (!images.length) return;

    let isMounted = true;
    let loadedCount = 0;

    const preloadWithProgress = async () => {
      try {
        // Preload images in batches for better performance
        const batchSize = 3;
        const batches = [];
        
        for (let i = 0; i < images.length; i += batchSize) {
          batches.push(images.slice(i, i + batchSize));
        }

        for (const batch of batches) {
          if (!isMounted) break;

          const promises = batch.map(async (url) => {
            try {
              await preloadImages([url]);
              if (isMounted) {
                loadedCount++;
                onProgress?.(loadedCount, images.length);
              }
            } catch (error) {
              console.warn(`Failed to preload image: ${url}`, error);
            }
          });

          await Promise.allSettled(promises);
        }

        if (isMounted) {
          onComplete?.();
        }
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    if (priority) {
      preloadWithProgress();
    } else {
      // Use requestIdleCallback for non-priority images
      const requestIdleCallback = (window as any).requestIdleCallback || 
        ((callback: Function) => setTimeout(callback, 1));

      requestIdleCallback(() => {
        preloadWithProgress();
      });
    }

    return () => {
      isMounted = false;
    };
  }, [images, preloadImages, onProgress, onComplete, priority]);

  return null; // This component doesn't render anything
};

export default ImagePreloader;
