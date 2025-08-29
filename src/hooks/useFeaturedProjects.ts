import { useState, useEffect } from 'react';

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
                const response = await fetch('https://profile-fhvk.vercel.app/api/projects/featured');
                const data = await response.json();

                if (data.success) {
                    setProjects(data.data);
                } else {
                    setError(data.message || 'Failed to fetch featured projects');
                }
            } catch (error) {
                setError('Failed to fetch featured projects');
                console.error('Error fetching featured projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedProjects();
    }, []);

    return { projects, loading, error };
};
