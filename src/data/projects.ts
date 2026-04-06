import hyperaPharmaImg from "@/assets/hypera-pharma.png";
import nebacetinImg from "@/assets/nebacetin.png";
import mantecorpSkincareImg from "@/assets/mantecorp-skincare.png";
import neoQuimicaImg from "@/assets/neo-quimica.png";
import mantecorpSaudeImg from "@/assets/mantecorp-saude.png";

export interface Project {
  slug: string;
  title: string;
  image: string;
  techs: string[];
  url?: string;
}

export const projectsData: Project[] = [
  {
    slug: "hypera-pharma",
    title: "Hypera Pharma",
    image: hyperaPharmaImg,
    techs: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Docker", "SEO"],
    url: "https://www.hypera.com.br",
  },
  {
    slug: "nebacetin",
    title: "Nebacetin",
    image: nebacetinImg,
    techs: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Docker", "SEO"],
    url: "https://www.nebacetin.com.br",
  },
  {
    slug: "mantecorp-skincare",
    title: "Mantecorp Skincare",
    image: mantecorpSkincareImg,
    techs: ["PHP", "JavaScript", "Bootstrap", "Figma", "SEO", "GTM"],
    url: "https://www.mantecorpskincare.com.br",
  },
  {
    slug: "neo-quimica-vale-por-dois",
    title: "Neo Química Vale por Dois",
    image: "https://www.brunarafaela.online/assets/neo-quimica-DGJ6ZhmW.webp",
    techs: ["PHP", "MySQL", "JavaScript", "Docker", "API REST"],
  },
  {
    slug: "mantecorp-saude",
    title: "Mantecorp Saúde",
    image: "https://www.brunarafaela.online/assets/mantecorp-saude-CTJ-e8a6.webp",
    techs: ["PHP", "MySQL", "API REST", "Docker", "Azure DevOps", "SEO"],
    url: "https://www.mantecorpsaude.com.br",
  },
];

