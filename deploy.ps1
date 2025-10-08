# Script de Despliegue Automático para GitHub Pages
# Uso: .\deploy.ps1 "mensaje del commit"

param(
    [string]$CommitMessage = "Update portfolio"
)

Write-Host "🚀 Iniciando proceso de despliegue..." -ForegroundColor Cyan

# Navegar al directorio del proyecto
Set-Location "C:\Codigo\GitHub\Porfolio\portfolio-react"

# Verificar que estamos en el directorio correcto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: No se encontró package.json" -ForegroundColor Red
    exit 1
}

Write-Host "📦 Instalando dependencias..." -ForegroundColor Yellow
npm install

Write-Host "🔨 Building proyecto..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error en el build. Verifica los errores arriba." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completado exitosamente!" -ForegroundColor Green

# Navegar al directorio raíz del repositorio
Set-Location "C:\Codigo\GitHub\Porfolio"

Write-Host "📝 Preparando commit..." -ForegroundColor Yellow

# Agregar todos los cambios
git add .

# Verificar si hay cambios
$status = git status --short
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "ℹ️ No hay cambios para commitear" -ForegroundColor Yellow
    exit 0
}

# Commit
git commit -m "$CommitMessage"

Write-Host "🌐 Subiendo a GitHub..." -ForegroundColor Yellow

# Push
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ ¡Despliegue iniciado exitosamente!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📊 Verifica el progreso en:" -ForegroundColor Cyan
    Write-Host "   https://github.com/AgustinAused/Porfolio/actions" -ForegroundColor White
    Write-Host ""
    Write-Host "🌐 Tu sitio estará disponible en:" -ForegroundColor Cyan
    Write-Host "   https://agusaused.com" -ForegroundColor White
    Write-Host "   https://agustinaused.github.io/Porfolio/" -ForegroundColor White
    Write-Host ""
    Write-Host "⏱️ El despliegue tomará aproximadamente 2-3 minutos" -ForegroundColor Yellow
} else {
    Write-Host "❌ Error al subir a GitHub" -ForegroundColor Red
    exit 1
}
