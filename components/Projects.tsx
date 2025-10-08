'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'LearnHub',
    description: 'Marketplace educativo completo con arquitectura de microservicios. Sistema de gestión de cursos, autenticación de usuarios y pasarela de pagos.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Microservicios'],
    github: 'https://github.com/AgustinAused/LearnHub',
    image: '/img/LearnHub-min.png',
    gradient: 'from-purple-600 to-blue-600',
  },
  {
    title: 'Finance API',
    description: 'Sistema backend robusto para gestión financiera empresarial con Spring Boot. Incluye gestión de transacciones, reporting y análisis de datos.',
    technologies: ['Java', 'Spring Boot', 'MongoDB', 'REST API', 'JWT'],
    github: 'https://github.com/AgustinAused/Finance-Api',
    gradient: 'from-green-600 to-teal-600',
  },
  {
    title: 'Finance Dashboard',
    description: 'Dashboard interactivo para visualización de datos financieros en tiempo real con gráficos avanzados y análisis predictivo.',
    technologies: ['React', 'Next.js', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/AgustinAused/finance-dashboard',
    gradient: 'from-orange-600 to-red-600',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 ml-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Proyectos <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Destacados</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 min-h-[80px]">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    <FaGithub size={20} />
                    <span>Ver código</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
