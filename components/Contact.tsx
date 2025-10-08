"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SectionBackground from "./SectionBackground";

const contactLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/AgustinAused",
    color: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/agustinaused",
    color: "hover:text-blue-500",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:agus.aused@gmail.com",
    color: "hover:text-purple-500",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 py-24 section-navbar-offset"
    >
      <SectionBackground variant="pink" intensity="high" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Hablemos de tu{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Proyecto
            </span>
          </h2>

          <p className="text-lg text-center md:text-xl text-gray-300 mb-16 text-center mx-auto ">
            ¿Tienes una idea innovadora? Estoy disponible para colaborar en
            proyectos emprendedores y soluciones tecnológicas que marquen la
            diferencia.
          </p>

          {/* Contact Links */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-20">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-gray-300 transition-all duration-300 ${link.color} hover:scale-110`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <link.icon size={24} />
                <span className="font-semibold">{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Why work with me */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-10 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
              ¿Por qué trabajar conmigo?
            </h3>
            <div className="grid md:grid-cols-3 gap-10 md:gap-12">
              <div className="text-center">
                <div className="text-purple-400 text-5xl mb-4">💡</div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Innovación
                </h4>
                <p className="text-gray-400 leading-relaxed text-base">
                  Soluciones creativas con tecnologías modernas
                </p>
              </div>
              <div className="text-center">
                <div className="text-purple-400 text-5xl mb-4">🚀</div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Escalabilidad
                </h4>
                <p className="text-gray-400 leading-relaxed text-base">
                  Arquitecturas robustas preparadas para crecer
                </p>
              </div>
              <div className="text-center">
                <div className="text-purple-400 text-5xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Eficiencia
                </h4>
                <p className="text-gray-400 leading-relaxed text-base">
                  Código limpio y optimizado
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}