export const projectDetails = {
  pt: [
    {
      description: "Redesign completo. Front-end, back-end e reestruturação do banco de dados. Páginas de produtos segmentadas por categorias, otimização de SEO e performance.",
      challenge: "O site anterior da Hypera Pharma apresentava uma estrutura desatualizada, com páginas lentas e pouca organização dos produtos por categoria. A navegação era confusa e o SEO estava mal implementado.",
      solution: "Realizei o redesign completo do portal, reestruturando tanto o front-end quanto o back-end. Criei um novo modelo de banco de dados para organizar produtos por categorias e marcas. Implementei otimizações de SEO on-page, lazy loading de imagens e cache inteligente.",
      results: "Melhoria significativa nos tempos de carregamento, aumento do tráfego orgânico e melhor experiência do usuário com navegação intuitiva por categorias de produtos.",
      role: "Analista Desenvolvedora Web Pleno",
      duration: "6 meses",
    },
    {
      description: "Redesign e reestruturação completa do conteúdo para a nova linha de produtos baby. Front-end, back-end, otimização de SEO e melhorias na performance.",
      challenge: "A Nebacetin lançou uma nova linha de produtos baby e precisava de um site renovado que refletisse o novo posicionamento da marca, mantendo o conteúdo existente organizado.",
      solution: "Desenvolvi o redesign completo do site com foco na nova linha baby, criando seções dedicadas para cada produto. Reestruturei o conteúdo com hierarquia clara e implementei melhorias de SEO técnico.",
      results: "Site moderno e responsivo que destaca a linha baby, com melhor rankeamento nas buscas e aumento no tempo de permanência dos visitantes.",
      role: "Analista Desenvolvedora Web Pleno",
      duration: "4 meses",
    },
    {
      description: "Desenvolvimento de landing pages otimizadas em SEO e performance para campanhas de produtos, com captação de leads.",
      challenge: "A Mantecorp Skincare precisava de landing pages rápidas e otimizadas para campanhas de marketing digital, com formulários de captação de leads integrados ao CRM.",
      solution: "Criei landing pages com design focado em conversão, formulários integrados e rastreamento via GTM. Utilizei técnicas de otimização de performance como minificação, compressão de imagens e código enxuto.",
      results: "Landing pages com alta taxa de conversão, carregamento rápido e tracking completo das campanhas de marketing.",
      role: "Desenvolvedora Web",
      duration: "3 meses",
    },
    {
      description: "Landing page da promoção Neo Química Vale por Dois, com um buscador de farmácias integrado via API REST.",
      challenge: "A promoção Neo Química Vale por Dois exigia uma landing page interativa com buscador de farmácias participantes em todo o Brasil, integrado a uma API REST externa.",
      solution: "Desenvolvi a landing page promocional com um buscador de farmácias por CEP/cidade utilizando API REST. Implementei geolocalização, filtros e exibição em mapa das farmácias participantes.",
      results: "Plataforma funcional que facilitou a busca por farmácias, contribuindo para o sucesso da campanha promocional.",
      role: "Desenvolvedora Web",
      duration: "2 meses",
    },
    {
      description: "Novo portal integrado ao serviço Interplayers. Área médica e paciente, adesão a medicamentos. Front-end, back-end e reestruturação do banco de dados.",
      challenge: "A Mantecorp Saúde precisava de um portal que integrasse serviços de adesão a medicamentos com áreas separadas para médicos e pacientes, conectado à plataforma Interplayers.",
      solution: "Desenvolvi o portal completo com autenticação por perfil (médico/paciente), integração com a API Interplayers, painel de acompanhamento de adesão e reestruturação do banco de dados.",
      results: "Portal funcional que facilitou a adesão a medicamentos, melhorando a comunicação entre médicos, pacientes e a indústria farmacêutica.",
      role: "Analista Desenvolvedora Web Pleno",
      duration: "5 meses",
    },
  ],
  en: [
    {
      description: "Complete redesign. Front-end, back-end and database restructuring. Product pages segmented by categories, SEO and performance optimization.",
      challenge: "Hypera Pharma's previous site had an outdated structure with slow pages and poor product categorization. Navigation was confusing and SEO was poorly implemented.",
      solution: "I performed a complete portal redesign, restructuring both front-end and back-end. Created a new database model to organize products by categories and brands. Implemented on-page SEO optimizations, image lazy loading and smart caching.",
      results: "Significant improvement in load times, increased organic traffic and better user experience with intuitive product category navigation.",
      role: "Mid-Level Web Developer Analyst",
      duration: "6 months",
    },
    {
      description: "Full redesign and content restructuring for the new baby product line. Front-end, back-end, SEO optimization and performance improvements.",
      challenge: "Nebacetin launched a new baby product line and needed a renewed website reflecting the new brand positioning while keeping existing content organized.",
      solution: "I developed a complete site redesign focused on the new baby line, creating dedicated sections for each product. Restructured content with clear hierarchy and implemented technical SEO improvements.",
      results: "Modern and responsive site highlighting the baby line, with better search rankings and increased visitor dwell time.",
      role: "Mid-Level Web Developer Analyst",
      duration: "4 months",
    },
    {
      description: "Development of SEO and performance-optimized landing pages for product campaigns with lead capture.",
      challenge: "Mantecorp Skincare needed fast, optimized landing pages for digital marketing campaigns with lead capture forms integrated with the CRM.",
      solution: "I created conversion-focused landing pages with integrated forms and GTM tracking. Used performance optimization techniques like minification, image compression and lean code.",
      results: "Landing pages with high conversion rates, fast loading and complete marketing campaign tracking.",
      role: "Web Developer",
      duration: "3 months",
    },
    {
      description: "Landing page for the Neo Química Vale por Dois promotion with a pharmacy finder integrated via REST API.",
      challenge: "The Neo Química Vale por Dois promotion required an interactive landing page with a search for participating pharmacies across Brazil, integrated with an external REST API.",
      solution: "I developed the promotional landing page with a pharmacy finder by ZIP code/city using REST API. Implemented geolocation, filters and map display of participating pharmacies.",
      results: "Functional platform that facilitated pharmacy searches, contributing to the success of the promotional campaign.",
      role: "Web Developer",
      duration: "2 months",
    },
    {
      description: "New portal integrated with Interplayers service. Medical and patient area, medication adherence. Front-end, back-end and database restructuring.",
      challenge: "Mantecorp Saúde needed a portal integrating medication adherence services with separate areas for doctors and patients, connected to the Interplayers platform.",
      solution: "I developed the complete portal with profile authentication (doctor/patient), Interplayers API integration, adherence tracking panel and database restructuring.",
      results: "Functional portal that facilitated medication adherence, improving communication between doctors, patients and the pharmaceutical industry.",
      role: "Mid-Level Web Developer Analyst",
      duration: "5 months",
    },
  ],
};
