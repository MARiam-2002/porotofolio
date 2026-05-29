import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, Sparkles, Star, Award, Users, ExternalLink } from 'lucide-react';
import { useUserProfile } from '@/hooks/useUserProfile';
import { useFeaturedProjects } from '@/hooks/useFeaturedProjects';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/OptimizedImage';

// Refined animation variants for 2026 aesthetic
const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
    initial: { opacity: 0, x: -25 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInRight = {
    initial: { opacity: 0, x: 25 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: "easeOut" }
};

const Home: React.FC = () => {
    const { t } = useLanguage();
    const { data: userData, isLoading: loading, error } = useUserProfile();
    const { projects: featuredProjects, error: projectsError } = useFeaturedProjects();

    // Performance optimized - removed complex animations

    if (error) {
        console.error('Error fetching user data:', error);
    }

    if (projectsError) {
        console.error('Error fetching featured projects:', projectsError);
    }

    // Fallback data for user profile
    const fallbackUserData = {
        name: 'Mahmoud Ahmed',
        profilePicture: {
            url: '/97337243.jpeg'
        }
    };

    // Use fallback data if API fails or data is not available
    const displayUserData = userData || fallbackUserData;

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
        <div className="min-h-screen bg-gradient-to-br from-light-950 via-light-50 to-primary-50/20 dark:from-dark-950 dark:via-dark-900 dark:to-primary-950/30">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-28 lg:pt-36 pb-8 lg:pb-16">
                {/* Background Elements - Modern gradient blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-primary-400/15 to-accent-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-accent-400/15 to-primary-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-primary-500/8 to-transparent rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Content */}
                        <motion.div
                            {...fadeInLeft}
                            className="space-y-8 relative z-10"
                        >
                            {/* Badge */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-700 dark:text-primary-300 font-medium backdrop-blur-sm hover:bg-primary-500/15 transition-all duration-300"
                            >
                                <Sparkles className="w-4 h-4" />
                                <span className="text-sm">{t('hero.badge') || 'Available for opportunities'}</span>
                            </motion.div>

                            <div className="space-y-5">
                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                    className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
                                >
                                    <span className="text-dark-900 dark:text-light-50">
                                        {t('hero.greeting')}
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
                                        {t('hero.name')}
                                    </span>
                                </motion.h1>

                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.15 }}
                                    className="text-xl md:text-2xl font-semibold text-dark-700 dark:text-light-200 flex items-center space-x-3"
                                >
                                    <span>{t('hero.title')}</span>
                                    <span className="text-2xl">⚡</span>
                                </motion.h2>

                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    className="text-lg text-dark-600 dark:text-light-400 max-w-2xl leading-relaxed font-light"
                                >
                                    {t('hero.description')}
                                </motion.p>
                            </div>

                            {/* Stats */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.25 }}
                                className="grid grid-cols-3 gap-4 pt-4"
                            >
                                <div className="group p-4 rounded-2xl bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm border border-dark-200/20 dark:border-dark-700/30 hover:bg-white/70 dark:hover:bg-dark-700/70 transition-all duration-300 cursor-default">
                                    <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">5+</div>
                                    <div className="text-xs text-dark-600 dark:text-light-400 font-medium mt-1">{t('stats.projects') || 'Projects'}</div>
                                </div>
                                <div className="group p-4 rounded-2xl bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm border border-dark-200/20 dark:border-dark-700/30 hover:bg-white/70 dark:hover:bg-dark-700/70 transition-all duration-300 cursor-default">
                                    <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">3+</div>
                                    <div className="text-xs text-dark-600 dark:text-light-400 font-medium mt-1">{t('stats.years') || 'Years'}</div>
                                </div>
                                <div className="group p-4 rounded-2xl bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm border border-dark-200/20 dark:border-dark-700/30 hover:bg-white/70 dark:hover:bg-dark-700/70 transition-all duration-300 cursor-default">
                                    <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">10+</div>
                                    <div className="text-xs text-dark-600 dark:text-light-400 font-medium mt-1">{t('stats.clients') || 'Clients'}</div>
                                </div>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4 pt-4"
                            >
                                <Link to="/projects" className="group inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105 active:scale-95">
                                    <span>{t('hero.cta.primary') || 'View My Work'}</span>
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>

                                <a
                                    href="/cv.pdf"
                                    download="Mahmoud_Ahmed_CV.pdf"
                                    className="group inline-flex items-center justify-center px-7 py-3.5 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-500 font-semibold rounded-2xl hover:bg-primary-50 dark:hover:bg-dark-800 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
                                >
                                    <Download className="mr-2 w-5 h-5" />
                                    {t('hero.cta.secondary') || 'Download CV'}
                                </a>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.35 }}
                                className="flex space-x-3 pt-2"
                            >
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm rounded-xl shadow-soft hover:shadow-medium border border-dark-200/30 dark:border-dark-700/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                                        title={social.name}
                                    >
                                        <social.icon className="w-5 h-5 text-dark-700 dark:text-light-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300" />
                                    </a>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Visual Element */}
                        <motion.div
                            {...fadeInRight}
                            className="flex justify-center lg:justify-end relative z-10"
                        >
                            <div className="relative">
                                {loading ? (
                                    <div className="w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-3xl flex items-center justify-center shadow-xl ring-4 ring-primary-500/20 animate-pulse">
                                        <div className="text-white text-5xl lg:text-6xl font-bold">MA</div>
                                    </div>
                                ) : displayUserData?.profilePicture?.url ? (
                                    <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-primary-500/20 hover:ring-primary-500/40 transition-all duration-300">
                                        <OptimizedImage
                                            src={displayUserData.profilePicture.url}
                                            alt={displayUserData.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            priority={true}
                                            showLoading={false}
                                        />
                                    </div>
                                ) : (
                                    <div className="w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-3xl flex items-center justify-center shadow-2xl ring-4 ring-primary-500/20">
                                        <div className="text-white text-5xl lg:text-6xl font-bold">MA</div>
                                    </div>
                                )}

                                {/* Floating badge elements */}
                                <motion.div 
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg"
                                >
                                    <Star className="w-8 h-8 text-white" />
                                </motion.div>

                                <motion.div 
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                    className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg"
                                >
                                    <Award className="w-7 h-7 text-white" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 lg:py-32 bg-gradient-to-br from-light-50 via-primary-50/10 to-light-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-32 right-32 w-96 h-96 bg-gradient-to-br from-primary-400/12 to-accent-400/8 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-32 left-32 w-96 h-96 bg-gradient-to-br from-accent-400/12 to-primary-400/8 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            {...fadeInUp}
                            className="inline-flex items-center space-x-2 px-4 py-2.5 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-700 dark:text-primary-300 font-medium mb-6 backdrop-blur-sm"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm">{t('about.badge') || 'About Me'}</span>
                        </motion.div>

                        <motion.h2
                            {...fadeInUp}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-dark-900 via-primary-700 to-primary-600 dark:from-light-50 dark:via-primary-300 dark:to-accent-300 bg-clip-text text-transparent mb-6"
                        >
                            {t('about.title')}
                        </motion.h2>

                        <motion.p
                            {...fadeInUp}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="text-lg text-dark-600 dark:text-light-400 max-w-3xl mx-auto leading-relaxed font-light"
                        >
                            {t('about.subtitle')}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            {...fadeInLeft}
                            className="space-y-8"
                        >
                            <motion.p
                                {...fadeInUp}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="text-lg text-dark-600 dark:text-light-400 leading-relaxed font-light"
                            >
                                {t('about.description')}
                            </motion.p>

                            {/* Enhanced Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="grid grid-cols-3 gap-4"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -8 }}
                                    className="p-5 rounded-2xl bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm border border-dark-200/20 dark:border-dark-700/30 hover:bg-white/70 dark:hover:bg-dark-700/60 transition-all duration-300"
                                >
                                    <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">5+</div>
                                    <div className="text-xs text-dark-600 dark:text-light-400 font-medium mt-2">{t('about.stats.projects') || 'Projects'}</div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -8 }}
                                    className="p-5 rounded-2xl bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm border border-dark-200/20 dark:border-dark-700/30 hover:bg-white/70 dark:hover:bg-dark-700/60 transition-all duration-300"
                                >
                                    <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">3+</div>
                                    <div className="text-xs text-dark-600 dark:text-light-400 font-medium mt-2">{t('about.stats.experience') || 'Years'}</div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -8 }}
                                    className="p-5 rounded-2xl bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm border border-dark-200/20 dark:border-dark-700/30 hover:bg-white/70 dark:hover:bg-dark-700/60 transition-all duration-300"
                                >
                                    <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">10+</div>
                                    <div className="text-xs text-dark-600 dark:text-light-400 font-medium mt-2">{t('about.stats.clients') || 'Clients'}</div>
                                </motion.div>
                            </motion.div>

                            {/* Skills Preview */}
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.35 }}
                                className="space-y-4 pt-4"
                            >
                                <h3 className="text-xl font-semibold text-dark-900 dark:text-light-50">{t('skills.core') || 'Core Skills'}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {['Flutter', 'Dart', 'Firebase', 'Provider', 'Bloc', 'Git'].map((skill, index) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: 0.4 + index * 0.06 }}
                                            whileHover={{ scale: 1.08 }}
                                            className="px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-700 dark:text-primary-300 rounded-xl text-sm font-medium hover:bg-primary-500/15 transition-all duration-300"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            className="relative h-72 lg:h-96 rounded-3xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/10 to-primary-500/20 rounded-3xl"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center space-y-4">
                                    <Users className="w-16 h-16 mx-auto text-primary-600 dark:text-primary-400" />
                                    <p className="text-dark-700 dark:text-light-300 font-medium">Building amazing experiences</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-24 lg:py-32 bg-gradient-to-br from-light-50 to-light-950 dark:from-dark-900 dark:to-dark-950 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 right-40 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-accent-400/10 to-transparent rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            {...fadeInUp}
                            className="inline-flex items-center space-x-2 px-4 py-2.5 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-700 dark:text-primary-300 font-medium mb-6 backdrop-blur-sm"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm">{t('projects.badge') || 'Featured Work'}</span>
                        </motion.div>

                        <motion.h2
                            {...fadeInUp}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-dark-900 via-primary-700 to-primary-600 dark:from-light-50 dark:via-primary-300 dark:to-accent-300 bg-clip-text text-transparent mb-6"
                        >
                            {t('projects.title') || 'My Projects'}
                        </motion.h2>

                        <motion.p
                            {...fadeInUp}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="text-lg text-dark-600 dark:text-light-400 max-w-3xl mx-auto leading-relaxed font-light"
                        >
                            {t('projects.subtitle') || 'Showcase of my recent work and expertise'}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.slice(0, 3).map((project, index) => (
                            <motion.div
                                key={project._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-dark-800 border border-dark-200/30 dark:border-dark-700/40 shadow-soft hover:shadow-medium transition-all duration-300"
                            >
                                <Link to={`/projects/${project.slug}`} className="block">
                                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent-500/10">
                                        {project.cover?.url ? (
                                            <OptimizedImage
                                                src={project.cover.url}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-400/30 to-accent-400/20">
                                                <ExternalLink className="w-8 h-8 text-primary-600/40" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    <div className="p-6 space-y-4">
                                        <h3 className="text-xl font-bold text-dark-900 dark:text-light-50 line-clamp-1">{project.title}</h3>
                                        <p className="text-sm text-dark-600 dark:text-light-400 line-clamp-2 font-light">{project.description}</p>

                                        {project.techStack && project.techStack.length > 0 && (
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {project.techStack.slice(0, 3).map((tech) => (
                                                    <span
                                                        key={tech.key}
                                                        className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-500/20 rounded-full"
                                                    >
                                                        {tech.name}
                                                    </span>
                                                ))}
                                                {project.techStack.length > 3 && (
                                                    <span className="px-3 py-1 text-xs font-medium bg-dark-200/50 dark:bg-dark-700/50 text-dark-600 dark:text-light-400 rounded-full">
                                                        +{project.techStack.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        )}

                                        <div className="pt-3 flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:translate-x-1 transition-transform duration-300">
                                            <span className="text-sm">{t('common.viewProject') || 'View Project'}</span>
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-center pt-8"
                    >
                        <Link
                            to="/projects"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 group"
                        >
                            <span>{t('common.viewAll') || 'View All Projects'}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-24 bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 dark:from-primary-800 dark:via-primary-900 dark:to-accent-800 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            {t('cta.title') || 'Ready to work together?'}
                        </h2>
                        <p className="text-lg text-white/90 max-w-2xl mx-auto">
                            {t('cta.subtitle') || 'Let&apos;s create something amazing together. Get in touch today!'}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-2xl hover:bg-light-100 transition-all duration-300 group"
                            >
                                <span>{t('common.getInTouch') || 'Get In Touch'}</span>
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            <a
                                href="mailto:mahmoudabuelazem2467@gmail.com"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300"
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                <span>{t('common.email') || 'Send Email'}</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
