import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const { t } = useLanguage();

  return (
    <section className="px-6 md:px-12 lg:px-16 py-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4"
      >
        {t.academicBackground}
      </motion.p>

      <div className="max-w-xl">
        {t.educationItems.map((edu, i) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="flex items-baseline justify-between py-2 border-b border-border/40 last:border-b-0"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-foreground">{edu.title}</span>
              <span className="text-xs text-muted-foreground">— {edu.institution}</span>
            </div>
            <span className="text-xs text-muted-foreground/70 shrink-0 ml-4">{edu.period}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
