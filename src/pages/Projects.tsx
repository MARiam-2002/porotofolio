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
                    <div className="space-y-12">
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
                                {/* Project Header */}
                                <div className="p-8 border-b border-gray-200/50 dark:border-gray-700/50">
                                    <motion.h2
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent mb-4"
                                    >
                                        {project.title}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                                        className="text-lg text-gray-600 dark:text-gray-300 mb-6"
                                    >
                                        {project.description}
                                    </motion.p>

                                    {/* Project Meta */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                                        className="flex flex-wrap gap-4 text-sm"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full"
                                        >
                                            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                            <span className="font-medium text-gray-700 dark:text-gray-300">{project.year}</span>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full"
                                        >
                                            <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                            <span className="font-medium text-gray-700 dark:text-gray-300">{project.role}</span>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full"
                                        >
                                            <Tag className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                            <span className="font-medium text-gray-700 dark:text-gray-300 capitalize">{project.type}</span>
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Project Images Section */}
                                <div className="p-8">
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                                        className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center"
                                    >
                                        Project Gallery
                                    </motion.h3>

                                    {/* Images Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                        {/* Cover Image - Large */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
                                            className="md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                                            onClick={() => openGalleryModal(project, 0)}
                                        >
                                            <CachedImage
                                                src={project.cover.url}
                                                alt={`${project.title} - Cover`}
                                                className="w-full h-64 md:h-80 lg:h-96 object-cover transition-all duration-700 group-hover:scale-110"
                                                showLoading={false}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                <div className="text-white">
                                                    <h4 className="text-lg font-bold mb-1">Main Cover</h4>
                                                    <p className="text-white/90 text-sm">{project.title}</p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Gallery Images */}
                                        {project.gallery && project.gallery.slice(0, 4).map((image, imageIndex) => (
                                            <motion.div
                                                key={image._id}
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: index * 0.2 + 0.8 + (imageIndex * 0.1),
                                                    type: "spring",
                                                    stiffness: 100
                                                }}
                                                className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                                                onClick={() => openGalleryModal(project, imageIndex + 1)}
                                            >
                                                <CachedImage
                                                    src={image.url}
                                                    alt={image.caption || `${project.title} - Gallery ${imageIndex + 1}`}
                                                    className="w-full h-48 md:h-56 lg:h-64 object-cover transition-all duration-500 group-hover:scale-110"
                                                    showLoading={false}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                {/* Image Info Overlay */}
                                                <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                    <div className="text-white">
                                                        <h4 className="text-sm font-semibold mb-1">
                                                            {image.caption || `Gallery ${imageIndex + 1}`}
                                                        </h4>
                                                        <p className="text-white/80 text-xs">
                                                            {project.title}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Image Number Badge */}
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ duration: 0.3, delay: index * 0.2 + 1.2 + (imageIndex * 0.1) }}
                                                    className="absolute top-3 right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                                                >
                                                    {imageIndex + 1}
                                                </motion.div>
                                            </motion.div>
                                        ))}

                                        {/* Show More Button if there are more images */}
                                        {project.gallery && project.gallery.length > 4 && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.6, delay: index * 0.2 + 1.2 }}
                                                className="relative group overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 cursor-pointer"
                                                onClick={() => openGalleryModal(project, 0)}
                                            >
                                                <div className="w-full h-48 md:h-56 lg:h-64 flex items-center justify-center">
                                                    <div className="text-center text-white">
                                                        <motion.div
                                                            animate={{ scale: [1, 1.1, 1] }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                            className="text-4xl mb-2"
                                                        >
                                                            📸
                                                        </motion.div>
                                                        <h4 className="text-lg font-semibold mb-1">
                                                            +{project.gallery.length - 4} More
                                                        </h4>
                                                        <p className="text-white/80 text-sm">
                                                            View all images
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Tech Stack & Stats Section */}
                                    <div className="p-8 bg-gray-50/50 dark:bg-gray-900/50">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.2 + 1.3 }}
                                            className="space-y-6"
                                        >
                                            {/* Tech Stack */}
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                                    Technologies Used
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.techStack.map((tech, techIndex) => (
                                                        <motion.span
                                                            key={tech.key}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.3, delay: index * 0.2 + 1.4 + (techIndex * 0.1) }}
                                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                                                        >
                                                            {tech.name}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Project Stats */}
                                            {project.stats && (
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                                        Project Statistics
                                                    </h4>
                                                    <div className="grid grid-cols-3 gap-4">
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.6, delay: index * 0.2 + 1.5 }}
                                                            className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                                                        >
                                                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                                                {project.stats.downloads?.toLocaleString() || '0'}
                                                            </div>
                                                            <div className="text-sm text-gray-600 dark:text-gray-400">Downloads</div>
                                                        </motion.div>
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.6, delay: index * 0.2 + 1.6 }}
                                                            className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                                                        >
                                                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                                                {project.stats.rating || '0'}
                                                            </div>
                                                            <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                                                        </motion.div>
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.6, delay: index * 0.2 + 1.7 }}
                                                            className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                                                        >
                                                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                                                {project.stats.users?.toLocaleString() || '0'}
                                                            </div>
                                                            <div className="text-sm text-gray-600 dark:text-gray-400">Users</div>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Action Buttons */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: index * 0.2 + 1.8 }}
                                                className="flex flex-wrap gap-4 pt-4"
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Link
                                                        to={`/projects/${project.slug || project._id}`}
                                                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                                    >
                                                        View Details →
                                                    </Link>
                                                </motion.div>

                                                {project.links?.find(link => link.key === 'github') && (
                                                    <motion.a
                                                        href={project.links.find(link => link.key === 'github')?.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                                    >
                                                        <Github className="w-5 h-5 mr-2" />
                                                        GitHub
                                                    </motion.a>
                                                )}

                                                {project.links?.find(link => link.key === 'demo') && (
                                                    <motion.a
                                                        href={project.links.find(link => link.key === 'demo')?.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                                    >
                                                        <ExternalLink className="w-5 h-5 mr-2" />
                                                        Live Demo
                                                    </motion.a>
                                                )}
                                            </motion.div>
                                        </motion.div>
                                    </div>
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
