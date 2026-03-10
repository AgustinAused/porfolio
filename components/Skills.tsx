'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionBackground from './SectionBackground';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiPython, SiMongodb, SiPostgresql, SiGit, SiDocker,
  SiLinux, SiTailwindcss, SiRedis, SiFastapi,
} from 'react-icons/si';
import { FaJava, FaServer } from 'react-icons/fa';
import { Terminal, Layers, Database, Cpu } from 'lucide-react';

// Para tecnologías sin ícono oficial usamos texto+ícono genérico
const TextIcon = ({ label, color }: { label: string; color: string }) => (
  <span className={`${color} text-xs font-bold font-mono leading-tight text-center`}>{label}</span>
);

const skillCategories = [
  {
    title: 'Mainframe',
    subtitle: 'Lo que hago en el banco',
    icon: Cpu,
    skills: [
      { name: 'CICS', renderIcon: () => <TextIcon label="CICS" color="text-green-400" />, color: 'text-green-400' },
      { name: 'z/OS', renderIcon: () => <TextIcon label="z/OS" color="text-blue-300" />, color: 'text-blue-300' },
      { name: 'JCL', renderIcon: () => <TextIcon label="JCL" color="text-yellow-300" />, color: 'text-yellow-300' },
      { name: 'TSO/ISPF', renderIcon: () => <TextIcon label="TSO" color="text-purple-300" />, color: 'text-purple-300' },
      { name: 'VSAM', renderIcon: () => <TextIcon label="VSAM" color="text-orange-300" />, color: 'text-orange-300' },
    ],
  },
  {
    title: 'Backend & APIs',
    subtitle: 'Stack de Beescend',
    icon: FaServer,
    skills: [
      { name: 'FastAPI', icon: SiFastapi, color: 'text-green-400' },
      { name: 'Python', icon: SiPython, color: 'text-blue-400' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400' },
      { name: 'Java', icon: FaJava, color: 'text-red-400' },
      { name: 'REST APIs', renderIcon: () => <TextIcon label="REST" color="text-pink-300" />, color: 'text-pink-300' },
      { name: 'Redis', icon: SiRedis, color: 'text-red-400' },
    ],
  },
  {
    title: 'Frontend',
    subtitle: 'Interfaces y producto',
    icon: Layers,
    skills: [
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
      { name: 'React', icon: SiReact, color: 'text-cyan-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
    ],
  },
  {
    title: 'Data & Infra',
    subtitle: 'Bases de datos y herramientas',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
      { name: 'Git', icon: SiGit, color: 'text-orange-400' },
      { name: 'Linux', icon: SiLinux, color: 'text-yellow-300' },
      { name: 'Microservicios', renderIcon: () => <TextIcon label="μSVC" color="text-purple-300" />, color: 'text-purple-300' },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 py-24 section-navbar-offset"
    >
      <SectionBackground variant="purple" intensity="medium" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stack{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              técnico
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            De sistemas críticos bancarios a productos SaaS en LATAM.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-2">
                  <CategoryIcon className="text-purple-400 w-5 h-5" />
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>
                <p className="text-xs text-gray-500 mb-5 ml-8">{category.subtitle}</p>

                {/* Skills grid */}
                <div className="grid grid-cols-3 gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = (skill as any).icon;
                    const renderIcon = (skill as any).renderIcon;
                    return (
                      <motion.div
                        key={skillIndex}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 transition-all duration-300 hover:scale-105 cursor-default"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.04,
                        }}
                      >
                        <div className="h-8 flex items-center justify-center">
                          {renderIcon ? (
                            renderIcon()
                          ) : (
                            <Icon className={`${skill.color} text-3xl`} />
                          )}
                        </div>
                        <span className="text-gray-400 text-xs text-center leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;