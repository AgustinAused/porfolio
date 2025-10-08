# 🚀 Guía de Despliegue en GitHub Pages

## 📋 Configuración Completada

✅ **Next.js configurado para exportación estática**
- `next.config.js` con `output: 'export'`
- Imágenes sin optimización (requerido para GitHub Pages)
- `.nojekyll` agregado para evitar procesamiento Jekyll

✅ **GitHub Actions Workflow creado**
- Deploy automático en cada push a `main`
- Build y despliegue automatizado
- Ubicación: `.github/workflows/deploy.yml`

✅ **Proyecto en la raíz del repositorio**
- Estructura simplificada sin subdirectorios
- Workflow configurado para build desde raíz

## 🔧 Pasos para Desplegar

### 1️⃣ Configurar GitHub Pages en tu Repositorio

1. Ve a tu repositorio en GitHub: `https://github.com/AgustinAused/Porfolio`
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - **Source**: GitHub Actions
5. Guarda los cambios

### 2️⃣ Hacer Push al Repositorio

# Y cambiar todos los:
cd portfolio-react
# Por:
cd .
# o eliminar la línea cd
```

### 4️⃣ Push a GitHub

```powershell
# Navegar al directorio del repositorio
cd C:\Codigo\GitHub\Porfolio

# Verificar archivos
git status

# Agregar todos los cambios
git add .

**Opción A: Script Automatizado** (Recomendado)
```powershell
.\deploy.ps1 "feat: Configure GitHub Pages deployment with Next.js"
```

**Opción B: Manual**
```bash
# Agregar cambios
git add .

# Commit
git commit -m "feat: Configure GitHub Pages deployment with Next.js"

# Push a main
git push origin main
```

### 3️⃣ Verificar el Despliegue

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow "Deploy Next.js to GitHub Pages" ejecutándose
3. Espera a que termine (toma ~2-3 minutos)
4. Una vez completado, tu sitio estará en:
   - `https://agusaused.com` (dominio personalizado)
   - O `https://agustinaused.github.io/Porfolio/` (GitHub Pages)

## 🌐 Dominio Personalizado Configurado

✅ **Archivo CNAME en `public/CNAME`**
- Contenido: `agusaused.com`
- Se copia automáticamente al build

✅ **Configurar en GitHub**
1. Ve a Settings > Pages
2. En "Custom domain" ingresa: `agusaused.com`
3. Habilita "Enforce HTTPS"
4. Configura el DNS en tu proveedor:
   - Tipo: CNAME
   - Host: @ o www
   - Value: `agustinaused.github.io`

## 🔍 Solución de Problemas

### Error: "Page build failed"
- Verifica que `next.config.js` tenga `output: 'export'`
- Asegúrate de que no haya errores de compilación localmente con `npm run build`

### Las imágenes no cargan
- Verifica que las rutas sean relativas
- Usa `/img/nombre.png` en lugar de rutas absolutas

### 404 en rutas
- GitHub Pages solo funciona con exportación estática
- No uses `getServerSideProps` o `API Routes`

### El CSS no se aplica
- Limpia caché del navegador (Ctrl + Shift + R)
- Verifica que el archivo `.nojekyll` esté en `public/`

## 📦 Build Local para Probar

Antes de hacer push, prueba localmente:

```powershell
# En el directorio del proyecto
cd C:\Codigo\GitHub\Porfolio\portfolio-react

# Build
npm run build

# Verificar que se creó el directorio 'out'
ls out

# Servidor local simple para probar (opcional)
npx serve out
```

## 🎯 Estructura Final Esperada

```
Porfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # ✅ Creado
├── portfolio-react/
│   ├── app/
│   ├── components/
│   ├── public/
│   │   ├── .nojekyll           # ✅ Creado
│   │   └── CNAME               # ⚠️ Copiar si tienes dominio
│   ├── next.config.js          # ✅ Configurado
│   └── package.json            # ✅ Actualizado
└── CNAME                       # Tu dominio actual
```

## ✨ Comandos Rápidos

### Desplegar cambios
```powershell
git add .
git commit -m "update: descripción de cambios"
git push origin main
```

### Ver logs del despliegue
- Ve a: `https://github.com/AgustinAused/Porfolio/actions`

### Forzar re-deploy
```powershell
git commit --allow-empty -m "chore: trigger deployment"
git push origin main
```

## 🔗 URLs Importantes

- **Repositorio**: https://github.com/AgustinAused/Porfolio
- **GitHub Pages URL**: https://agustinaused.github.io/Porfolio/
- **Dominio Personalizado**: agusaused.com (si está configurado)
- **Actions**: https://github.com/AgustinAused/Porfolio/actions

## 📝 Notas Importantes

1. ⏱️ El primer despliegue puede tardar 5-10 minutos
2. 🔄 Los cambios posteriores se despliegan en ~2-3 minutos
3. 🌐 GitHub Pages puede tardar unos minutos en propagar cambios DNS
4. 📱 Siempre prueba en múltiples dispositivos después del deploy

---

## 🎉 ¡Listo!

Una vez que hagas push a GitHub, tu portafolio se desplegará automáticamente. 

**Próximo paso**: Haz `git push origin main` y espera unos minutos. ✨
