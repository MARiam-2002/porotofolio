import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, Sparkles, Star, Zap, Award, Users } from 'lucide-react';
import { useUserProfile } from '@/hooks/useUserProfile';
import { useFeaturedProjects } from '@/hooks/useFeaturedProjects';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/OptimizedImage';
import { motion } from 'framer-motion';

// CSS Animation classes
const fadeInUp = 'animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0';
const fadeInLeft = 'animate-[fadeInLeft_0.6s_ease-out_forwards] opacity-0';
const fadeInRight = 'animate-[fadeInRight_0.6s_ease-out_forwards] opacity-0';
const scaleIn = 'animate-[scaleIn_0.4s_ease-out_forwards] opacity-0';

const HomeAnimated: React.FC = () => {
    const { t } = useLanguage();
    const { data: userData, isLoading: loading, error } = useUserProfile();
    const { projects: featuredProjects, loading: projectsLoading, error: projectsError } = useFeaturedProjects();

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

    return (
        <>
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }
                
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-pulse-slow {
                    animation: pulse 2s ease-in-out infinite;
                }
                
                .animate-spin-slow {
                    animation: spin 3s linear infinite;
                }
                
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }
                .delay-600 { animation-delay: 0.6s; }
                .delay-700 { animation-delay: 0.7s; }
                .delay-800 { animation-delay: 0.8s; }
            `}</style>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                {/* Hero Section */}
                <section className="relative overflow-hidden pt-24 lg:pt-32 pb-6 lg:pb-12">
                    {/* Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-2xl animate-pulse-slow"></div>
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-2xl animate-pulse-slow delay-500"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Content */}
                            <div className={`space-y-6 relative z-10 ${fadeInLeft}`}>
                                {/* Badge */}
                                <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-700 dark:text-blue-400 font-medium backdrop-blur-sm ${scaleIn} delay-100`}>
                                    <Sparkles className="w-4 h-4 animate-spin-slow" />
                                    <span>Available for new opportunities</span>
                                </div>

                                <div className="space-y-4">
                                    <h1 className={`text-4xl md:text-6xl font-bold leading-tight ${fadeInUp} delay-200`}>
                                        <span className="text-slate-900 dark:text-slate-100">
                                            {t('hero.greeting')}
                                        </span>
                                        <br />
                                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                            {t('hero.name')}
                                        </span>
                                    </h1>

                                    <h2 className={`text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-3 ${fadeInUp} delay-300`}>
                                        <span>{t('hero.title')}</span>
                                        <div>
                                            <Zap className="w-6 h-6 text-amber-500 animate-pulse" />
                                        </div>
                                    </h2>

                                    <p className={`text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed ${fadeInUp} delay-400`}>
                                        {t('hero.description')}
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className={`grid grid-cols-3 gap-4 py-4 ${fadeInUp} delay-500`}>
                                    <div className="text-center transform hover:scale-105 transition-transform duration-300">
                                        <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">5+</div>
                                        <div className="text-sm text-slate-600 dark:text-slate-400">Projects</div>
                                    </div>
                                    <div className="text-center transform hover:scale-105 transition-transform duration-300">
                                        <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">3+</div>
                                        <div className="text-sm text-slate-600 dark:text-slate-400">Years</div>
                                    </div>
                                    <div className="text-center transform hover:scale-105 transition-transform duration-300">
                                        <div className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-1">10+</div>
                                        <div className="text-sm text-slate-600 dark:text-slate-400">Clients</div>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className={`flex flex-col sm:flex-row gap-4 ${fadeInUp} delay-600`}>
                                    <button className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                        <span>{t('hero.cta.primary')}</span>
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>

                                    <a
                                        href="/cv.pdf"
                                        download="Mahmoud_Ahmed_CV.pdf"
                                        className="group inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                    >
                                        <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                                        {t('hero.cta.secondary')}
                                    </a>
                                </div>

                                {/* Social Links */}
                                <div className={`flex space-x-3 ${fadeInUp} delay-700`}>
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 ${social.color} ${social.bgColor} hover:scale-110 hover:-translate-y-1 ${scaleIn}`}
                                            title={social.name}
                                            style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Visual Element */}
                            <div className={`flex justify-center lg:justify-end relative z-10 -mt-6 lg:-mt-12 ${fadeInRight} delay-300`}>
                                <div className="relative">
                                    {loading ? (
                                        <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-400 via-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                                            <div className="text-white text-4xl lg:text-5xl font-bold">MA</div>
                                        </div>
                                    ) : displayUserData?.profilePicture?.url ? (
                                        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 hover:scale-105 transition-transform duration-300 animate-float">
                                            <OptimizedImage
                                                src={displayUserData.profilePicture.url}
                                                alt={displayUserData.name}
                                                className="w-full h-full object-cover"
                                                priority={true}
                                                showLoading={false}
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-400 via-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-blue-500/20 hover:scale-105 transition-transform duration-300 animate-float">
                                            <div className="text-white text-4xl lg:text-5xl font-bold">MA</div>
                                        </div>
                                    )}

                                    {/* Floating elements */}
                                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-float">
                                        <Star className="w-6 h-6 text-white animate-spin-slow" />
                                    </div>

                                    <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-float delay-500">
                                        <Award className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Projects Section */}
                <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className={`text-center mb-12 ${fadeInUp}`}>
                            <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 font-medium mb-6 ${scaleIn} delay-100`}>
                                <Sparkles className="w-4 h-4 animate-spin-slow" />
                                <span>Featured Work</span>
                            </div>

                            <h2 className={`text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6 ${fadeInUp} delay-200`}>
                                {t('projects.title')}
                            </h2>

                            <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed ${fadeInUp} delay-300`}>
                                {t('projects.subtitle')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projectsLoading ? (
                                // Loading skeleton
                                Array.from({ length: 3 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className={`bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border border-gray-200/50 dark:border-gray-700/50 ${scaleIn}`}
                                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
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
                                    </div>
                                ))
                            ) : featuredProjects.length > 0 ? (
                                featuredProjects.slice(0, 3).map((project, index) => (
                                    <div
                                        key={project._id}
                                        className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-2 ${scaleIn}`}
                                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                                    >
                                        <div className="h-56 relative overflow-hidden">
                                            {/* Project Gallery with Continuous Loop Animation */}
                                            <div className="relative w-full h-full">
                                                {/* Sequential Image Display - One after another (not smooth) */}
                                                <div className="relative w-full h-full">
                                                    {/* Cover Image - First */}
                                                    {project.cover?.url && (
                                                        <motion.div
                                                            className="absolute inset-0"
                                                            initial={{ opacity: 0, x: 100 }}
                                                            animate={{
                                                                opacity: [0, 1, 1, 0],
                                                                x: [100, 0, 0, -100]
                                                            }}
                                                            transition={{
                                                                duration: 4,
                                                                times: [0, 0.1, 0.7, 1],
                                                                delay: index * 0.5 + 0.2,
                                                                repeat: Infinity,
                                                                repeatDelay: 1
                                                            }}
                                                        >
                                                            <OptimizedImage
                                                                src={project.cover.url}
                                                                alt={project.title}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                                showLoading={false}
                                                                priority={true}
                                                            />
                                                        </motion.div>
                                                    )}

                                                    {/* Gallery Images - Sequential Animation (One after another) */}
                                                    {project.gallery && project.gallery.map((image, imageIndex) => (
                                                        <motion.div
                                                            key={image._id}
                                                            className="absolute inset-0"
                                                            initial={{ opacity: 0, x: 100 }}
                                                            animate={{
                                                                opacity: [0, 1, 1, 0],
                                                                x: [100, 0, 0, -100]
                                                            }}
                                                            transition={{
                                                                duration: 4,
                                                                times: [0, 0.1, 0.7, 1],
                                                                delay: index * 0.5 + 0.5 + (imageIndex * 0.8),
                                                                repeat: Infinity,
                                                                repeatDelay: 1
                                                            }}
                                                        >
                                                            <OptimizedImage
                                                                src={image.url}
                                                                alt={image.caption || `${project.title} - Gallery ${imageIndex + 1}`}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                                showLoading={false}
                                                            />

                                                            {/* Image Number Badge */}
                                                            <motion.div
                                                                initial={{ scale: 0, rotate: -90 }}
                                                                animate={{
                                                                    scale: [0, 1, 1, 0],
                                                                    rotate: [-90, 0, 0, 90]
                                                                }}
                                                                transition={{
                                                                    duration: 4,
                                                                    times: [0, 0.1, 0.7, 1],
                                                                    delay: index * 0.5 + 0.8 + (imageIndex * 0.8),
                                                                    repeat: Infinity,
                                                                    repeatDelay: 1
                                                                }}
                                                                className="absolute top-2 right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg"
                                                            >
                                                                {imageIndex + 1}
                                                            </motion.div>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                {/* Fallback if no images */}
                                                {!project.cover?.url && (!project.gallery || project.gallery.length === 0) && (
                                                    <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-600 to-pink-500 flex items-center justify-center">
                                                        <div className="text-white text-2xl font-bold">{project.title}</div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Hover Overlay with Action Buttons */}
                                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                                <div className="flex flex-col space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    {/* GitHub Button */}
                                                    {project.links?.find(link => link.key === 'github') && (
                                                        <a
                                                            href={project.links.find(link => link.key === 'github')?.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
                                                        >
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                            </svg>
                                                            <span className="text-sm font-medium">GitHub</span>
                                                        </a>
                                                    )}

                                                    {/* Demo Button */}
                                                    {project.links?.find(link => link.key === 'demo') && (
                                                        <a
                                                            href={project.links.find(link => link.key === 'demo')?.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                            </svg>
                                                            <span className="text-sm font-medium">Live Demo</span>
                                                        </a>
                                                    )}

                                                    {/* App Store Button */}
                                                    {project.links?.find(link => link.key === 'appStore') && (
                                                        <a
                                                            href={project.links.find(link => link.key === 'appStore')?.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center space-x-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg transition-all duration-200 hover:scale-105"
                                                        >
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                                            </svg>
                                                            <span className="text-sm font-medium">App Store</span>
                                                        </a>
                                                    )}

                                                    {/* Google Play Button */}
                                                    {project.links?.find(link => link.key === 'playStore') && (
                                                        <a
                                                            href={project.links.find(link => link.key === 'playStore')?.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
                                                        >
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                                            </svg>
                                                            <span className="text-sm font-medium">Google Play</span>
                                                        </a>
                                                    )}

                                                    {/* Website Button */}
                                                    {project.links?.find(link => link.key === 'website') && (
                                                        <a
                                                            href={project.links.find(link => link.key === 'website')?.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                                            </svg>
                                                            <span className="text-sm font-medium">Website</span>
                                                        </a>
                                                    )}

                                                    {/* Documentation Button */}
                                                    {project.links?.find(link => link.key === 'documentation') && (
                                                        <a
                                                            href={project.links.find(link => link.key === 'documentation')?.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                            </svg>
                                                            <span className="text-sm font-medium">Documentation</span>
                                                        </a>
                                                    )}

                                                    {/* View Details Button */}
                                                    <Link
                                                        to={`/projects/${project.slug || project._id}`}
                                                        className="flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 hover:scale-105 backdrop-blur-sm"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                        <span className="text-sm font-medium">View Details</span>
                                                    </Link>
                                                </div>
                                            </div>

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
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                {project.title}
                                            </h3>

                                            <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Action Buttons - Always Visible */}
                                            <div className="flex flex-wrap gap-2 mb-6 justify-center">
                                                {/* GitHub Button */}
                                                {project.links?.find(link => link.key === 'github') && (
                                                    <a
                                                        href={project.links.find(link => link.key === 'github')?.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition-all duration-200 hover:scale-105"
                                                    >
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        </svg>
                                                        <span className="font-medium">GitHub</span>
                                                    </a>
                                                )}

                                                {/* Demo Button */}
                                                {project.links?.find(link => link.key === 'demo') && (
                                                    <a
                                                        href={project.links.find(link => link.key === 'demo')?.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-all duration-200 hover:scale-105"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                        <span className="font-medium">Live Demo</span>
                                                    </a>
                                                )}

                                                {/* App Store Button */}
                                                {project.links?.find(link => link.key === 'appStore') && (
                                                    <a
                                                        href={project.links.find(link => link.key === 'appStore')?.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2 px-3 py-2 bg-black hover:bg-gray-800 text-white text-sm rounded-lg transition-all duration-200 hover:scale-105"
                                                    >
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                                        </svg>
                                                        <span className="font-medium">App Store</span>
                                                    </a>
                                                )}

                                                {/* Google Play Button */}
                                                {project.links?.find(link => link.key === 'playStore') && (
                                                    <a
                                                        href={project.links.find(link => link.key === 'playStore')?.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-all duration-200 hover:scale-105"
                                                    >
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                                        </svg>
                                                        <span className="font-medium">Google Play</span>
                                                    </a>
                                                )}

                                                {/* Website Button */}
                                                {project.links?.find(link => link.key === 'website') && (
                                                    <a
                                                        href={project.links.find(link => link.key === 'website')?.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-all duration-200 hover:scale-105"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                                        </svg>
                                                        <span className="font-medium">Website</span>
                                                    </a>
                                                )}

                                                {/* Documentation Button */}
                                                {project.links?.find(link => link.key === 'documentation') && (
                                                    <a
                                                        href={project.links.find(link => link.key === 'documentation')?.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg transition-all duration-200 hover:scale-105"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                        <span className="font-medium">Documentation</span>
                                                    </a>
                                                )}

                                                {/* View Details Button */}
                                                <Link
                                                    to={`/projects/${project.slug || project._id}`}
                                                    className="flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-lg transition-all duration-200 hover:scale-105"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                    <span className="font-medium">View Details</span>
                                                </Link>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.techStack.slice(0, 3).map((tech, techIndex) => (
                                                    <span
                                                        key={tech.key}
                                                        className={`px-3 py-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium transform hover:scale-105 transition-transform duration-200 ${scaleIn}`}
                                                        style={{ animationDelay: `${0.6 + techIndex * 0.1}s` }}
                                                    >
                                                        {tech.name}
                                                    </span>
                                                ))}
                                                {project.techStack.length > 3 && (
                                                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                                                        +{project.techStack.length - 3}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Project Stats */}
                                            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center space-x-1">
                                                    <Users className="w-4 h-4" />
                                                    <span>{project.stats?.users?.toLocaleString() || '0'}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Star className="w-4 h-4 text-yellow-500" />
                                                    <span>{project.stats?.rating || '0'}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                                    </svg>
                                                    <span>{project.stats?.downloads?.toLocaleString() || '0'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                // No projects message
                                <div className={`col-span-full text-center py-16 ${fadeInUp} delay-400`}>
                                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                                        <Sparkles className="w-12 h-12 text-white animate-spin-slow" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        No Featured Projects Yet
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md mx-auto">
                                        I'm currently working on some amazing projects. Check back soon!
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className={`text-center mt-16 ${fadeInUp} delay-600`}>
                            <a
                                href="/projects"
                                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                <span>{t('projects.viewAll')}</span>
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Skills Section - Modern 2025 Design */}
                <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
                    {/* Modern Background Pattern */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl animate-pulse-slow delay-300"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        {/* Modern Header */}
                        <div className={`text-center mb-20 ${fadeInUp}`}>
                            <div className={`inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 font-semibold mb-8 backdrop-blur-sm ${scaleIn} delay-100`}>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-sm uppercase tracking-wider">Technical Expertise</span>
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300"></div>
                            </div>

                            <h2 className={`text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-8 leading-tight ${fadeInUp} delay-200`}>
                                Skills & Technologies
                            </h2>

                            <p className={`text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed ${fadeInUp} delay-300`}>
                                Crafting exceptional digital experiences with cutting-edge technologies and modern development practices
                            </p>
                        </div>

                        {/* Modern Skills Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                            {/* Programming Languages Card */}
                            <div className={`group bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl border border-slate-200/50 dark:border-slate-700/50 transition-all duration-700 hover:-translate-y-3 ${scaleIn} delay-400`}>
                                <div className="flex items-center mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <span className="text-2xl">💻</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Programming Languages</h3>
                                        <p className="text-slate-600 dark:text-slate-400">Core development languages</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { name: 'C++', level: 90, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-900/20', textColor: 'text-blue-700 dark:text-blue-300' },
                                        { name: 'Dart', level: 95, color: 'from-cyan-500 to-cyan-600', bgColor: 'bg-cyan-50 dark:bg-cyan-900/20', textColor: 'text-cyan-700 dark:text-cyan-300' },
                                        { name: 'HTML', level: 88, color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-900/20', textColor: 'text-orange-700 dark:text-orange-300' },
                                        { name: 'CSS', level: 85, color: 'from-pink-500 to-pink-600', bgColor: 'bg-pink-50 dark:bg-pink-900/20', textColor: 'text-pink-700 dark:text-pink-300' }
                                    ].map((skill, index) => (
                                        <div key={skill.name} className={`p-4 ${skill.bgColor} rounded-2xl hover:scale-105 transition-all duration-300 ${scaleIn}`} style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                                            <div className="flex justify-between items-center mb-3">
                                                <span className={`font-semibold ${skill.textColor}`}>{skill.name}</span>
                                                <span className={`text-sm font-bold ${skill.textColor}`}>{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-white/50 dark:bg-slate-700/50 rounded-full h-2 overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out`}
                                                    style={{
                                                        width: `${skill.level}%`,
                                                        animationDelay: `${0.8 + index * 0.2}s`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Frameworks & Tools Combined Card */}
                            <div className={`group bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl border border-slate-200/50 dark:border-slate-700/50 transition-all duration-700 hover:-translate-y-3 ${scaleIn} delay-500`}>
                                <div className="flex items-center mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <span className="text-2xl">⚡</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Frameworks & Tools</h3>
                                        <p className="text-slate-600 dark:text-slate-400">Development ecosystem</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {/* Flutter - Featured */}
                                    <div className={`p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 hover:scale-105 transition-all duration-300 ${scaleIn}`} style={{ animationDelay: '0.7s' }}>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                                    <span className="text-white text-lg font-bold">F</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Flutter</h4>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">Cross-platform framework</p>
                                                </div>
                                            </div>
                                            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">95%</span>
                                        </div>
                                        <div className="w-full bg-white/50 dark:bg-slate-700/50 rounded-full h-3 overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1500 ease-out" style={{ width: '95%', animationDelay: '0.9s' }} />
                                        </div>
                                    </div>

                                    {/* Tools Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {[
                                            { name: 'Firebase', level: 88, color: 'from-orange-500 to-yellow-500', bgColor: 'bg-orange-50 dark:bg-orange-900/20' },
                                            { name: 'Git', level: 85, color: 'from-red-500 to-pink-500', bgColor: 'bg-red-50 dark:bg-red-900/20' },
                                            { name: 'GitHub', level: 90, color: 'from-gray-600 to-gray-800', bgColor: 'bg-gray-50 dark:bg-gray-700/20' }
                                        ].map((tool, index) => (
                                            <div key={tool.name} className={`p-4 ${tool.bgColor} rounded-xl hover:scale-105 transition-all duration-300 ${scaleIn}`} style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                                                <div className="text-center">
                                                    <h5 className="font-semibold text-slate-900 dark:text-white mb-2">{tool.name}</h5>
                                                    <div className="w-full bg-white/50 dark:bg-slate-600/50 rounded-full h-2 overflow-hidden mb-1">
                                                        <div
                                                            className={`h-full bg-gradient-to-r ${tool.color} rounded-full transition-all duration-1000 ease-out`}
                                                            style={{
                                                                width: `${tool.level}%`,
                                                                animationDelay: `${1.0 + index * 0.1}s`
                                                            }}
                                                        />
                                                    </div>
                                                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{tool.level}%</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Hive Database */}
                                    <div className={`p-4 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl border border-green-200/50 dark:border-green-700/50 hover:scale-105 transition-all duration-300 ${scaleIn}`} style={{ animationDelay: '1.1s' }}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                                                    <span className="text-white text-sm font-bold">H</span>
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-slate-900 dark:text-white">Hive Flutter</h5>
                                                    <p className="text-xs text-slate-600 dark:text-slate-400">Local database</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-lg font-bold text-green-600 dark:text-green-400">82%</span>
                                                <div className="w-16 bg-white/50 dark:bg-slate-600/50 rounded-full h-2 overflow-hidden mt-1">
                                                    <div className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full transition-all duration-1000 ease-out" style={{ width: '82%', animationDelay: '1.3s' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modern Specializations */}
                        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 ${fadeInUp} delay-800`}>
                            {[
                                {
                                    title: 'Mobile Development',
                                    description: 'Cross-platform applications with Flutter',
                                    icon: '📱',
                                    gradient: 'from-blue-500 to-cyan-500',
                                    bgGradient: 'from-blue-500/10 to-cyan-500/10',
                                    borderColor: 'border-blue-500/20'
                                },
                                {
                                    title: 'UI/UX Design',
                                    description: 'Beautiful and intuitive user interfaces',
                                    icon: '🎨',
                                    gradient: 'from-purple-500 to-pink-500',
                                    bgGradient: 'from-purple-500/10 to-pink-500/10',
                                    borderColor: 'border-purple-500/20'
                                },
                                {
                                    title: 'Performance',
                                    description: 'Optimized and lightning-fast applications',
                                    icon: '⚡',
                                    gradient: 'from-green-500 to-teal-500',
                                    bgGradient: 'from-green-500/10 to-teal-500/10',
                                    borderColor: 'border-green-500/20'
                                }
                            ].map((spec, index) => (
                                <div key={spec.title} className={`group bg-gradient-to-r ${spec.bgGradient} border ${spec.borderColor} rounded-2xl p-6 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 transition-all duration-500 ${scaleIn}`} style={{ animationDelay: `${0.9 + index * 0.1}s` }}>
                                    <div className="flex items-start space-x-4">
                                        <div className={`w-14 h-14 bg-gradient-to-r ${spec.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                            <span className="text-2xl">{spec.icon}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-900 group-hover:to-slate-700 dark:group-hover:from-white dark:group-hover:to-slate-300 transition-all duration-300">
                                                {spec.title}
                                            </h4>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {spec.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Modern CTA Button */}
                        <div className={`text-center ${fadeInUp} delay-1000`}>
                            <a
                                href="/skills"
                                className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-110 hover:-translate-y-1 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="relative z-10">Explore All Skills</span>
                                <ArrowRight className="relative z-10 ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomeAnimated;
