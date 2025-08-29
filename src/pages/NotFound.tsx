import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    404
                </h1>
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    {t('notFound.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    {t('notFound.subtitle')}
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                    {t('notFound.backHome')}
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
