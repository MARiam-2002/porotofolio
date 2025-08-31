import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useImageCache } from '@/hooks/useImageCache';

interface CachedImageProps {
    src: string;
    alt: string;
    className?: string;
    fallbackSrc?: string;
    loading?: 'lazy' | 'eager';
    onLoad?: () => void;
    onError?: () => void;
    placeholder?: React.ReactNode;
    showLoading?: boolean;
    priority?: boolean;
}

const CachedImage: React.FC<CachedImageProps> = ({
    src,
    alt,
    className = '',
    fallbackSrc,
    loading = 'lazy',
    onLoad,
    onError,
    placeholder,
    showLoading = true,
    priority = false
}) => {
    const { cacheImage } = useImageCache();
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState<string>(src);

    useEffect(() => {
        let isMounted = true;

        const loadImage = async () => {
            if (!src) return;

            try {
                setIsLoading(true);
                setHasError(false);

                // Try to cache and load the image
                const cachedUrl = await cacheImage(src);

                if (isMounted) {
                    setCurrentSrc(cachedUrl);
                    setIsLoading(false);
                    onLoad?.();
                }
            } catch (error) {
                console.error('Failed to load cached image:', error);

                if (isMounted) {
                    setHasError(true);
                    setIsLoading(false);
                    onError?.();
                }
            }
        };

        // Always load immediately for priority images
        if (priority) {
            loadImage();
        } else if (showLoading) {
            // Load immediately if showLoading is true
            loadImage();
        } else {
            // For non-priority images, load immediately but don't show loading state
            loadImage();
        }

        return () => {
            isMounted = false;
        };
    }, [src, cacheImage, onLoad, onError, priority, showLoading]);

    // Handle fallback on error
    useEffect(() => {
        if (hasError && fallbackSrc && fallbackSrc !== currentSrc) {
            setCurrentSrc(fallbackSrc);
            setHasError(false);
            setIsLoading(true);
        }
    }, [hasError, fallbackSrc, currentSrc]);

    if (isLoading && showLoading) {
        return (
            <div className={`relative overflow-hidden ${className}`}>
                {placeholder || (
                    <motion.div
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-full h-full bg-gradient-to-br from-blue-200 to-indigo-300 dark:from-blue-800 dark:to-indigo-700 flex items-center justify-center"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-white text-2xl font-bold"
                        >
                            MA
                        </motion.div>
                    </motion.div>
                )}
            </div>
        );
    }

    if (hasError && !fallbackSrc) {
        return (
            <div className={`flex items-center justify-center bg-gradient-to-br from-blue-200 to-indigo-300 dark:from-blue-800 dark:to-indigo-700 ${className}`}>
                <div className="text-center text-white">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-2xl font-bold"
                    >
                        MA
                    </motion.div>
                    <div className="text-sm opacity-80 mt-1">Profile Picture</div>
                </div>
            </div>
        );
    }

    return (
        <motion.img
            src={currentSrc}
            alt={alt}
            className={className}
            loading={loading}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 0.5,
                ease: "easeOut"
            }}
            onLoad={() => {
                setIsLoading(false);
                onLoad?.();
            }}
            onError={() => {
                setHasError(true);
                setIsLoading(false);
                onError?.();
            }}
        />
    );
};

export default CachedImage;
