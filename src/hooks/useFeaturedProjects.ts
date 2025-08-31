import { useQuery } from 'react-query';
import { projectApi } from '@/services/api';

interface Project {
    _id: string;
    title: string;
    description: string;
    cover: {
        url: string;
        public_id: string;
    };
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

interface UseFeaturedProjectsReturn {
    projects: Project[];
    loading: boolean;
    error: string | null;
}

export const useFeaturedProjects = (): UseFeaturedProjectsReturn => {
    const { data: projects = [], isLoading: loading, error } = useQuery<Project[], Error>(
        'featuredProjects',
        async () => {
            try {
                const response = await projectApi.getFeatured();
                if (response.success) {
                    return response.data;
                }
                throw new Error(response.message || 'Failed to fetch featured projects');
            } catch (error) {
                // Return fallback data if API fails
                return [
                    {
                        _id: 'fallback-1',
                        title: 'Wanna Meal',
                        description: 'A comprehensive food delivery application built with Flutter. Features include user authentication, restaurant listings, menu management, order tracking, and payment integration.',
                        cover: {
                            url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
                            public_id: 'fallback-wanna-meal'
                        },
                        techStack: [
                            { key: 'flutter', name: 'Flutter', icon: 'devicon-flutter-plain', color: '#02569B', category: 'framework', version: '3.x', isActive: true },
                            { key: 'dart', name: 'Dart', icon: 'devicon-dart-plain', color: '#00D4AA', category: 'language', version: '3.x', isActive: true },
                            { key: 'firebase', name: 'Firebase', icon: 'devicon-firebase-plain', color: '#FFCA28', category: 'service', version: '10.x', isActive: true }
                        ],
                        role: 'Full Stack Developer',
                        year: 2024,
                        type: 'mobile',
                        features: [
                            { key: 'auth', title: 'User Authentication', description: 'Secure user authentication system', icon: 'shield', category: 'security', isHighlighted: true, isActive: true },
                            { key: 'tracking', title: 'Real-time Tracking', description: 'Real-time order tracking with live updates', icon: 'map-pin', category: 'core', isHighlighted: true, isActive: true }
                        ],
                        links: [
                            { key: 'github', url: 'https://github.com/MahmoudAbuelazm/wanna-meal', title: 'GitHub Repository', description: 'View source code', icon: 'github', isActive: true },
                            { key: 'demo', url: 'https://wanna-meal-demo.web.app', title: 'Live Demo', description: 'Try the app online', icon: 'external-link', isActive: true }
                        ],
                        stats: { downloads: 1500, rating: 4.8, users: 1200 },
                        isFeatured: true,
                        isPublished: true,
                        slug: 'wanna-meal'
                    },
                    {
                        _id: 'fallback-2',
                        title: 'Movie & TV Explorer',
                        description: 'A movie and TV show discovery app that allows users to browse, search, and get detailed information about movies and TV series.',
                        cover: {
                            url: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop',
                            public_id: 'fallback-movie-explorer'
                        },
                        techStack: [
                            { key: 'flutter', name: 'Flutter', icon: 'devicon-flutter-plain', color: '#02569B', category: 'framework', version: '3.x', isActive: true },
                            { key: 'dart', name: 'Dart', icon: 'devicon-dart-plain', color: '#00D4AA', category: 'language', version: '3.x', isActive: true },
                            { key: 'bloc', name: 'Bloc', icon: 'layers', color: '#4285F4', category: 'framework', version: '8.x', isActive: true }
                        ],
                        role: 'Frontend Developer',
                        year: 2024,
                        type: 'mobile',
                        features: [
                            { key: 'browse', title: 'Browse Movies & TV Shows', description: 'Browse movies and TV shows by categories', icon: 'film', category: 'core', isHighlighted: true, isActive: true },
                            { key: 'search', title: 'Advanced Search', description: 'Search functionality with multiple filters', icon: 'search', category: 'core', isHighlighted: true, isActive: true }
                        ],
                        links: [
                            { key: 'github', url: 'https://github.com/MahmoudAbuelazm/movie-explorer', title: 'GitHub Repository', description: 'View source code', icon: 'github', isActive: true },
                            { key: 'demo', url: 'https://movie-explorer-demo.web.app', title: 'Live Demo', description: 'Try the app online', icon: 'external-link', isActive: true }
                        ],
                        stats: { downloads: 800, rating: 4.6, users: 650 },
                        isFeatured: true,
                        isPublished: true,
                        slug: 'movie-explorer'
                    }
                ] as Project[];
            }
        },
        {
            staleTime: 1000 * 60 * 30, // 30 minutes
            cacheTime: 1000 * 60 * 60 * 2, // 2 hours
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: 1,
            retryDelay: 1000,
            onError: (error) => {
                console.error('Error fetching featured projects:', error);
            },
        }
    );

    return {
        projects,
        loading,
        error: error ? error.message : null
    };
};
