// =====================
// TRADUCCIONES
// =====================
const translations = {
  es: {
    hero_title: "Desarrollador Frontend y Diseñador UI",
    hero_subtitle: "Diseño y construyo interfaces web claras, modernas y orientadas a resultados. Enfocado en HTML, CSS, JavaScript y Bootstrap.",
    hero_cta_primary: "Ver proyecto destacado",
    hero_cta_secondary: "Contacto",

    projects_title: "Proyecto destacado",
    project_pm_title: "Premium Motors — Sitio Web Conceptual",
    project_pm_desc: "Prototipo de sitio para una concesionaria premium. Enfoque en estructura clara, jerarquía visual, diseño sobrio y componentes reutilizables.",
    project_kpis_label: "Enfoque",
    project_kpis_value: "Accesibilidad básica, navegación clara, performance inicial y consistencia UI",

    role_label: "Rol",
    stack_label: "Tecnologías",

    about_title: "Sobre mí",
    about_text: "Soy desarrollador frontend con enfoque en diseño UI. Trabajo en proyectos conceptuales que priorizan estructura, experiencia de usuario y detalle visual. Aprendo rápido, documento bien y cuido la calidad. Busco oportunidades part-time, remotas y freelance, colaborando con clientes y empresas para llevar ideas a interfaces sólidas y profesionales.",
    skills_title: "Habilidades",
    skills_intro: "Stack principal: HTML, CSS, JavaScript y Bootstrap. Herramientas: Git, GitHub y Figma.",

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

    process_title: "Proceso de trabajo",
    process_discover_title: "Descubrir",
    process_discover_desc: "Entiendo objetivos, usuarios y restricciones para alinear expectativas.",
    process_design_title: "Diseñar",
    process_design_desc: "Defino jerarquía visual, componentes y microinteracciones.",
    process_build_title: "Construir",
    process_build_desc: "Implementación limpia con HTML, CSS, JS y Bootstrap.",
    process_document_title: "Documentar",
    process_document_desc: "Entregables claros, repos ordenados y notas para continuidad.",

    contact_title: "Contacto",
    contact_text: "¿Querés trabajar juntos o tenés una consulta? Estoy disponible part-time, remoto y freelance.",
    footer_note: "© 2026 Nico Ozan. Proyecto conceptual con fines educativos."
  },

  en: {
    hero_title: "Frontend Developer & UI Designer",
    hero_subtitle: "I design and build clean, modern, results-oriented web interfaces. Focused on HTML, CSS, JavaScript and Bootstrap.",
    hero_cta_primary: "View featured project",
    hero_cta_secondary: "Contact",

    projects_title: "Featured Project",
    project_pm_title: "Premium Motors — Conceptual Website",
    project_pm_desc: "Conceptual site for a premium car dealership. Focus on clear structure, visual hierarchy, sober design and reusable components.",
    project_kpis_label: "Focus",
    project_kpis_value: "Basic accessibility, clear navigation, initial performance and UI consistency",

    role_label: "Role",
    stack_label: "Stack",

    about_title: "About Me",
    about_text: "I’m a frontend developer focused on UI design. I work on conceptual projects that prioritize structure, UX and visual detail. I learn fast, document well and care about quality. I’m available part-time, remote and freelance to help clients and teams turn ideas into solid, professional interfaces.",
    skills_title: "Skills",
    skills_intro: "Core stack: HTML, CSS, JavaScript and Bootstrap. Tools: Git, GitHub and Figma.",

    services_title: "Services",
    services_intro: "I deliver value by combining frontend development and UI design to speed up delivery and reduce rework.",
    service_ui: "Interface Design (UI)",
    service_ui_desc: "Clean wireframes and components, consistent and ready to implement.",
    service_frontend: "Frontend Development",
    service_frontend_desc: "HTML, CSS, JavaScript and Bootstrap with best practices, semantics and accessibility.",
    service_prototyping: "Concept Prototypes",
    service_prototyping_desc: "Visual and technical validation to present ideas to stakeholders.",
    service_collab: "Agile Collaboration",
    service_collab_desc: "Clear communication, documentation and organized deliverables.",

    process_title: "Work Process",
    process_discover_title: "Discover",
    process_discover_desc: "Understand goals, users and constraints to align expectations.",
    process_design_title: "Design",
    process_design_desc: "Define visual hierarchy, components and micro-interactions.",
    process_build_title: "Build",
    process_build_desc: "Clean implementation with HTML, CSS, JS and Bootstrap.",
    process_document_title: "Document",
    process_document_desc: "Clear deliverables, organized repos and notes for continuity.",

    contact_title: "Contact",
    contact_text: "Interested in working together or have a question? I’m available part-time, remote and freelance.",
    footer_note: "© 2026 Nico Ozan. Conceptual project for educational purposes."
  }
};

// =====================
// FUNCION CAMBIO DE IDIOMA (accesible)
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

// Activar botón correcto al cargar
document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.classList.toggle("active", btn.dataset.lang === savedLang);
  btn.setAttribute("aria-pressed", btn.dataset.lang === savedLang ? "true" : "false");
  if (btn.dataset.lang === savedLang) btn.setAttribute("aria-current", "true");
});

// =====================
// SCROLL SUAVE PARA ENLACES INTERNOS (respetando reduced motion)
// =====================
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    const switchRect = document.querySelector('.lang-switch')?.getBoundingClientRect();
    const offset = switchRect ? switchRect.height + 40 : 80;

    const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetTop,
      behavior: prefersReduced ? 'auto' : 'smooth'
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
  { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
);

document.querySelectorAll(".fade-up").forEach(el => {
  observer.observe(el);
});

// Micro-delay secuencial en cards y skills y services/process
document.querySelectorAll('.project-card, .skill, .service-card, .process-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
});


