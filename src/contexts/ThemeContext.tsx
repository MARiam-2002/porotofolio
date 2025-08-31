import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '@/types';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>(() => {
        try {
            // Check localStorage first
            const savedTheme = localStorage.getItem('theme') as Theme;
            if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
                return savedTheme;
            }

            // Check system preference
            if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        } catch (error) {
            console.warn('Error reading theme from localStorage:', error);
        }

        return 'light';
    });

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        try {
            localStorage.setItem('theme', newTheme);
        } catch (error) {
            console.warn('Error saving theme to localStorage:', error);
        }
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const root = window.document.documentElement;

        // Remove existing theme classes
        root.classList.remove('light', 'dark');

        // Add current theme class
        root.classList.add(theme);

        // Update CSS custom properties for toast styling
        if (theme === 'dark') {
            document.documentElement.style.setProperty('--toast-bg', '#1f2937');
            document.documentElement.style.setProperty('--toast-color', '#f9fafb');
            document.documentElement.style.setProperty('--toast-border', '#374151');
        } else {
            document.documentElement.style.setProperty('--toast-bg', '#ffffff');
            document.documentElement.style.setProperty('--toast-color', '#111827');
            document.documentElement.style.setProperty('--toast-border', '#e5e7eb');
        }
    }, [theme]);

    // Listen for system theme changes
    useEffect(() => {
        try {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

            const handleChange = (e: MediaQueryListEvent) => {
                // Only update if user hasn't manually set a theme
                try {
                    if (!localStorage.getItem('theme')) {
                        setTheme(e.matches ? 'dark' : 'light');
                    }
                } catch (error) {
                    console.warn('Error checking localStorage:', error);
                }
            };

            mediaQuery.addEventListener('change', handleChange);

            return () => mediaQuery.removeEventListener('change', handleChange);
        } catch (error) {
            console.warn('Error setting up theme listener:', error);
        }
    }, []);

    const value: ThemeContextType = {
        theme,
        toggleTheme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
