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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
                scrolled
                    ? "bg-white/10 dark:bg-slate-900/10 backdrop-blur-2xl shadow-2xl border-b border-white/20 dark:border-slate-700/20"
                    : "bg-white/5 dark:bg-slate-900/5 backdrop-blur-xl border-b border-white/10 dark:border-slate-700/10"
            )}
            style={{
                background: scrolled
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(59,130,246,0.05) 50%, rgba(147,51,234,0.05) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(59,130,246,0.02) 50%, rgba(147,51,234,0.02) 100%)'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Ultra Premium Logo */}
                    <div className="group relative">
                        <Link to="/" className="flex items-center space-x-4 transition-all duration-500 hover:scale-105">
                            {userData?.profilePicture?.url ? (
                                <div className="relative">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl overflow-hidden border-2 border-white/20 dark:border-slate-700/20 backdrop-blur-xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:border-blue-400/50">
                                        <img
                                            src={userData.profilePicture.url}
                                            alt={userData.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin shadow-lg">
                                        <Sparkles className="w-3 h-3 text-white" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 scale-150"></div>
                                </div>
                            ) : (
                                <div className="relative">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center border-2 border-white/20 dark:border-slate-700/20 backdrop-blur-xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:border-blue-400/50">
                                        <span className="text-white font-black text-xl lg:text-2xl">M</span>
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin shadow-lg">
                                        <Sparkles className="w-3 h-3 text-white" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 scale-150"></div>
                                </div>
                            )}
                            <div className="hidden sm:block">
                                <h1 className="text-xl lg:text-2xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-500">
                                    {userData?.name || 'Mahmoud Ahmed'}
                                </h1>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold">
                                        Flutter Developer
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Ultra Premium Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-2">
                        {navItems.map((item, index) => (
                            <div
                                key={item.href}
                                className="relative"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Link
                                    to={item.href}
                                    className={cn(
                                        'group relative px-6 py-3 text-sm font-semibold rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1',
                                        isActive(item.href)
                                            ? 'text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-2xl'
                                            : 'text-slate-700 dark:text-slate-300 hover:text-white bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:shadow-xl'
                                    )}
                                >
                                    <div className="flex items-center space-x-2 relative z-10">
                                        <span className={cn(
                                            "text-lg transition-all duration-300",
                                            isActive(item.href)
                                                ? "opacity-100 scale-110"
                                                : "opacity-0 group-hover:opacity-100 group-hover:scale-110"
                                        )}>
                                            {item.icon}
                                        </span>
                                        <span className="font-bold">{item.label}</span>
                                    </div>

                                    {/* Active indicator */}
                                    {isActive(item.href) && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-100 rounded-2xl" />
                                    )}

                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 scale-150"></div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Ultra Premium Controls */}
                    <div className="flex items-center space-x-3">
                        {/* Language Toggle */}
                        <button
                            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                            className="group relative p-3 text-slate-700 dark:text-slate-300 hover:text-white bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 rounded-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-125 hover:-translate-y-1 hover:rotate-6 active:scale-90"
                            title={language === 'en' ? 'العربية' : 'English'}
                        >
                            <Globe className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 scale-150"></div>
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="group relative p-3 text-slate-700 dark:text-slate-300 hover:text-white bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 rounded-2xl hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-125 hover:-translate-y-1 hover:rotate-6 active:scale-90"
                            title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                        >
                            {theme === 'light' ? (
                                <Moon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            ) : (
                                <Sun className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 scale-150"></div>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden group relative p-3 text-slate-700 dark:text-slate-300 hover:text-white bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 rounded-2xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-125 hover:-translate-y-1 active:scale-90"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 group-hover:scale-110 group-hover:rotate-90 transition-all duration-300" />
                            ) : (
                                <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 scale-150"></div>
                        </button>
                    </div>
                </div>

                {/* Ultra Premium Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <div className="px-4 pt-4 pb-6 space-y-3 bg-white/10 dark:bg-slate-900/10 backdrop-blur-2xl rounded-3xl mt-6 border border-white/20 dark:border-slate-700/20 shadow-2xl"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(59,130,246,0.05) 50%, rgba(147,51,234,0.05) 100%)'
                            }}>
                            {navItems.map((item, index) => (
                                <div
                                    key={item.href}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <Link
                                        to={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={cn(
                                            'group flex items-center space-x-4 px-6 py-4 text-lg font-semibold rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 relative',
                                            isActive(item.href)
                                                ? 'text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-xl'
                                                : 'text-slate-700 dark:text-slate-300 hover:text-white bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:shadow-xl'
                                        )}
                                    >
                                        <span className={cn(
                                            "text-2xl transition-all duration-300",
                                            isActive(item.href)
                                                ? "opacity-100 scale-110"
                                                : "opacity-80 group-hover:opacity-100 group-hover:scale-110"
                                        )}>
                                            {item.icon}
                                        </span>
                                        <span className="font-bold">{item.label}</span>

                                        {/* Active indicator */}
                                        {isActive(item.href) && (
                                            <div className="ml-auto w-3 h-3 bg-white/30 rounded-full animate-pulse" />
                                        )}

                                        {/* Hover glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 scale-150"></div>
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
