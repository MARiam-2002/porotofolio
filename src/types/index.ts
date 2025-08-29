// User types
export interface User {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    bio?: string;
    location?: string;
    profilePicture?: {
        url: string;
        public_id: string;
    };
    role: 'admin' | 'user';
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

// Project types
export interface Project {
    _id: string;
    title: string;
    slug: string;
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
    type: 'mobile' | 'web' | 'desktop' | 'other';
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
        problem?: string;
        solution?: string;
        architecture?: string;
        stateManagement?: string;
        challenges?: string[];
        results?: string;
    };
    isFeatured: boolean;
    isPublished: boolean;
    createdAt: string;
    updatedAt: string;
}

// Experience types
export interface Experience {
    _id: string;
    company: string;
    role: string;
    startDate: string;
    endDate?: string;
    description: string[];
    tech: string[];
    location?: string;
    isCurrent: boolean;
    isPublished: boolean;
    duration?: string; // Virtual field
    createdAt: string;
    updatedAt: string;
}

// Skill types
export interface Skill {
    _id: string;
    name: string;
    category: 'Languages' | 'Frameworks' | 'Tools' | 'Databases' | 'Other';
    level: number;
    icon?: string;
    color?: string;
    description?: string;
    isPublished: boolean;
    order: number;
    createdAt: string;
    updatedAt: string;
}

// Certification types
export interface Certification {
    _id: string;
    title: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
    logo?: {
        url: string;
        public_id: string;
    };
    description?: string;
    isPublished: boolean;
    order: number;
    createdAt: string;
    updatedAt: string;
}

// Social types
export interface Social {
    _id: string;
    platform: string;
    url: string;
    icon: string;
    color?: string;
    isActive: boolean;
    order: number;
    createdAt: string;
    updatedAt: string;
}

// Contact types
export interface Contact {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    phone?: string;
    isRead: boolean;
    isReplied: boolean;
    ipAddress?: string;
    userAgent?: string;
    createdAt: string;
    updatedAt: string;
}

// API Response types
export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    error?: string;
    errors?: Array<{
        field: string;
        message: string;
    }>;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
    pagination: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
        itemsPerPage: number;
    };
}

// Form types
export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
    phone?: string;
}

// Filter types
export interface ProjectFilters {
    type?: string;
    year?: number;
    tech?: string;
    featured?: boolean;
    search?: string;
    page?: number;
    limit?: number;
}

// Theme types
export type Theme = 'light' | 'dark';

// Language types
export type Language = 'en' | 'ar';

// Navigation types
export interface NavItem {
    label: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
}

// Animation variants for Framer Motion
export interface AnimationVariants {
    hidden: {
        opacity: number;
        y?: number;
        x?: number;
        scale?: number;
    };
    visible: {
        opacity: number;
        y?: number;
        x?: number;
        scale?: number;
        transition: {
            duration: number;
            ease?: string;
            delay?: number;
        };
    };
}

// Component props types
export interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export interface CardProps extends BaseComponentProps {
    hover?: boolean;
    padding?: 'sm' | 'md' | 'lg';
}

export interface InputProps extends BaseComponentProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    disabled?: boolean;
    required?: boolean;
}

export interface TextareaProps extends BaseComponentProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
    disabled?: boolean;
    required?: boolean;
    rows?: number;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Error types
export interface ApiError {
    message: string;
    status?: number;
    errors?: Array<{
        field: string;
        message: string;
    }>;
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Toast types
export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
    id: string;
    type: ToastType;
    message: string;
    duration?: number;
}
