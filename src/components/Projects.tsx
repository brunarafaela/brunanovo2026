import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectsData } from "@/data/projects";

const ITEMS_PER_PAGE = 3;

const Projects = () => {
  const { t } = useLanguage();
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);
  const visible = projectsData.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <section className="px-6 md:px-12 lg:px-16 py-20">
      <div className="flex items-center justify-between mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-primary"
        >
          {t.portfolio}
        </motion.p>
        {totalPages > 1 && (
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="p-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
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
