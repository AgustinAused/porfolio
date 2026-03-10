"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionBackground from "./SectionBackground";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 py-24 section-navbar-offset"
    >
      <SectionBackground variant="purple" intensity="medium" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Sobre{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Mí
            </span>
          </h2>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Trabajo como{" "}
              <strong className="text-purple-400">especialista CICS N2</strong>{" "}
              en un banco en Argentina. Transacciones críticas, alta disponibilidad, cero margen
              de error. Ese contexto me dio algo que no enseñan en ningún bootcamp: criterio para
              sistemas que no pueden fallar.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Fuera del banco, co-fundé{" "}
              <a
                href="https://beescend.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-200 transition-colors underline underline-offset-4 decoration-purple-500/40"
              >
                Beescend
              </a>{" "}
              y estoy construyendo{" "}
              <strong className="text-purple-400">FixBee</strong> — un SaaS para talleres de
              reparación de electrónica en LATAM. También tengo{" "}
              <a
                href="https://propuesta.lat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-200 transition-colors underline underline-offset-4 decoration-purple-500/40"
              >
                propuesta.lat
              </a>
              , una micro SaaS para generar propuestas comerciales personalizadas.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Me interesa construir productos que resuelvan problemas reales en mercados que el
              mundo tech suele ignorar. LATAM tiene millones de negocios chicos que siguen
              operando con papel y WhatsApp.{" "}
              <strong className="text-purple-400">Eso no es un problema, es una oportunidad.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;