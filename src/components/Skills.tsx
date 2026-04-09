import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Server, Cloud, Layout, Wrench, BarChart3 } from "lucide-react";

const skillGroups = [
  { label: "Frontend", icon: Code2, skills: ["HTML", "CSS", "SCSS/SASS", "Bootstrap", "JavaScript", "jQuery", "Handlebars.js", "Vue.js"] },
  { label: "Backend", icon: Server, skills: ["POO", "PHP", "MySQL", "MVC", "API REST"] },
  { label: "DevOps", icon: Cloud, skills: ["Azure DevOps", "Cloud Azure", "Docker", "Git", "CI/CD"] },
  { label: "CMS/WordPress", icon: Layout, skills: ["Themes", "ACF", "Post Types", "Elementor", "WooCommerce"] },
  { labelKey: "tools" as const, icon: Wrench, skills: ["Figma", "Adobe Photoshop", "UML", "Trello", "Slack"] },
  { label: "Analytics/SEO", icon: BarChart3, skills: ["GTM", "Google Analytics", "Google Search Console"] },
];

const Skills = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = skillGroups[activeIndex];
  const ActiveIcon = activeGroup.icon;

  return (
    <section className="px-6 md:px-12 lg:px-16 py-20 bg-card">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium text-primary mb-2"
      >
        {t.skills}
      </motion.p>

      <div className="relative mt-6">
        {/* Main showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-2xl border border-border/30 bg-background p-6 md:p-10 min-h-[220px] flex flex-col items-center justify-center text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <ActiveIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-5">
              {activeGroup.labelKey ? t[activeGroup.labelKey] : activeGroup.label}
            </h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-xl">
              {activeGroup.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails / tabs */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <button
              key={group.label || group.labelKey}
              onClick={() => setActiveIndex(i)}
              className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 transition-all duration-300 text-sm font-medium ${
                i === activeIndex
                  ? "border-primary bg-primary/10 text-primary shadow-md shadow-primary/20 scale-105"
                  : "border-transparent bg-muted/50 text-muted-foreground opacity-60 hover:opacity-90"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{group.labelKey ? t[group.labelKey] : group.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-1.5 mt-4">
        {skillGroups.map((_, i) => (
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
    </section>
  );
};

export default Skills;
