"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import SectionBackground from "./SectionBackground";

const container = {
  hidden: { opacity: 0 },
  show: (prefersReducedMotion: boolean) => ({
    opacity: 1,
    transition: prefersReducedMotion
      ? { duration: 0.3 }
      : { duration: 0.6, staggerChildren: 0.12 },
  }),
};

const itemUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] as any
    } 
  },
};

const itemPop = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] as any
    } 
  },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-32 text-center section-navbar-offset">
      <SectionBackground variant="default" intensity="medium" />
      
      <motion.div
        className="max-w-6xl mx-auto w-full"
        variants={container}
        initial="hidden"
        animate="show"
        custom={!!prefersReducedMotion}
      >
        {/* Badge superior */}
        <motion.div 
          variants={itemUp} 
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2.5 text-sm font-medium text-purple-300 backdrop-blur-sm shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
            </span>
            Disponible para nuevos proyectos
          </span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          variants={itemPop}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-12 pb-2 text-transparent"
        >
          <span className="block bg-gradient-to-r from-purple-300 via-pink-400 to-purple-600 bg-clip-text text-transparent leading-[1.2]">
            Agustín Aused
          </span>
        </motion.h1>

        {/* Subtítulo con mejor espaciado */}
        <motion.div
          variants={itemUp}
          className="mb-8 space-y-4"
        >
          <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Tecnología. Estrategia. Transformación.
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Donde otros ven sistemas antiguos, yo veo el futuro escribiéndose línea por línea.
          </p>
        </motion.div>

        {/* Role badge */}
        <motion.div variants={itemUp} className="mb-14">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
            <span className="text-sm md:text-base text-gray-300 font-medium">Software Engineer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            <span className="text-sm md:text-base text-gray-300 font-medium">Mainframe Specialist</span>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
            <span className="text-sm md:text-base text-gray-300 font-medium">Visionario Digital</span>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.nav
          variants={itemUp}
          className="flex gap-6 justify-center items-center mb-16"
          aria-label="Enlaces de contacto"
        >
          {[
            {
              href: "https://github.com/AgustinAused",
              label: "GitHub de Agustín Aused",
              icon: <FaGithub size={24} />,
            },
            {
              href: "https://www.linkedin.com/in/agustinaused",
              label: "LinkedIn de Agustín Aused",
              icon: <FaLinkedin size={24} />,
            },
            {
              href: "mailto:agus.aused@gmail.com",
              label: "Enviar correo a Agustín Aused",
              icon: <FaEnvelope size={24} />,
            },
          ].map((btn, i) => (
            <motion.a
              key={i}
              href={btn.href}
              target={btn.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={btn.label}
              className="group relative flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-4 text-gray-300 transition-all duration-300 hover:text-white hover:border-purple-400/50 hover:bg-purple-900/20 focus-visible:ring-2 focus-visible:ring-purple-400/60"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
              <span className="relative">{btn.icon}</span>
            </motion.a>
          ))}
        </motion.nav>

        {/* CTAs */}
        <motion.div variants={itemUp} className="flex flex-col sm:flex-row justify-center gap-5 mb-16">
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center justify-center rounded-2xl px-10 py-4 font-bold text-white text-base md:text-lg bg-gradient-to-r from-purple-600 to-pink-600 shadow-2xl shadow-purple-900/40 overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-3">
              Ver mi trabajo
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className="group relative inline-flex items-center justify-center rounded-2xl px-10 py-4 font-bold text-base md:text-lg text-gray-200 border-2 border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-900/20 hover:text-white"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-3">
              <FaEnvelope className="w-5 h-5" />
              Hablemos
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemUp}
          className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          <span className="text-sm text-gray-400 font-medium tracking-wide">Descubre más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaArrowDown className="text-purple-400 text-xl" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
