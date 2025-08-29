import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Calendar, ArrowUp, Heart, Code, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import { useUserProfile } from '@/hooks/useUserProfile';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const { data: userData, error } = useUserProfile();
    
    if (error) {
        console.error('Error fetching user data:', error);
    }

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/MahmoudAbuelazm',
            icon: Github,
            color: 'hover:text-gray-400',
            bgColor: 'hover:bg-gray-800'
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/mahmoud-abu-elazem',
            icon: Linkedin,
            color: 'hover:text-blue-400',
            bgColor: 'hover:bg-blue-900/20'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/mahmoud_abuelazm',
            icon: Twitter,
            color: 'hover:text-sky-400',
            bgColor: 'hover:bg-sky-900/20'
        },
        {
            name: 'Email',
            url: 'mailto:mahmoudabuelazem2467@gmail.com',
            icon: Mail,
            color: 'hover:text-red-400',
            bgColor: 'hover:bg-red-900/20'
        },
    ];

    const quickLinks = [
        { name: t('nav.projects'), href: '/projects', icon: '🚀' },
        { name: t('nav.experience'), href: '/experience', icon: '💼' },
        { name: t('nav.skills'), href: '/skills', icon: '⚡' },
        { name: t('nav.certifications'), href: '/certifications', icon: '🏆' },
        { name: t('nav.contact'), href: '/contact', icon: '📧' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="flex items-center space-x-3">
                            {userData?.profilePicture?.url ? (
                                <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-blue-500/20">
                                    <img
                                        src={userData.profilePicture.url}
                                        alt={userData.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center ring-2 ring-blue-500/20">
                                    <span className="text-white font-bold text-lg">M</span>
                                </div>
                            )}
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    {userData?.name || 'Mahmoud Ahmed'}
                                </h3>
                                <p className="text-blue-300 text-sm">Flutter Developer</p>
                            </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed max-w-md">
                            {t('hero.description')}
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Mail className="w-4 h-4 text-blue-400" />
                                <span className="text-sm">mahmoudabuelazem2467@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Phone className="w-4 h-4 text-blue-400" />
                                <span className="text-sm">+20 102 128 8238</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <MapPin className="w-4 h-4 text-blue-400" />
                                <span className="text-sm">Mansoura, Egypt</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                            <span>🔗</span>
                            <span>Quick Links</span>
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                                >
                                    <a
                                        href={link.href}
                                        className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-all duration-200 group"
                                    >
                                        <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            {link.icon}
                                        </span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                                            {link.name}
                                        </span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                            <span>🌐</span>
                            <span>Connect</span>
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className={`flex items-center justify-center p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-200 ${social.color} ${social.bgColor} border border-gray-700 hover:border-gray-600`}
                                    title={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-gray-700/50 mb-8"
                >
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">5+</div>
                        <div className="text-sm text-gray-400">Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">3+</div>
                        <div className="text-sm text-gray-400">Years Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">10+</div>
                        <div className="text-sm text-gray-400">Happy Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
                        <div className="text-sm text-gray-400">Support</div>
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-gray-700/50 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-sm">
                                {t('footer.copyright')}
                            </p>
                            <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-start space-x-1">
                                <span>{t('footer.madeWith')}</span>
                                <Heart className="w-3 h-3 text-red-400 inline" />
                                <span>by</span>
                                <Code className="w-3 h-3 text-blue-400 inline" />
                                <span>&</span>
                                <Coffee className="w-3 h-3 text-yellow-400 inline" />
                            </p>
                        </div>

                        <div className="flex items-center space-x-4">
                            <motion.button
                                onClick={scrollToTop}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                                title="Back to Top"
                            >
                                <ArrowUp className="w-5 h-5 text-white" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
