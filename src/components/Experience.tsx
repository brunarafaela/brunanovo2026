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

      <div className="flex flex-col gap-3 max-w-4xl">
        {t.experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="p-4 rounded-lg border border-border/40 bg-card/50"
          >
            <span className="text-sm font-medium text-foreground block">{exp.role}</span>
            <span className="text-xs text-muted-foreground">{exp.company}</span>
            <span className="text-xs text-muted-foreground/70 block mt-1">{exp.period}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
