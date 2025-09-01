import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, Sparkles, Star, Zap, Award, Users } from 'lucide-react';
import { useUserProfile } from '@/hooks/useUserProfile';
import { useFeaturedProjects } from '@/hooks/useFeaturedProjects';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/OptimizedImage';

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
                                            {project.cover?.url ? (
                                                <OptimizedImage
                                                    src={project.cover.url}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    showLoading={false}
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-600 to-pink-500 flex items-center justify-center">
                                                    <div className="text-white text-2xl font-bold">{project.title}</div>
                                                </div>
                                            )}

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

                                            <div className="flex items-center justify-between">
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

                {/* Skills Section */}
                <section className="py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-40 right-40 w-64 h-64 bg-gradient-to-br from-blue-400/15 to-indigo-600/15 rounded-full blur-2xl animate-pulse-slow"></div>
                        <div className="absolute bottom-40 left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-blue-600/15 rounded-full blur-2xl animate-pulse-slow delay-500"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className={`text-center mb-16 ${fadeInUp}`}>
                            <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 font-medium mb-6 ${scaleIn} delay-100`}>
                                <Sparkles className="w-4 h-4 animate-spin-slow" />
                                <span>Technical Expertise</span>
                            </div>

                            <h2 className={`text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 ${fadeInUp} delay-200`}>
                                Skills & Technologies
                            </h2>

                            <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed ${fadeInUp} delay-300`}>
                                My technical expertise and the tools I use to build amazing applications
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Programming Languages */}
                            <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-2 ${scaleIn} delay-400`}>
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer">
                                    <span className="text-3xl">💻</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    Programming Languages
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { name: 'C++', level: 90, color: 'from-blue-500 to-blue-600', icon: '🔧' },
                                        { name: 'Dart', level: 95, color: 'from-cyan-500 to-cyan-600', icon: '🎯' },
                                        { name: 'HTML', level: 88, color: 'from-orange-500 to-orange-600', icon: '🌐' },
                                        { name: 'CSS', level: 85, color: 'from-pink-500 to-pink-600', icon: '🎨' }
                                    ].map((skill, index) => (
                                        <div key={skill.name} className={`space-y-2 ${scaleIn}`} style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-lg">{skill.icon}</span>
                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                                </div>
                                                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                                    style={{
                                                        width: `${skill.level}%`,
                                                        animationDelay: `${0.8 + index * 0.1}s`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Frameworks */}
                            <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-2 ${scaleIn} delay-500`}>
                                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer">
                                    <span className="text-3xl">⚡</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    Libraries/Frameworks
                                </h3>
                                <div className="space-y-6">
                                    <div className={`p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 hover:scale-105 transition-all duration-300 ${scaleIn}`} style={{ animationDelay: '0.7s' }}>
                                        <div className="flex items-center justify-center space-x-3 mb-3">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                                <span className="text-white text-xl font-bold">F</span>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Flutter</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Cross-platform framework</p>
                                            </div>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out" style={{ width: '95%', animationDelay: '0.9s' }} />
                                        </div>
                                        <div className="text-right mt-2">
                                            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">95%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tools & Platforms */}
                            <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-2 ${scaleIn} delay-600`}>
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer">
                                    <span className="text-3xl">🛠️</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    Tools / Platforms
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { name: 'Firebase', level: 88, color: 'from-orange-500 to-yellow-500', icon: '🔥' },
                                        { name: 'Git', level: 85, color: 'from-red-500 to-pink-500', icon: '📝' },
                                        { name: 'GitHub', level: 90, color: 'from-gray-600 to-gray-800', icon: '🐙' }
                                    ].map((tool, index) => (
                                        <div key={tool.name} className={`space-y-2 ${scaleIn}`} style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-lg">{tool.icon}</span>
                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool.name}</span>
                                                </div>
                                                <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{tool.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${tool.color} rounded-full transition-all duration-1000 ease-out`}
                                                    style={{
                                                        width: `${tool.level}%`,
                                                        animationDelay: `${1.0 + index * 0.1}s`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Databases */}
                            <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-2 ${scaleIn} delay-700`}>
                                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer">
                                    <span className="text-3xl">🗄️</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    Databases
                                </h3>
                                <div className="space-y-6">
                                    <div className={`p-6 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl border border-green-200/50 dark:border-green-700/50 hover:scale-105 transition-all duration-300 ${scaleIn}`} style={{ animationDelay: '0.9s' }}>
                                        <div className="flex items-center justify-center space-x-3 mb-3">
                                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                                                <span className="text-white text-xl font-bold">H</span>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Hive Flutter</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Local database</p>
                                            </div>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full transition-all duration-1000 ease-out" style={{ width: '82%', animationDelay: '1.1s' }} />
                                        </div>
                                        <div className="text-right mt-2">
                                            <span className="text-sm font-bold text-green-600 dark:text-green-400">82%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skills Summary Cards */}
                        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 ${fadeInUp} delay-800`}>
                            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                                        <span className="text-white text-xl">🚀</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">Mobile Development</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Cross-platform apps with Flutter</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                        <span className="text-white text-xl">🎨</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">UI/UX Design</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Beautiful and intuitive interfaces</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                                        <span className="text-white text-xl">⚡</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">Performance</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Optimized and fast applications</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* View All Skills Button */}
                        <div className={`text-center mt-16 ${fadeInUp} delay-900`}>
                            <a
                                href="/skills"
                                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                <span>View All Skills</span>
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomeAnimated;
