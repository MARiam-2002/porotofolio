import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
    children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
    // Preload critical resources
    const preloadCriticalResources = useCallback(() => {
        // Preload critical fonts
        const fontLinks = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        ];

        fontLinks.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = href;
            document.head.appendChild(link);
        });

        // Preload critical images
        const criticalImages: string[] = [
            // Add critical image URLs here
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }, []);

    // Optimize scroll performance
    const optimizeScrollPerformance = useCallback(() => {
        let ticking = false;

        const updateScroll = () => {
            // Add scroll optimizations here if needed
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateScroll);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick, { passive: true });
        window.addEventListener('resize', requestTick, { passive: true });

        return () => {
            window.removeEventListener('scroll', requestTick);
            window.removeEventListener('resize', requestTick);
        };
    }, []);

    // Optimize memory usage
    const optimizeMemoryUsage = useCallback(() => {
        // Clear unused resources periodically
        const clearUnusedResources = () => {
            if ('caches' in window) {
                caches.keys().then(cacheNames => {
                    cacheNames.forEach(cacheName => {
                        // Keep only recent caches
                        if (cacheName.includes('old-')) {
                            caches.delete(cacheName);
                        }
                    });
                });
            }
        };

        // Clear resources every 5 minutes
        const interval = setInterval(clearUnusedResources, 5 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        preloadCriticalResources();
        const scrollCleanup = optimizeScrollPerformance();
        const memoryCleanup = optimizeMemoryUsage();

        return () => {
            scrollCleanup();
            memoryCleanup();
        };
    }, [preloadCriticalResources, optimizeScrollPerformance, optimizeMemoryUsage]);

    return <>{children}</>;
};

export default PerformanceOptimizer;
