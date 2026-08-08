// ============================================================
// DATOS DE LAS HERRAMIENTAS (25 repositorios)
// ============================================================
const defaultTools = [
  // ========== HERRAMIENTAS DE RECONOCIMIENTO ==========
  {
    id: 'amass',
    title: 'OWASP Amass',
    author: 'owasp-amass',
    icon: 'fa-solid fa-sitemap',
    tags: ['Go', 'Recon', 'OSINT', 'Subdominios'],
    description: 'Herramienta de mapeo de activos y descubrimiento de subdominios. Realiza búsquedas en múltiples fuentes (crt.sh, DNS, etc.) para crear un perfil completo de un objetivo.',
    repo: 'owasp-amass/amass',
    url: 'https://github.com/owasp-amass/amass',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'nmap',
    title: 'Nmap',
    author: 'nmap',
    icon: 'fa-solid fa-network-wired',
    tags: ['C', 'Escáner', 'Redes', 'Puertos'],
    description: 'El escáner de puertos y redes más famoso. Descubre hosts, servicios, sistemas operativos y vulnerabilidades en redes. Incluye NSE para automatización.',
    repo: 'nmap/nmap',
    url: 'https://github.com/nmap/nmap',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'masscan',
    title: 'Masscan',
    author: 'robertdavidgraham',
    icon: 'fa-solid fa-rocket',
    tags: ['C', 'Escáner', 'Rápido', 'Redes'],
    description: 'Escáner de puertos masivo que puede escanear todo Internet en menos de 6 minutos. Complemento perfecto para Nmap cuando necesitas velocidad extrema.',
    repo: 'robertdavidgraham/masscan',
    url: 'https://github.com/robertdavidgraham/masscan',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'theharvester',
    title: 'theHarvester',
    author: 'laramies',
    icon: 'fa-solid fa-magnifying-glass',
    tags: ['Python', 'OSINT', 'Emails', 'Dominios'],
    description: 'Herramienta de OSINT para recolectar emails, nombres de usuario y subdominios de diferentes fuentes públicas como Google, Bing, LinkedIn, etc.',
    repo: 'laramies/theHarvester',
    url: 'https://github.com/laramies/theHarvester',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'gobuster',
    title: 'Gobuster',
    author: 'OJ',
    icon: 'fa-solid fa-bolt',
    tags: ['Go', 'Web', 'Fuzzing', 'Rápido'],
    description: 'Escáner de directorios y archivos en servidores web. Escrito en Go, es extremadamente rápido y soporta múltiples modos (dir, dns, vhost).',
    repo: 'OJ/gobuster',
    url: 'https://github.com/OJ/gobuster',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'ffuf',
    title: 'ffuf',
    author: 'ffuf',
    icon: 'fa-solid fa-forward-fast',
    tags: ['Go', 'Fuzzing', 'Web', 'Rápido'],
    description: 'Herramienta de fuzzing web extremadamente rápida. Soporta múltiples modos, filtros y es ideal para descubrir parámetros, directorios y archivos ocultos.',
    repo: 'ffuf/ffuf',
    url: 'https://github.com/ffuf/ffuf',
    status: 'Activo',
    statusColor: '#4caf50'
  },

  // ========== HERRAMIENTAS DE EXPLOTACIÓN ==========
  {
    id: 'metasploit',
    title: 'Metasploit Framework',
    author: 'rapid7',
    icon: 'fa-solid fa-bug',
    tags: ['Ruby', 'Exploit', 'Pentesting', 'Framework'],
    description: 'El framework de pentesting más conocido del mundo. Incluye exploits, payloads, encoders, herramientas de post-explotación y una consola interactiva.',
    repo: 'rapid7/metasploit-framework',
    url: 'https://github.com/rapid7/metasploit-framework',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'sqlmap',
    title: 'SQLMap',
    author: 'sqlmapproject',
    icon: 'fa-solid fa-database',
    tags: ['Python', 'SQLi', 'Automático', 'Web'],
    description: 'Herramienta de detección y explotación automática de inyecciones SQL. Soporta múltiples bases de datos, técnicas de extracción y bypass de WAF.',
    repo: 'sqlmapproject/sqlmap',
    url: 'https://github.com/sqlmapproject/sqlmap',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'thefatrat',
    title: 'TheFatRat',
    author: 'Screetsec',
    icon: 'fa-solid fa-user-secret',
    tags: ['C', 'Payload', 'Evasor', 'Multiplataforma'],
    description: 'Herramienta masiva de explotación que automatiza la creación de backdoors y payloads FUD para Windows, Linux, Mac y Android. Se integra con Metasploit.',
    repo: 'Screetsec/TheFatRat',
    url: 'https://github.com/Screetsec/TheFatRat',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'hydra',
    title: 'THC-Hydra',
    author: 'vanhauser-thc',
    icon: 'fa-solid fa-key',
    tags: ['C', 'Ataque', 'Diccionario', 'Redes'],
    description: 'Herramienta clásica para ataques de fuerza bruta contra servicios de red (SSH, FTP, HTTP, MySQL, etc.). Esencial para pruebas de contraseñas débiles.',
    repo: 'vanhauser-thc/thc-hydra',
    url: 'https://github.com/vanhauser-thc/thc-hydra',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'legba',
    title: 'Legba',
    author: 'evilsocket',
    icon: 'fa-solid fa-mask',
    tags: ['Rust', 'Fuerza Bruta', 'Password Spray', 'Multi-protocolo'],
    description: 'Nuevo y potente brute-forcer y password sprayer que soporta múltiples protocolos (SSH, RDP, MySQL, etc.). Escrito en Rust para máximo rendimiento.',
    repo: 'evilsocket/legba',
    url: 'https://github.com/evilsocket/legba',
    status: 'Activo',
    statusColor: '#4caf50'
  },

  // ========== HERRAMIENTAS DE POST-EXPLOTACIÓN ==========
  {
    id: 'impacket',
    title: 'Impacket',
    author: 'fortra',
    icon: 'fa-solid fa-code',
    tags: ['Python', 'Windows', 'Protocolos', 'Post-explotación'],
    description: 'Colección de clases en Python para trabajar con protocolos de red. Incluye herramientas para ataques SMB, Kerberos, MSSQL, y más.',
    repo: 'fortra/impacket',
    url: 'https://github.com/fortra/impacket',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'responder',
    title: 'Responder',
    author: 'SpiderLabs',
    icon: 'fa-solid fa-ethernet',
    tags: ['Python', 'LLMNR', 'MITM', 'Windows'],
    description: 'Herramienta para envenenamiento de respuestas en redes locales (LLMNR, NBT-NS, MDNS). Captura hashes de autenticación en entornos Windows.',
    repo: 'SpiderLabs/Responder',
    url: 'https://github.com/SpiderLabs/Responder',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'mimikatz',
    title: 'Mimikatz',
    author: 'gentilkiwi',
    icon: 'fa-solid fa-fingerprint',
    tags: ['C', 'Windows', 'Credenciales', 'Post-explotación'],
    description: 'Herramienta para extraer contraseñas, hashes, tickets Kerberos y más de la memoria de sistemas Windows. Esencial para post-explotación en entornos Windows.',
    repo: 'gentilkiwi/mimikatz',
    url: 'https://github.com/gentilkiwi/mimikatz',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'bloodhound',
    title: 'BloodHound',
    author: 'BloodHoundAD',
    icon: 'fa-solid fa-route',
    tags: ['C#', 'Active Directory', 'Visualización', 'Ataques'],
    description: 'Herramienta para mapear y visualizar rutas de ataque en Active Directory. Utiliza análisis gráfico para encontrar vectores de ataque en entornos Windows.',
    repo: 'BloodHoundAD/BloodHound',
    url: 'https://github.com/BloodHoundAD/BloodHound',
    status: 'Activo',
    statusColor: '#4caf50'
  },

  // ========== HERRAMIENTAS DE REDES ==========
  {
    id: 'bettercap',
    title: 'bettercap',
    author: 'bettercap',
    icon: 'fa-solid fa-shield-halved',
    tags: ['Go', 'MITM', 'Redes', 'Framework'],
    description: 'Framework de ataque y monitoreo de redes. Permite sniffing, ARP spoofing, DNS spoofing, y ataques MITM avanzados con interfaz modular.',
    repo: 'bettercap/bettercap',
    url: 'https://github.com/bettercap/bettercap',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'airgeddon',
    title: 'airgeddon',
    author: 'v1s1t0r1sh3r3',
    icon: 'fa-solid fa-wifi',
    tags: ['Bash', 'WiFi', 'Auditoría', 'Pentesting'],
    description: 'Script multi-uso en Bash para auditar redes wireless en Linux. Incluye herramientas para WPA/WPA2, WPS, ataques de handshake, PMKID, y más.',
    repo: 'v1s1t0r1sh3r3/airgeddon',
    url: 'https://github.com/v1s1t0r1sh3r3/airgeddon',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'fluxion',
    title: 'Fluxion',
    author: 'FluxionNetwork',
    icon: 'fa-solid fa-wifi',
    tags: ['Bash', 'WiFi', 'Ingeniería Social', 'WPA'],
    description: 'Herramienta moderna para auditoría de seguridad Wi-Fi, especializada en ataques de ingeniería social para capturar handshakes WPA/WPA2.',
    repo: 'FluxionNetwork/fluxion',
    url: 'https://github.com/FluxionNetwork/fluxion',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'wireshark',
    title: 'Wireshark',
    author: 'wireshark',
    icon: 'fa-solid fa-satellite-dish',
    tags: ['C', 'Sniffer', 'Análisis', 'Tráfico'],
    description: 'El analizador de protocolos de red más completo. Permite capturar, filtrar y analizar tráfico en tiempo real con soporte para cientos de protocolos.',
    repo: 'wireshark/wireshark',
    url: 'https://github.com/wireshark/wireshark',
    status: 'Activo',
    statusColor: '#4caf50'
  },

  // ========== HERRAMIENTAS DE CRACKING ==========
  {
    id: 'hashcat',
    title: 'hashcat',
    author: 'hashcat',
    icon: 'fa-solid fa-key',
    tags: ['C', 'GPU', 'Cracking', 'Contraseñas'],
    description: 'Cracker de contraseñas más avanzado del mundo. Soporta más de 300 tipos de hash, utiliza GPU para aceleración y es el estándar en recuperación de contraseñas.',
    repo: 'hashcat/hashcat',
    url: 'https://github.com/hashcat/hashcat',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'john',
    title: 'John the Ripper',
    author: 'openwall',
    icon: 'fa-solid fa-lock',
    tags: ['C', 'Password', 'Cracking', 'Forensic'],
    description: 'Herramienta clásica de cracking de contraseñas. Soporta múltiples formatos de hash, ataques de diccionario, fuerza bruta y modo "jumbo" con funcionalidades extendidas.',
    repo: 'openwall/john',
    url: 'https://github.com/openwall/john',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'seclists',
    title: 'SecLists',
    author: 'danielmiessler',
    icon: 'fa-solid fa-list',
    tags: ['Security', 'Wordlists', 'Pentesting'],
    description: 'Colección de listas para pruebas de seguridad: usernames, passwords, URLs, patrones de datos sensibles, payloads de fuzzing, web shells y más.',
    repo: 'danielmiessler/SecLists',
    url: 'https://github.com/danielmiessler/SecLists',
    status: 'Activo',
    statusColor: '#4caf50'
  },

  // ========== HERRAMIENTAS DE WEB Y APLICACIONES ==========
  {
    id: 'zap',
    title: 'OWASP ZAP',
    author: 'zaproxy',
    icon: 'fa-solid fa-globe',
    tags: ['Java', 'Web', 'Proxy', 'Security'],
    description: 'Proxy de seguridad para aplicaciones web mantenido por OWASP. Permite interceptar, modificar y analizar tráfico HTTP/HTTPS, además de escaneo automático de vulnerabilidades.',
    repo: 'zaproxy/zaproxy',
    url: 'https://github.com/zaproxy/zaproxy',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'dirb',
    title: 'dirb',
    author: 'v0re',
    icon: 'fa-solid fa-folder-tree',
    tags: ['C', 'Web', 'Escáner', 'Directorios'],
    description: 'Escáner de directorios web. Realiza fuerza bruta sobre servidores web para descubrir directorios y archivos ocultos.',
    repo: 'v0re/dirb',
    url: 'https://github.com/v0re/dirb',
    status: 'Mantenido',
    statusColor: '#ff9800'
  },
  {
    id: 'nikto',
    title: 'Nikto',
    author: 'sullo',
    icon: 'fa-solid fa-shield',
    tags: ['Perl', 'Web', 'Escáner', 'Vulnerabilidades'],
    description: 'Escáner de vulnerabilidades para servidores web. Realiza pruebas contra más de 6700 archivos/CGIs peligrosos y busca versiones de software obsoletas.',
    repo: 'sullo/nikto',
    url: 'https://github.com/sullo/nikto',
    status: 'Mantenido',
    statusColor: '#ff9800'
  },

  // ========== HERRAMIENTAS DE IoT Y CÁMARAS ==========
  {
    id: 'cameradar',
    title: 'Cameradar',
    author: 'Ullaakut',
    icon: 'fa-solid fa-video',
    tags: ['Go', 'RTSP', 'IoT', 'Diccionario'],
    description: 'Herramienta para escanear y acceder a streams RTSP de cámaras de vigilancia. Realiza ataques de diccionario para descubrir rutas y credenciales.',
    repo: 'Ullaakut/cameradar',
    url: 'https://github.com/Ullaakut/cameradar',
    status: 'Activo',
    statusColor: '#4caf50'
  },
  {
    id: 'shodan-python',
    title: 'Shodan Python',
    author: 'achillean',
    icon: 'fa-solid fa-search',
    tags: ['Python', 'Shodan', 'OSINT', 'IoT'],
    description: 'Librería en Python para interactuar con la API de Shodan. Permite buscar dispositivos conectados a Internet, escanear puertos y obtener información de vulnerabilidades.',
    repo: 'achillean/shodan-python',
    url: 'https://github.com/achillean/shodan-python',
    status: 'Activo',
    statusColor: '#4caf50'
  },

  // ========== HERRAMIENTAS DE REPORTES ==========
  {
    id: 'pewrite',
    title: 'Pewrite',
    author: 'b4ldr',
    icon: 'fa-solid fa-file-pen',
    tags: ['Python', 'Reportes', 'Documentación', 'Pentesting'],
    description: 'Herramienta para generar reportes de pentesting a partir de archivos de texto. Facilita la creación de documentación profesional y estructurada.',
    repo: 'b4ldr/pewrite',
    url: 'https://github.com/b4ldr/pewrite',
    status: 'Activo',
    statusColor: '#4caf50'
  }
];

