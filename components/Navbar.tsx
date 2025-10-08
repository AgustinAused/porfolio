"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaLaptopCode, FaBriefcase, FaCode, FaEnvelope, FaHome, FaUser } from "react-icons/fa";

// Utilidad mínima para clases (sin dependencias)
function cx(...parts: Array<unknown>): string {
  return parts
    .flat()
    .filter(Boolean)
    .map((p) => (typeof p === "string" ? p.trim() : ""))
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ");
}

const NAV_ITEMS = [
  { id: "hero", icon: FaHome, label: "Inicio" },
  { id: "about", icon: FaUser, label: "Sobre Mí" },
  { id: "projects", icon: FaLaptopCode, label: "Proyectos" },
  { id: "experience", icon: FaBriefcase, label: "Experiencia" },
  { id: "skills", icon: FaCode, label: "Habilidades" },
  { id: "contact", icon: FaEnvelope, label: "Contacto" },
] as const;

type NavId = (typeof NAV_ITEMS)[number]["id"];

export default function NavbarPro() {
  const [active, setActive] = useState<NavId>("hero");
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll spy con IntersectionObserver — eficiente y suave
  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      Boolean
    ) as HTMLElement[];
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // Encuentra la sección más visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        
        if (visible?.target?.id) {
          const id = visible.target.id as NavId;
          setActive(id);
        }
      },
      { 
        rootMargin: "-10% 0px -70% 0px", 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] 
      }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Navegación con teclas (↑ ↓)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const idx = NAV_ITEMS.findIndex((n) => n.id === active);
      if (e.key === "ArrowDown") {
        const next = NAV_ITEMS[(idx + 1) % NAV_ITEMS.length].id;
        setActive(next);
        document.getElementById(next)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (e.key === "ArrowUp") {
        const prev = NAV_ITEMS[(idx - 1 + NAV_ITEMS.length) % NAV_ITEMS.length].id;
        setActive(prev);
        document.getElementById(prev)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active]);

  const railBg = useMemo(
    () => (
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        {/* Glass morphism background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-950/90 to-slate-900/95 backdrop-blur-xl" />
        
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/20 via-transparent to-pink-500/20 opacity-50" />
        
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* Subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 blur-xl" />
      </div>
    ),
    []
  );

  const handleClick = (id: NavId) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -32; // Offset para no tapar contenido (2rem)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      ref={containerRef}
      initial={prefersReducedMotion ? { opacity: 0 } : { x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-0 z-50 h-screen w-24 md:w-[90px] hidden md:flex flex-col items-center justify-center"
      aria-label="Navegación principal"
    >
      {/* Rail Desktop - Minimalista Moderno */}
      <div className="relative w-20 md:w-[78px] rounded-3xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden">
        {railBg}

        {/* Nav Items Container */}
        <div className="relative flex flex-col items-center py-8 px-2 gap-2">
          {NAV_ITEMS.map((item, index) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleClick(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className={cx(
                  "group relative flex flex-col items-center justify-center w-full py-3 px-2 rounded-2xl",
                  "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60",
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-purple-300"
                )}
                aria-current={isActive ? "page" : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background glow activo */}
                {isActive && (
                  <motion.div
                    layoutId="nav-active-glow"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-600/20 via-purple-500/10 to-pink-600/20 blur-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Pill activo con border gradient */}
                {isActive && (
                  <motion.div
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-2xl bg-white/5 ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Hover gradient sutil */}
                <span
                  aria-hidden
                  className={cx(
                    "absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/0 to-pink-600/0 opacity-0",
                    "transition-opacity duration-300 group-hover:from-purple-600/10 group-hover:to-pink-600/10 group-hover:opacity-100"
                  )}
                />

                {/* Icono */}
                <motion.div
                  className="relative z-10 mb-1"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon size={22} />
                </motion.div>

                {/* Label siempre visible */}
                <span className={cx(
                  "relative z-10 text-[10px] font-medium tracking-wide transition-all duration-300",
                  isActive ? "text-white" : "text-gray-500 group-hover:text-purple-300"
                )}>
                  {item.label}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Mobile Dock - iOS/macOS Style */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="relative flex items-end gap-1 px-4 py-3 rounded-3xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-black/40">
          {/* Glass background */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-slate-800/50 to-slate-950/80 -z-10" />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/5 to-pink-600/5 -z-10" />
          
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleClick(item.id)}
                className={cx(
                  "relative flex flex-col items-center justify-center px-3 py-2 rounded-2xl",
                  "transition-all duration-300",
                  isActive ? "text-white" : "text-gray-400"
                )}
                aria-current={isActive ? "page" : undefined}
                whileHover={{ scale: 1.15, y: -8 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {/* Active background */}
                {isActive && (
                  <motion.div
                    layoutId="nav-mobile-active"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-600/30 to-pink-600/20 ring-1 ring-purple-400/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Active glow */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/20 to-pink-500/20 blur-md"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}

                <Icon size={20} className="relative z-10 mb-0.5" />
                <span className="relative z-10 text-[9px] font-medium">
                  {item.label.split(" ")[0]}
                </span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
}
