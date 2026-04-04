import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "pt" | "en";

const translations = {
  pt: {
    // Header
    webDeveloper: "Desenvolvedora Web",
    resume: "Currículo",
    // Hero
    heroTitle: (
      <>
        <span className="text-primary">Desenvolvedora Web</span> transformando ideias em experiências digitais com foco em performance e conversão
      </>
    ),
    availableForProjects: "Disponível para novos projetos",
    location: "São Paulo, SP · Full Stack · PHP, JavaScript, WordPress",
    // About
    aboutMe: "Sobre mim",
    aboutP1: "Sou Bruna Lima, desenvolvedora paulistana nascida em 1992. Minha paixão por programação começou na adolescência quando descobri o mundo dos blogs e comecei a criar minhas próprias páginas web.",
    aboutP2: "Iniciei meus estudos em 2013 e trabalho profissionalmente na área desde 2016. Sou pós-graduada em Engenharia de Software com Metodologias Ágeis. Minha especialidade é o desenvolvimento de aplicações web utilizando PHP (MVC, Procedural), MySQL e JavaScript, com sólida experiência em WordPress.",
    aboutP3: "Fora do mundo tech, você me encontra explorando museus, fazendo crochê, aproveitando o sol ou curtindo um bom show de rock.",
    services: [
      "Desenvolvimento full stack",
      "Suporte & manutenção",
      "Otimização de desempenho",
      "Integração de APIs",
      "Discovery & prototipação",
      "Implementação pixel perfect",
    ],
    // Skills
    skills: "Habilidades",
    tools: "Ferramentas",
    // Experience
    professionalExperience: "Experiência Profissional",
    experiences: [
      { company: "Hypera Pharma", role: "Analista Desenvolvedora Web Pleno", period: "06/2023 - 11/2024" },
      { company: "Colmeia Performance Digital", role: "Desenvolvedora Web", period: "10/2021 - 05/2023" },
      { company: "Fuerza Studio", role: "Desenvolvedora Front-end", period: "05/2021 - 09/2021" },
      { company: "Enube.me", role: "Desenvolvedora Front-end", period: "12/2020 - 04/2021" },
      { company: "Autônoma", role: "Desenvolvedora Web", period: "08/2016 - 11/2020" },
    ],
    // Projects
    portfolio: "Portfólio",
    projectDescriptions: [
      "Redesign completo. Front-end, back-end e reestruturação do banco de dados. Páginas de produtos segmentadas por categorias, otimização de SEO e performance.",
      "Redesign e reestruturação completa do conteúdo para a nova linha de produtos baby. Front-end, back-end, otimização de SEO e melhorias na performance.",
      "Desenvolvimento de landing pages otimizadas em SEO e performance para campanhas de produtos, com captação de leads.",
      "Landing page da promoção Neo Química Vale por Dois, com um buscador de farmácias integrado via API REST.",
      "Novo portal integrado ao serviço Interplayers. Área médica e paciente, adesão a medicamentos. Front-end, back-end e reestruturação do banco de dados.",
    ],
    viewMoreGithub: "Ver mais no GitHub →",
    // Education
    academicBackground: "Formação Acadêmica",
    educationItems: [
      { type: "Especialização", title: "Pós-graduação em Engenharia de Software com Metodologias Ágeis", institution: "Universidade Cruzeiro do Sul", period: "2024 - 2025" },
      { type: "Graduação", title: "Tecnólogo em Análise e Desenvolvimento de Sistemas", institution: "FATEC Ipiranga", period: "2016 - 2020" },
      { type: "Técnico", title: "Técnico em Informática", institution: "ETEC de Heliópolis", period: "2013 - 2014" },
      { type: "Técnico", title: "Técnico em Administração", institution: "ETEC Getúlio Vargas", period: "2015 - 2016" },
    ],
    // Contact
    letsChat: "Vamos conversar?",
    needADev: "Precisa de uma desenvolvedora?",
    contactText: "Estou sempre aberta a novas oportunidades e projetos interessantes. Se quiser trocar uma ideia, é só me chamar!",
    hireMe: "Me contrate!",
    copyright: "© 2025 Bruna Lima. Todos os direitos reservados.",
  },
  en: {
    webDeveloper: "Web Developer",
    resume: "Resume",
    heroTitle: (
      <>
        <span className="text-primary">Web Developer</span> turning ideas into digital experiences focused on performance and conversion
      </>
    ),
    availableForProjects: "Available for new projects",
    location: "São Paulo, Brazil · Full Stack · PHP, JavaScript, WordPress",
    aboutMe: "About me",
    aboutP1: "I'm Bruna Lima, a developer from São Paulo, born in 1992. My passion for programming started in my teens when I discovered the blogging world and began creating my own web pages.",
    aboutP2: "I started studying in 2013 and have been working professionally since 2016. I hold a postgraduate degree in Software Engineering with Agile Methodologies. My specialty is web application development using PHP (MVC, Procedural), MySQL and JavaScript, with solid experience in WordPress.",
    aboutP3: "Outside the tech world, you'll find me exploring museums, crocheting, enjoying the sun, or at a good rock concert.",
    services: [
      "Full stack development",
      "Support & maintenance",
      "Performance optimization",
      "API integration",
      "Discovery & prototyping",
      "Pixel perfect implementation",
    ],
    skills: "Skills",
    tools: "Tools",
    professionalExperience: "Professional Experience",
    experiences: [
      { company: "Hypera Pharma", role: "Mid-Level Web Developer Analyst", period: "06/2023 - 11/2024" },
      { company: "Colmeia Performance Digital", role: "Web Developer", period: "10/2021 - 05/2023" },
      { company: "Fuerza Studio", role: "Front-end Developer", period: "05/2021 - 09/2021" },
      { company: "Enube.me", role: "Front-end Developer", period: "12/2020 - 04/2021" },
      { company: "Freelancer", role: "Web Developer", period: "08/2016 - 11/2020" },
    ],
    portfolio: "Portfolio",
    projectDescriptions: [
      "Complete redesign. Front-end, back-end and database restructuring. Product pages segmented by categories, SEO and performance optimization.",
      "Full redesign and content restructuring for the new baby product line. Front-end, back-end, SEO optimization and performance improvements.",
      "Development of SEO and performance-optimized landing pages for product campaigns with lead capture.",
      "Landing page for the Neo Química Vale por Dois promotion, with a pharmacy finder integrated via REST API.",
      "New portal integrated with the Interplayers service. Medical and patient area, medication adherence. Front-end, back-end and database restructuring.",
    ],
    viewMoreGithub: "View more on GitHub →",
    academicBackground: "Education",
    educationItems: [
      { type: "Specialization", title: "Postgraduate in Software Engineering with Agile Methodologies", institution: "Universidade Cruzeiro do Sul", period: "2024 - 2025" },
      { type: "Bachelor's", title: "Systems Analysis and Development", institution: "FATEC Ipiranga", period: "2016 - 2020" },
      { type: "Technical", title: "IT Technician", institution: "ETEC de Heliópolis", period: "2013 - 2014" },
      { type: "Technical", title: "Business Administration Technician", institution: "ETEC de Heliópolis", period: "2011 - 2012" },
    ],
    letsChat: "Let's talk?",
    needADev: "Need a developer?",
    contactText: "I'm always open to new opportunities and interesting projects. If you'd like to chat, just reach out!",
    hireMe: "Hire me!",
    copyright: "© 2025 Bruna Lima. All rights reserved.",
  },
} as const;

type Translations = (typeof translations)[Lang];

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("lang") as Lang) || "pt";
    }
    return "pt";
  });

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