// ============================================================
// GESTIÓN DE ESTADO CON LOCALSTORAGE
// ============================================================

const STORAGE_KEY = 'toolLibraryOrder';

/**
 * Obtiene las herramientas con el orden guardado
 */
function getTools() {
  try {
    const savedOrder = localStorage.getItem(STORAGE_KEY);
    if (savedOrder) {
      const order = JSON.parse(savedOrder);
      // Reordenar herramientas según el orden guardado
      const ordered = [];
      const toolMap = {};
      defaultTools.forEach(tool => { toolMap[tool.id] = tool; });
      
      order.forEach(id => {
        if (toolMap[id]) {
          ordered.push(toolMap[id]);
          delete toolMap[id];
        }
      });
      
      // Añadir herramientas nuevas que no estén en el orden guardado
      Object.values(toolMap).forEach(tool => {
        ordered.push(tool);
      });
      
      return ordered;
    }
  } catch (e) {
    console.warn('Error al cargar el orden guardado:', e);
  }
  return [...defaultTools];
}

/**
 * Guarda el orden actual en localStorage
 */
function saveOrder(tools) {
  try {
    const order = tools.map(tool => tool.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
  } catch (e) {
    console.warn('Error al guardar el orden:', e);
  }
}

/**
 * Restablece el orden por defecto
 */
function resetOrder() {
  if (confirm('¿Restablecer el orden por defecto de todas las herramientas?')) {
    localStorage.removeItem(STORAGE_KEY);
    tools = [...defaultTools];
    renderTools();
    showNotification('Orden restablecido por defecto ✅');
  }
}

// ============================================================
// VARIABLE GLOBAL DE HERRAMIENTAS
// ============================================================
let tools = getTools();

// ============================================================
// FUNCIONES PARA RENDERIZAR
// ============================================================

/**
 * Genera el HTML de una tarjeta
 */
function createCard(tool, index) {
  return `
    <div class="card" data-id="${tool.id}" data-index="${index}" draggable="true">
      <div class="screenshot">
        <img src="https://opengraph.githubassets.com/1/${tool.repo}" 
             alt="${tool.title}" 
             onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'placeholder\\'><i class=\\'fa-brands fa-github\\'></i><span>${tool.repo}</span></div>'">
        <div class="status-badge">
          <i class="fa-solid fa-circle" style="color: ${tool.statusColor};"></i>
          ${tool.status}
        </div>
      </div>
      <div class="card-content">
        <div class="card-title">
          <i class="${tool.icon}"></i> ${tool.title}
        </div>
        <div class="card-author">
          <i class="fa-regular fa-user"></i> ${tool.author}
        </div>
        <div class="card-tags">
          ${tool.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
        <div class="card-desc">${tool.description}</div>
        <div class="card-footer">
          <div class="repo-link">
            <i class="fa-brands fa-github"></i>
            <span>${tool.repo}</span>
          </div>
          <a href="${tool.url}" class="btn-visit" target="_blank">Visitar</a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Renderiza todas las tarjetas en el grid
 */
function renderTools() {
  const grid = document.getElementById('toolGrid');
  grid.innerHTML = tools.map((tool, index) => createCard(tool, index)).join('');
  
  // Actualizar contadores
  const count = tools.length;
  document.getElementById('toolCount').textContent = count;
  document.getElementById('footerCount').textContent = count;
  
  // Inicializar Drag & Drop
  initDragAndDrop();
}

/**
 * Actualiza la fecha en el header
 */
function updateDate() {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('updateDate').textContent = now.toLocaleDateString('es-ES', options);
}

// ============================================================
// DRAG & DROP (Arrastrar y Soltar)
// ============================================================

let draggedItem = null;
let draggedIndex = null;

function initDragAndDrop() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    // Eventos de arrastre
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);
    card.addEventListener('dragover', handleDragOver);
    card.addEventListener('dragenter', handleDragEnter);
    card.addEventListener('dragleave', handleDragLeave);
    card.addEventListener('drop', handleDrop);
  });
}

function handleDragStart(e) {
  draggedItem = this;
  draggedIndex = parseInt(this.dataset.index);
  
  // Efecto visual
  this.style.opacity = '0.4';
  this.style.border = '2px dashed #2e7daf';
  
  // Guardar datos
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
  // Restaurar estilo
  this.style.opacity = '1';
  this.style.border = '1px solid var(--border)';
  
  // Eliminar clases de hover de todos los elementos
  document.querySelectorAll('.card.drag-over').forEach(card => {
    card.classList.remove('drag-over');
  });
}

function handleDragOver(e) {
  e.preventDefault(); // Necesario para permitir el drop
  e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
  e.preventDefault();
  if (this !== draggedItem) {
    this.classList.add('drag-over');
  }
}

function handleDragLeave(e) {
  this.classList.remove('drag-over');
}

function handleDrop(e) {
  e.preventDefault();
  this.classList.remove('drag-over');
  
  const targetIndex = parseInt(this.dataset.index);
  
  // No hacer nada si se suelta en el mismo lugar
  if (draggedIndex === targetIndex) {
    return;
  }
  
  // Reordenar el array
  const [removed] = tools.splice(draggedIndex, 1);
  tools.splice(targetIndex, 0, removed);
  
  // Guardar el orden en localStorage
  saveOrder(tools);
  
  // Actualizar el grid
  renderTools();
  
  // Mensaje visual de confirmación
  showNotification(`✅ "${removed.title}" movido a la posición ${targetIndex + 1}`);
}

// ============================================================
// NOTIFICACIÓN
// ============================================================

function showNotification(message) {
  // Eliminar notificaciones existentes
  document.querySelectorAll('.notification-toast').forEach(el => el.remove());
  
  // Crear elemento de notificación
  const notification = document.createElement('div');
  notification.className = 'notification-toast';
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: #37352f;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 9999;
    transition: all 0.3s ease;
    opacity: 0;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Animación de entrada
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(-50%) translateY(0)';
  }, 10);
  
  // Ocultar después de 2.5 segundos
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 2500);
}

// ============================================================
// BOTÓN PARA RESTABLECER ORDEN
// ============================================================

/**
 * Añade un botón para restablecer el orden en el header
 */
function addResetButton() {
  const headerStats = document.querySelector('.header-stats');
  if (headerStats) {
    const resetBtn = document.createElement('span');
    resetBtn.style.cssText = `
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--text-secondary);
      font-size: 0.8rem;
      transition: color 0.2s;
    `;
    resetBtn.innerHTML = `<i class="fa-solid fa-rotate"></i> Restablecer orden`;
    resetBtn.title = "Restablecer el orden por defecto de las herramientas";
    resetBtn.addEventListener('click', resetOrder);
    headerStats.appendChild(resetBtn);
  }
}

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  renderTools();
  updateDate();
  addResetButton();
});