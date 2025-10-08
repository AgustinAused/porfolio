'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="relative">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
      <footer className="relative bg-black/50 backdrop-blur-sm border-t border-white/5 text-center py-8 text-gray-400 section-navbar-offset">
        <p className="text-sm">&copy; 2025 Agustín Aused - Todos los derechos reservados</p>
      </footer>
    </main>
  );
}

