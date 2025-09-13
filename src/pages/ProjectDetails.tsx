import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectApi } from '@/services/api';
import CachedImage from '@/components/CachedImage';

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
    caseStudy?: {
        problem?: string;
        solution?: string;
        architecture?: string;
        stateManagement?: string;
        challenges?: Array<{
            key: string;
            title: string;
            description: string;
            solution?: string;
            difficulty?: string;
            category?: string;
            isResolved?: boolean;
        }>;
        results?: string;
    };
    slug: string;
}

const ProjectDetails: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showGalleryModal, setShowGalleryModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                setLoading(true);
                console.log('🔍 ProjectDetails: Starting fetch for slug:', slug);

                // محاولة جلب المشروع باستخدام slug أولاً
                let response;
                try {
                    console.log('🔍 ProjectDetails: Trying to fetch by slug...');
                    response = await projectApi.getBySlug(slug as string);
                    console.log('🔍 ProjectDetails: Response from slug API:', response);
                } catch (error) {
                    console.error('🔍 ProjectDetails: Error fetching by slug:', error);
                    response = null;
                }

                // إذا فشل، جرب استخدام _id
                if (!response && slug && slug.length === 24) { // MongoDB ObjectId length
                    try {
                        console.log('Trying to fetch by ID...');
                        // استخدام fetch مباشر للـ _id
                        const idResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'https://profile-fhvk.vercel.app/api'}/projects/id/${slug}`);
                        const idData = await idResponse.json();
                        console.log('Response from ID API:', idData);
                        if (idData.success) {
                            response = idData;
                        }
                    } catch (idError) {
                        console.error('Error fetching by ID:', idError);
                    }
                }

                if (response && response.success) {
                    console.log('Setting project data:', response.data);
                    setProject(response.data);
                } else {
                    console.log('No valid response found, using fallback data');
                    // Use fallback data for "Wanna Meal" project
                    if (slug === 'wanna-meal-graduation-project' || slug === '68be2ca68e6a36182e43e7cd') {
                        setProject({
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
                            caseStudy: {
                                problem: 'Users needed an intelligent meal planning solution that could suggest recipes based on available ingredients and provide detailed cooking instructions.',
                                solution: 'Developed an AI-powered Flutter app using MVVM architecture with Cubit for state management, integrating machine learning for meal suggestions and AR features for enhanced user experience.',
                                architecture: 'MVVM architecture with Cubit state management. Used Firebase for backend services and integrated AI/ML APIs for meal recommendations.',
                                stateManagement: 'Cubit pattern for simpler and more predictable state management compared to Bloc, with separate cubits for user, meals, and community features.',
                                challenges: [
                                    {
                                        key: 'ai-integration',
                                        title: 'AI & ML Integration',
                                        description: 'Integrating AI and machine learning for intelligent meal suggestions',
                                        solution: 'Used TensorFlow Lite and custom ML models for ingredient analysis and recipe recommendations',
                                        difficulty: 'hard',
                                        category: 'technical',
                                        isResolved: true
                                    },
                                    {
                                        key: 'ar-implementation',
                                        title: 'Augmented Reality Features',
                                        description: 'Implementing AR features for enhanced user interaction',
                                        solution: 'Used ARCore/ARKit integration for immersive cooking experiences',
                                        difficulty: 'hard',
                                        category: 'technical',
                                        isResolved: true
                                    },
                                    {
                                        key: 'multilingual-support',
                                        title: 'Multilingual Support',
                                        description: 'Supporting both Arabic and English languages with RTL layout',
                                        solution: 'Implemented comprehensive localization with proper RTL support and cultural adaptations',
                                        difficulty: 'medium',
                                        category: 'ui',
                                        isResolved: true
                                    }
                                ],
                                results: 'Graduation project successfully completed with advanced AI features, AR integration, and comprehensive multilingual support. Received excellent feedback for innovation and technical complexity.'
                            },
                            slug: 'wanna-meal-graduation-project'
                        });
                    } else {
                        setError(response?.message || 'Project not found');
                    }
                }
            } catch (error: any) {
                console.error('General error:', error);
                setError('Failed to fetch project');
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchProject();
        }
    }, [slug]);

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
    const openGalleryModal = (index: number = 0) => {
        setCurrentImageIndex(index);
        setShowGalleryModal(true);
    };

    const closeGalleryModal = () => {
        setShowGalleryModal(false);
    };

    const nextImage = () => {
        if (project?.gallery) {
            setCurrentImageIndex((prev) =>
                prev === project.gallery.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (project?.gallery) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? project.gallery.length - 1 : prev - 1
            );
        }
    };

    // Get all images (cover + gallery)
    const getAllImages = () => {
        if (!project) return [];
        return [
            { url: project.cover.url, caption: 'Main Cover', _id: 'cover' },
            ...project.gallery
        ];
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-32 h-32 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 text-gray-600 dark:text-gray-400 text-lg font-medium"
                    >
                        Loading project details...
                    </motion.p>
                </div>
            </div>
        );
    }

    if (error || !project) {
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
                        Project Not Found
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-600 dark:text-gray-400 mb-8 text-lg"
                    >
                        {error || 'The project you are looking for does not exist.'}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link
                            to="/projects"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Projects
                        </Link>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 lg:pt-20">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <motion.div
                            whileHover={{ x: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/projects"
                                className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Projects
                            </Link>
                        </motion.div>

                        <div className="flex flex-wrap gap-3">
                            {project.links?.find(link => link.key === 'github') && (
                                <motion.a
                                    href={project.links.find(link => link.key === 'github')?.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                                >
                                    <Github className="w-4 h-4 mr-2" />
                                    GitHub
                                </motion.a>
                            )}
                            {project.links?.find(link => link.key === 'demo') && (
                                <motion.a
                                    href={project.links.find(link => link.key === 'demo')?.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Live Demo
                                </motion.a>
                            )}
                            {project.links?.find(link => link.key === 'appStore') && (
                                <motion.a
                                    href={project.links.find(link => link.key === 'appStore')?.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    App Store
                                </motion.a>
                            )}
                            {project.links?.find(link => link.key === 'playStore') && (
                                <motion.a
                                    href={project.links.find(link => link.key === 'playStore')?.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                    Google Play
                                </motion.a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed"
                    >
                        {project.description}
                    </motion.p>

                    {/* Project Meta */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                        >
                            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="font-medium text-gray-700 dark:text-gray-300">{project.year}</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                        >
                            <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="font-medium text-gray-700 dark:text-gray-300">{project.role}</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                        >
                            <Tag className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            <span className="font-medium text-gray-700 dark:text-gray-300 capitalize">{project.type}</span>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Project Images Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent"
                    >
                        Project Gallery
                    </motion.h2>

                    {/* Combined Images Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Cover Image - Large */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
                            onClick={() => openGalleryModal(0)}
                        >
                            <CachedImage
                                src={project.cover.url}
                                alt={`${project.title} - Cover`}
                                className="w-full h-80 md:h-96 lg:h-[500px] object-cover transition-all duration-700 group-hover:scale-110"
                                showLoading={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <div className="text-white">
                                    <h3 className="text-xl font-bold mb-2">Main Cover</h3>
                                    <p className="text-white/90 text-sm">{project.title}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Gallery Images */}
                        {project.gallery && project.gallery.slice(0, 4).map((image, index) => (
                            <motion.div
                                key={image._id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 1.4 + (index * 0.1),
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                                onClick={() => openGalleryModal(index + 1)}
                            >
                                <CachedImage
                                    src={image.url}
                                    alt={image.caption || `${project.title} - Gallery ${index + 1}`}
                                    className="w-full h-48 md:h-56 lg:h-64 object-cover transition-all duration-500 group-hover:scale-110"
                                    showLoading={false}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Image Info Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="text-white">
                                        <h4 className="text-sm font-semibold mb-1">
                                            {image.caption || `Gallery ${index + 1}`}
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
                                    transition={{ duration: 0.3, delay: 1.8 + (index * 0.1) }}
                                    className="absolute top-3 right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                                >
                                    {index + 1}
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Show More Button if there are more images */}
                        {project.gallery && project.gallery.length > 5 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 1.8 }}
                                className="relative group overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-blue-500 to-purple-600"
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

                    {/* Full Gallery Modal Trigger */}
                    {project.gallery && project.gallery.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 2.0 }}
                            className="text-center mt-8"
                        >
                            <motion.button
                                onClick={() => openGalleryModal(0)}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <span className="mr-2">📷</span>
                                View Full Gallery
                            </motion.button>
                        </motion.div>
                    )}
                </motion.div>

                {/* Project Details Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12"
                >
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        className="space-y-8"
                    >
                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <motion.span
                                        key={tech.key}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                        className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm font-medium"
                                    >
                                        {tech.name}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                                Key Features
                            </h3>
                            <ul className="space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                {project.features.map((feature, index) => (
                                    <motion.li
                                        key={feature.key}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                        className="flex items-start space-x-3"
                                    >
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <span className="text-gray-900 dark:text-white font-medium">{feature.title}</span>
                                            {feature.description && (
                                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{feature.description}</p>
                                            )}
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Stats */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Project Statistics
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                        {project.stats.downloads.toLocaleString()}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Downloads</div>
                                </div>
                                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                        {project.stats.rating}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                                </div>
                                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                        {project.stats.users.toLocaleString()}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Users</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-8 px-1 sm:px-0"
                    >
                        {/* Case Study */}
                        {project.caseStudy && (
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    Case Study
                                </h3>
                                <div className="space-y-6">
                                    {project.caseStudy.problem && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                Problem
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {project.caseStudy.problem}
                                            </p>
                                        </div>
                                    )}

                                    {project.caseStudy.solution && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                Solution
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {project.caseStudy.solution}
                                            </p>
                                        </div>
                                    )}

                                    {project.caseStudy.architecture && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                Architecture
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {project.caseStudy.architecture}
                                            </p>
                                        </div>
                                    )}

                                    {project.caseStudy.stateManagement && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                State Management
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {project.caseStudy.stateManagement}
                                            </p>
                                        </div>
                                    )}

                                    {project.caseStudy.challenges && project.caseStudy.challenges.length > 0 && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                Challenges
                                            </h4>
                                            <ul className="space-y-4">
                                                {project.caseStudy.challenges.map((challenge) => (
                                                    <li key={challenge.key} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                                        <div className="flex items-start space-x-3">
                                                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                                            <div className="flex-1">
                                                                <h5 className="font-medium text-gray-900 dark:text-white mb-1">
                                                                    {challenge.title}
                                                                </h5>
                                                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                                                                    {challenge.description}
                                                                </p>
                                                                {challenge.solution && (
                                                                    <p className="text-green-600 dark:text-green-400 text-sm">
                                                                        <strong>Solution:</strong> {challenge.solution}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {project.caseStudy.results && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                Results
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {project.caseStudy.results}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {showGalleryModal && (
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
                                    src={getAllImages()[currentImageIndex]?.url}
                                    alt={getAllImages()[currentImageIndex]?.caption || 'Gallery Image'}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                />
                            </div>

                            {/* Image Info */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-6 py-2">
                                <p className="text-white text-sm font-medium">
                                    {getAllImages()[currentImageIndex]?.caption || 'Gallery Image'}
                                    <span className="ml-2 text-white/70">
                                        ({currentImageIndex + 1} of {getAllImages().length})
                                    </span>
                                </p>
                            </div>

                            {/* Thumbnail Navigation */}
                            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {getAllImages().map((image, index) => (
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

export default ProjectDetails;
