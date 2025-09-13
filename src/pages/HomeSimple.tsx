import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, Star, Award, Users } from 'lucide-react';
import { useUserProfile } from '@/hooks/useUserProfile';
import { useFeaturedProjects } from '@/hooks/useFeaturedProjects';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/OptimizedImage';

const HomeSimple: React.FC = () => {
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24 lg:pt-32 pb-6 lg:pb-12">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-2xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-6 relative z-10">
                            {/* Badge */}
                            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-700 dark:text-blue-400 font-medium backdrop-blur-sm">
                                <Star className="w-4 h-4" />
                                <span>Available for new opportunities</span>
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                    <span className="text-slate-900 dark:text-slate-100">
                                        {t('hero.greeting')}
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                        {t('hero.name')}
                                    </span>
                                </h1>

                                <h2 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-3">
                                    <span>{t('hero.title')}</span>
                                    <div>
                                        <Award className="w-6 h-6 text-amber-500" />
                                    </div>
                                </h2>

                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                                    {t('hero.description')}
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 py-4">
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
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
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
                            <div className="flex space-x-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 ${social.color} ${social.bgColor} hover:scale-110 hover:-translate-y-1`}
                                        title={social.name}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Visual Element */}
                        <div className="flex justify-center lg:justify-end relative z-10 -mt-6 lg:-mt-12">
                            <div className="relative">
                                {loading ? (
                                    <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-400 via-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                                        <div className="text-white text-4xl lg:text-5xl font-bold">MA</div>
                                    </div>
                                ) : displayUserData?.profilePicture?.url ? (
                                    <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 hover:scale-105 transition-transform duration-300">
                                        <OptimizedImage
                                            src={displayUserData.profilePicture.url}
                                            alt={displayUserData.name}
                                            className="w-full h-full object-cover"
                                            priority={true}
                                            showLoading={false}
                                        />
                                    </div>
                                ) : (
                                    <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-400 via-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-blue-500/20 hover:scale-105 transition-transform duration-300">
                                        <div className="text-white text-4xl lg:text-5xl font-bold">MA</div>
                                    </div>
                                )}

                                {/* Floating elements */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                    <Star className="w-6 h-6 text-white" />
                                </div>

                                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
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
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6">
                            {t('projects.title')}
                        </h2>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            {t('projects.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsLoading ? (
                            // Loading skeleton
                            Array.from({ length: 3 }).map((_, index) => (
                                <div
                                    key={index}
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
                                </div>
                            ))
                        ) : featuredProjects.length > 0 ? (
                            featuredProjects.slice(0, 3).map((project) => (
                                <div
                                    key={project._id}
                                    className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-2"
                                >
                                    <div className="h-56 relative overflow-hidden">
                                        {project.cover?.url ? (
                                            <OptimizedImage
                                                src={project.cover.url}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                showLoading={false}
                                                priority={true}
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
                                            {project.techStack.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech.key}
                                                    className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium"
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
                            <div className="col-span-full text-center py-16">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Star className="w-12 h-12 text-white" />
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

                    <div className="text-center mt-16">
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
        </div>
    );
};

export default HomeSimple;
