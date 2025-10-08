# 🚀 Portfolio Agustín Aused

[![Deploy](https://github.com/AgustinAused/Porfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/AgustinAused/Porfolio/actions/workflows/deploy.yml)

> Portafolio profesional moderno con enfoque emprendedor | Next.js + React + TypeScript

🌐 **Ver sitio**: [agusaused.com](https://agusaused.com)

## 🎯 Características

- ⚡ **Next.js 15** con App Router y exportación estática
- 🎨 **Diseño moderno** con gradientes purple/pink
- 🌟 **Efectos visuales** con partículas animadas
- 🎭 **Animaciones fluidas** con Framer Motion
- 📱 **100% Responsive** para todos los dispositivos
- 🚀 **Deploy automático** con GitHub Actions
- 🔍 **SEO optimizado** con metadatos completos

## 📋 Secciones

- **Hero**: Presentación como Software Engineer & Mainframe Specialist
- **About**: Enfoque emprendedor y experiencia
- **Experience**: Timeline con especialización en **CICS**
- **Projects**: LearnHub, Finance API, Finance Dashboard
- **Skills**: Frontend, Backend, Databases, Mainframe & Tools
- **Contact**: Propuesta de valor y enlaces

## 🛠️ Stack Tecnológico

```
Frontend:  Next.js 15, React 19, TypeScript
Estilos:   Tailwind CSS
Animaciones: Framer Motion
Icons:     React Icons
Deploy:    GitHub Pages + GitHub Actions
```

## � Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000

# Build para producción
npm run build
```

## 🚀 Despliegue

### 1️⃣ Configurar GitHub Pages (solo primera vez)
1. Ve a [Settings > Pages](https://github.com/AgustinAused/Porfolio/settings/pages)
2. En **Source** selecciona: **GitHub Actions**
3. Guarda los cambios

### 2️⃣ Desplegar

**Opción A: Script Automatizado** (Recomendado)
```powershell
.\deploy.ps1 "Descripción de cambios"
```

**Opción B: Manual**
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### 3️⃣ Verificar
- **Actions**: https://github.com/AgustinAused/Porfolio/actions
- **Sitio**: https://agusaused.com (disponible en 2-3 minutos)

## 📁 Estructura del Proyecto

```
Porfolio/
├── .github/workflows/    # CI/CD automático
│   └── deploy.yml
├── app/                  # Pages y layouts
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/           # Componentes React
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── ParticleBackground.tsx
├── public/              # Assets estáticos
│   ├── CNAME
│   └── .nojekyll
├── next.config.js       # Configuración Next.js
├── package.json
└── README.md
```

## 💡 Comandos Útiles

```bash
# Desarrollo
npm run dev              # Servidor local
npm run build            # Build producción
npm start                # Servidor producción

# Git
git status               # Ver cambios
git add .                # Agregar archivos
git commit -m "msg"      # Commit
git push origin main     # Deploy automático

# Limpieza
npm cache clean --force  # Limpiar caché
rm -rf .next out         # Limpiar builds
```

## 🌐 URLs

- **Sitio Web**: https://agusaused.com
- **Repositorio**: https://github.com/AgustinAused/Porfolio
- **Actions**: https://github.com/AgustinAused/Porfolio/actions

## 📧 Contacto

- **Email**: agus.aused@gmail.com
- **LinkedIn**: [agustinaused](https://www.linkedin.com/in/agustinaused)
- **GitHub**: [AgustinAused](https://github.com/AgustinAused)

## 📄 Documentación

- 📖 [DEPLOY-GUIDE.md](./DEPLOY-GUIDE.md) - Guía completa de despliegue
- 📖 [PROYECTO-RESUMEN.md](./PROYECTO-RESUMEN.md) - Resumen del proyecto

---

Desarrollado con ❤️ por **Agustín Aused**  
Software Engineer & Mainframe Specialist

