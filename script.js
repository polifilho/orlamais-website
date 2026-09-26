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
      home: "Início",
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
    legal: {
      docBadge: "Documento Oficial",
    },
    termsPage: {
      meta: {
        title: "Orla+ | Termos de Uso",
        description: "Termos de Uso do Orla+, com regras de acesso, reservas, responsabilidades e uso da plataforma.",
      },
      hero: {
        pill: "Termos",
        title: "Termos de Uso do Orla+",
        subtitle: "Regras de acesso e utilização da plataforma Orla+ em aplicativo móvel e painel web.",
      },
      docTitle: "TERMOS DE USO – ORLA+",
      intro: "Orla Mais Tecnologia — CNPJ 69.025.697/0001-51\nÚltima atualização: 26 de setembro de 2026",
      s1Title: "1. Sobre o Orla Mais",
      s1Body:
        "O Orla+ é uma plataforma tecnológica que conecta usuários a barraqueiros de praia para reserva de itens (cadeiras, guarda-sóis, mesas, etc.) e, quando disponível, ao \"Orla Pro\" (gestão de comandas do barraqueiro). O Orla+ não é proprietário das barracas nem empregador dos barraqueiros — atua como intermediário tecnológico.",
      s2Title: "2. Aceitação dos Termos",
      s2Body:
        "Ao criar uma conta, você declara ter lido e aceito estes Termos e a Política de Privacidade. Se não concordar, não deve utilizar o aplicativo.",
      s3Title: "3. Idade Mínima",
      s3Body:
        "O uso do Orla+ é permitido apenas para maiores de 18 anos. Não aceitamos cadastro de menores de idade, mesmo com supervisão de um responsável.",
      s4Title: "4. Cadastro do Usuário",
      s4Body:
        "Você deve fornecer dados verdadeiros (nome, e-mail, telefone, data de nascimento, CPF ou passaporte). Você é responsável por manter sua senha em sigilo e por toda atividade realizada na sua conta.",
      s5Title: "5. Funcionamento das Reservas",
      s5Body:
        "Você escolhe uma barraca, itens e horário, e envia um pedido de reserva. O barraqueiro pode aceitar ou recusar. Preços são definidos pelo barraqueiro.",
      s6Title: "6. Pagamento",
      s6Body:
        "Dependendo da barraca e da configuração no momento, o pagamento pode ser feito de duas formas: (a) diretamente pelo aplicativo, no momento da reserva, processado por um parceiro de pagamentos; ou (b) no local, diretamente ao barraqueiro. O aplicativo informa qual modalidade se aplica antes da confirmação.",
      s7Title: "7. Cancelamentos e Reembolsos",
      s7Body:
        "Quando o pagamento foi feito pelo app: cancelamentos com antecedência têm reembolso integral; cancelamentos próximos do horário reservado (menos de 10 minutos) ou não comparecimento têm reembolso parcial, conforme regra vigente no momento. Quando o pagamento é local, não há cobrança prévia, logo não há reembolso a processar. O barraqueiro pode cancelar por indisponibilidade de estoque ou condições climáticas adversas.",
      s8Title: "8. Avaliações",
      s8Body:
        "Após o atendimento, você pode avaliar a barraca. Avaliações passam por moderação antes de ficarem visíveis publicamente, e podem ser removidas em caso de conteúdo abusivo, falso ou ofensivo.",
      s9Title: "9. Responsabilidades do Orla Mais",
      s9Body:
        "O Orla+ atua como intermediário e não se responsabiliza pela qualidade do serviço prestado pelo barraqueiro, nem por danos decorrentes do uso dos itens reservados.",
      s10Title: "10. Responsabilidades dos Barraqueiros",
      s10Body:
        "O barraqueiro é responsável por manter itens disponíveis, honrar reservas aceitas, e cumprir a legislação aplicável ao seu negócio.",
      s11Title: "11. Uso Indevido do Aplicativo",
      s11Body:
        "É proibido usar o app para fraude, criar reservas falsas, ou qualquer conduta que prejudique outros usuários ou o Orla+. Contas nessas condições podem ser suspensas.",
      s12Title: "12. Propriedade Intelectual",
      s12Body:
        "Marca, logotipo e conteúdo do app pertencem ao Orla+ e não podem ser usados sem autorização.",
      s13Title: "13. Privacidade e Dados",
      s13Body:
        "O tratamento de dados pessoais segue nossa Política de Privacidade, em conformidade com a LGPD. Você pode ler a política completa a qualquer momento dentro do app, em Perfil → Ver Política de Privacidade.",
      s14Title: "14. Sua conta",
      s14Body:
        "Você pode excluir sua conta a qualquer momento em Perfil → Excluir minha conta. Isso remove nome, e-mail, foto e histórico de reservas, respeitado o prazo de retenção exigido por lei (ex: dados fiscais).",
      s15Title: "15. Alterações dos Termos",
      s15Body:
        "Podemos atualizar estes termos a qualquer momento. Mudanças relevantes exigem que você aceite a nova versão para continuar usando o app.",
      s16Title: "16. Legislação e Foro",
      s16Body:
        "Estes termos são regidos pela legislação brasileira, com foro na comarca do Rio de Janeiro/RJ.",
      s17Title: "17. Contato",
      s17Body: "contato@orlamais.com.br — WhatsApp: +55 21 99020-6835",
      footerCopy: "© 2026 Orla+. Termos de Uso.",
    },
    privacyPage: {
      meta: {
        title: "Orla+ | Política de Privacidade",
        description:
          "Política de Privacidade do Orla+, incluindo informações sobre coleta, uso, retenção e proteção de dados pessoais.",
      },
      hero: {
        pill: "Privacidade",
        title: "Política de Privacidade do Orla+",
        subtitle: "Informações sobre coleta, uso e proteção de dados pessoais na plataforma Orla+.",
      },
      docTitle: "POLÍTICA DE PRIVACIDADE – ORLA+",
      intro:
        "Última atualização: 26 de setembro de 2026\nA Orla+ respeita sua privacidade e está comprometida com a proteção dos dados pessoais dos usuários, em conformidade com a LGPD (Lei nº 13.709/2018).",
      s1Title: "1. Dados que coletamos",
      s1Body:
        "Fornecidos por você: nome completo, e-mail, telefone, data de nascimento, CPF ou passaporte, foto de perfil (opcional), dados de reserva. Esses dados são os mesmos para clientes e barraqueiros.\nColetados automaticamente: endereço IP, informações do dispositivo, logs de acesso.",
      s2Title: "2. Para que usamos",
      s2Body:
        "Criar e manter sua conta, confirmar que você tem 18 anos ou mais, processar reservas e pagamentos, enviar confirmações e notificações, prevenir fraude, cumprir obrigações legais.",
      s3Title: "3. Com quem compartilhamos",
      s3Body:
        "Provedores de banco de dados e autenticação e, quando o pagamento é feito pelo app, o parceiro de processamento de pagamentos. Autoridades, quando exigido por lei. Não vendemos seus dados pessoais.",
      s4Title: "4. Seus direitos (LGPD)",
      s4Body:
        "Você pode solicitar acesso, correção, exclusão dos seus dados, ou revogar consentimento, escrevendo para contato@orlamais.com.br. Você também pode excluir sua conta diretamente pelo app, em Perfil → Excluir minha conta — isso remove nome, e-mail, foto e histórico de reservas, respeitado o prazo de retenção exigido por lei.",
      s5Title: "5. Idade mínima",
      s5Body:
        "O Orla+ não é destinado a menores de 18 anos. Não coletamos intencionalmente dados de menores de idade.",
      s6Title: "6. Cookies e tecnologias similares",
      s6Body: "Usamos armazenamento local no aparelho para manter sua sessão logada e melhorar a experiência.",
      s7Title: "7. Alterações",
      s7Body: "Podemos atualizar esta política. Mudanças relevantes exigem novo aceite para continuar usando o app.",
      s8Title: "8. Contato",
      s8Body: "contato@orlamais.com.br — WhatsApp: +55 21 99020-6835",
      footerCopy: "© 2026 Orla+. Política de Privacidade.",
    },
  },
  en: {
    meta: {
      title: "Orla+ | Book your beach before leaving home",
      description:
        "Orla+ connects tourists and locals in Rio de Janeiro with beach vendors to book chairs, umbrellas, tables, drinks and beachside services with ease.",
    },
    nav: {
      home: "Home",
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
    legal: {
      docBadge: "Official Document",
    },
    termsPage: {
      meta: {
        title: "Orla+ | Terms of Use",
        description:
          "Orla+ Terms of Use, covering access rules, reservations, responsibilities and platform usage.",
      },
      hero: {
        pill: "Terms",
        title: "Orla+ Terms of Use",
        subtitle: "Access and usage rules for the Orla+ platform, available on mobile app and web dashboard.",
      },
      docTitle: "TERMS OF USE – ORLA+",
      intro:
        "Orla Mais Tecnologia — CNPJ 69.025.697/0001-51 (Brazilian company registry number)\nLast updated: September 26, 2026",
      s1Title: "1. About Orla+",
      s1Body:
        "Orla+ is a technology platform that connects users to beach vendors for reserving items (chairs, umbrellas, tables, etc.) and, when available, \"Orla Pro\" (the vendor's tab management tool). Orla+ does not own the beach vendors nor employ them — it acts as a technology intermediary.",
      s2Title: "2. Acceptance of Terms",
      s2Body:
        "By creating an account, you confirm you have read and accepted these Terms and the Privacy Policy. If you do not agree, you should not use the app.",
      s3Title: "3. Minimum Age",
      s3Body:
        "Use of Orla+ is restricted to people 18 years of age or older. We do not accept registration from minors, even under a guardian's supervision.",
      s4Title: "4. User Registration",
      s4Body:
        "You must provide truthful information (name, email, phone, date of birth, national ID or passport). You are responsible for keeping your password confidential and for all activity on your account.",
      s5Title: "5. How Reservations Work",
      s5Body:
        "You choose a beach vendor, items, and a time, and submit a reservation request. The vendor may accept or decline. Prices are set by the vendor.",
      s6Title: "6. Payment",
      s6Body:
        "Depending on the vendor and current settings, payment may be made in one of two ways: (a) directly through the app, at the time of the reservation, processed by a payments partner; or (b) in person, directly to the vendor. The app indicates which method applies before you confirm.",
      s7Title: "7. Cancellations and Refunds",
      s7Body:
        "When payment was made through the app: cancellations made in advance receive a full refund; cancellations close to the reserved time (under 10 minutes) or no-shows receive a partial refund, under the rule in effect at the time. When payment is made in person, there is no upfront charge, so there is no refund to process. The vendor may cancel due to stock unavailability or adverse weather.",
      s8Title: "8. Reviews",
      s8Body:
        "After your visit, you may review the vendor. Reviews go through moderation before becoming publicly visible, and may be removed in case of abusive, false, or offensive content.",
      s9Title: "9. Orla Mais' Responsibilities",
      s9Body:
        "Orla+ acts as an intermediary and is not responsible for the quality of service provided by the vendor, nor for damages arising from the use of reserved items.",
      s10Title: "10. Vendors' Responsibilities",
      s10Body:
        "The vendor is responsible for keeping items available, honoring accepted reservations, and complying with the laws applicable to their business.",
      s11Title: "11. Misuse of the App",
      s11Body:
        "It is prohibited to use the app for fraud, creating fake reservations, or any conduct that harms other users or Orla+. Accounts found doing so may be suspended.",
      s12Title: "12. Intellectual Property",
      s12Body:
        "The brand, logo, and content of the app belong to Orla+ and may not be used without authorization.",
      s13Title: "13. Privacy and Data",
      s13Body:
        "The processing of personal data follows our Privacy Policy, in compliance with LGPD. You can read the full policy at any time inside the app, under Profile → View Privacy Policy.",
      s14Title: "14. Your Account",
      s14Body:
        "You may delete your account at any time under Profile → Delete my account. This removes your name, email, photo, and reservation history, subject to the retention period required by law (e.g., tax records).",
      s15Title: "15. Changes to These Terms",
      s15Body:
        "We may update these terms at any time. Material changes require you to accept the new version to keep using the app.",
      s16Title: "16. Governing Law and Jurisdiction",
      s16Body: "These terms are governed by Brazilian law, with jurisdiction in the district of Rio de Janeiro/RJ.",
      s17Title: "17. Contact",
      s17Body: "contato@orlamais.com.br — WhatsApp: +55 21 99020-6835",
      footerCopy: "© 2026 Orla+. Terms of Use.",
    },
    privacyPage: {
      meta: {
        title: "Orla+ | Privacy Policy",
        description:
          "Orla+ Privacy Policy, including information about the collection, use, retention and protection of personal data.",
      },
      hero: {
        pill: "Privacy",
        title: "Orla+ Privacy Policy",
        subtitle: "Information about the collection, use and protection of personal data on the Orla+ platform.",
      },
      docTitle: "PRIVACY POLICY – ORLA+",
      intro:
        "Last updated: September 26, 2026\nOrla+ respects your privacy and is committed to protecting users' personal data, in compliance with Brazil's LGPD (Law No. 13.709/2018).",
      s1Title: "1. Data We Collect",
      s1Body:
        "Provided by you: full name, email, phone, date of birth, national ID or passport, profile photo (optional), reservation data. This is the same for customers and vendors.\nCollected automatically: IP address, device information, access logs.",
      s2Title: "2. Why We Use It",
      s2Body:
        "To create and maintain your account, confirm you are 18 or older, process reservations and payments, send confirmations and notifications, prevent fraud, and comply with legal obligations.",
      s3Title: "3. Who We Share It With",
      s3Body:
        "Database and authentication infrastructure providers and, when payment is made through the app, our payments processing partner. Authorities, when legally required. We do not sell your personal data.",
      s4Title: "4. Your Rights (LGPD)",
      s4Body:
        "You may request access, correction, or deletion of your data, or revoke consent, by writing to contato@orlamais.com.br. You can also delete your account directly in the app, under Profile → Delete my account — this removes your name, email, photo, and reservation history, subject to the retention period required by law.",
      s5Title: "5. Minimum Age",
      s5Body: "Orla+ is not intended for use by anyone under 18. We do not knowingly collect data from minors.",
      s6Title: "6. Cookies and Similar Technologies",
      s6Body: "We use local storage on your device to keep you logged in and improve your experience.",
      s7Title: "7. Changes",
      s7Body: "We may update this policy. Material changes require you to accept again to keep using the app.",
      s8Title: "8. Contact",
      s8Body: "contato@orlamais.com.br — WhatsApp: +55 21 99020-6835",
      footerCopy: "© 2026 Orla+. Privacy Policy.",
    },
  },
  es: {
    meta: {
      title: "Orla+ | Reserva tu playa antes de salir de casa",
      description:
        "Orla+ conecta a turistas y residentes de Río de Janeiro con vendedores de playa para reservar sillas, sombrillas, mesas, bebidas y servicios junto al mar.",
    },
    nav: {
      home: "Inicio",
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
    legal: {
      docBadge: "Documento Oficial",
    },
    termsPage: {
      meta: {
        title: "Orla+ | Términos de Uso",
        description:
          "Términos de Uso de Orla+, con reglas de acceso, reservas, responsabilidades y uso de la plataforma.",
      },
      hero: {
        pill: "Términos",
        title: "Términos de Uso de Orla+",
        subtitle: "Reglas de acceso y uso de la plataforma Orla+ en aplicación móvil y panel web.",
      },
      docTitle: "TÉRMINOS DE USO – ORLA+",
      intro: "Orla Mais Tecnologia — CNPJ 69.025.697/0001-51\nÚltima actualización: 26 de septiembre de 2026",
      s1Title: "1. Sobre Orla+",
      s1Body:
        "Orla+ es una plataforma tecnológica que conecta usuarios con vendedores de playa para reservar artículos (sillas, sombrillas, mesas, etc.) y, cuando esté disponible, con \"Orla Pro\" (gestión de cuentas del vendedor). Orla+ no es propietario de los puestos de playa ni empleador de los vendedores — actúa como intermediario tecnológico.",
      s2Title: "2. Aceptación de los Términos",
      s2Body:
        "Al crear una cuenta, declaras haber leído y aceptado estos Términos y la Política de Privacidad. Si no estás de acuerdo, no debes usar la aplicación.",
      s3Title: "3. Edad Mínima",
      s3Body:
        "El uso de Orla+ está permitido solo para mayores de 18 años. No aceptamos el registro de menores de edad, ni siquiera con supervisión de un responsable.",
      s4Title: "4. Registro del Usuario",
      s4Body:
        "Debes proporcionar datos verdaderos (nombre, correo electrónico, teléfono, fecha de nacimiento, documento de identidad o pasaporte). Eres responsable de mantener tu contraseña en secreto y de toda actividad realizada en tu cuenta.",
      s5Title: "5. Funcionamiento de las Reservas",
      s5Body:
        "Eliges un vendedor, artículos y horario, y envías una solicitud de reserva. El vendedor puede aceptar o rechazar. Los precios los define el vendedor.",
      s6Title: "6. Pago",
      s6Body:
        "Según el vendedor y la configuración vigente, el pago puede hacerse de dos formas: (a) directamente por la aplicación, en el momento de la reserva, procesado por un socio de pagos; o (b) en el lugar, directamente al vendedor. La aplicación indica qué modalidad aplica antes de confirmar.",
      s7Title: "7. Cancelaciones y Reembolsos",
      s7Body:
        "Cuando el pago se hizo por la app: las cancelaciones con anticipación reciben reembolso íntegro; las cancelaciones cercanas al horario reservado (menos de 10 minutos) o la no presentación reciben reembolso parcial, según la regla vigente. Cuando el pago es en el lugar, no hay cobro previo, por lo tanto no hay reembolso que procesar. El vendedor puede cancelar por falta de stock o condiciones climáticas adversas.",
      s8Title: "8. Reseñas",
      s8Body:
        "Después de la atención, puedes reseñar al vendedor. Las reseñas pasan por moderación antes de ser visibles públicamente, y pueden eliminarse en caso de contenido abusivo, falso u ofensivo.",
      s9Title: "9. Responsabilidades de Orla Mais",
      s9Body:
        "Orla+ actúa como intermediario y no se responsabiliza por la calidad del servicio prestado por el vendedor, ni por daños derivados del uso de los artículos reservados.",
      s10Title: "10. Responsabilidades de los Vendedores",
      s10Body:
        "El vendedor es responsable de mantener los artículos disponibles, cumplir las reservas aceptadas y respetar la legislación aplicable a su negocio.",
      s11Title: "11. Uso Indebido de la Aplicación",
      s11Body:
        "Está prohibido usar la app para fraude, crear reservas falsas, o cualquier conducta que perjudique a otros usuarios o a Orla+. Las cuentas en esa situación pueden ser suspendidas.",
      s12Title: "12. Propiedad Intelectual",
      s12Body:
        "La marca, el logotipo y el contenido de la app pertenecen a Orla+ y no pueden usarse sin autorización.",
      s13Title: "13. Privacidad y Datos",
      s13Body:
        "El tratamiento de datos personales sigue nuestra Política de Privacidad, conforme a la LGPD. Puedes leer la política completa en cualquier momento dentro de la app, en Perfil → Ver Política de Privacidad.",
      s14Title: "14. Tu Cuenta",
      s14Body:
        "Puedes eliminar tu cuenta en cualquier momento en Perfil → Eliminar mi cuenta. Esto elimina nombre, correo, foto e historial de reservas, respetando el plazo de retención exigido por ley (ej: datos fiscales).",
      s15Title: "15. Cambios en los Términos",
      s15Body:
        "Podemos actualizar estos términos en cualquier momento. Los cambios relevantes exigen que aceptes la nueva versión para seguir usando la app.",
      s16Title: "16. Legislación y Fuero",
      s16Body:
        "Estos términos se rigen por la legislación brasileña, con jurisdicción en la comarca de Río de Janeiro/RJ.",
      s17Title: "17. Contacto",
      s17Body: "contato@orlamais.com.br — WhatsApp: +55 21 99020-6835",
      footerCopy: "© 2026 Orla+. Términos de Uso.",
    },
    privacyPage: {
      meta: {
        title: "Orla+ | Política de Privacidad",
        description:
          "Política de Privacidad de Orla+, con información sobre la recopilación, uso, retención y protección de datos personales.",
      },
      hero: {
        pill: "Privacidad",
        title: "Política de Privacidad de Orla+",
        subtitle: "Información sobre la recopilación, uso y protección de datos personales en la plataforma Orla+.",
      },
      docTitle: "POLÍTICA DE PRIVACIDAD – ORLA+",
      intro:
        "Última actualización: 26 de septiembre de 2026\nOrla+ respeta tu privacidad y está comprometida con la protección de los datos personales de los usuarios, conforme a la LGPD (Ley n.º 13.709/2018).",
      s1Title: "1. Datos que Recopilamos",
      s1Body:
        "Proporcionados por ti: nombre completo, correo electrónico, teléfono, fecha de nacimiento, documento de identidad o pasaporte, foto de perfil (opcional), datos de reserva. Son los mismos datos para clientes y vendedores.\nRecopilados automáticamente: dirección IP, información del dispositivo, registros de acceso.",
      s2Title: "2. Para qué los Usamos",
      s2Body:
        "Crear y mantener tu cuenta, confirmar que tienes 18 años o más, procesar reservas y pagos, enviar confirmaciones y notificaciones, prevenir fraude, cumplir obligaciones legales.",
      s3Title: "3. Con quién los Compartimos",
      s3Body:
        "Proveedores de base de datos y autenticación y, cuando el pago se hace por la app, nuestro socio de procesamiento de pagos. Autoridades, cuando la ley lo exija. No vendemos tus datos personales.",
      s4Title: "4. Tus Derechos (LGPD)",
      s4Body:
        "Puedes solicitar acceso, corrección o eliminación de tus datos, o revocar el consentimiento, escribiendo a contato@orlamais.com.br. También puedes eliminar tu cuenta directamente en la app, en Perfil → Eliminar mi cuenta — esto elimina nombre, correo, foto e historial de reservas, respetando el plazo de retención exigido por ley.",
      s5Title: "5. Edad Mínima",
      s5Body: "Orla+ no está destinado a menores de 18 años. No recopilamos intencionalmente datos de menores.",
      s6Title: "6. Cookies y Tecnologías Similares",
      s6Body: "Usamos almacenamiento local en tu dispositivo para mantener tu sesión iniciada y mejorar tu experiencia.",
      s7Title: "7. Cambios",
      s7Body: "Podemos actualizar esta política. Los cambios relevantes exigen un nuevo consentimiento para seguir usando la app.",
      s8Title: "8. Contacto",
      s8Body: "contato@orlamais.com.br — WhatsApp: +55 21 99020-6835",
      footerCopy: "© 2026 Orla+. Política de Privacidad.",
    },
  },
};

const defaultLanguage = "pt-BR";
const languageFlags = {
  "pt-BR": "🇧🇷",
  en: "🇺🇸",
  es: "🇪🇸",
};
const languageLabels = {
  "pt-BR": "Português",
  en: "English",
  es: "Español",
};
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

  const pageKey = document.body.dataset.i18nPage;
  const pageMeta = pageKey ? dictionary[pageKey]?.meta : null;
  const meta = pageMeta || dictionary.meta;

  document.title = meta.title;

  if (metaDescription) {
    metaDescription.setAttribute("content", meta.description);
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
    button.textContent = languageFlags[button.dataset.lang] || button.dataset.lang.toUpperCase();
    button.setAttribute("aria-label", languageLabels[button.dataset.lang] || button.dataset.lang);
    button.setAttribute("title", languageLabels[button.dataset.lang] || button.dataset.lang);
  });

  if (languageCurrent) {
    languageCurrent.textContent = languageFlags[selectedLanguage] || selectedLanguage.toUpperCase();
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
