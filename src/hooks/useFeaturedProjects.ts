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
            const response = await projectApi.getFeatured();
            if (response.success) {
                return response.data;
            }
            throw new Error(response.message || 'Failed to fetch featured projects');
        },
        {
            staleTime: 1000 * 60 * 30, // 30 minutes
            cacheTime: 1000 * 60 * 60 * 2, // 2 hours
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: 1,
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
