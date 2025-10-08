'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Especialista CICS & Analista Soporte Técnico',
    company: 'Galicia Mas',
    period: 'Septiembre 2024 - Actualidad',
    description: 'Especialista en Customer Information Control System (CICS) para transacciones mainframe. Gestión de sistemas críticos, optimización de procesos y documentación técnica de alto nivel.',
    skills: ['CICS', 'Mainframe', 'JCL', 'COBOL', 'RACF', 'DB2'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Pasante Mainframe',
    company: 'HSBC Bank Argentina',
    period: 'Abril 2023 - Septiembre 2024',
    description: 'Seguimiento de cambios en sistemas mainframe, gestión de procesos operativos y colaboración con equipos multidisciplinarios en proyectos bancarios.',
    skills: ['Mainframe', 'Trabajo en equipo', 'Procesos operativos', 'Gestión de cambios'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Crew Member',
    company: 'Arcos Dorados (McDonald\'s)',
    period: 'Diciembre 2021 - Abril 2023',
    description: 'Atención al cliente, logística operativa y trabajo en equipo en entorno de alta demanda.',
    skills: ['Atención al cliente', 'Adaptabilidad', 'Trabajo bajo presión', 'Logística'],
    color: 'from-yellow-500 to-orange-500',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 ml-20">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Experiencia <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Profesional</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-20 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-6 top-2 w-5 h-5 rounded-full bg-gradient-to-r ${exp.color}`}></div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                  {exp.company}
                </p>
                <p className="text-gray-400 mb-4">{exp.period}</p>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
