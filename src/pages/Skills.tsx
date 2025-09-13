import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Smartphone,
  Zap,
  Shield,
  Palette,
  Cloud,
  Cpu,
  Layers,
  Rocket,
  Star,
  Award
} from 'lucide-react';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  // Programming Languages
  const programmingLanguages = [
    {
      name: 'C++',
      level: 85,
      icon: '⚡',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-700 dark:text-blue-300',
      description: 'Object-oriented programming and algorithms'
    },
    {
      name: 'Dart',
      level: 95,
      icon: '🎯',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      textColor: 'text-cyan-700 dark:text-cyan-300',
      description: 'Primary language for Flutter development'
    },
    {
      name: 'HTML',
      level: 90,
      icon: '🌐',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      textColor: 'text-orange-700 dark:text-orange-300',
      description: 'Semantic markup and web structure'
    },
    {
      name: 'CSS',
      level: 88,
      icon: '🎨',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      textColor: 'text-pink-700 dark:text-pink-300',
      description: 'Styling and responsive design'
    }
  ];

  // Frameworks & Libraries
  const frameworks = [
    {
      name: 'Flutter',
      level: 95,
      icon: '📱',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      textColor: 'text-indigo-700 dark:text-indigo-300',
      description: 'Cross-platform mobile development',
      features: ['Widget-based UI', 'Hot Reload', 'Material Design', 'Cupertino Design']
    }
  ];

  // Tools & Platforms
  const tools = [
    {
      name: 'Firebase',
      level: 90,
      icon: '🔥',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      textColor: 'text-yellow-700 dark:text-yellow-300',
      description: 'Backend services and real-time database'
    },
    {
      name: 'Git',
      level: 85,
      icon: '🌿',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      textColor: 'text-red-700 dark:text-red-300',
      description: 'Version control and collaboration'
    },
    {
      name: 'GitHub',
      level: 88,
      icon: '🐙',
      color: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gray-50 dark:bg-gray-700/20',
      textColor: 'text-gray-700 dark:text-gray-300',
      description: 'Code hosting and project management'
    }
  ];

  // Databases
  const databases = [
    {
      name: 'Hive Flutter',
      level: 82,
      icon: '🗄️',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-700 dark:text-green-300',
      description: 'Lightweight local database for Flutter'
    }
  ];

  // Specializations
  const specializations = [
    {
      title: 'Mobile Development',
      description: 'Cross-platform applications with Flutter',
      icon: Smartphone,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/20',
      skills: ['Flutter', 'Dart', 'Material Design', 'Responsive UI']
    },
    {
      title: 'State Management',
      description: 'Advanced state management patterns',
      icon: Layers,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/20',
      skills: ['Provider', 'Bloc', 'Cubit', 'MVVM']
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces',
      icon: Palette,
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-500/10 to-teal-500/10',
      borderColor: 'border-green-500/20',
      skills: ['Material Design', 'Custom Widgets', 'Animations', 'Responsive Design']
    },
    {
      title: 'Performance',
      description: 'Optimized and lightning-fast applications',
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/10 to-orange-500/10',
      borderColor: 'border-yellow-500/20',
      skills: ['Code Optimization', 'Memory Management', 'Lazy Loading', 'Caching']
    }
  ];

  // Experience Highlights
  const experienceHighlights = [
    {
      title: '3+ Years Experience',
      description: 'Professional Flutter development',
      icon: Award,
      color: 'text-yellow-500'
    },
    {
      title: '5+ Projects',
      description: 'Successfully delivered applications',
      icon: Rocket,
      color: 'text-blue-500'
    },
    {
      title: 'Advanced Skills',
      description: 'AI/ML integration and AR features',
      icon: Cpu,
      color: 'text-purple-500'
    },
    {
      title: 'Clean Architecture',
      description: 'SOLID principles and best practices',
      icon: Shield,
      color: 'text-green-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-24 lg:pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 font-semibold mb-8 backdrop-blur-sm"
          >
            <Code className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">Technical Expertise</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            {t('skills.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Experience Highlights */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {experienceHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                >
                  <highlight.icon className={`w-8 h-8 mx-auto mb-3 ${highlight.color}`} />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Programming Languages */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Programming Languages
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programmingLanguages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`${lang.bgColor} rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{lang.icon}</span>
                      <div>
                        <h3 className={`text-xl font-bold ${lang.textColor}`}>
                          {lang.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {lang.description}
                        </p>
                      </div>
                    </div>
                    <span className={`text-2xl font-bold ${lang.textColor}`}>
                      {lang.level}%
                    </span>
                  </div>
                  <div className="w-full bg-white/50 dark:bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${lang.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${lang.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Frameworks & Libraries */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Frameworks & Libraries
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {frameworks.map((framework) => (
                <motion.div
                  key={framework.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`${framework.bgColor} rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{framework.icon}</span>
                      <div>
                        <h3 className={`text-2xl font-bold ${framework.textColor}`}>
                          {framework.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {framework.description}
                        </p>
                      </div>
                    </div>
                    <span className={`text-3xl font-bold ${framework.textColor}`}>
                      {framework.level}%
                    </span>
                  </div>

                  <div className="w-full bg-white/50 dark:bg-gray-700/50 rounded-full h-4 overflow-hidden mb-6">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${framework.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${framework.level}%` }}
                      transition={{ duration: 2, delay: 0.8 }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {framework.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + idx * 0.1 }}
                        className="px-3 py-1 bg-white/60 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tools & Platforms */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Tools & Platforms
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`${tool.bgColor} rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300`}
                >
                  <span className="text-3xl mb-4 block">{tool.icon}</span>
                  <h3 className={`text-xl font-bold ${tool.textColor} mb-2`}>
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {tool.description}
                  </p>
                  <div className="w-full bg-white/50 dark:bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${tool.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${tool.level}%` }}
                      transition={{ duration: 1.5, delay: 1.2 + index * 0.2 }}
                    />
                  </div>
                  <span className={`text-sm font-bold ${tool.textColor} mt-2 block`}>
                    {tool.level}%
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Databases */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Databases
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {databases.map((db, index) => (
                <motion.div
                  key={db.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`${db.bgColor} rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{db.icon}</span>
                      <div>
                        <h3 className={`text-xl font-bold ${db.textColor}`}>
                          {db.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {db.description}
                        </p>
                      </div>
                    </div>
                    <span className={`text-2xl font-bold ${db.textColor}`}>
                      {db.level}%
                    </span>
                  </div>
                  <div className="w-full bg-white/50 dark:bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${db.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${db.level}%` }}
                      transition={{ duration: 1.5, delay: 1.8 + index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Specializations */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Specializations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specializations.map((spec, index) => (
                <motion.div
                  key={spec.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`group bg-gradient-to-r ${spec.bgGradient} border ${spec.borderColor} rounded-2xl p-6 backdrop-blur-sm hover:shadow-xl transition-all duration-500`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${spec.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <spec.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                        {spec.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {spec.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {spec.skills.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2 + index * 0.1 + idx * 0.05 }}
                            className="px-3 py-1 bg-white/60 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
