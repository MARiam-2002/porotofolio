import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ImageGallery from '@/components/ImageGallery';
import { projectApi } from '@/services/api';

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
    techStack: string[];
    role: string;
    year: number;
    type: string;
    features: string[];
    links?: {
        github?: string;
        demo?: string;
        article?: string;
        store?: string;
    };
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
        challenges?: string[];
        results?: string;
    };
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
                    console.log('No valid response found');
                    setError(response?.message || 'Project not found');
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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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

                        <div className="flex space-x-3">
                            {project.links?.github && (
                                <motion.a
                                    href={project.links.github}
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
                            {project.links?.demo && (
                                <motion.a
                                    href={project.links.demo}
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
                            <User className="w-4 h-4 text-green-600 dark:text-green-400" />
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
                            <motion.img
                                src={project.cover.url}
                                alt={`${project.title} - Cover`}
                                className="w-full h-80 md:h-96 lg:h-[500px] object-cover transition-all duration-700 group-hover:scale-110"
                                whileHover={{ scale: 1.02 }}
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
                                <motion.img
                                    src={image.url}
                                    alt={image.caption || `${project.title} - Gallery ${index + 1}`}
                                    className="w-full h-48 md:h-56 lg:h-64 object-cover transition-all duration-500 group-hover:scale-110"
                                    whileHover={{ scale: 1.05 }}
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
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                        className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm font-medium"
                                    >
                                        {tech}
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
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                        className="flex items-start space-x-3"
                                    >
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
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
                                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
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
                                            <ul className="space-y-2">
                                                {project.caseStudy.challenges.map((challenge, index) => (
                                                    <li key={index} className="flex items-start space-x-3">
                                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-600 dark:text-gray-400">{challenge}</span>
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
