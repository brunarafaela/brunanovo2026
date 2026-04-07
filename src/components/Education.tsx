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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        {t.educationItems.map((edu, i) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="p-4 rounded-lg border border-border/40 bg-card/50"
          >
            <span className="text-sm font-medium text-foreground block">{edu.title}</span>
            <span className="text-xs text-muted-foreground">{edu.institution}</span>
            <span className="text-xs text-muted-foreground/70 block mt-1">{edu.period}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
