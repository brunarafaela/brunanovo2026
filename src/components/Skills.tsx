import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const skillGroups = [
  { label: "Frontend", skills: "HTML, CSS, SCSS/SASS, Bootstrap, JavaScript, jQuery, Handlebars.js, Vue.js" },
  { label: "Backend", skills: "POO, PHP, MySQL, MVC, API REST" },
  { label: "DevOps", skills: "Azure DevOps, Cloud Azure, Docker, Git, CI/CD" },
  { label: "CMS/WordPress", skills: "Themes, ACF, Post Types, Elementor, WooCommerce" },
  { labelKey: "tools" as const, skills: "Figma, Adobe Photoshop, UML, Trello, Slack" },
  { label: "Analytics/SEO", skills: "GTM, Google Analytics, Google Search Console" },
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="px-6 md:px-12 lg:px-16 py-20 bg-card">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium text-primary mb-8"
      >
        {t.skills}
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label || group.labelKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <h3 className="font-heading font-semibold text-foreground mb-2">
              {group.labelKey ? t[group.labelKey] : group.label}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{group.skills}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
