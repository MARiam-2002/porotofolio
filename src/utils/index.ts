import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, formatDistanceToNow } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';

// Utility function to merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Format date based on language
export function formatDate(date: string | Date, language: 'en' | 'ar' = 'en'): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const locale = language === 'ar' ? ar : enUS;

    return format(dateObj, 'MMM yyyy', { locale });
}

// Format relative date
export function formatRelativeDate(date: string | Date, language: 'en' | 'ar' = 'en'): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const locale = language === 'ar' ? ar : enUS;

    return formatDistanceToNow(dateObj, { addSuffix: true, locale });
}

// Format duration between two dates
export function formatDuration(startDate: string | Date, endDate?: string | Date): string {
    const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
    const end = endDate ? (typeof endDate === 'string' ? new Date(endDate) : endDate) : new Date();

    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffMonths / 12);

    if (diffYears > 0) {
        const remainingMonths = diffMonths % 12;
        return `${diffYears} year${diffYears > 1 ? 's' : ''}${remainingMonths > 0 ? ` ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}`;
    } else if (diffMonths > 0) {
        return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
    } else {
        return `${diffDays} day${diffDays > 1 ? 's' : ''}`;
    }
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout>;

    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// Throttle function
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean;

    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// Generate slug from string
export function generateSlug(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}

// Capitalize first letter
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Format number with commas
export function formatNumber(num: number): string {
    return num.toLocaleString();
}

// Format file size
export function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Check if string is valid URL
export function isValidUrl(string: string): boolean {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Check if string is valid email
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Generate random ID
export function generateId(): string {
    return Math.random().toString(36).substr(2, 9);
}

// Deep clone object
export function deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
    if (obj instanceof Array) return obj.map(item => deepClone(item)) as unknown as T;
    if (typeof obj === 'object') {
        const clonedObj = {} as T;
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                clonedObj[key] = deepClone(obj[key]);
            }
        }
        return clonedObj;
    }
    return obj;
}

// Sleep function
export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Retry function
export async function retry<T>(
    fn: () => Promise<T>,
    retries: number = 3,
    delay: number = 1000
): Promise<T> {
    try {
        return await fn();
    } catch (error) {
        if (retries > 0) {
            await sleep(delay);
            return retry(fn, retries - 1, delay * 2);
        }
        throw error;
    }
}

// Copy to clipboard
export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (error) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        } catch (fallbackError) {
            document.body.removeChild(textArea);
            return false;
        }
    }
}

// Download file
export function downloadFile(url: string, filename?: string): void {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Get tech icon class
export function getTechIconClass(tech: string): string {
    const techIcons: Record<string, string> = {
        'flutter': 'devicon-flutter-plain',
        'dart': 'devicon-dart-plain',
        'react': 'devicon-react-original',
        'typescript': 'devicon-typescript-plain',
        'javascript': 'devicon-javascript-plain',
        'html': 'devicon-html5-plain',
        'css': 'devicon-css3-plain',
        'nodejs': 'devicon-nodejs-plain',
        'express': 'devicon-express-original',
        'mongodb': 'devicon-mongodb-plain',
        'firebase': 'devicon-firebase-plain',
        'git': 'devicon-git-plain',
        'github': 'devicon-github-original',
        'sqlite': 'devicon-sqlite-plain',
        'c++': 'devicon-cplusplus-plain',
        'java': 'devicon-java-plain',
        'python': 'devicon-python-plain',
        'docker': 'devicon-docker-plain',
        'aws': 'devicon-amazonwebservices-original',
        'figma': 'devicon-figma-plain',
        'vscode': 'devicon-vscode-plain',
        'android': 'devicon-android-plain',
        'ios': 'devicon-apple-original',
        'linux': 'devicon-linux-plain',
        'ubuntu': 'devicon-ubuntu-plain',
        'windows': 'devicon-windows8-original',
        'macos': 'devicon-apple-original',
    };

    const normalizedTech = tech.toLowerCase().replace(/\s+/g, '');
    return techIcons[normalizedTech] || 'devicon-code-plain';
}

// Get social icon class
export function getSocialIconClass(platform: string): string {
    const socialIcons: Record<string, string> = {
        'github': 'devicon-github-original',
        'linkedin': 'devicon-linkedin-plain',
        'twitter': 'devicon-twitter-original',
        'facebook': 'devicon-facebook-plain',
        'instagram': 'devicon-instagram-plain',
        'youtube': 'devicon-youtube-plain',
        'discord': 'devicon-discord-plain',
        'telegram': 'devicon-telegram-plain',
        'whatsapp': 'devicon-whatsapp-plain',
        'email': 'devicon-google-plain',
        'website': 'devicon-chrome-plain',
    };

    const normalizedPlatform = platform.toLowerCase();
    return socialIcons[normalizedPlatform] || 'devicon-link-plain';
}

// Scroll to element
export function scrollToElement(elementId: string, offset: number = 0): void {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
        });
    }
}

// Check if element is in viewport
export function isInViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get intersection observer options
export function getIntersectionObserverOptions(
    threshold: number = 0.1,
    rootMargin: string = '0px'
): IntersectionObserverInit {
    return {
        threshold,
        rootMargin,
    };
}

// Format project stats
export function formatProjectStats(stats: { downloads: number; rating: number; users: number }) {
    return {
        downloads: formatNumber(stats.downloads),
        rating: stats.rating.toFixed(1),
        users: formatNumber(stats.users),
    };
}

// Get project type label
export function getProjectTypeLabel(type: string): string {
    const typeLabels: Record<string, string> = {
        mobile: 'Mobile App',
        web: 'Web App',
        desktop: 'Desktop App',
        other: 'Other',
    };

    return typeLabels[type] || type;
}

// Get skill category label
export function getSkillCategoryLabel(category: string): string {
    const categoryLabels: Record<string, string> = {
        Languages: 'Programming Languages',
        Frameworks: 'Frameworks & Libraries',
        Tools: 'Development Tools',
        Databases: 'Databases',
        Other: 'Other Technologies',
    };

    return categoryLabels[category] || category;
}

// Validate form data
export function validateFormData(data: Record<string, any>, rules: Record<string, any>): Record<string, string> {
    const errors: Record<string, string> = {};

    Object.keys(rules).forEach(field => {
        const value = data[field];
        const fieldRules = rules[field];

        if (fieldRules.required && (!value || value.trim() === '')) {
            errors[field] = `${field} is required`;
        } else if (value) {
            if (fieldRules.minLength && value.length < fieldRules.minLength) {
                errors[field] = `${field} must be at least ${fieldRules.minLength} characters`;
            }
            if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
                errors[field] = `${field} must be at most ${fieldRules.maxLength} characters`;
            }
            if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
                errors[field] = `${field} format is invalid`;
            }
            if (fieldRules.email && !isValidEmail(value)) {
                errors[field] = `${field} must be a valid email address`;
            }
            if (fieldRules.url && !isValidUrl(value)) {
                errors[field] = `${field} must be a valid URL`;
            }
        }
    });

    return errors;
}

// Sanitize HTML
export function sanitizeHtml(html: string): string {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
}

// Escape HTML
export function escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Unescape HTML
export function unescapeHtml(html: string): string {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
}
