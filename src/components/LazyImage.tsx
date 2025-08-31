import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import CachedImage from './CachedImage';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  threshold = 0.1,
  rootMargin = '50px',
  onLoad,
  onError
}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [threshold, rootMargin]);

  const handleLoad = () => {
    setHasLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    onError?.();
  };

  return (
    <div ref={imgRef} className={className}>
      {!isInView ? (
        // Placeholder while not in view
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse">
          {placeholder}
        </div>
      ) : (
        // Load image when in view
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hasLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <CachedImage
            src={src}
            alt={alt}
            className={className}
            onLoad={handleLoad}
            onError={handleError}
            showLoading={false}
          />
        </motion.div>
      )}
    </div>
  );
};

export default LazyImage;
