'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBriefcase, FaCode, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'projects', icon: FaLaptopCode, label: 'Proyectos' },
    { id: 'experience', icon: FaBriefcase, label: 'Experiencia' },
    { id: 'skills', icon: FaCode, label: 'Habilidades' },
    { id: 'contact', icon: FaEnvelope, label: 'Contacto' },
  ];

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-20 bg-slate-900/80 backdrop-blur-md z-50 flex flex-col items-center justify-center gap-6"
    >
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`relative group p-4 rounded-full transition-all duration-300 ${
            activeSection === item.id
              ? 'bg-purple-600 text-white'
              : 'text-gray-400 hover:bg-purple-600/20 hover:text-purple-400'
          }`}
          title={item.label}
        >
          <item.icon size={24} />
          <span className="absolute left-20 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {item.label}
          </span>
        </a>
      ))}
    </motion.nav>
  );
};

export default Navbar;
