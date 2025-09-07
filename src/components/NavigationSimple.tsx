import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Menu, X, Sun, Moon, Globe, Sparkles } from 'lucide-react';
import { cn } from '@/utils';

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userData, setUserData] = useState<any>(null);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        // Set fallback data directly
        setUserData({
            name: 'Mahmoud Ahmed',
            profilePicture: {
                url: '/97337243.jpeg'
            }
        });
    }, []);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '/', label: t('nav.home'), icon: '🏠' },
        { href: '/projects', label: t('nav.projects'), icon: '🚀' },
        { href: '/experience', label: t('nav.experience'), icon: '💼' },
        { href: '/skills', label: t('nav.skills'), icon: '⚡' },
        { href: '/certifications', label: t('nav.certifications'), icon: '🏆' },
        { href: '/contact', label: t('nav.contact'), icon: '📧' },
    ];

    const isActive = (href: string) => {
        if (href === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(href);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "glass border-gradient shadow-xl glow-blue"
                    : "hero-gradient bg-pattern backdrop-blur-sm"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <div className="hover:scale-105 active:scale-95 transition-transform duration-200">
                        <Link to="/" className="flex items-center space-x-3 group">
                            {userData?.profilePicture?.url ? (
                                <div className="relative">
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl overflow-hidden ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300">
                                        <img
                                            src={userData.profilePicture.url}
                                            alt={userData.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin">
                                        <Sparkles className="w-2 h-2 text-white" />
                                    </div>
                                </div>
                            ) : (
                                <div className="relative">
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-500 rounded-2xl flex items-center justify-center ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                                        <span className="text-white font-bold text-lg lg:text-xl">M</span>
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin">
                                        <Sparkles className="w-2 h-2 text-white" />
                                    </div>
                                </div>
                            )}
                            <div className="hidden sm:block">
                                <h1 className="text-xl lg:text-2xl font-bold gradient-text text-glow group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                                    {userData?.name || 'Mahmoud Ahmed'}
                                </h1>
                                <p className="text-xs lg:text-sm text-slate-600 dark:text-slate-400 font-medium">
                                    Flutter Developer
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <div key={item.href}>
                                <Link
                                    to={item.href}
                                    className={cn(
                                        'nav-link relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 group hover:scale-105',
                                        isActive(item.href)
                                            ? 'nav-link-active text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 shadow-md'
                                            : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                                    )}
                                >
                                    <span className="flex items-center space-x-2">
                                        <span className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {item.icon}
                                        </span>
                                        <span>{item.label}</span>
                                    </span>
                                    {isActive(item.href) && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-500/20" />
                                    )}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center space-x-2">
                        {/* Language Toggle */}
                        <button
                            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                            className="hover-glow p-2.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110 active:scale-90"
                            title={language === 'en' ? 'العربية' : 'English'}
                        >
                            <Globe className="w-5 h-5" />
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="hover-glow p-2.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110 active:scale-90"
                            title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                        >
                            {theme === 'light' ? (
                                <Moon className="w-5 h-5" />
                            ) : (
                                <Sun className="w-5 h-5" />
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="hover-glow lg:hidden p-2.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110 active:scale-90"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-4 space-y-2 glass border-gradient rounded-2xl mt-4 shadow-xl glow-blue">
                            {navItems.map((item) => (
                                <div key={item.href}>
                                    <Link
                                        to={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={cn(
                                            'nav-link flex items-center space-x-3 px-4 py-3 text-base font-medium rounded-xl transition-all duration-300',
                                            isActive(item.href)
                                                ? 'nav-link-active text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 shadow-md'
                                                : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                                        )}
                                    >
                                        <span className="text-lg">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
