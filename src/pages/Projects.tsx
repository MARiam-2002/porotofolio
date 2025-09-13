import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, User, Tag, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CachedImage from '@/components/CachedImage';
// import ImagePreloader from '@/components/ImagePreloader';

interface Project {
    _id: string;
    title: string;
    description: string;
    cover: {
        url: string;
        public_id: string;
    };
    gallery: Array<{
        _id: string;
        url: string;
        public_id: string;
        caption?: string;
    }>;
    techStack: Array<{
        key: string;
        name: string;
        icon?: string;
        color?: string;
        category?: string;
        version?: string;
        isActive?: boolean;
    }>;
    role: string;
    year: number;
    type: string;
    features: Array<{
        key: string;
        title: string;
        description?: string;
        icon?: string;
        category?: string;
        isHighlighted?: boolean;
        isActive?: boolean;
    }>;
    links: Array<{
        key: string;
        url: string;
        title?: string;
        description?: string;
        icon?: string;
        isActive?: boolean;
    }>;
    stats: {
        downloads: number;
        rating: number;
        users: number;
    };
    isFeatured: boolean;
    isPublished: boolean;
    slug: string;
}

const Projects: React.FC = () => {
    const { t } = useLanguage();
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showGalleryModal, setShowGalleryModal] = useState(false);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/projects`);
                const data = await response.json();

                if (data.success) {
                    setProjects(data.data);
                } else {
                    console.log('No valid response found, using fallback data');
                    // Use fallback data for projects
                    setProjects([
                        {
                            _id: '68be2ca68e6a36182e43e7cd',
                            title: 'Wanna Meal (Graduation Project)',
                            description: 'An AI and ML-powered app suggests meals based on your ingredients. Built with MVVM and Cubit, it features AR, EN, dark/light themes, animations, and user interactions through profiles, a community, and chat. It provides detailed meal information with preparation time and instructions.',
                            cover: {
                                url: 'https://res.cloudinary.com/drcmsud1q/image/upload/v1757648432/portfolio/aurntnmmqtj43w51kblg.jpg',
                                public_id: 'portfolio/aurntnmmqtj43w51kblg'
                            },
                            gallery: [
                                {
                                    _id: 'gallery-1',
                                    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
                                    public_id: 'portfolio/wanna-meal-1',
                                    caption: 'Home Screen - Restaurant Listings'
                                },
                                {
                                    _id: 'gallery-2',
                                    url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop',
                                    public_id: 'portfolio/wanna-meal-2',
                                    caption: 'Menu Selection Interface'
                                },
                                {
                                    _id: 'gallery-3',
                                    url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
                                    public_id: 'portfolio/wanna-meal-3',
                                    caption: 'Order Tracking System'
                                }
                            ],
                            techStack: [
                                {
                                    key: 'flutter',
                                    name: 'Flutter',
                                    icon: 'devicon-flutter-plain',
                                    color: '#02569B',
                                    category: 'framework',
                                    version: '3.x',
                                    isActive: true
                                },
                                {
                                    key: 'dart',
                                    name: 'Dart',
                                    icon: 'devicon-dart-plain',
                                    color: '#00D4AA',
                                    category: 'language',
                                    version: '3.x',
                                    isActive: true
                                },
                                {
                                    key: 'firebase',
                                    name: 'Firebase',
                                    icon: 'devicon-firebase-plain',
                                    color: '#FFCA28',
                                    category: 'service',
                                    version: '10.x',
                                    isActive: true
                                },
                                {
                                    key: 'cubit',
                                    name: 'Cubit',
                                    icon: 'package',
                                    color: '#4285F4',
                                    category: 'framework',
                                    version: '8.x',
                                    isActive: true
                                },
                                {
                                    key: 'ai-ml',
                                    name: 'AI & ML',
                                    icon: 'brain',
                                    color: '#FF6B6B',
                                    category: 'service',
                                    version: '1.x',
                                    isActive: true
                                },
                                {
                                    key: 'ar',
                                    name: 'Augmented Reality',
                                    icon: 'vr',
                                    color: '#9C27B0',
                                    category: 'technology',
                                    version: '1.x',
                                    isActive: true
                                }
                            ],
                            role: 'Full Stack Developer',
                            year: 2024,
                            type: 'mobile',
                            features: [
                                {
                                    key: 'ai-meal-suggestion',
                                    title: 'AI Meal Suggestions',
                                    description: 'AI-powered meal recommendations based on available ingredients',
                                    icon: 'brain',
                                    category: 'core',
                                    isHighlighted: true,
                                    isActive: true
                                },
                                {
                                    key: 'ar-features',
                                    title: 'Augmented Reality',
                                    description: 'AR features for enhanced user experience',
                                    icon: 'vr',
                                    category: 'core',
                                    isHighlighted: true,
                                    isActive: true
                                },
                                {
                                    key: 'community',
                                    title: 'Community Features',
                                    description: 'User profiles, community interactions, and chat functionality',
                                    icon: 'users',
                                    category: 'social',
                                    isHighlighted: true,
                                    isActive: true
                                },
                                {
                                    key: 'themes',
                                    title: 'Dark/Light Themes',
                                    description: 'Multiple theme support with smooth animations',
                                    icon: 'palette',
                                    category: 'ui',
                                    isHighlighted: false,
                                    isActive: true
                                },
                                {
                                    key: 'meal-details',
                                    title: 'Detailed Meal Info',
                                    description: 'Comprehensive meal information with preparation time and instructions',
                                    icon: 'info',
                                    category: 'core',
                                    isHighlighted: false,
                                    isActive: true
                                },
                                {
                                    key: 'multilingual',
                                    title: 'Multilingual Support',
                                    description: 'Arabic and English language support',
                                    icon: 'globe',
                                    category: 'core',
                                    isHighlighted: false,
                                    isActive: true
                                }
                            ],
                            links: [
                                {
                                    key: 'github',
                                    url: 'https://github.com/Graduation-Project-MRS/Flutter',
                                    title: 'GitHub Repository',
                                    description: 'View source code and contribute to the project',
                                    icon: 'github',
                                    isActive: true
                                },
                                {
                                    key: 'demo',
                                    url: 'https://wanna-meal-demo.web.app',
                                    title: 'Live Demo',
                                    description: 'Try the app online',
                                    icon: 'external-link',
                                    isActive: true
                                }
                            ],
                            stats: {
                                downloads: 1500,
                                rating: 4.8,
                                users: 1200
                            },
                            isFeatured: true,
                            isPublished: true,
                            slug: 'wanna-meal-graduation-project'
                        }
                    ]);
                }
            } catch (error) {
                setError('Failed to fetch projects');
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Keyboard navigation for modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!showGalleryModal) return;

            switch (e.key) {
                case 'Escape':
                    closeGalleryModal();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [showGalleryModal]);

    // Helper functions for gallery modal
    const openGalleryModal = (project: Project, index: number = 0) => {
        setCurrentProject(project);
        setCurrentImageIndex(index);
        setShowGalleryModal(true);
    };

    const closeGalleryModal = () => {
        setShowGalleryModal(false);
        setCurrentProject(null);
    };

    const nextImage = () => {
        if (currentProject?.gallery) {
            setCurrentImageIndex((prev) =>
                prev === currentProject.gallery.length ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (currentProject?.gallery) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? currentProject.gallery.length : prev - 1
            );
        }
    };

    // Get all images (cover + gallery)
    const getAllImages = (project: Project) => {
        return [
            { url: project.cover.url, caption: 'Main Cover', _id: 'cover' },
            ...project.gallery
        ];
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-32 h-32 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto animate-spin"></div>
                    <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg font-medium">
                        Loading projects...
                    </p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 15, stiffness: 300 }}
                        className="mb-8"
                    >
                        <div className="text-8xl mb-4">😕</div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Error Loading Projects
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-600 dark:text-gray-400 mb-8 text-lg"
                    >
                        {error}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <button
                            onClick={() => window.location.reload()}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Try Again
                        </button>
                    </motion.div>
                </div>
            </div>
        );
    }

    // Extract image URLs for preloading - Disabled for performance
    // const imageUrls = projects
    //     .flatMap(project => [
    //         project.cover?.url,
    //         ...(project.gallery?.map(img => img.url) || [])
    //     ])
    //     .filter((url): url is string => Boolean(url));

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 lg:pt-32 pb-12">
            {/* Preload images - Disabled for performance */}
            {/* <ImagePreloader
                images={imageUrls}
                onProgress={(loaded, total) => {
                    console.log(`Preloaded ${loaded}/${total} project images`);
                }}
            /> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
                    >
                        {t('projects.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                    >
                        {t('projects.subtitle')}
                    </motion.p>
                </div>

                {projects.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-600 dark:text-gray-400">
                            No projects found. Please add some projects from the admin panel.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project._id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group"
                            >
                                {/* Project Images Section - First */}
                                <div className="p-4">
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                        className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center"
                                    >
                                        Project Gallery
                                    </motion.h3>

                                    {/* Images Grid */}
                                    <div className="grid grid-cols-1 gap-4 mb-6">
                                        {/* Cover Image - Main */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                                            className="relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
                                            onClick={() => openGalleryModal(project, 0)}
                                        >
                                            <CachedImage
                                                src={project.cover.url}
                                                alt={`${project.title} - Cover`}
                                                className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-105"
                                                showLoading={false}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                <div className="text-white">
                                                    <h4 className="text-lg font-bold mb-1">Main Cover</h4>
                                                    <p className="text-white/90 text-sm">{project.title}</p>
                                                </div>
                                            </div>
                                            {/* Overlay Badge */}
                                            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                                                Featured
                                            </div>
                                        </motion.div>

                                        {/* Gallery Images Row */}
                                        {project.gallery && project.gallery.length > 0 && (
                                            <div className="grid grid-cols-2 gap-3">
                                                {project.gallery.slice(0, 2).map((image, imageIndex) => (
                                                    <motion.div
                                                        key={image._id}
                                                        initial={{ opacity: 0, y: 50 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{
                                                            duration: 0.6,
                                                            delay: index * 0.2 + 0.5 + (imageIndex * 0.1),
                                                            type: "spring",
                                                            stiffness: 100
                                                        }}
                                                        className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                                                        onClick={() => openGalleryModal(project, imageIndex + 1)}
                                                    >
                                                        <CachedImage
                                                            src={image.url}
                                                            alt={image.caption || `${project.title} - Gallery ${imageIndex + 1}`}
                                                            className="w-full h-28 object-cover transition-all duration-500 group-hover:scale-105"
                                                            showLoading={false}
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                        {/* Image Number Badge */}
                                                        <motion.div
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ duration: 0.3, delay: index * 0.2 + 0.8 + (imageIndex * 0.1) }}
                                                            className="absolute top-2 right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg"
                                                        >
                                                            {imageIndex + 1}
                                                        </motion.div>

                                                        {/* Caption */}
                                                        {image.caption && (
                                                            <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                <p className="text-xs font-medium bg-black/50 px-2 py-1 rounded">{image.caption}</p>
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}

                                    </div>
                                </div>

                                {/* Project Header - After Images */}
                                <div className="p-6 border-t border-gray-200/50 dark:border-gray-700/50">
                                    <motion.h2
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                                        className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent mb-3"
                                    >
                                        {project.title}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                                        className="text-base text-gray-600 dark:text-gray-300 mb-4"
                                    >
                                        {project.description}
                                    </motion.p>

                                    {/* Project Meta */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                                        className="flex flex-wrap gap-2 text-sm"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full"
                                        >
                                            <Calendar className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                                            <span className="font-medium text-gray-700 dark:text-gray-300 text-xs">{project.year}</span>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full"
                                        >
                                            <User className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                                            <span className="font-medium text-gray-700 dark:text-gray-300 text-xs">{project.role}</span>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full"
                                        >
                                            <Tag className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                                            <span className="font-medium text-gray-700 dark:text-gray-300 text-xs capitalize">{project.type}</span>
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Tech Stack & Stats Section */}
                                <div className="p-4 bg-gray-50/50 dark:bg-gray-900/50">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }}
                                        className="space-y-3"
                                    >
                                        {/* Tech Stack */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                Technologies
                                            </h4>
                                            <div className="flex flex-wrap gap-1">
                                                {project.techStack.slice(0, 4).map((tech, techIndex) => (
                                                    <motion.span
                                                        key={tech.key}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.3, delay: index * 0.2 + 1.0 + (techIndex * 0.1) }}
                                                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium"
                                                    >
                                                        {tech.name}
                                                    </motion.span>
                                                ))}
                                                {project.techStack.length > 4 && (
                                                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium">
                                                        +{project.techStack.length - 4} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Project Stats */}
                                        {project.stats && (
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                    Statistics
                                                </h4>
                                                <div className="grid grid-cols-3 gap-2">
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.6, delay: index * 0.2 + 1.1 }}
                                                        className="text-center p-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                                                    >
                                                        <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                                                            {project.stats.downloads?.toLocaleString() || '0'}
                                                        </div>
                                                        <div className="text-xs text-gray-600 dark:text-gray-400">Downloads</div>
                                                    </motion.div>
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.6, delay: index * 0.2 + 1.2 }}
                                                        className="text-center p-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                                                    >
                                                        <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                                                            {project.stats.rating || '0'}
                                                        </div>
                                                        <div className="text-xs text-gray-600 dark:text-gray-400">Rating</div>
                                                    </motion.div>
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.6, delay: index * 0.2 + 1.3 }}
                                                        className="text-center p-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                                                    >
                                                        <div className="text-sm font-bold text-purple-600 dark:text-purple-400">
                                                            {project.stats.users?.toLocaleString() || '0'}
                                                        </div>
                                                        <div className="text-xs text-gray-600 dark:text-gray-400">Users</div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Action Buttons */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.2 + 1.4 }}
                                            className="flex flex-wrap gap-2 pt-2"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Link
                                                    to={`/projects/${project.slug || project._id}`}
                                                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                                >
                                                    View Details →
                                                </Link>
                                            </motion.div>

                                            {project.links?.find(link => link.key === 'github') && (
                                                <motion.a
                                                    href={project.links.find(link => link.key === 'github')?.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="inline-flex items-center px-3 py-2 bg-gray-800 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                                >
                                                    <Github className="w-4 h-4 mr-1" />
                                                    GitHub
                                                </motion.a>
                                            )}

                                            {project.links?.find(link => link.key === 'demo') && (
                                                <motion.a
                                                    href={project.links.find(link => link.key === 'demo')?.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                                >
                                                    <ExternalLink className="w-4 h-4 mr-1" />
                                                    Demo
                                                </motion.a>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {showGalleryModal && currentProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={closeGalleryModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-7xl w-full h-full flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={closeGalleryModal}
                                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                            >
                                <X className="w-6 h-6" />
                            </motion.button>

                            {/* Navigation Buttons */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </motion.button>

                            {/* Main Image */}
                            <div className="flex-1 flex items-center justify-center">
                                <motion.img
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    src={getAllImages(currentProject)[currentImageIndex]?.url}
                                    alt={getAllImages(currentProject)[currentImageIndex]?.caption || 'Gallery Image'}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                />
                            </div>

                            {/* Image Info */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-6 py-2">
                                <p className="text-white text-sm font-medium">
                                    {getAllImages(currentProject)[currentImageIndex]?.caption || 'Gallery Image'}
                                    <span className="ml-2 text-white/70">
                                        ({currentImageIndex + 1} of {getAllImages(currentProject).length})
                                    </span>
                                </p>
                            </div>

                            {/* Thumbnail Navigation */}
                            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {getAllImages(currentProject).map((image, index) => (
                                    <motion.button
                                        key={image._id}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${index === currentImageIndex
                                            ? 'border-blue-500 scale-110'
                                            : 'border-white/30 hover:border-white/60'
                                            }`}
                                    >
                                        <img
                                            src={image.url}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
