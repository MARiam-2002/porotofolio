import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
    _id: string;
    title: string;
    description: string;
    cover: {
        url: string;
        public_id: string;
    };
    techStack: string[];
    role: string;
    year: number;
    type: string;
    features: string[];
    links: {
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
    isFeatured: boolean;
    isPublished: boolean;
    slug: string;
}

const Projects: React.FC = () => {
    const { t } = useLanguage();
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://profile-fhvk.vercel.app/api/projects');
                const data = await response.json();

                if (data.success) {
                    setProjects(data.data);
                } else {
                    setError(data.message || 'Failed to fetch projects');
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

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Loading projects...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Error Loading Projects
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        {error}
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        {t('projects.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-gray-600 dark:text-gray-400"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project._id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                            >
                                {/* Project Cover Image */}
                                <div className="h-48 relative overflow-hidden">
                                    {project.cover?.url ? (
                                        <img
                                            src={project.cover.url}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                                            <div className="text-white text-4xl font-bold">
                                                {project.title.charAt(0)}
                                            </div>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                                </div>

                                <div className="p-6">
                                    {/* Project Title */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {project.title}
                                    </h3>

                                    {/* Project Description */}
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Project Meta */}
                                    <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{project.year}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <User className="w-4 h-4" />
                                            <span>{project.role}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Tag className="w-4 h-4" />
                                            <span className="capitalize">{project.type}</span>
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                                                +{project.techStack.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Project Stats */}
                                    {project.stats && (
                                        <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                                            <div>
                                                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                                    {project.stats.downloads?.toLocaleString() || '0'}
                                                </div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">Downloads</div>
                                            </div>
                                            <div>
                                                <div className="text-lg font-bold text-green-600 dark:text-green-400">
                                                    {project.stats.rating || '0'}
                                                </div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">Rating</div>
                                            </div>
                                            <div>
                                                <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                                                    {project.stats.users?.toLocaleString() || '0'}
                                                </div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">Users</div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3">
                                        <Link
                                            to={`/projects/${project.slug}`}
                                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium"
                                        >
                                            View Details →
                                        </Link>
                                        {project.links?.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.links?.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
