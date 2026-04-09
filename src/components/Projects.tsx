import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectsData } from "@/data/projects";

const Projects = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => setActiveIndex((i) => (i + 1) % projectsData.length);
  const goPrev = () => setActiveIndex((i) => (i - 1 + projectsData.length) % projectsData.length);

  const activeProject = projectsData[activeIndex];

  return (
    <section className="px-6 md:px-12 lg:px-16 py-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium text-primary mb-2"
      >
        {t.portfolio}
      </motion.p>

      {/* Main showcase */}
      <div className="relative mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Link
              to={`/projeto/${activeProject.slug}`}
              className="group block relative rounded-2xl overflow-hidden border border-border/30 bg-card"
            >
              <div className="aspect-[16/7] md:aspect-[16/6] overflow-hidden">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                    {activeProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {activeProject.techs.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] md:text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="hidden md:flex items-center gap-1.5 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                  {t.viewDetails}
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-3 md:left-4 z-10">
          <button
            onClick={(e) => { e.preventDefault(); goPrev(); }}
            className="p-2 rounded-full bg-card/80 backdrop-blur-md border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all shadow-lg"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-3 md:right-4 z-10">
          <button
            onClick={(e) => { e.preventDefault(); goNext(); }}
            className="p-2 rounded-full bg-card/80 backdrop-blur-md border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all shadow-lg"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
        {projectsData.map((project, i) => (
          <button
            key={project.slug}
            onClick={() => setActiveIndex(i)}
            className={`relative shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              i === activeIndex
                ? "border-primary shadow-md shadow-primary/20 scale-105"
                : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-20 h-14 md:w-28 md:h-16 object-cover"
            />
            {i === activeIndex && (
              <motion.div
                layoutId="thumb-indicator"
                className="absolute inset-0 border-2 border-primary rounded-xl"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-1.5 mt-4">
        {projectsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-6 h-1.5 bg-primary"
                : "w-1.5 h-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <a
          href="https://www.flickr.com/photos/156816884@N08/with/51119657659"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline font-bold"
        >
          {t.viewMoreGithub}
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
