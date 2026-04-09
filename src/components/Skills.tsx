import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Monitor, Server, Cloud, Layout, PenTool, BarChart3 } from "lucide-react";

const skillGroups = [
  { label: "Frontend", icon: Monitor, skills: ["HTML", "CSS", "SCSS/SASS", "Bootstrap", "JavaScript", "jQuery", "Handlebars.js", "Vue.js"] },
  { label: "Backend", icon: Server, skills: ["POO", "PHP", "MySQL", "MVC", "API REST"] },
  { label: "DevOps", icon: Cloud, skills: ["Azure DevOps", "Cloud Azure", "Docker", "Git", "CI/CD"] },
  { label: "CMS/WordPress", icon: Layout, skills: ["Themes", "ACF", "Post Types", "Elementor", "WooCommerce"] },
  { labelKey: "tools" as const, icon: PenTool, skills: ["Figma", "Adobe Photoshop", "UML", "Trello", "Slack"] },
  { label: "Analytics/SEO", icon: BarChart3, skills: ["GTM", "Google Analytics", "Google Search Console"] },
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="px-6 md:px-12 lg:px-16 py-20 bg-background">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium text-primary mb-10"
      >
        {t.skills}
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.label || group.labelKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm">
                  {group.labelKey ? t[group.labelKey] : group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
