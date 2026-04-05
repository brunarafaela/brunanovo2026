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
        className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4"
      >
        {t.professionalExperience}
      </motion.p>

      <div className="max-w-xl">
        {t.experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="flex items-baseline justify-between py-2 border-b border-border/40 last:border-b-0"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-foreground">{exp.role}</span>
              <span className="text-xs text-muted-foreground">— {exp.company}</span>
            </div>
            <span className="text-xs text-muted-foreground/70 shrink-0 ml-4">{exp.period}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
