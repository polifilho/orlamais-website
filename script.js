const header = document.querySelector(".site-header--overlay");

if (header) {
  const updateHeader = () => {
    const isScrolled = window.scrollY > 20;
    header.classList.toggle("site-header--solid", isScrolled);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0 && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach((element) => observer.observe(element));
}

const translations = {
  "pt-BR": {
    meta: {
      title: "Orla+ | Reserve sua praia antes de sair de casa",
      description:
        "Orla+ conecta turistas e moradores do Rio de Janeiro a barraqueiros para reservar cadeiras, guarda-sóis, mesas, drinks e serviços à beira-mar com mais praticidade.",
    },
    nav: {
      howItWorks: "Como funciona",
      benefits: "Benefícios",
      vendors: "Barraqueiros",
      privacy: "Privacidade",
      terms: "Termos",
    },
    hero: {
      pill: "☀️ A praia do seu jeito.",
      title: "Reserve sua praia antes de sair de casa, hostel ou hotel.",
      subtitle:
        "Com o Orla+ turistas e moradores encontram barraqueiros e reservam cadeiras, guarda-sóis, mesas, drinks e serviços à beira-mar em poucos segundos.",
      cardTitle: "Tudo pronto esperando por você",
      cardText: "Mais organização, transparência e conforto no seu dia de praia.",
      cardCta: "Como funciona",
      phoneAlt: "Tela do aplicativo Orla+ mostrando regiões de praia",
    },
    stores: {
      appStoreSmall: "Baixar na",
      appStore: "App Store",
      googlePlaySmall: "Disponível no",
      googlePlay: "Google Play",
    },
    howItWorks: {
      eyebrow: "Como funciona",
      title: "Sua praia do início ao fim, em um só lugar.",
      lead:
        "O Orla+ elimina a correria de chegar cedo, procurar disponibilidade e negociar sem referência. Você escolhe a região, encontra barraqueiros e reserva com praticidade.",
      card1Title: "Escolha a praia",
      card1Text: "Selecione a região e praia desejada no Rio de Janeiro e veja as opções disponíveis.",
      card2Title: "Reserve seus itens",
      card2Text: "Cadeiras, guarda-sol, mesas, bebidas e outros serviços à beira-mar.",
      card3Title: "Chegue sem preocupação",
      card3Text: "Seu espaço fica organizado para você aproveitar melhor o dia com família e amigos.",
    },
    experience: {
      eyebrow: "Experiência carioca",
      title: "A praia deve ser leve, prática e transparente.",
      photoAlt: "Praia do Rio de Janeiro ensolarada",
      step1Title: "Sem correr para garantir lugar.",
      step1Text: "Reserve antes e evite incertezas.",
      step2Title: "Sem surpresa no preço.",
      step2Text: "Mais clareza para escolher o que faz sentido para você.",
      step3Title: "Mais tempo para relaxar.",
      step3Text: "Você chega e encontra tudo pronto esperando.",
    },
    benefits: {
      eyebrow: "Benefícios",
      title: "Bom para quem vai à praia. Melhor ainda para quem trabalha nela.",
      usersTitle: "Para usuários",
      user1: "Reserva rápida pelo celular",
      user2: "Mais conforto para famílias e turistas",
      user3: "Preços e serviços mais claros",
      user4: "Menos estresse e mais tempo de lazer",
      vendorsTitle: "Para barraqueiros",
      vendor1: "Mais visibilidade digital",
      vendor2: "Organização das reservas",
      vendor3: "Novos canais de venda",
      vendor4: "Relacionamento direto com clientes",
    },
    vendors: {
      eyebrow: "Barraqueiros parceiros",
      title: "Uma vitrine digital para a praia.",
      text:
        "O Orla+ ajuda barraqueiros e prestadores de serviços locais a organizarem melhor sua operação, aumentarem sua presença online e receberem clientes com mais previsibilidade.",
      cta: "Quero conhecer",
      list1: "✅ Cadastro de produtos e serviços",
      list2: "✅ Reservas mais organizadas",
      list3: "✅ Destaque para barraqueiros parceiros",
      list4: "✅ Mais oportunidades com turistas e locais",
    },
    testimonials: {
      eyebrow: "Depoimentos",
      title: "Quem usa, aproveita melhor.",
      quote1: "“Cheguei na praia e minhas cadeiras já estavam separadas. Foi muito mais tranquilo com as crianças.”",
      role1: "Visitante de BH",
      quote2: "“Para turistas, é perfeito. Não precisei negociar sem saber preço nem procurar vendedor na areia.”",
      role2: "Visitante de SP",
      quote3: "“O app ajuda a organizar o movimento e facilita para o cliente me encontrar.”",
      role3: "Barraqueiro parceiro",
    },
    closing: {
      title: "Vamos criar uma nova cultura para aproveitar a praia.",
      text:
        "Reserve com antecedência, chegue sem surpresas e viva uma experiência mais organizada, segura e transparente à beira-mar.",
    },
    footer: {
      copy: "© 2026 Orla+. Praia com organização, transparência e praticidade.",
      emailLabel: "Email:",
      instagramLabel: "Instagram:",
    },
  },
  en: {
    meta: {
      title: "Orla+ | Book your beach before leaving home",
      description:
        "Orla+ connects tourists and locals in Rio de Janeiro with beach vendors to book chairs, umbrellas, tables, drinks and beachside services with ease.",
    },
    nav: {
      howItWorks: "How it works",
      benefits: "Benefits",
      vendors: "Vendors",
      privacy: "Privacy",
      terms: "Terms",
    },
    hero: {
      pill: "☀️ The beach your way.",
      title: "Book your beach setup before leaving home, hostel or hotel.",
      subtitle:
        "With Orla+, tourists and locals find beach vendors and book chairs, umbrellas, tables, drinks and seaside services in just a few seconds.",
      cardTitle: "Everything ready for you",
      cardText: "More organization, transparency and comfort for your beach day.",
      cardCta: "How it works",
      phoneAlt: "Orla+ app screen showing beach regions",
    },
    stores: {
      appStoreSmall: "Download on the",
      appStore: "App Store",
      googlePlaySmall: "Available on",
      googlePlay: "Google Play",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Your beach day from start to finish, all in one place.",
      lead:
        "Orla+ removes the stress of arriving early, searching for availability and negotiating without context. You choose the area, find vendors and book with ease.",
      card1Title: "Choose the beach",
      card1Text: "Pick your preferred area and beach in Rio de Janeiro and see the available options.",
      card2Title: "Book your items",
      card2Text: "Chairs, umbrellas, tables, drinks and other beachside services.",
      card3Title: "Arrive worry-free",
      card3Text: "Your spot is organized so you can enjoy the day with family and friends.",
    },
    experience: {
      eyebrow: "Rio experience",
      title: "The beach should feel light, practical and transparent.",
      photoAlt: "Sunny beach in Rio de Janeiro",
      step1Title: "No rushing to secure a spot.",
      step1Text: "Book in advance and avoid uncertainty.",
      step2Title: "No surprise pricing.",
      step2Text: "More clarity to choose what works best for you.",
      step3Title: "More time to relax.",
      step3Text: "Arrive and find everything ready for you.",
    },
    benefits: {
      eyebrow: "Benefits",
      title: "Great for beachgoers. Even better for the people who work there.",
      usersTitle: "For users",
      user1: "Fast booking on your phone",
      user2: "More comfort for families and tourists",
      user3: "Clearer prices and services",
      user4: "Less stress and more leisure time",
      vendorsTitle: "For vendors",
      vendor1: "More digital visibility",
      vendor2: "Better booking organization",
      vendor3: "New sales channels",
      vendor4: "Direct relationship with customers",
    },
    vendors: {
      eyebrow: "Partner vendors",
      title: "A digital showcase for the beach.",
      text:
        "Orla+ helps beach vendors and local service providers organize operations better, grow their online presence and welcome customers with more predictability.",
      cta: "Learn more",
      list1: "✅ Product and service listing",
      list2: "✅ Better organized bookings",
      list3: "✅ Visibility for partner vendors",
      list4: "✅ More opportunities with tourists and locals",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "People who use it enjoy the beach more.",
      quote1: "“I arrived at the beach and my chairs were already set aside. It was much easier with the kids.”",
      role1: "Visitor from Belo Horizonte",
      quote2: "“For tourists, it is perfect. I did not need to negotiate prices blindly or search for someone on the sand.”",
      role2: "Visitor from Sao Paulo",
      quote3: "“The app helps organize demand and makes it easier for customers to find me.”",
      role3: "Partner beach vendor",
    },
    closing: {
      title: "Let’s create a new way to enjoy the beach.",
      text:
        "Book ahead, arrive with no surprises and enjoy a more organized, safe and transparent beachside experience.",
    },
    footer: {
      copy: "© 2026 Orla+. Beach days with organization, transparency and convenience.",
      emailLabel: "Email:",
      instagramLabel: "Instagram:",
    },
  },
  es: {
    meta: {
      title: "Orla+ | Reserva tu playa antes de salir de casa",
      description:
        "Orla+ conecta a turistas y residentes de Río de Janeiro con vendedores de playa para reservar sillas, sombrillas, mesas, bebidas y servicios junto al mar.",
    },
    nav: {
      howItWorks: "Cómo funciona",
      benefits: "Beneficios",
      vendors: "Vendedores",
      privacy: "Privacidad",
      terms: "Términos",
    },
    hero: {
      pill: "☀️ La playa a tu manera.",
      title: "Reserva tu espacio en la playa antes de salir de casa, del hostal o del hotel.",
      subtitle:
        "Con Orla+, turistas y residentes encuentran vendedores de playa y reservan sillas, sombrillas, mesas, bebidas y servicios frente al mar en pocos segundos.",
      cardTitle: "Todo listo para ti",
      cardText: "Más organización, transparencia y comodidad para tu día de playa.",
      cardCta: "Cómo funciona",
      phoneAlt: "Pantalla de la app Orla+ mostrando regiones de playa",
    },
    stores: {
      appStoreSmall: "Descargar en",
      appStore: "App Store",
      googlePlaySmall: "Disponible en",
      googlePlay: "Google Play",
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      title: "Tu día de playa de principio a fin, en un solo lugar.",
      lead:
        "Orla+ elimina el estrés de llegar temprano, buscar disponibilidad y negociar sin referencias. Tú eliges la zona, encuentras vendedores y reservas con facilidad.",
      card1Title: "Elige la playa",
      card1Text: "Selecciona la zona y la playa deseada en Río de Janeiro y mira las opciones disponibles.",
      card2Title: "Reserva tus artículos",
      card2Text: "Sillas, sombrillas, mesas, bebidas y otros servicios junto al mar.",
      card3Title: "Llega sin preocupaciones",
      card3Text: "Tu espacio queda organizado para que disfrutes mejor el día con familia y amigos.",
    },
    experience: {
      eyebrow: "Experiencia carioca",
      title: "La playa debe sentirse ligera, práctica y transparente.",
      photoAlt: "Playa soleada en Río de Janeiro",
      step1Title: "Sin correr para conseguir lugar.",
      step1Text: "Reserva antes y evita incertidumbres.",
      step2Title: "Sin sorpresas en el precio.",
      step2Text: "Más claridad para elegir lo que tiene sentido para ti.",
      step3Title: "Más tiempo para relajarte.",
      step3Text: "Llegas y encuentras todo listo esperándote.",
    },
    benefits: {
      eyebrow: "Beneficios",
      title: "Bueno para quien va a la playa. Aún mejor para quien trabaja en ella.",
      usersTitle: "Para usuarios",
      user1: "Reserva rápida desde el móvil",
      user2: "Más comodidad para familias y turistas",
      user3: "Precios y servicios más claros",
      user4: "Menos estrés y más tiempo de ocio",
      vendorsTitle: "Para vendedores",
      vendor1: "Más visibilidad digital",
      vendor2: "Mejor organización de reservas",
      vendor3: "Nuevos canales de venta",
      vendor4: "Relación directa con clientes",
    },
    vendors: {
      eyebrow: "Vendedores asociados",
      title: "Una vitrina digital para la playa.",
      text:
        "Orla+ ayuda a vendedores de playa y prestadores de servicios locales a organizar mejor su operación, aumentar su presencia online y recibir clientes con más previsibilidad.",
      cta: "Quiero conocer",
      list1: "✅ Registro de productos y servicios",
      list2: "✅ Reservas más organizadas",
      list3: "✅ Visibilidad para vendedores asociados",
      list4: "✅ Más oportunidades con turistas y locales",
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "Quien lo usa, disfruta más.",
      quote1: "“Llegué a la playa y mis sillas ya estaban apartadas. Fue mucho más fácil con los niños.”",
      role1: "Visitante de Belo Horizonte",
      quote2: "“Para turistas es perfecto. No tuve que negociar sin saber el precio ni buscar a alguien en la arena.”",
      role2: "Visitante de São Paulo",
      quote3: "“La app ayuda a organizar el movimiento y facilita que el cliente me encuentre.”",
      role3: "Vendedor asociado",
    },
    closing: {
      title: "Vamos a crear una nueva cultura para disfrutar la playa.",
      text:
        "Reserva con anticipación, llega sin sorpresas y vive una experiencia más organizada, segura y transparente junto al mar.",
    },
    footer: {
      copy: "© 2026 Orla+. Playa con organización, transparencia y practicidad.",
      emailLabel: "Email:",
      instagramLabel: "Instagram:",
    },
  },
};

const defaultLanguage = "pt-BR";
const languageButtons = document.querySelectorAll("[data-lang]");
const translatableElements = document.querySelectorAll("[data-i18n]");
const metaDescription = document.querySelector("#meta-description");
const languageSwitcher = document.querySelector("[data-language-switcher]");
const languageToggle = document.querySelector(".language-switcher__toggle");
const languageCurrent = document.querySelector(".language-switcher__current");

const applyTranslations = (language) => {
  const selectedLanguage = translations[language] ? language : defaultLanguage;
  const dictionary = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;
  document.title = dictionary.meta.title;

  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.meta.description);
  }

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    const attr = element.dataset.i18nAttr;
    const value = key.split(".").reduce((result, segment) => result?.[segment], dictionary);

    if (!value) return;

    if (attr) {
      element.setAttribute(attr, value);
      return;
    }

    element.textContent = value;
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === selectedLanguage);
  });

  if (languageCurrent) {
    languageCurrent.textContent = selectedLanguage === "pt-BR" ? "PT" : selectedLanguage.toUpperCase();
  }

  window.localStorage.setItem("orlamais-language", selectedLanguage);
};

const storedLanguage = window.localStorage.getItem("orlamais-language");
applyTranslations(storedLanguage || defaultLanguage);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTranslations(button.dataset.lang);
  });
});

const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (nav && navToggle && navLinks) {
  const closeMenu = () => {
    nav.classList.remove("nav--menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  const closeLanguageMenu = () => {
    nav.classList.remove("nav--language-open");
    if (languageToggle) {
      languageToggle.setAttribute("aria-expanded", "false");
    }
  };

  navToggle.addEventListener("click", () => {
    closeLanguageMenu();
    const isOpen = nav.classList.toggle("nav--menu-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  if (languageSwitcher && languageToggle) {
    languageToggle.addEventListener("click", () => {
      closeMenu();
      const isOpen = nav.classList.toggle("nav--language-open");
      languageToggle.setAttribute("aria-expanded", String(isOpen));
    });

    languageButtons.forEach((button) => {
      button.addEventListener("click", closeLanguageMenu);
    });
  }

  document.addEventListener("click", (event) => {
    if (nav.contains(event.target)) return;

    if (nav.classList.contains("nav--menu-open")) {
      closeMenu();
    }

    if (nav.classList.contains("nav--language-open")) {
      closeLanguageMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
      closeLanguageMenu();
    }
  });
}
