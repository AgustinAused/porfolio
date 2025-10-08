'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionBackground from './SectionBackground';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiSpring, SiPython, SiMongodb, SiMysql, SiPostgresql,
  SiGit, SiDocker, SiLinux, SiHtml5, SiCss3, SiTailwindcss
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
      { name: 'React', icon: SiReact, color: 'text-cyan-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
      { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
      { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', icon: FaJava, color: 'text-red-500' },
      { name: 'Spring Boot', icon: SiSpring, color: 'text-green-500' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400' },
      { name: 'Python', icon: SiPython, color: 'text-blue-400' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500' },
    ],
  },
  {
    title: 'Mainframe & Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: 'text-orange-500' },
      { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
      { name: 'Linux', icon: SiLinux, color: 'text-yellow-300' },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" ref={ref} className="relative min-h-screen flex items-center justify-center px-6 py-24 section-navbar-offset">
      <SectionBackground variant="purple" intensity="medium" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Habilidades <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Técnicas</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-6">{category.title}</h3>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-slate-900/50 hover:bg-slate-900 transition-all duration-300 hover:scale-110"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <skill.icon className={`${skill.color} text-4xl`} />
                    <span className="text-gray-300 text-sm text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
