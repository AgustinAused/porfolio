"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Github, ExternalLink, Star, Code2, Database, Zap, Users, Globe, Layers } from "lucide-react";
import SectionBackground from "./SectionBackground";

const projects = [
  {
    title: "propuesta.lat",
    description:
      "Micro SaaS para generar propuestas comerciales personalizadas. Pensado para freelancers y agencias en LATAM que necesitan cerrar clientes más rápido.",
    technologies: ["Next.js", "PostgreSQL", "AI"],
    live: "https://propuesta.lat",
    github: null,
    status: "progress",
    gradient: "from-emerald-500 to-teal-500",
    stats: [
      { icon: Users, label: "Para", value: "Freelancers" },
      { icon: Globe, label: "Región", value: "LATAM" },
      { icon: Zap, label: "Estado", value: "Building" },
    ],
  },
  {
    title: "LearnHub",
    description:
      "Marketplace educativo con arquitectura de microservicios. Gestión de cursos, autenticación JWT, pasarela de pagos y sistema de reviews. Proyecto técnico open source.",
    technologies: ["React", "Node.js", "MongoDB", "Microservicios", "JWT"],
    github: "https://github.com/AgustinAused/LearnHub",
    live: null,
    status: "completed",
    gradient: "from-purple-600 to-blue-600",
    stats: [
      { icon: Code2, label: "Módulos", value: "7" },
      { icon: Database, label: "Tests", value: "+120" },
      { icon: Star, label: "Arqui.", value: "Micro" },
    ],
    image: "/img/LearnHub-min.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
  },
};

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  const statusConfig = {
    live: {
      label: "En Vivo",
      color: "bg-green-500/20 text-green-300 border-green-500/30",
    },
    completed: {
      label: "Open Source",
      color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    },
    progress: {
      label: "Building",
      color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    },
  } as const;

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 section-navbar-offset"
    >
      <SectionBackground variant="pink" intensity="medium" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              construyo
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Productos reales para mercados reales. LATAM tiene millones de negocios que todavía
            operan con papel y WhatsApp.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              className="group relative h-full"
            >
              <div className="relative h-full rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-900/20 hover:-translate-y-2">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Image / Gradient Header */}
                <div className="relative h-48 bg-slate-800/50 overflow-hidden">
                  {(project as any).image ? (
                    <Image
                      src={(project as any).image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center`}
                    >
                      <Code2 className="w-16 h-16 text-white/40" />
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-md text-xs font-medium ${
                        statusConfig[project.status as keyof typeof statusConfig].color
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {statusConfig[project.status as keyof typeof statusConfig].label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 flex flex-col h-[calc(100%-12rem)]">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 mt-1">
                    {project.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center justify-center text-center p-3 md:p-4 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors duration-300 min-h-[72px] md:min-h-[84px]"
                      >
                        <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-purple-300 mb-1.5" />
                        <span className="text-[10px] md:text-[11px] text-gray-500 mb-0.5">
                          {stat.label}
                        </span>
                        <span className="text-xs md:text-sm font-bold text-white">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2.5 mb-8 px-1 pt-2 pb-1">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-3 py-1.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-medium px-3 py-1.5 rounded-md bg-white/5 text-gray-400 border border-white/10">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group/btn relative overflow-hidden rounded-xl px-4 py-2.5 bg-white/5 border border-white/10 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white hover:scale-105"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <Github className="w-4 h-4" />
                          Código
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group/btn relative overflow-hidden rounded-xl px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Ver producto
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">¿Querés ver más código?</p>
          <a
            href="https://github.com/AgustinAused"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-purple-500/50 hover:scale-105 hover:shadow-xl hover:shadow-purple-900/20"
          >
            <Github className="w-5 h-5" />
            Ver GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}