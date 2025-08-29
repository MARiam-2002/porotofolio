import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Certifications: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('certifications.title')}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {t('certifications.subtitle')}
                    </p>
                </div>

                <div className="text-center py-20">
                    <p className="text-gray-600 dark:text-gray-400">
                        Certifications page coming soon...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
