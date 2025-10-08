'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/AgustinAused',
      color: 'hover:text-gray-400',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/agustinaused',
      color: 'hover:text-blue-500',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:agus.aused@gmail.com',
      color: 'hover:text-purple-500',
    },
  ];

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 ml-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Hablemos de tu <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Proyecto</span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          ¿Tienes una idea innovadora? Estoy disponible para colaborar en proyectos emprendedores 
          y soluciones tecnológicas que marquen la diferencia.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-gray-300 transition-all duration-300 ${link.color} hover:scale-110`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon size={24} />
              <span className="font-semibold">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">¿Por qué trabajar conmigo?</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <div className="text-purple-400 text-3xl mb-2">💡</div>
              <h4 className="text-lg font-semibold text-white mb-2">Innovación</h4>
              <p className="text-gray-400">Soluciones creativas con tecnologías modernas</p>
            </div>
            <div>
              <div className="text-purple-400 text-3xl mb-2">🚀</div>
              <h4 className="text-lg font-semibold text-white mb-2">Escalabilidad</h4>
              <p className="text-gray-400">Arquitecturas robustas preparadas para crecer</p>
            </div>
            <div>
              <div className="text-purple-400 text-3xl mb-2">⚡</div>
              <h4 className="text-lg font-semibold text-white mb-2">Eficiencia</h4>
              <p className="text-gray-400">Código limpio y optimizado</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
