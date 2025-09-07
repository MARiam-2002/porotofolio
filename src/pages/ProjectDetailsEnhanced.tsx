import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Calendar,
    User,
    Tag,
    X,
    ChevronLeft,
    ChevronRight,
    Code,
    Zap,
    Target,
    Award,
    BarChart3,
    Globe,
    Smartphone,
    Monitor,
    Database,
    Shield,
    Cpu
} from 'lucide-react';
import { projectApi } from '@/services/api';
import CachedImage from '@/components/CachedImage';

interface TechStack {
    key: string;
    name: string;
    icon?: string;
    color?: string;
    category: string;
    version?: string;
}

interface Feature {
    key: string;
    title: string;
    description?: string;
    icon?: string;
    category: string;
    isHighlighted?: boolean;
}

interface ProjectLink {
    key: string;
    url: string;
    title?: string;
    description?: string;
    icon?: string;
}

interface Challenge {
    key: string;
    title: string;
    description: string;
    solution?: string;
    difficulty: string;
    category: string;
    isResolved: boolean;
}

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
    techStack: TechStack[];
    role: string;
    year: number;
    type: string;
    features: Feature[];
    links: ProjectLink[];
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
        challenges?: Challenge[];
        results?: string;
    };
}

const ProjectDetailsEnhanced: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showGalleryModal, setShowGalleryModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        const fetchProject = async () => {
            try {
                setLoading(true);
                let response;

                try {
                    response = await projectApi.getBySlug(slug as string);
                } catch (error) {
                    if (slug && slug.length === 24) {
                        const idResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'https://profile-fhvk.vercel.app/api'}/projects/id/${slug}`);
                        const idData = await idResponse.json();
                        if (idData.success) {
                            response = idData;
                        }
                    }
                }

                if (response && response.success) {
                    setProject(response.data);
                } else {
                    setError(response?.message || 'Project not found');
                }
            } catch (error: any) {
                setError('Failed to fetch project');
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchProject();
        }
    }, [slug]);

    // Gallery modal functions
    const openGalleryModal = (index: number = 0) => {
        setCurrentImageIndex(index);
        setShowGalleryModal(true);
    };

    const closeGalleryModal = () => setShowGalleryModal(false);

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

    const getAllImages = () => {
        if (!project) return [];
        return [
            { url: project.cover.url, caption: 'Main Cover', _id: 'cover' },
            ...project.gallery
        ];
    };

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-32 h-32 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto"
                    />
                    <motion.p className="mt-6 text-gray-600 dark:text-gray-400 text-lg font-medium">
                        Loading project details...
                    </motion.p>
                </div>
            </div>
        );
    }

    // Error state
    if (error || !project) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <motion.div className="text-8xl mb-4">😕</motion.div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Project Not Found
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                        {error || 'The project you are looking for does not exist.'}
                    </p>
                    <Link
                        to="/projects"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-pattern">
            {/* Header Navigation */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass border-gradient sticky top-0 z-50"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/projects"
                            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium nav-link"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Projects
                        </Link>

                        <div className="flex space-x-3">
                            {project.links?.find(link => link.key === 'github') && (
                                <motion.a
                                    href={project.links.find(link => link.key === 'github')?.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="btn btn-secondary inline-flex items-center"
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
                                    className="btn btn-primary inline-flex items-center"
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Live Demo
                                </motion.a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Project Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold section-title mb-6"
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
                    >
                        {project.description}
                    </motion.p>

                    {/* Project Meta Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap justify-center gap-4 text-sm"
                    >
                        <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full shadow-lg">
                            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="font-medium text-gray-700 dark:text-gray-300">{project.year}</span>
                        </div>
                        <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full shadow-lg">
                            <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="font-medium text-gray-700 dark:text-gray-300">{project.role}</span>
                        </div>
                        <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full shadow-lg">
                            <Tag className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            <span className="font-medium text-gray-700 dark:text-gray-300 capitalize">{project.type}</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Navigation Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap justify-center gap-2 mb-8"
                >
                    {['overview', 'gallery', 'features', 'case-study'].map((tab) => (
                        <motion.button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === tab
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                    : 'bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80'
                                }`}
                        >
                            {tab === 'overview' && 'Overview'}
                            {tab === 'gallery' && 'Gallery'}
                            {tab === 'features' && 'Features'}
                            {tab === 'case-study' && 'Case Study'}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8"
                        >
                            {/* Main Cover Image */}
                            <div className="relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer" onClick={() => openGalleryModal(0)}>
                                <CachedImage
                                    src={project.cover.url}
                                    alt={`${project.title} - Cover`}
                                    className="w-full h-96 md:h-[500px] object-cover transition-all duration-700 group-hover:scale-110"
                                    showLoading={false}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Downloads</p>
                                            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                                {project.stats.downloads.toLocaleString()}
                                            </p>
                                        </div>
                                        <BarChart3 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Rating</p>
                                            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                                {project.stats.rating}/5
                                            </p>
                                        </div>
                                        <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
                                            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                                                {project.stats.users.toLocaleString()}
                                            </p>
                                        </div>
                                        <User className="w-8 h-8 text-green-600 dark:text-green-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                    <Code className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                                    Technologies Used
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.techStack.map((tech, index) => (
                                        <motion.span
                                            key={tech.key}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg text-sm font-medium"
                                        >
                                            {tech.name}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'gallery' && (
                        <motion.div
                            key="gallery"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                Project Gallery
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {getAllImages().map((image, index) => (
                                    <motion.div
                                        key={image._id}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                                        onClick={() => openGalleryModal(index)}
                                    >
                                        <CachedImage
                                            src={image.url}
                                            alt={image.caption || `Gallery ${index + 1}`}
                                            className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                                            showLoading={false}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="text-white">
                                                <h4 className="text-sm font-semibold">
                                                    {image.caption || `Image ${index + 1}`}
                                                </h4>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'features' && (
                        <motion.div
                            key="features"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                Key Features
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.features.map((feature, index) => (
                                    <motion.div
                                        key={feature.key}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                    {feature.title}
                                                </h4>
                                                {feature.description && (
                                                    <p className="text-gray-600 dark:text-gray-400">
                                                        {feature.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'case-study' && project.caseStudy && (
                        <motion.div
                            key="case-study"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                Case Study
                            </h3>

                            {project.caseStudy.problem && (
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                        <Target className="w-5 h-5 mr-2 text-red-600 dark:text-red-400" />
                                        Problem Statement
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {project.caseStudy.problem}
                                    </p>
                                </div>
                            )}

                            {project.caseStudy.solution && (
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                        <Zap className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
                                        Solution
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {project.caseStudy.solution}
                                    </p>
                                </div>
                            )}

                            {project.caseStudy.architecture && (
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                        <Cpu className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                                        Architecture
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {project.caseStudy.architecture}
                                    </p>
                                </div>
                            )}

                            {project.caseStudy.challenges && project.caseStudy.challenges.length > 0 && (
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                        <Shield className="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                                        Challenges & Solutions
                                    </h4>
                                    <div className="space-y-4">
                                        {project.caseStudy.challenges.map((challenge, index) => (
                                            <div key={challenge.key} className="border-l-4 border-orange-500 pl-4">
                                                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                    {challenge.title}
                                                </h5>
                                                <p className="text-gray-600 dark:text-gray-400 mb-2">
                                                    {challenge.description}
                                                </p>
                                                {challenge.solution && (
                                                    <p className="text-sm text-green-600 dark:text-green-400">
                                                        <strong>Solution:</strong> {challenge.solution}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {project.caseStudy.results && (
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                        <Award className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                                        Results
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {project.caseStudy.results}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
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
                            className="relative max-w-7xl w-full h-full flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={closeGalleryModal}
                                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                            >
                                <X className="w-6 h-6" />
                            </motion.button>

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

                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-6 py-2">
                                <p className="text-white text-sm font-medium">
                                    {getAllImages()[currentImageIndex]?.caption || 'Gallery Image'}
                                    <span className="ml-2 text-white/70">
                                        ({currentImageIndex + 1} of {getAllImages().length})
                                    </span>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectDetailsEnhanced;
