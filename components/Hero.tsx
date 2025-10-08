'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 ml-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Agustín Aused
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Software Engineer & Mainframe Specialist
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Desarrollador Full Stack con experiencia en Java, React y sistemas mainframe.
            Especialista en CICS, transformando sistemas legacy en soluciones modernas y escalables.
          </motion.p>

          <motion.div
            className="flex gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a
              href="https://github.com/AgustinAused"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/agustinaused"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="mailto:agus.aused@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <FaEnvelope size={32} />
            </a>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300"
            >
              Ver mi trabajo
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
