import { useState, useEffect } from 'react';

interface CachedImage {
    url: string;
    blob: Blob;
    timestamp: number;
}

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const MAX_CACHE_SIZE = 50; // Maximum number of cached images

export const useImageCache = () => {
    const [cache, setCache] = useState<Map<string, CachedImage>>(new Map());

    // Load cache from localStorage on mount
    useEffect(() => {
        const loadCache = () => {
            try {
                const cached = localStorage.getItem('imageCache');
                if (cached) {
                    const parsedCache = JSON.parse(cached);
                    const map = new Map();

                    // Filter out expired entries
                    const now = Date.now();
                    Object.entries(parsedCache).forEach(([key, value]: [string, any]) => {
                        if (now - value.timestamp < CACHE_DURATION) {
                            map.set(key, value);
                        }
                    });

                    setCache(map);
                }
            } catch (error) {
                console.warn('Failed to load image cache:', error);
            }
        };

        loadCache();
    }, []);

    // Save cache to localStorage whenever it changes
    useEffect(() => {
        const saveCache = () => {
            try {
                const cacheObject = Object.fromEntries(cache);
                localStorage.setItem('imageCache', JSON.stringify(cacheObject));
            } catch (error) {
                console.warn('Failed to save image cache:', error);
            }
        };

        if (cache.size > 0) {
            saveCache();
        }
    }, [cache]);

    const getCachedImage = async (url: string): Promise<string | null> => {
        const cached = cache.get(url);

        if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
            return URL.createObjectURL(cached.blob);
        }

        return null;
    };

    const cacheImage = async (url: string): Promise<string> => {
        try {
            // Check if already cached
            const cached = await getCachedImage(url);
            if (cached) {
                return cached;
            }

            // Fetch and cache the image
            const response = await fetch(url);
            const blob = await response.blob();

            // Create object URL
            const objectUrl = URL.createObjectURL(blob);

            // Add to cache
            const newCache = new Map(cache);
            newCache.set(url, {
                url,
                blob,
                timestamp: Date.now()
            });

            // Remove oldest entries if cache is too large
            if (newCache.size > MAX_CACHE_SIZE) {
                const entries = Array.from(newCache.entries());
                entries.sort((a, b) => a[1].timestamp - b[1].timestamp);
                const toRemove = entries.slice(0, entries.length - MAX_CACHE_SIZE);
                toRemove.forEach(([key]) => newCache.delete(key));
            }

            setCache(newCache);
            return objectUrl;
        } catch (error) {
            console.error('Failed to cache image:', error);
            return url; // Fallback to original URL
        }
    };

    const clearCache = () => {
        // Revoke all object URLs
        cache.forEach((cached) => {
            URL.revokeObjectURL(URL.createObjectURL(cached.blob));
        });

        setCache(new Map());
        localStorage.removeItem('imageCache');
    };

    const preloadImages = async (urls: string[]): Promise<void> => {
        const promises = urls.map(url => cacheImage(url));
        await Promise.allSettled(promises);
    };

    return {
        cacheImage,
        getCachedImage,
        clearCache,
        preloadImages,
        cacheSize: cache.size
    };
};
