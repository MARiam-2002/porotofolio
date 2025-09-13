import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
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

const OptimizedImage: React.FC<OptimizedImageProps> = ({
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
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState<string>(src);
    const [isInView, setIsInView] = useState(priority);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!src) return;

        // For priority images, load immediately
        if (priority) {
            console.log('🖼️ Loading priority image:', src);
            setIsInView(true);
            loadImage(src);
            return;
        }

        // For non-priority images, use Intersection Observer for lazy loading
        if (imgRef.current) {
            try {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                console.log('🖼️ Image in view, loading:', src);
                                setIsInView(true);
                                loadImage(src);
                                observer.unobserve(entry.target);
                            }
                        });
                    },
                    { threshold: 0.1 }
                );

                observer.observe(imgRef.current);

                return () => {
                    observer.disconnect();
                };
            } catch (error) {
                // Fallback: load image immediately if Intersection Observer fails
                console.warn('Intersection Observer not supported, loading image immediately');
                setIsInView(true);
                loadImage(src);
            }
        }
    }, [src, priority]);

    const loadImage = (imageSrc: string) => {
        console.log('🖼️ Starting to load image:', imageSrc);
        setIsLoading(true);
        setHasError(false);
        setCurrentSrc(imageSrc);

        try {
            const img = new Image();
            img.onload = () => {
                console.log('✅ Image loaded successfully:', imageSrc);
                setIsLoading(false);
                onLoad?.();
            };
            img.onerror = (error) => {
                console.error('❌ Error loading image:', imageSrc, error);
                setHasError(true);
                setIsLoading(false);
                onError?.();
            };
            img.src = imageSrc;
        } catch (error) {
            console.error('❌ Error creating image element:', error);
            setHasError(true);
            setIsLoading(false);
            onError?.();
        }
    };

    // Handle fallback on error
    useEffect(() => {
        if (hasError && fallbackSrc && fallbackSrc !== currentSrc) {
            loadImage(fallbackSrc);
        }
    }, [hasError, fallbackSrc, currentSrc]);

    if (!isInView) {
        return (
            <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
                {placeholder || (
                    <div className="w-full h-full bg-gradient-to-br from-blue-200 to-indigo-300 dark:from-blue-800 dark:to-indigo-700 flex items-center justify-center">
                        <div className="text-white text-2xl font-bold">MA</div>
                    </div>
                )}
            </div>
        );
    }

    if (isLoading && showLoading) {
        return (
            <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
                {placeholder || (
                    <div className="w-full h-full bg-gradient-to-br from-blue-200 to-indigo-300 dark:from-blue-800 dark:to-indigo-700 flex items-center justify-center animate-pulse">
                        <div className="text-white text-2xl font-bold">MA</div>
                    </div>
                )}
            </div>
        );
    }

    if (hasError && !fallbackSrc) {
        return (
            <div className={`flex items-center justify-center bg-gradient-to-br from-blue-200 to-indigo-300 dark:from-blue-800 dark:to-indigo-700 ${className}`}>
                <div className="text-center text-white">
                    <div className="text-2xl font-bold">MA</div>
                    <div className="text-sm opacity-80 mt-1">Profile Picture</div>
                </div>
            </div>
        );
    }

    return (
        <img
            src={currentSrc}
            alt={alt}
            className={className}
            loading={loading}
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

export default OptimizedImage;
