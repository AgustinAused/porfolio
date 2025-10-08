'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ParticleBackground />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <footer className="relative z-10 text-center py-8 text-gray-400">
        <p>&copy; 2025 Agustín Aused - Todos los derechos reservados</p>
      </footer>
    </main>
  );
}

