'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionBackground from './SectionBackground';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref} className="relative min-h-screen flex items-center justify-center px-6 py-24 section-navbar-offset">
      <SectionBackground variant="purple" intensity="medium" />
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Sobre <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Mí</span>
          </h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Soy un <strong className="text-purple-400">desarrollador Full Stack</strong> apasionado por la tecnología y la innovación. 
              Con más de 2 años de experiencia en el sector financiero, he trabajado en sistemas mainframe de alta criticidad 
              y he desarrollado aplicaciones web modernas.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Mi experiencia incluye el desarrollo de <strong className="text-purple-400">microservicios con Java y Spring Boot</strong>, 
              aplicaciones frontend con <strong className="text-purple-400">React y Next.js</strong>, y especialización en 
              <strong className="text-purple-400"> sistemas mainframe CICS</strong>, donde gestiono transacciones críticas 
              y optimizo procesos empresariales.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Mi objetivo es combinar lo mejor de ambos mundos: <strong className="text-purple-400">la solidez de los sistemas legacy 
              con la agilidad de las tecnologías modernas</strong>, creando soluciones innovadoras que impulsen el crecimiento empresarial.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
