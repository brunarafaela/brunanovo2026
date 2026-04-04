import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className="px-6 md:px-12 lg:px-16 py-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium text-primary mb-8"
      >
        {t.professionalExperience}
      </motion.p>

      <div className="space-y-0">
        {t.experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="py-5 border-b border-border last:border-b-0"
          >
            <p className="font-heading font-semibold text-foreground text-sm">{exp.role}</p>
            <p className="text-xs text-muted-foreground mt-1">{exp.company} · {exp.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
