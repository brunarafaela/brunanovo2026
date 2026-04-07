import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className="px-6 md:px-12 lg:px-16 py-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-6"
      >
        {t.professionalExperience}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        {t.experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-4 rounded-lg border border-border/40 bg-muted/20 hover:bg-muted/40 transition-colors"
          >
            <h3 className="text-sm text-foreground leading-snug">{exp.role}</h3>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-muted-foreground">{exp.company}</span>
              <span className="text-xs text-muted-foreground/60">{exp.period}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
