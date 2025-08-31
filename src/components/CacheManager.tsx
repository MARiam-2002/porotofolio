import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useImageCache } from '@/hooks/useImageCache';
import { Trash2, HardDrive, AlertTriangle } from 'lucide-react';

const CacheManager: React.FC = () => {
    const { clearCache, cacheSize } = useImageCache();
    const [isClearing, setIsClearing] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleClearCache = async () => {
        setIsClearing(true);
        try {
            await clearCache();
            setShowConfirm(false);
        } catch (error) {
            console.error('Failed to clear cache:', error);
        } finally {
            setIsClearing(false);
        }
    };

    const formatCacheSize = (size: number) => {
        if (size === 0) return '0 images';
        if (size === 1) return '1 image';
        return `${size} images`;
    };

    return (
        <div className="fixed bottom-4 left-4 z-40">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-4"
            >
                <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                        <HardDrive className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {formatCacheSize(cacheSize)}
                        </span>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowConfirm(true)}
                        disabled={cacheSize === 0 || isClearing}
                        className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Clear cache"
                    >
                        <Trash2 className="w-4 h-4" />
                    </motion.button>
                </div>

                {/* Confirmation Dialog */}
                {showConfirm && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute bottom-full left-0 mb-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 min-w-[200px]"
                    >
                        <div className="flex items-center space-x-2 mb-3">
                            <AlertTriangle className="w-5 h-5 text-yellow-500" />
                            <span className="font-medium text-gray-900 dark:text-white">Clear Cache?</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            This will remove all cached images. Images will need to be reloaded when viewed again.
                        </p>
                        <div className="flex space-x-2">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleClearCache}
                                disabled={isClearing}
                                className="flex-1 px-3 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors duration-200 disabled:opacity-50"
                            >
                                {isClearing ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                        />
                                        <span>Clearing...</span>
                                    </div>
                                ) : (
                                    'Clear'
                                )}
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setShowConfirm(false)}
                                className="flex-1 px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                            >
                                Cancel
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default CacheManager;
