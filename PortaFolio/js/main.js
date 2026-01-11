// =====================
// TRADUCCIONES
// =====================
const translations = {
  es: {
    hero_title: "Desarrollador Frontend & Diseñador UI",
    hero_subtitle: "Diseño y desarrollo interfaces web claras, funcionales y visualmente cuidadas.",
    hero_cta_primary: "Ver proyecto",
    hero_cta_secondary: "Contacto",

    projects_title: "Proyecto destacado",
    project_pm_title: "Premium Motors — Sitio Web Conceptual",
    project_pm_desc: "Proyecto web conceptual para una concesionaria de vehículos de alta gama.",

    role_label: "Rol",
    stack_label: "Tecnologías",

    about_title: "Sobre mí",
    about_text: "Soy desarrollador frontend con enfoque en diseño UI. Trabajo en proyectos web conceptuales, cuidando la estructura, experiencia de usuario y detalles visuales. Aunque soy relativamente nuevo en el desarrollo profesional, estoy estudiando Full Stack y continuamente mejorando mis habilidades para crear proyectos cada vez más sólidos y profesionales. Me apasiona aprender y experimentar con nuevas tecnologías para seguir creciendo en este campo.",
    skills_title: "Habilidades",

    contact_title: "Contacto",
    contact_text: "¿Querés trabajar juntos o tenés una consulta?",

    footer_note: "Proyecto conceptual con fines educativos."
  },

  en: {
    hero_title: "Frontend Developer & UI Designer",
    hero_subtitle: "I design and build clean, functional, and well-crafted web interfaces.",
    hero_cta_primary: "View project",
    hero_cta_secondary: "Contact",

    projects_title: "Featured Project",
    project_pm_title: "Premium Motors — Conceptual Website",
    project_pm_desc: "Conceptual web project for a premium car dealership.",

    role_label: "Role",
    stack_label: "Stack",

    about_title: "About Me",
    about_text: "I am a frontend developer focused on UI design. Although I am new to professional development, I work on conceptual web projects, paying attention to structure, user experience, and visual details. I am studying Full Stack and improving my skills every day to build increasingly solid and professional projects.",
    skills_title: "Skills",

    contact_title: "Contact",
    contact_text: "Interested in working together or have a question?",

    footer_note: "Conceptual project for educational purposes."
  }
};

// =====================
// FUNCION CAMBIO DE IDIOMA
// =====================
function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(translations[lang][key]){
      el.textContent = translations[lang][key];
    }
  });
}

const savedLang = localStorage.getItem("lang") || "es";
setLanguage(savedLang);

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);

    document.querySelectorAll("[data-lang]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Activar botón correcto al cargar
document.querySelectorAll("[data-lang]").forEach(btn => {
  if (btn.dataset.lang === savedLang) btn.classList.add("active");
});

// =====================
// SCROLL SUAVE PARA ENLACES INTERNOS
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    // Offset si hay fixed header (por ejemplo language switch)
    const offset = 80; 
    const bodyRect = document.body.getBoundingClientRect().top;
    const targetRect = target.getBoundingClientRect().top;
    const targetPosition = targetRect - bodyRect - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// =====================
// ANIMACIONES SCROLL Y HERO
// =====================

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-up").forEach(el => {
  observer.observe(el);
});

// Micro-delay secuencial en cards y skills
document.querySelectorAll('.project-card, .skill').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.15}s`;
});
