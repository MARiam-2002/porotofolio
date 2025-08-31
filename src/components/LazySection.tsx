import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

interface LazySectionProps {
    children: React.ReactNode;
    className?: string;
    fallback?: React.ReactNode;
}

const LazySection: React.FC<LazySectionProps> = ({
    children,
    className = "",
    fallback = (
        <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 animate-pulse rounded-lg"></div>
    )
}) => {
    return (
        <Suspense fallback={fallback}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={className}
            >
                {children}
            </motion.div>
        </Suspense>
    );
};

export default LazySection;
