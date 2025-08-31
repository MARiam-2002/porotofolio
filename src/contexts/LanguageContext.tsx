import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '@/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

// Translation keys
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'Mahmoud Ahmed',
    'hero.title': 'Flutter Developer',
    'hero.description': 'Passionate mobile app developer with expertise in Flutter, Dart, and modern UI/UX design. I love creating beautiful, functional, and user-friendly applications.',
    'hero.cta.primary': 'View My Work',
    'hero.cta.secondary': 'Download CV',

    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Get to know me better',
    'about.description': 'I am a passionate Flutter developer with a strong foundation in mobile app development. I specialize in creating beautiful, functional, and user-friendly applications that provide exceptional user experiences.',
    'about.stats.clients': 'Total Clients',
    'about.stats.projects': 'Total Projects',
    'about.stats.experience': 'Years of Experience',

    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Some of my recent work',
    'projects.viewAll': 'View All Projects',
    'projects.tech': 'Technologies',
    'projects.features': 'Features',
    'projects.liveDemo': 'Live Demo',
    'projects.github': 'GitHub',
    'projects.caseStudy': 'Case Study',

    // Experience Section
    'experience.title': 'Work Experience',
    'experience.subtitle': 'My professional journey',
    'experience.current': 'Present',
    'experience.location': 'Location',
    'experience.technologies': 'Technologies',

    // Skills Section
    'skills.title': 'Skills & Technologies',
    'skills.subtitle': 'My technical expertise',
    'skills.categories.languages': 'Languages',
    'skills.categories.frameworks': 'Frameworks',
    'skills.categories.tools': 'Tools',
    'skills.categories.databases': 'Databases',
    'skills.categories.other': 'Other',

    // Certifications Section
    'certifications.title': 'Certifications',
    'certifications.subtitle': 'My professional credentials',
    'certifications.viewCredential': 'View Credential',
    'certifications.issuedBy': 'Issued by',
    'certifications.date': 'Date',

    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s work together',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.phone': 'Phone (Optional)',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Failed to send message. Please try again.',
    'contact.info.title': 'Connect With Me',
    'contact.info.description': 'You can contact me through the following accounts.',

    // Footer
    'footer.copyright': '© 2024 Mahmoud Ahmed. All rights reserved.',
    'footer.madeWith': 'Made with ❤️ using React & TypeScript',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.retry': 'Retry',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.close': 'Close',
    'common.open': 'Open',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.clear': 'Clear',
    'common.view': 'View',
    'common.download': 'Download',
    'common.share': 'Share',
    'common.copy': 'Copy',
    'common.copied': 'Copied!',

    // Project Details
    'project.problem': 'Problem',
    'project.solution': 'Solution',
    'project.architecture': 'Architecture',
    'project.stateManagement': 'State Management',
    'project.challenges': 'Challenges',
    'project.results': 'Results',
    'project.techStack': 'Technologies Used',
    'project.role': 'Role',
    'project.year': 'Year',
    'project.type': 'Type',
    'project.features': 'Key Features',
    'project.stats.downloads': 'Downloads',
    'project.stats.rating': 'Rating',
    'project.stats.users': 'Users',

    // Not Found
    'notFound.title': 'Page Not Found',
    'notFound.subtitle': 'The page you\'re looking for doesn\'t exist.',
    'notFound.backHome': 'Back to Home',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.projects': 'المشاريع',
    'nav.experience': 'الخبرة',
    'nav.skills': 'المهارات',
    'nav.certifications': 'الشهادات',
    'nav.contact': 'اتصل بي',

    // Hero Section
    'hero.greeting': 'مرحباً، أنا',
    'hero.name': 'محمود أحمد',
    'hero.title': 'مطور Flutter',
    'hero.description': 'مطور تطبيقات موبايل شغوف بخبرة في Flutter و Dart وتصميم واجهات المستخدم الحديثة. أحب إنشاء تطبيقات جميلة وعملية وسهلة الاستخدام.',
    'hero.cta.primary': 'شاهد أعمالي',
    'hero.cta.secondary': 'تحميل السيرة الذاتية',

    // About Section
    'about.title': 'عني',
    'about.subtitle': 'تعرف علي أكثر',
    'about.description': 'أنا مطور Flutter شغوف مع أساس قوي في تطوير تطبيقات الموبايل. أتخصص في إنشاء تطبيقات جميلة وعملية وسهلة الاستخدام توفر تجارب مستخدم استثنائية.',
    'about.stats.clients': 'إجمالي العملاء',
    'about.stats.projects': 'إجمالي المشاريع',
    'about.stats.experience': 'سنوات الخبرة',

    // Projects Section
    'projects.title': 'المشاريع المميزة',
    'projects.subtitle': 'بعض من أعمالي الحديثة',
    'projects.viewAll': 'عرض جميع المشاريع',
    'projects.tech': 'التقنيات',
    'projects.features': 'المميزات',
    'projects.liveDemo': 'عرض مباشر',
    'projects.github': 'GitHub',
    'projects.caseStudy': 'دراسة الحالة',

    // Experience Section
    'experience.title': 'الخبرة العملية',
    'experience.subtitle': 'رحلتي المهنية',
    'experience.current': 'الحالي',
    'experience.location': 'الموقع',
    'experience.technologies': 'التقنيات',

    // Skills Section
    'skills.title': 'المهارات والتقنيات',
    'skills.subtitle': 'خبرتي التقنية',
    'skills.categories.languages': 'لغات البرمجة',
    'skills.categories.frameworks': 'أطر العمل',
    'skills.categories.tools': 'الأدوات',
    'skills.categories.databases': 'قواعد البيانات',
    'skills.categories.other': 'أخرى',

    // Certifications Section
    'certifications.title': 'الشهادات',
    'certifications.subtitle': 'مؤهلاتي المهنية',
    'certifications.viewCredential': 'عرض الشهادة',
    'certifications.issuedBy': 'صادر من',
    'certifications.date': 'التاريخ',

    // Contact Section
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'دعنا نعمل معاً',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'الرسالة',
    'contact.form.phone': 'الهاتف (اختياري)',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.form.sending': 'جاري الإرسال...',
    'contact.form.success': 'تم إرسال الرسالة بنجاح!',
    'contact.form.error': 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    'contact.info.title': 'تواصل معي',
    'contact.info.description': 'يمكنك التواصل معي من خلال الحسابات التالية.',

    // Footer
    'footer.copyright': '© 2024 محمود أحمد. جميع الحقوق محفوظة.',
    'footer.madeWith': 'صنع بـ ❤️ باستخدام React & TypeScript',

    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'حدث خطأ ما',
    'common.retry': 'إعادة المحاولة',
    'common.back': 'رجوع',
    'common.next': 'التالي',
    'common.previous': 'السابق',
    'common.close': 'إغلاق',
    'common.open': 'فتح',
    'common.edit': 'تعديل',
    'common.delete': 'حذف',
    'common.save': 'حفظ',
    'common.cancel': 'إلغاء',
    'common.search': 'بحث',
    'common.filter': 'تصفية',
    'common.clear': 'مسح',
    'common.view': 'عرض',
    'common.download': 'تحميل',
    'common.share': 'مشاركة',
    'common.copy': 'نسخ',
    'common.copied': 'تم النسخ!',

    // Project Details
    'project.problem': 'المشكلة',
    'project.solution': 'الحل',
    'project.architecture': 'الهندسة المعمارية',
    'project.stateManagement': 'إدارة الحالة',
    'project.challenges': 'التحديات',
    'project.results': 'النتائج',
    'project.techStack': 'التقنيات المستخدمة',
    'project.role': 'الدور',
    'project.year': 'السنة',
    'project.type': 'النوع',
    'project.features': 'المميزات الرئيسية',
    'project.stats.downloads': 'التحميلات',
    'project.stats.rating': 'التقييم',
    'project.stats.users': 'المستخدمين',

    // Not Found
    'notFound.title': 'الصفحة غير موجودة',
    'notFound.subtitle': 'الصفحة التي تبحث عنها غير موجودة.',
    'notFound.backHome': 'العودة للرئيسية',
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
        return savedLanguage;
      }
    } catch (error) {
      console.warn('Error reading language from localStorage:', error);
    }
    return 'en';
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    try {
      localStorage.setItem('language', newLanguage);
    } catch (error) {
      console.warn('Error saving language to localStorage:', error);
    }

    // Update document direction for RTL support
    try {
      document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = newLanguage;
    } catch (error) {
      console.warn('Error updating document attributes:', error);
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  useEffect(() => {
    // Set initial document direction and language
    try {
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    } catch (error) {
      console.warn('Error setting document attributes in useEffect:', error);
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
