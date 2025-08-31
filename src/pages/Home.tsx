import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, Sparkles, Star, Zap, Award, Users, Clock, CheckCircle } from 'lucide-react';
import { useUserProfile } from '@/hooks/useUserProfile';
import { useFeaturedProjects } from '@/hooks/useFeaturedProjects';
import { Link } from 'react-router-dom';
import CachedImage from '@/components/CachedImage';
// import CacheManager from '@/components/CacheManager';

const Home: React.FC = () => {
    const { t } = useLanguage();
    const { data: userData, isLoading: loading, error } = useUserProfile();
    const { projects: featuredProjects, loading: projectsLoading, error: projectsError } = useFeaturedProjects();

    if (error) {
        console.error('Error fetching user data:', error);
    }

    if (projectsError) {
        console.error('Error fetching featured projects:', projectsError);
    }

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/MahmoudAbuelazm',
            icon: Github,
            color: 'hover:text-gray-400',
            bgColor: 'hover:bg-gray-800'
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/mahmoud-abu-elazem',
            icon: Linkedin,
            color: 'hover:text-blue-400',
            bgColor: 'hover:bg-blue-900/20'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/mahmoud_abuelazm',
            icon: Twitter,
            color: 'hover:text-sky-400',
            bgColor: 'hover:bg-sky-900/20'
        },
        {
            name: 'Email',
            url: 'mailto:mahmoudabuelazem2467@gmail.com',
            icon: Mail,
            color: 'hover:text-red-400',
            bgColor: 'hover:bg-red-900/20'
        },
    ];

    // Extract image URLs for preloading - Disabled for performance
    // const imageUrls = [
    //     userData?.profilePicture?.url,
    //     ...(featuredProjects.map(project => project.cover?.url).filter(Boolean) as string[])
    // ].filter((url): url is string => Boolean(url));

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            {/* Preload images - Disabled for better performance */}
            {/* <ImagePreloader
                images={imageUrls}
                priority={true}
                onProgress={(loaded, total) => {
                    console.log(`Preloaded ${loaded}/${total} images`);
                }}
            /> */}
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24 lg:pt-32 pb-6 lg:pb-12">
                {/* Background Elements - Simplified for better performance */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-2xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-6 relative z-10"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-700 dark:text-blue-400 font-medium backdrop-blur-sm"
                            >
                                <Sparkles className="w-4 h-4" />
                                <span>Available for new opportunities</span>
                            </motion.div>

                            <div className="space-y-4">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-4xl md:text-6xl font-bold leading-tight"
                                >
                                    <span className="text-slate-900 dark:text-slate-100">
                                        {t('hero.greeting')}
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                        {t('hero.name')}
                                    </span>
                                </motion.h1>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-3"
                                >
                                    <span>{t('hero.title')}</span>
                                    <div>
                                        <Zap className="w-6 h-6 text-amber-500" />
                                    </div>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
                                >
                                    {t('hero.description')}
                                </motion.p>
                            </div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="grid grid-cols-3 gap-4 py-4"
                            >
                                <div className="text-center">
                                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">5+</div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">3+</div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">Years</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-1">10+</div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">Clients</div>
                                </div>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <span>{t('hero.cta.primary')}</span>
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </motion.button>

                                <motion.a
                                    href="/cv.pdf"
                                    download="Mahmoud_Ahmed_CV.pdf"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                                    {t('hero.cta.secondary')}
                                </motion.a>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="flex space-x-3"
                            >
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 ${social.color} ${social.bgColor}`}
                                        title={social.name}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Visual Element */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex justify-center lg:justify-end relative z-10 -mt-6 lg:-mt-12"
                        >
                            <div className="relative">
                                {loading ? (
                                    <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-400 via-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                                        <div className="text-white text-4xl lg:text-5xl font-bold">MA</div>
                                    </div>
                                ) : userData?.profilePicture?.url ? (
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20"
                                    >
                                        <CachedImage
                                            src={userData.profilePicture.url}
                                            alt={userData.name}
                                            className="w-full h-full object-cover"
                                            priority={true}
                                            showLoading={false}
                                        />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-400 via-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-blue-500/20"
                                    >
                                        <div className="text-white text-4xl lg:text-5xl font-bold">MA</div>
                                    </motion.div>
                                )}

                                {/* Floating elements - Simplified for performance */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                    <Star className="w-6 h-6 text-white" />
                                </div>

                                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                                    <Award className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
                {/* Background Elements - Simplified for performance */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/15 to-indigo-600/15 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-blue-600/15 rounded-full blur-2xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-700 dark:text-blue-400 font-medium mb-6 backdrop-blur-sm"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>About Me</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 dark:from-slate-100 dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6"
                        >
                            {t('about.title')}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            {t('about.subtitle')}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
                            >
                                {t('about.description')}
                            </motion.p>

                            {/* Enhanced Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="grid grid-cols-3 gap-6"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                                >
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{t('about.stats.projects')}</div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                                >
                                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{t('about.stats.experience')}</div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                                >
                                    <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">10+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{t('about.stats.clients')}</div>
                                </motion.div>
                            </motion.div>

                            {/* Skills Preview */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="space-y-4"
                            >
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Core Skills</h3>
                                <div className="flex flex-wrap gap-3">
                                    {['Flutter', 'Dart', 'Firebase', 'Provider', 'Bloc', 'Git'].map((skill, index) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-blue-100/80 via-purple-100/80 to-pink-100/80 dark:from-blue-900/80 dark:via-purple-900/80 dark:to-pink-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                                <div className="space-y-6">
                                    <motion.div
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-lg"
                                    >
                                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">Flutter Development</span>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-lg"
                                    >
                                        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">Mobile App Design</span>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-lg"
                                    >
                                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">State Management</span>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-lg"
                                    >
                                        <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full"></div>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">UI/UX Design</span>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{
                                    y: [-10, 10, -10],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                                }}
                                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                            >
                                <CheckCircle className="w-6 h-6 text-white" />
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [10, -10, 10],
                                    rotate: [360, 180, 0]
                                }}
                                transition={{
                                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                    rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                                }}
                                className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
                            >
                                <Star className="w-5 h-5 text-white" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            rotate: -360,
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 font-medium mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Featured Work</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6"
                        >
                            {t('projects.title')}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            {t('projects.subtitle')}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsLoading ? (
                            // Enhanced Loading skeleton
                            Array.from({ length: 3 }).map((_, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border border-gray-200/50 dark:border-gray-700/50"
                                >
                                    <div className="h-56 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse"></div>
                                    <div className="p-8">
                                        <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-3"></div>
                                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6"></div>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {Array.from({ length: 3 }).map((_, i) => (
                                                <div key={i} className="h-7 w-20 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                                            ))}
                                        </div>
                                        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                                    </div>
                                </motion.div>
                            ))
                        ) : featuredProjects.length > 0 ? (
                            featuredProjects.slice(0, 3).map((project, index) => (
                                <motion.div
                                    key={project._id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50"
                                >
                                    <div className="h-56 relative overflow-hidden">
                                        {project.cover?.url ? (
                                            <CachedImage
                                                src={project.cover.url}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                showLoading={false}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-600 to-pink-500 flex items-center justify-center">
                                                <div className="text-white text-2xl font-bold">{project.title}</div>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                        {/* Project Type Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200/50 dark:border-gray-700/50">
                                                {project.type}
                                            </span>
                                        </div>

                                        {/* Year Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                                                {project.year}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <motion.h3
                                            className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                                        >
                                            {project.title}
                                        </motion.h3>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.techStack.slice(0, 3).map((tech, techIndex) => (
                                                <motion.span
                                                    key={techIndex}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.3, delay: 0.4 + techIndex * 0.1 }}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                            {project.techStack.length > 3 && (
                                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                                                    +{project.techStack.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-center justify-between"
                                        >
                                            <Link
                                                to={`/projects/${project.slug || project._id}`}
                                                className="group/link inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-300"
                                            >
                                                <span>View Details</span>
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                                            </Link>

                                            {/* Project Stats */}
                                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center space-x-1">
                                                    <Users className="w-4 h-4" />
                                                    <span>{project.stats?.users?.toLocaleString() || '0'}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Star className="w-4 h-4 text-yellow-500" />
                                                    <span>{project.stats?.rating || '0'}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            // Enhanced No projects message
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="col-span-full text-center py-16"
                            >
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Sparkles className="w-12 h-12 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    No Featured Projects Yet
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md mx-auto">
                                    I'm currently working on some amazing projects. Check back soon!
                                </p>
                            </motion.div>
                        )}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center mt-16"
                    >
                        <motion.a
                            href="/projects"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <span>{t('projects.viewAll')}</span>
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            rotate: { duration: 28, repeat: Infinity, ease: "linear" },
                            scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute top-40 right-40 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            rotate: -360,
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            rotate: { duration: 32, repeat: Infinity, ease: "linear" },
                            scale: { duration: 9, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute bottom-40 left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 font-medium mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Technical Expertise</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
                        >
                            {t('skills.title')}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            {t('skills.subtitle')}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Languages */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                            >
                                <span className="text-3xl">💻</span>
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                {t('skills.categories.languages')}
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { name: 'Flutter', percentage: 95, color: 'from-blue-500 to-blue-600' },
                                    { name: 'Dart', percentage: 90, color: 'from-purple-500 to-purple-600' },
                                    { name: 'C++', percentage: 85, color: 'from-pink-500 to-pink-600' }
                                ].map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        className="space-y-2"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{skill.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.percentage}%` }}
                                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Frameworks */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                            >
                                <span className="text-3xl">⚡</span>
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                {t('skills.categories.frameworks')}
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { name: 'Provider', percentage: 90, color: 'from-blue-500 to-blue-600' },
                                    { name: 'Bloc', percentage: 85, color: 'from-indigo-500 to-indigo-600' },
                                    { name: 'Cubit', percentage: 80, color: 'from-slate-500 to-slate-600' }
                                ].map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                        className="space-y-2"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{skill.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.percentage}%` }}
                                                transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tools */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                            >
                                <span className="text-3xl">🛠️</span>
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                {t('skills.categories.tools')}
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { name: 'Firebase', percentage: 85, color: 'from-purple-500 to-purple-600' },
                                    { name: 'Git', percentage: 80, color: 'from-pink-500 to-pink-600' },
                                    { name: 'Figma', percentage: 75, color: 'from-rose-500 to-rose-600' }
                                ].map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                        className="space-y-2"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                            <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{skill.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.percentage}%` }}
                                                transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Databases */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                            >
                                <span className="text-3xl">🗄️</span>
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                {t('skills.categories.databases')}
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { name: 'Firestore', percentage: 80, color: 'from-yellow-500 to-yellow-600' },
                                    { name: 'SQLite', percentage: 70, color: 'from-orange-500 to-orange-600' },
                                    { name: 'Hive', percentage: 75, color: 'from-amber-500 to-amber-600' }
                                ].map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                        className="space-y-2"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                            <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">{skill.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.percentage}%` }}
                                                transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center mt-16"
                    >
                        <motion.a
                            href="/skills"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <span>View All Skills</span>
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            rotate: { duration: 26, repeat: Infinity, ease: "linear" },
                            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute top-40 left-40 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            rotate: -360,
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            rotate: { duration: 34, repeat: Infinity, ease: "linear" },
                            scale: { duration: 11, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute bottom-40 right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 font-medium mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Let's Connect</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
                        >
                            {t('contact.title')}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            {t('contact.subtitle')}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
                        >
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 }}
                                    >
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            {t('contact.form.name')}
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-400"
                                            placeholder="Your Name"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.4 }}
                                    >
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            {t('contact.form.email')}
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-400"
                                            placeholder="your@email.com"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                >
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                        {t('contact.form.subject')}
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-400"
                                        placeholder="Project Inquiry"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6 }}
                                >
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                        {t('contact.form.message')}
                                    </label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-400"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </motion.div>

                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.7 }}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    {t('contact.form.submit')}
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    {t('contact.info.title')}
                                </h3>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    {t('contact.info.description')}
                                </p>
                            </motion.div>

                            <div className="space-y-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        className="flex items-center space-x-4 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group"
                                    >
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ${social.bgColor}`}>
                                            <social.icon className={`w-7 h-7 ${social.color}`} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900 dark:text-white text-lg">{social.name}</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                                {social.name === 'Email' ? 'mahmoudabuelazem2467@gmail.com' : 'Connect with me'}
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Additional Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm"
                            >
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Info</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                        <span className="text-gray-600 dark:text-gray-400">Available for new opportunities</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                        <span className="text-gray-600 dark:text-gray-400">Open to freelance projects</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                        <span className="text-gray-600 dark:text-gray-400">Quick response guaranteed</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Cache Manager - Hidden for now */}
            {/* <CacheManager /> */}

            {/* Scroll to Top Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
                <div>
                    ↑
                </div>
            </motion.button>
        </div>
    );
};

export default Home;
