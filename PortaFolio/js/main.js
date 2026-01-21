// =====================
// LOADING SCREEN
// =====================
window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  
  // Esperar un poquito para asegurar que todo cargó
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    
    // Remover del DOM después de la transición
    setTimeout(() => {
      loadingScreen.remove();
      
      // Iniciar animación de typing después del loading
      setTimeout(initTypingAnimation, 300);
    }, 500);
  }, 500);
});

// =====================
// TYPING ANIMATION EN HERO
// =====================
function initTypingAnimation() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;
  
  const savedLang = localStorage.getItem("lang") || "es";
  
  const texts = {
    es: [
      { text: 'Convierto ', class: '' },
      { text: 'ideas', class: 'text-gradient' },
      { text: ' en\n', class: '' },
      { text: 'interfaces que ', class: '' },
      { text: 'venden', class: 'text-gradient-alt' }
    ],
    en: [
      { text: 'I turn ', class: '' },
      { text: 'ideas', class: 'text-gradient' },
      { text: ' into\n', class: '' },
      { text: 'interfaces that ', class: '' },
      { text: 'convert', class: 'text-gradient-alt' }
    ]
  };
  
  const currentTexts = texts[savedLang];
  let partIndex = 0;
  let charIndex = 0;
  let currentHTML = '';
  
  function type() {
    if (partIndex < currentTexts.length) {
      const currentPart = currentTexts[partIndex];
      
      if (charIndex < currentPart.text.length) {
        const char = currentPart.text[charIndex];
        
        // Si es el primer carácter de esta parte, abrir el span
        if (charIndex === 0 && currentPart.class) {
          currentHTML += `<span class="${currentPart.class}">`;
        }
        
        // Agregar carácter (convertir \n a <br>)
        if (char === '\n') {
          currentHTML += '<br/>';
        } else {
          currentHTML += char;
        }
        
        charIndex++;
        typingElement.innerHTML = currentHTML;
        
        // Velocidad variable: más lento en palabras importantes
        const delay = currentPart.class ? 80 : 50;
        setTimeout(type, delay);
      } else {
        // Cerrar el span si tiene clase
        if (currentPart.class) {
          currentHTML += '</span>';
          typingElement.innerHTML = currentHTML;
        }
        
        // Pasar a la siguiente parte
        partIndex++;
        charIndex = 0;
        setTimeout(type, 100);
      }
    } else {
      // Animación completa - ocultar cursor después de 2 segundos
      setTimeout(() => {
        const cursor = document.querySelector('.typing-cursor');
        if (cursor) cursor.style.display = 'none';
      }, 2000);
    }
  }
  
  type();
}

