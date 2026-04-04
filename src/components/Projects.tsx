import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectsData } from "@/data/projects";

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section className="px-6 md:px-12 lg:px-16 py-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium text-primary mb-8"
      >
        {t.portfolio}
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to={`/projeto/${project.slug}`}
              className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <h3 className="font-heading font-semibold text-foreground">{project.title}</h3>
                <span className="text-xs text-primary font-medium">{t.viewDetails} →</span>
              </div>
            </Link>
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
          {t.viewMoreGithub}
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
