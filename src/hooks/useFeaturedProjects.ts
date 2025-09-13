import { useState, useEffect } from 'react';
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
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFeaturedProjects = async () => {
            try {
                setLoading(true);
                console.log('🔍 Fetching featured projects...');
                const response = await projectApi.getFeatured();
                console.log('🔍 Featured projects response:', response);

                if (response.success && response.data) {
                    console.log('✅ Featured projects loaded successfully:', response.data);
                    console.log('✅ Number of projects:', response.data.length);
                    console.log('✅ First project cover:', response.data[0]?.cover);
                    setProjects(response.data);
                    setError(null);
                } else {
                    console.warn('⚠️ API response not successful:', response);
                    console.warn('⚠️ Response success:', response.success);
                    console.warn('⚠️ Response data:', response.data);
                    throw new Error(response.message || 'Failed to fetch featured projects');
                }
            } catch (err) {
                console.error('❌ Error fetching featured projects:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch featured projects');
                setProjects([]); // Set empty array instead of fallback data
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedProjects();
    }, []);

    return {
        projects,
        loading,
        error
    };
};