// =====================
// TRADUCCIONES ACTUALIZADAS
// =====================
const translations = {
  es: {
    // Hero
    hero_badge: "Disponible para proyectos",
    hero_title_part1: "Convierto",
    hero_title_highlight1: "ideas",
    hero_title_part2: "en",
    hero_title_part3: "interfaces que",
    hero_title_highlight2: "venden",
    hero_subtitle: "Frontend Developer especializado en crear experiencias web que combinan estética premium con código limpio.",
    hero_cta_primary: "Ver mi trabajo",
    hero_cta_secondary: "Hablemos",

    // Stats
    stat_years: "Años",
    stat_projects: "Proyectos",
    stat_remote: "Remoto",

    // About
    about_title: "Sobre mí",
    about_lead: "Frontend Developer con obsesión por los detalles y pasión por crear interfaces que no solo se ven bien, sino que convierten y escalan.",
    about_text: "Combino diseño UI con desarrollo frontend para entregar proyectos completos, desde el wireframe hasta el deploy. Mi enfoque: código limpio, componentes reutilizables y experiencias memorables.",
    highlight_code_title: "Código limpio",
    highlight_code_desc: "Semántico, accesible y mantenible",
    highlight_design_title: "Diseño pensado",
    highlight_design_desc: "UX/UI que prioriza al usuario",
    highlight_performance_title: "Performance first",
    highlight_performance_desc: "Optimización desde el día uno",

    // Services
    services_title: "Servicios",
    services_intro: "Aporto valor combinando desarrollo frontend y diseño UI para acelerar entregas y reducir retrabajo.",
    service_ui: "Diseño de interfaces (UI)",
    service_ui_desc: "Wireframes y componentes limpios, consistentes y listos para implementar.",
    service_frontend: "Desarrollo frontend",
    service_frontend_desc: "HTML, CSS, JavaScript y Bootstrap con buenas prácticas, semántica y accesibilidad.",
    service_prototyping: "Prototipos conceptuales",
    service_prototyping_desc: "Validación visual y técnica para presentar ideas a stakeholders.",
    service_collab: "Colaboración ágil",
    service_collab_desc: "Comunicación clara, documentación y entregables ordenados.",

    // Process
    process_title: "Proceso de trabajo",
    process_discover_title: "Descubrir",
    process_discover_desc: "Entiendo objetivos, usuarios y restricciones para alinear expectativas.",
    process_design_title: "Diseñar",
    process_design_desc: "Defino jerarquía visual, componentes y microinteracciones.",
    process_build_title: "Construir",
    process_build_desc: "Implementación limpia con HTML, CSS, JS y Bootstrap.",
    process_document_title: "Documentar",
    process_document_desc: "Entregables claros, repos ordenados y notas para continuidad.",

    // Projects
    projects_title: "Proyecto destacado",
    projects_subtitle: "Casos reales de diseño y desarrollo",
    project_pm_title: "Premium Motors",
    project_pm_desc: "Sitio web conceptual para concesionaria premium. Enfoque en jerarquía visual, microinteracciones y performance optimizada.",
    view_project: "Ver proyecto",
    load_time: "Carga",
    stack_label: "Stack:",
    live_demo: "Live Demo",
    code_label: "Código",

    // Skills
    skills_title: "Habilidades",
    skills_languages: "Lenguajes & Frameworks",
    skills_tools: "Herramientas",
    skills_design: "Diseño / UI",

    // Contact
    contact_title: "Trabajemos juntos",
    contact_text: "¿Tenés un proyecto en mente o querés charlar? Estoy disponible part-time, remoto y freelance.",
    footer_note: "© 2026 Nico Ozan · Frontend Developer & UI Designer"
  },

  en: {
    // Hero
    hero_badge: "Available for projects",
    hero_title_part1: "I turn",
    hero_title_highlight1: "ideas",
    hero_title_part2: "into",
    hero_title_part3: "interfaces that",
    hero_title_highlight2: "convert",
    hero_subtitle: "Frontend Developer specialized in creating web experiences that combine premium aesthetics with clean code.",
    hero_cta_primary: "View my work",
    hero_cta_secondary: "Let's talk",

    // Stats
    stat_years: "Years",
    stat_projects: "Projects",
    stat_remote: "Remote",

    // About
    about_title: "About Me",
    about_lead: "Frontend Developer with an obsession for details and a passion for creating interfaces that not only look good, but convert and scale.",
    about_text: "I combine UI design with frontend development to deliver complete projects, from wireframe to deployment. My focus: clean code, reusable components and memorable experiences.",
    highlight_code_title: "Clean code",
    highlight_code_desc: "Semantic, accessible and maintainable",
    highlight_design_title: "Thoughtful design",
    highlight_design_desc: "UX/UI that prioritizes the user",
    highlight_performance_title: "Performance first",
    highlight_performance_desc: "Optimization from day one",

    // Services
    services_title: "Services",
    services_intro: "I deliver value by combining frontend development and UI design to speed up delivery and reduce rework.",
    service_ui: "Interface Design (UI)",
    service_ui_desc: "Clean, consistent wireframes and components ready to implement.",
    service_frontend: "Frontend Development",
    service_frontend_desc: "HTML, CSS, JavaScript and Bootstrap with best practices, semantics and accessibility.",
    service_prototyping: "Concept Prototypes",
    service_prototyping_desc: "Visual and technical validation to present ideas to stakeholders.",
    service_collab: "Agile Collaboration",
    service_collab_desc: "Clear communication, documentation and organized deliverables.",

    // Process
    process_title: "Work Process",
    process_discover_title: "Discover",
    process_discover_desc: "I understand goals, users and constraints to align expectations.",
    process_design_title: "Design",
    process_design_desc: "I define visual hierarchy, components and micro-interactions.",
    process_build_title: "Build",
    process_build_desc: "Clean implementation with HTML, CSS, JS and Bootstrap.",
    process_document_title: "Document",
    process_document_desc: "Clear deliverables, organized repos and notes for continuity.",

    // Projects
    projects_title: "Featured Project",
    projects_subtitle: "Real cases of design and development",
    project_pm_title: "Premium Motors",
    project_pm_desc: "Conceptual website for a premium car dealership. Focus on visual hierarchy, micro-interactions and optimized performance.",
    view_project: "View project",
    load_time: "Load",
    stack_label: "Stack:",
    live_demo: "Live Demo",
    code_label: "Code",

    // Skills
    skills_title: "Skills",
    skills_languages: "Languages & Frameworks",
    skills_tools: "Tools",
    skills_design: "Design / UI",

    // Contact
    contact_title: "Let's Work Together",
    contact_text: "Have a project in mind or want to chat? I'm available part-time, remote and freelance.",
    footer_note: "© 2026 Nico Ozan · Frontend Developer & UI Designer"
  }
};

// =====================
// CAMBIO DE IDIOMA (accesible)
// =====================
function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-lang]").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
    if (active) btn.setAttribute("aria-current", "true");
    else btn.removeAttribute("aria-current");
  });
}

