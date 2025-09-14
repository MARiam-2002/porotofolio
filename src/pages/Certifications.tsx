import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ExternalLink, Building2, Star, Trophy, Shield, BookOpen } from 'lucide-react';
import { certificationApi } from '@/services/api';
import CachedImage from '@/components/CachedImage';

interface Certification {
    _id: string;
    title: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
    description?: string;
    logo?: {
        url: string;
        public_id: string;
    };
    isPublished: boolean;
    order: number;
    createdAt: string;
    updatedAt: string;
}

const Certifications: React.FC = () => {
    const { t } = useLanguage();
    const [certifications, setCertifications] = useState<Certification[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCertifications = async () => {
            try {
                setLoading(true);
                const response = await certificationApi.getAll();
                if (response.success) {
                    setCertifications(response.data);
                } else {
                    setError('Failed to fetch certifications');
                }
            } catch (error) {
                console.error('Error fetching certifications:', error);
                setError('Failed to fetch certifications');
            } finally {
                setLoading(false);
            }
        };

        fetchCertifications();
    }, []);

    const getCertificationIcon = (issuer: string) => {
        const issuerLower = issuer.toLowerCase();
        if (issuerLower.includes('iti') || issuerLower.includes('training')) {
            return <BookOpen className="w-6 h-6" />;
        } else if (issuerLower.includes('google') || issuerLower.includes('firebase')) {
            return <Shield className="w-6 h-6" />;
        } else if (issuerLower.includes('icpc') || issuerLower.includes('programming')) {
            return <Trophy className="w-6 h-6" />;
        } else if (issuerLower.includes('coursera') || issuerLower.includes('university')) {
            return <Award className="w-6 h-6" />;
        }
        return <Star className="w-6 h-6" />;
    };

    const getCertificationColor = (index: number) => {
        const colors = [
            'from-blue-500 to-cyan-500',
            'from-purple-500 to-pink-500',
            'from-green-500 to-teal-500',
            'from-orange-500 to-red-500',
            'from-indigo-500 to-purple-500',
            'from-pink-500 to-rose-500'
        ];
        return colors[index % colors.length];
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const convertGoogleDriveUrl = (url: string) => {
        // Convert Google Drive sharing URL to direct download URL
        if (url.includes('drive.google.com/file/d/')) {
            const fileId = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/)?.[1];
            if (fileId) {
                return `https://drive.google.com/uc?export=download&id=${fileId}`;
            }
        }
        return url;
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-24 lg:pt-32 pb-12 flex items-center justify-center">
                <div className="text-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto mb-4"
                    />
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
                        Loading certifications...
                    </p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-24 lg:pt-32 pb-12 flex items-center justify-center">
                <div className="text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 15, stiffness: 300 }}
                        className="mb-8"
                    >
                        <div className="text-8xl mb-4">😕</div>
                    </motion.div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Error Loading Certifications
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        {error}
                    </p>
                    <motion.button
                        onClick={() => window.location.reload()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Try Again
                    </motion.button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-24 lg:pt-32 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
                    >
                        <Award className="w-10 h-10 text-white" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
                    >
                        {t('certifications.title') || 'Certifications'}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        {t('certifications.subtitle') || 'My professional credentials and achievements'}
                    </motion.p>
                </motion.div>

                {/* Certifications Grid */}
                {certifications.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-center py-20"
                    >
                        <div className="text-6xl mb-4">📜</div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            No Certifications Yet
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                            Certifications will be displayed here once they are added to the system.
                        </p>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {certifications.map((certification, index) => (
                                <motion.div
                                    key={certification._id}
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group relative"
                                >
                                    {/* Main Card */}
                                    <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
                                        {/* Gradient Background */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${getCertificationColor(index)} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

                                        {/* Content */}
                                        <div className="relative p-8">
                                            {/* Logo and Icon */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex items-center space-x-4">
                                                    {certification.logo?.url ? (
                                                        <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                                                            <CachedImage
                                                                src={certification.logo.url}
                                                                alt={`${certification.issuer} logo`}
                                                                className="w-full h-full object-cover"
                                                                showLoading={false}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getCertificationColor(index)} flex items-center justify-center text-white shadow-lg`}>
                                                            {getCertificationIcon(certification.issuer)}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Badge */}
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                                    className="flex items-center space-x-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold"
                                                >
                                                    <Star className="w-4 h-4" />
                                                    <span>Verified</span>
                                                </motion.div>
                                            </div>

                                            {/* Title */}
                                            <motion.h3
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                                className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                                            >
                                                {certification.title}
                                            </motion.h3>

                                            {/* Issuer */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                                                className="flex items-center space-x-2 mb-4"
                                            >
                                                <Building2 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                                <span className="text-gray-600 dark:text-gray-300 font-medium">
                                                    {certification.issuer}
                                                </span>
                                            </motion.div>

                                            {/* Date */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                                className="flex items-center space-x-2 mb-4"
                                            >
                                                <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                                <span className="text-gray-600 dark:text-gray-300">
                                                    {formatDate(certification.date)}
                                                </span>
                                            </motion.div>

                                            {/* Description */}
                                            {certification.description && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                                                    className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3"
                                                >
                                                    {certification.description}
                                                </motion.p>
                                            )}

                                            {/* Action Button */}
                                            {certification.credentialUrl && (
                                                <motion.a
                                                    href={convertGoogleDriveUrl(certification.credentialUrl)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    <span>View Certificate</span>
                                                </motion.a>
                                            )}
                                        </div>

                                        {/* Hover Effect Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                                    </div>

                                    {/* Floating Elements */}
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            rotate: [0, 5, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.5
                                        }}
                                        className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-20"
                                    />
                                    <motion.div
                                        animate={{
                                            y: [0, 10, 0],
                                            rotate: [0, -5, 0]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.3
                                        }}
                                        className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full opacity-20"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {/* Stats Section */}
                {certifications.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <div className="text-center p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {certifications.length}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                Total Certifications
                            </div>
                        </div>

                        <div className="text-center p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                                {new Set(certifications.map(c => c.issuer)).size}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                Different Issuers
                            </div>
                        </div>

                        <div className="text-center p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                                {new Date().getFullYear() - Math.min(...certifications.map(c => new Date(c.date).getFullYear())) + 1}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                Years of Learning
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Certifications;
