import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme} ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