const savedLang = localStorage.getItem("lang") || "es";
setLanguage(savedLang);

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

// =====================
// SCROLL SUAVE (respetando reduced motion)
// =====================
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// =====================
// SCROLL PROGRESS BAR (Mejorado para mobile)
// =====================
const scrollProgressBar = document.querySelector('.scroll-progress-bar');

if (scrollProgressBar) {
  function updateProgressBar() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    
    // Asegurar que el valor esté entre 0 y 100
    const progress = Math.min(Math.max(scrolled, 0), 100);
    scrollProgressBar.style.width = progress + '%';
  }
  
  // Escuchar scroll normal
  window.addEventListener('scroll', updateProgressBar, { passive: true });
  
  // También escuchar en touch devices
  window.addEventListener('touchmove', updateProgressBar, { passive: true });
  
  // Actualizar al cargar
  updateProgressBar();
}

// =====================
// SCROLL SUAVE PARA ENLACES INTERNOS
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    const switchRect = document.querySelector('.lang-switch')?.getBoundingClientRect();
    const offset = switchRect ? switchRect.height + 60 : 100;

    const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetTop,
      behavior: prefersReduced ? 'auto' : 'smooth'
    });
  });
});

// =====================
// INTERSECTION OBSERVER PARA SCROLL ANIMATIONS
// =====================
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Pequeño delay para suavizar la aparición
        setTimeout(() => {
          entry.target.classList.add("show");
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  },
  { 
    threshold: 0.08, 
    rootMargin: "0px 0px -40px 0px" 
  }
);

document.querySelectorAll(".fade-up").forEach(el => {
  observer.observe(el);
});

// =====================
// CURSOR PERSONALIZADO
// =====================
if (!prefersReduced) {
  const cursor = document.querySelector('.custom-cursor');
  const cursorTrail = document.querySelector('.cursor-trail');

  if (cursor && cursorTrail) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      setTimeout(() => {
        cursorTrail.style.left = e.clientX + 'px';
        cursorTrail.style.top = e.clientY + 'px';
      }, 80);
    });

    // Cambiar cursor en hover de elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, .btn-premium, .btn-outline-premium, .skill, .service-card, .process-card, .project-card');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
        cursor.style.background = 'var(--accent-primary)';
        cursor.style.borderColor = 'transparent';
      });

      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = 'transparent';
        cursor.style.borderColor = 'var(--accent-primary)';
      });
    });
  }
}

// =====================
// EFECTO MAGNETIC EN BOTONES
// =====================
if (!prefersReduced) {
  document.querySelectorAll('.btn-premium, .btn-outline-premium').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

// =====================
// PARALLAX SUAVE EN HERO (Velocidad reducida)
// =====================
if (!prefersReduced) {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero-content');
        
        if (hero && scrolled < window.innerHeight) {
          // Velocidad reducida de 0.25 a 0.15 para que sea más suave
          hero.style.transform = `translateY(${scrolled * 0.15}px)`;
          // Opacidad más lenta: de 600 a 800
          hero.style.opacity = 1 - (scrolled / 800);
        }
        
        ticking = false;
      });
      
      ticking = true;
    }
  });
}

// =====================
// CONTADOR ANIMADO EN STATS
// =====================
const animateCounter = (element, target, suffix = '') => {
  let current = 0;
  const increment = target / 40;
  const duration = 1500;
  const stepTime = duration / 40;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, stepTime);
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const targetText = stat.textContent.trim();
        const target = parseInt(targetText);
        const suffix = stat.dataset.suffix || '';
        
        if (!isNaN(target)) {
          stat.textContent = '0';
          setTimeout(() => {
            animateCounter(stat, target, suffix);
            if (suffix) {
              setTimeout(() => {
                stat.textContent = target + suffix;
              }, 1500);
            }
          }, 300);
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// =====================
// EFECTO RIPPLE EN CLICKS
// =====================
if (!prefersReduced) {
  document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 800);
  });
}

// =====================
// DELAY SECUENCIAL EN CARDS
// =====================
document.querySelectorAll('.service-card, .process-card, .skill').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.08}s`;
});

// =====================
// CONSOLE MESSAGE (Easter Egg para developers)
// =====================
console.log(
  '%c👋 Hola Developer! ',
  'background: linear-gradient(135deg, #00d9ff 0%, #7c3aed 100%); color: #0a0a0f; font-size: 18px; font-weight: bold; padding: 12px 20px; border-radius: 8px;'
);
console.log(
  '%c¿Te gusta lo que ves? Hablemos: nicoozan2@gmail.com',
  'color: #00d9ff; font-size: 14px; padding: 8px 0;'
);

// =====================
// PERFORMANCE: Lazy loading para imágenes
// =====================
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.src;
  });
} else {
  // Fallback para navegadores sin soporte nativo
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}