import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Menu, X, Sun, Moon, Globe, Sparkles, Zap, Star, Crown } from 'lucide-react';
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
        { href: '/', label: t('nav.home'), icon: '🏠', gradient: 'from-emerald-500 to-teal-600' },
        { href: '/projects', label: t('nav.projects'), icon: '🚀', gradient: 'from-blue-500 to-indigo-600' },
        { href: '/experience', label: t('nav.experience'), icon: '💼', gradient: 'from-purple-500 to-pink-600' },
        { href: '/skills', label: t('nav.skills'), icon: '⚡', gradient: 'from-amber-500 to-orange-600' },
        { href: '/certifications', label: t('nav.certifications'), icon: '🏆', gradient: 'from-rose-500 to-red-600' },
        { href: '/contact', label: t('nav.contact'), icon: '📧', gradient: 'from-cyan-500 to-blue-600' },
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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
                scrolled
                    ? "bg-white/10 dark:bg-slate-900/10 backdrop-blur-2xl shadow-2xl border-b border-white/20 dark:border-slate-700/20"
                    : "bg-gradient-to-r from-white/5 via-blue-50/5 to-purple-50/5 dark:from-slate-900/5 dark:via-slate-800/5 dark:to-slate-900/5 backdrop-blur-xl"
            )}
        >
            {/* Premium Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Ultra Premium Logo */}
                    <div className="hover:scale-105 active:scale-95 transition-all duration-500 ease-out">
                        <Link to="/" className="flex items-center space-x-4 group">
                            {userData?.profilePicture?.url ? (
                                <div className="relative">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-3xl overflow-hidden ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-500 backdrop-blur-xl shadow-2xl group-hover:shadow-3xl">
                                        <img
                                            src={userData.profilePicture.url}
                                            alt={userData.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    {/* Premium Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                                    {/* Floating Sparkles */}
                                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin shadow-lg">
                                        <Sparkles className="w-3 h-3 text-white" />
                                    </div>
                                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse shadow-lg">
                                        <Star className="w-2 h-2 text-white" />
                                    </div>
                                </div>
                            ) : (
                                <div className="relative">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl flex items-center justify-center ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-500 shadow-2xl group-hover:shadow-3xl backdrop-blur-xl">
                                        <span className="text-white font-black text-xl lg:text-2xl">M</span>
                                    </div>
                                    {/* Premium Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                                    {/* Floating Elements */}
                                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin shadow-lg">
                                        <Crown className="w-3 h-3 text-white" />
                                    </div>
                                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse shadow-lg">
                                        <Zap className="w-2 h-2 text-white" />
                                    </div>
                                </div>
                            )}
                            <div className="hidden sm:block">
                                <h1 className="text-xl lg:text-2xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-slate-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-500">
                                    {userData?.name || 'Mahmoud Ahmed'}
                                </h1>
                                <div className="flex items-center space-x-2">
                                    <p className="text-xs lg:text-sm text-slate-600 dark:text-slate-400 font-semibold">
                                        Flutter Developer
                                    </p>
                                    {/* Status Indicator */}
                                    <div className="flex items-center space-x-1">
                                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse shadow-lg" />
                                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Available</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Ultra Premium Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-2">
                        {navItems.map((item, index) => (
                            <div key={item.href} style={{ animationDelay: `${index * 100}ms` }}>
                                <Link
                                    to={item.href}
                                    className={cn(
                                        'relative px-5 py-3 text-sm font-semibold rounded-2xl transition-all duration-500 ease-out group hover:scale-110 hover:-translate-y-1',
                                        isActive(item.href)
                                            ? 'text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-2xl shadow-blue-500/25'
                                            : 'text-slate-700 dark:text-slate-300 hover:text-white bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 border border-white/20 dark:border-slate-700/20 hover:border-white/40'
                                    )}
                                >
                                    <span className="flex items-center space-x-2">
                                        <span className={cn(
                                            "text-base transition-all duration-500",
                                            isActive(item.href) ? "opacity-100 scale-110" : "opacity-0 group-hover:opacity-100 group-hover:scale-110"
                                        )}>
                                            {item.icon}
                                        </span>
                                        <span>{item.label}</span>
                                    </span>
                                    {/* Premium Active Overlay */}
                                    {isActive(item.href) && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-2xl border border-white/30" />
                                    )}
                                    {/* Hover Glow Effect */}
                                    <div className={cn(
                                        "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 blur-xl",
                                        `bg-gradient-to-r ${item.gradient}`
                                    )} />
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Ultra Premium Controls */}
                    <div className="flex items-center space-x-3">
                        {/* Premium Language Toggle */}
                        <button
                            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                            className="p-3 text-slate-700 dark:text-slate-300 hover:text-white bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-2xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 border border-white/20 dark:border-slate-700/20 hover:border-white/40 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-125 hover:-translate-y-1 hover:rotate-6"
                            title={language === 'en' ? 'العربية' : 'English'}
                        >
                            <Globe className="w-5 h-5" />
                        </button>

                        {/* Premium Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-3 text-slate-700 dark:text-slate-300 hover:text-white bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-2xl hover:bg-gradient-to-r hover:from-amber-500/20 hover:via-orange-500/20 hover:to-red-500/20 border border-white/20 dark:border-slate-700/20 hover:border-white/40 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-125 hover:-translate-y-1 hover:rotate-6"
                            title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                        >
                            {theme === 'light' ? (
                                <Moon className="w-5 h-5 group-hover:scale-110" />
                            ) : (
                                <Sun className="w-5 h-5 group-hover:scale-110" />
                            )}
                        </button>

                        {/* Premium Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-3 text-slate-700 dark:text-slate-300 hover:text-white bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-2xl hover:bg-gradient-to-r hover:from-indigo-500/20 hover:via-purple-500/20 hover:to-pink-500/20 border border-white/20 dark:border-slate-700/20 hover:border-white/40 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-125 hover:-translate-y-1"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 transition-transform duration-500 rotate-90" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Ultra Premium Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <div className="px-4 pt-4 pb-6 space-y-3 bg-white/10 dark:bg-slate-900/10 backdrop-blur-2xl rounded-3xl mt-4 border border-white/20 dark:border-slate-700/20 shadow-2xl">
                            {navItems.map((item, index) => (
                                <div key={item.href} style={{ animationDelay: `${index * 100}ms` }}>
                                    <Link
                                        to={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={cn(
                                            'flex items-center space-x-4 px-6 py-4 text-base font-semibold rounded-2xl transition-all duration-500 backdrop-blur-xl border border-white/10 dark:border-slate-700/10',
                                            isActive(item.href)
                                                ? 'text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl shadow-blue-500/25'
                                                : 'text-slate-700 dark:text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 hover:border-white/20'
                                        )}
                                    >
                                        <span className="text-2xl">{item.icon}</span>
                                        <span>{item.label}</span>
                                        {/* Active Indicator */}
                                        {isActive(item.href) && (
                                            <div className="ml-auto w-3 h-3 bg-white rounded-full animate-pulse shadow-lg" />
                                        )}
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
