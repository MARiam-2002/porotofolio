import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useUserProfile } from '@/hooks/useUserProfile';

const Home: React.FC = () => {
    const { t } = useLanguage();
    const { data: userData, isLoading: loading, error } = useUserProfile();
    
    if (error) {
        console.error('Error fetching user data:', error);
    }

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/MahmoudAbuelazm',
            icon: Github,
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/mahmoud-abu-elazem',
            icon: Linkedin,
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/mahmoud_abuelazm',
            icon: Twitter,
        },
        {
            name: 'Email',
            url: 'mailto:mahmoudabuelazem2467@gmail.com',
            icon: Mail,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                                    {t('hero.greeting')} <br />
                                    <span className="text-blue-600 dark:text-blue-400">
                                        {t('hero.name')}
                                    </span>
                                </h1>
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                                    {t('hero.title')}
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                                    {t('hero.description')}
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                >
                                    {t('hero.cta.primary')}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </motion.button>
                                <motion.a
                                    href="/cv.pdf"
                                    download="Mahmoud_Ahmed_CV.pdf"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                                >
                                    <Download className="mr-2 w-5 h-5" />
                                    {t('hero.cta.secondary')}
                                </motion.a>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                                        title={social.name}
                                    >
                                        <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Image/Illustration */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex justify-center lg:justify-end"
                        >
                            <div className="relative">
                                {loading ? (
                                    <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                                        <div className="text-white text-6xl font-bold">MA</div>
                                    </div>
                                ) : userData?.profilePicture?.url ? (
                                    <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                                        <img
                                            src={userData.profilePicture.url}
                                            alt={userData.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                                        <div className="text-white text-6xl font-bold">MA</div>
                                    </div>
                                )}
                                {/* Floating elements */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full"
                                />
                                <motion.div
                                    animate={{ y: [10, -10, 10] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                        >
                            {t('about.title')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                        >
                            {t('about.subtitle')}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                {t('about.description')}
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{t('about.stats.projects')}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{t('about.stats.experience')}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{t('about.stats.clients')}</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        <span className="text-gray-700 dark:text-gray-300">Flutter Development</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                        <span className="text-gray-700 dark:text-gray-300">Mobile App Design</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700 dark:text-gray-300">State Management</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <span className="text-gray-700 dark:text-gray-300">UI/UX Design</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                        >
                            {t('projects.title')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                        >
                            {t('projects.subtitle')}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        >
                            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white text-4xl font-bold">Wanna Meal</div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Wanna Meal</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    A comprehensive food delivery application built with Flutter. Features include user authentication, restaurant listings, and order tracking.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">Flutter</span>
                                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">Firebase</span>
                                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">Provider</span>
                                </div>
                                <div className="flex space-x-3">
                                    <a href="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium">
                                        View Details →
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Project Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        >
                            <div className="h-48 bg-gradient-to-br from-green-400 to-blue-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white text-4xl font-bold">Movie Explorer</div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Movie & TV Explorer</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    A movie and TV show discovery app that allows users to browse, search, and get detailed information about movies and TV series.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">Flutter</span>
                                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm rounded-full">TMDB API</span>
                                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">Bloc</span>
                                </div>
                                <div className="flex space-x-3">
                                    <a href="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium">
                                        View Details →
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Project Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        >
                            <div className="h-48 bg-gradient-to-br from-yellow-400 to-red-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white text-4xl font-bold">Bookly</div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Bookly</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    A book reading and management app that helps users discover, organize, and track their reading progress.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">Flutter</span>
                                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">Firebase</span>
                                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full">Cubit</span>
                                </div>
                                <div className="flex space-x-3">
                                    <a href="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium">
                                        View Details →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <a
                            href="/projects"
                            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            {t('projects.viewAll')}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                        >
                            {t('skills.title')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
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
                            className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 text-center"
                        >
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💻</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {t('skills.categories.languages')}
                            </h3>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Flutter</span>
                                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">95%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Dart</span>
                                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">C++</span>
                                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">85%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Frameworks */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 text-center"
                        >
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {t('skills.categories.frameworks')}
                            </h3>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Provider</span>
                                    <span className="text-sm font-medium text-green-600 dark:text-green-400">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Bloc</span>
                                    <span className="text-sm font-medium text-green-600 dark:text-green-400">85%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Cubit</span>
                                    <span className="text-sm font-medium text-green-600 dark:text-green-400">80%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Tools */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 text-center"
                        >
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🛠️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {t('skills.categories.tools')}
                            </h3>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Firebase</span>
                                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">85%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Git</span>
                                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">80%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Figma</span>
                                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">75%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Databases */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 text-center"
                        >
                            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🗄️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {t('skills.categories.databases')}
                            </h3>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Firestore</span>
                                    <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">80%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">SQLite</span>
                                    <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">70%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Hive</span>
                                    <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">75%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center mt-12"
                    >
                        <a
                            href="/skills"
                            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            View All Skills
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                        >
                            {t('contact.title')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                        >
                            {t('contact.subtitle')}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                        >
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            {t('contact.form.name')}
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            {t('contact.form.email')}
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {t('contact.form.subject')}
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {t('contact.form.message')}
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                >
                                    {t('contact.form.submit')}
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {t('contact.info.title')}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    {t('contact.info.description')}
                                </p>
                            </div>

                            <div className="space-y-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 5 }}
                                        className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                                    >
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                                            <social.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900 dark:text-white">{social.name}</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                                {social.name === 'Email' ? 'mahmoudabuelazem2467@gmail.com' : 'Connect with me'}
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
