// ===========================================
// Efecto de Telaraña Elástica con Canvas
// ===========================================
const canvas = document.getElementById('webCanvas');
const ctx = canvas.getContext('2d');

// Configuración de la telaraña
const anchors = 6; // Número de puntos de anclaje
const points = [];
let mousePos = { x: 0, y: 0 };

// Inicializar canvas
function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Crear puntos de anclaje alrededor de los bordes
    for (let i = 0; i < anchors; i++) {
        const angle = (i / anchors) * Math.PI * 2;
        const x = canvas.width * 0.5 + Math.cos(angle) * canvas.width * 0.4;
        const y = canvas.height * 0.5 + Math.sin(angle) * canvas.height * 0.4;
        points.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 });
    }
}

// Actualizar posición de los puntos
function updatePoints() {
    const stiffness = 0.3;
    const damping = 0.8;
    
    points.forEach(point => {
        const dx = mousePos.x - point.x;
        const dy = mousePos.y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Fuerza elástica
        if (dist > 50) {
            point.vx += (dx * 0.001) * stiffness;
            point.vy += (dy * 0.001) * stiffness;
        }
        
        // Fuerza de retorno al origen
        point.vx += (point.ox - point.x) * 0.001;
        point.vy += (point.oy - point.y) * 0.001;
        
        // Aplicar movimiento
        point.vx *= damping;
        point.vy *= damping;
        point.x += point.vx;
        point.y += point.vy;
    });
}

// Dibujar líneas
function drawWeb() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    
    // Líneas desde el cursor a los puntos
    points.forEach(point => {
        ctx.moveTo(mousePos.x, mousePos.y);
        ctx.lineTo(point.x, point.y);
    });
    
    // Estilo de las líneas
    ctx.strokeStyle = 'rgba(30, 60, 114, 0.3)'; // Azul marino transparente
    ctx.lineWidth = 1;
    ctx.stroke();
}

// Bucle de animación
function animate() {
    updatePoints();
    drawWeb();
    requestAnimationFrame(animate);
}

// Eventos
window.addEventListener('mousemove', (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
});

window.addEventListener('resize', () => {
    initCanvas();
});

// ===========================================
// Inicialización
// ===========================================
initCanvas();
animate();

// ===========================================
// (Aquí iría el resto de tu código de particles.js y cursor-effect)
// ===========================================
document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80, // Número de partículas
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#1e3c72' // Azul marino para las partículas
            },
            shape: {
                type: 'circle', // Forma de las partículas
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#1e3c72', // Azul marino para las líneas
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'bounce',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    const cursor = document.querySelector('.cursor-effect');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
        if (e.target.tagName === 'H1' || e.target.tagName === 'P') {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.backgroundColor = 'rgba(30, 60, 114, 0.5)'; // Azul marino con transparencia
        } else {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.backgroundColor = 'rgba(30, 60, 114, 0.7)'; // Azul marino con transparencia
        }
    });
});