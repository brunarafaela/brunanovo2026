import { motion } from "framer-motion";

const projects = [
  {
    title: "Hypera Pharma",
    description: "Redesign completo. Front-end, back-end e reestruturação do banco de dados. Páginas de produtos segmentadas por categorias, otimização de SEO e performance.",
    image: "https://www.brunarafaela.online/assets/hypera-pharma-CXVxjGj_.webp",
    techs: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Docker", "SEO"],
  },
  {
    title: "Nebacetin",
    description: "Redesign e reestruturação completa do conteúdo para a nova linha de produtos baby. Front-end, back-end, otimização de SEO e melhorias na performance.",
    image: "https://www.brunarafaela.online/assets/nebacetin-2KQgqhf0.webp",
    techs: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Docker", "SEO"],
  },
  {
    title: "Mantecorp Skincare",
    description: "Desenvolvimento de landing pages otimizadas em SEO e performance para campanhas de produtos, com captação de leads.",
    image: "https://www.brunarafaela.online/assets/mantecorp-skincare-BLFotFap.webp",
    techs: ["PHP", "JavaScript", "Bootstrap", "Figma", "SEO", "GTM"],
  },
  {
    title: "Neo Química Vale por Dois",
    description: "Landing page da promoção Neo Química Vale por Dois, com um buscador de farmácias integrado via API REST.",
    image: "https://www.brunarafaela.online/assets/neo-quimica-DGJ6ZhmW.webp",
    techs: ["PHP", "MySQL", "JavaScript", "Docker", "API REST"],
  },
  {
    title: "Mantecorp Saúde",
    description: "Novo portal integrado ao serviço Interplayers. Área médica e paciente, adesão a medicamentos. Front-end, back-end e reestruturação do banco de dados.",
    image: "https://www.brunarafaela.online/assets/mantecorp-saude-CTJ-e8a6.webp",
    techs: ["PHP", "MySQL", "API REST", "Docker", "Azure DevOps", "SEO"],
  },
];

const Projects = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium text-primary mb-8"
      >
        Portfólio
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <a
          href="https://github.com/brunarafaela?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline"
        >
          Ver mais no GitHub →
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
