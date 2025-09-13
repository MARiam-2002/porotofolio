import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  Star,
  Building,
  CheckCircle
} from 'lucide-react';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  // Experience data based on CV
  const experiences = [
    {
      id: 1,
      company: 'The Gate 1',
      position: 'Flutter Developer',
      type: 'Remote',
      duration: 'Jul 2024 - Sep 2024',
      location: 'Remote',
      description: 'Worked on the Estgmam app, developing features for users, owners, and trip leaders using Cubit and Bloc architecture. The app also integrates Google Maps for enhanced functionality.',
      technologies: ['Flutter', 'Dart', 'Cubit', 'Bloc', 'Google Maps', 'Firebase'],
      achievements: [
        'Developed user management features',
        'Implemented trip leader functionality',
        'Integrated Google Maps for location services',
        'Used Cubit and Bloc for state management'
      ],
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      company: 'Leapro',
      position: 'Flutter Developer',
      type: 'Remote',
      duration: 'Nov 2023 - Jun 2024',
      location: 'Remote',
      description: 'Specialized in the Provider pattern and MVVM architecture, with a focus on state management. My expertise in using Provider has enhanced the robustness and responsiveness of applications.',
      technologies: ['Flutter', 'Dart', 'Provider', 'MVVM', 'State Management'],
      achievements: [
        'Implemented Provider pattern for state management',
        'Applied MVVM architecture principles',
        'Enhanced app robustness and responsiveness',
        'Optimized performance and user experience'
      ],
      icon: '⚡',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      company: 'ITI',
      position: 'Flutter Summer Training',
      type: 'Training',
      duration: 'Aug 2023 - Sep 2023',
      location: 'Ismailia',
      description: 'Comprehensive training covering Dart, Flutter, OOP, Clean Coding, Animation, Firebase, Cubit, State Management, API, Git and GitHub. Developed a quiz app with six categories.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Cubit', 'Git', 'GitHub', 'APIs'],
      achievements: [
        'Completed comprehensive Flutter training program',
        'Developed quiz app with 6 categories (IQ, sports, history, etc.)',
        'Mastered OOP and Clean Coding principles',
        'Learned advanced animation techniques'
      ],
      icon: '🎓',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const education = [
    {
      id: 1,
      institution: 'SUEZ CANAL University',
      degree: 'Computer and Information System',
      level: 'Bachelor\'s Degree',
      duration: '2020 - 2024',
      location: 'Ismailia',
      gpa: 'Very Good',
      description: 'Comprehensive computer science education with focus on information systems, software development, and modern programming practices.',
      icon: '🏛️',
      color: 'from-indigo-500 to-blue-500'
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
            <Briefcase className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">Professional Journey</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            {t('experience.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Education Section */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Education
              </h2>
            </div>

            <div className="space-y-8">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-2"
                >
                  <div className="flex items-start space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
                    >
                      {edu.icon}
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full font-medium">
                            {edu.level}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 mb-4">
                        <div className="flex items-center space-x-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                          <Building className="w-4 h-4" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                          <Star className="w-4 h-4" />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Work Experience Section */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent opacity-30"></div>

                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-2">
                    {/* Company Header */}
                    <div className="flex items-start space-x-6 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
                      >
                        {exp.icon}
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {exp.position}
                          </h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium">
                              {exp.type}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 mb-4">
                          <div className="flex items-center space-x-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            className="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Code className="w-5 h-5 text-blue-500 mr-2" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * idx }}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                          >
                            {tech}
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

export default Experience;
