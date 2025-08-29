import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag, Download } from 'lucide-react';
import ImageGallery from '@/components/ImageGallery';

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
  caseStudy: {
    problem: string;
    solution: string;
    architecture: string;
    stateManagement: string;
    challenges: string[];
    results: string;
  };
}

const ProjectDetails: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://profile-fhvk.vercel.app/api/projects/${slug}`);
                const data = await response.json();
                
                if (data.success) {
                    setProject(data.data);
                } else {
                    setError(data.message || 'Project not found');
                }
            } catch (error) {
                setError('Failed to fetch project');
                console.error('Error fetching project:', error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchProject();
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Loading project...</p>
                </div>
            </div>
        );
    }

    if (error || !project) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Project Not Found
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        {error || 'The project you are looking for does not exist.'}
                    </p>
                    <Link
                        to="/projects"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/projects"
                            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Projects
                        </Link>
                        
                        <div className="flex space-x-3">
                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                                >
                                    <Github className="w-4 h-4 mr-2" />
                                    GitHub
                                </a>
                            )}
                            {project.links.demo && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                        {project.description}
                    </p>
                    
                    {/* Project Meta */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{project.year}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{project.role}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Tag className="w-4 h-4" />
                            <span className="capitalize">{project.type}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Project Cover Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                            src={project.cover.url}
                            alt={project.title}
                            className="w-full h-96 md:h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                </motion.div>

                {/* Project Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                            Project Gallery
                        </h2>
                        <ImageGallery images={project.gallery} projectTitle={project.title} />
                    </motion.div>
                )}

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-8"
                    >
                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Key Features
                            </h3>
                            <ul className="space-y-2">
                                {project.features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
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
                        className="space-y-8"
                    >
                        {/* Case Study */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Case Study
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Problem
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {project.caseStudy.problem}
                                    </p>
                                </div>
                                
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Solution
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {project.caseStudy.solution}
                                    </p>
                                </div>
                                
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Architecture
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {project.caseStudy.architecture}
                                    </p>
                                </div>
                                
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        State Management
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {project.caseStudy.stateManagement}
                                    </p>
                                </div>
                                
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
                                
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Results
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {project.caseStudy.results}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
