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
        className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-6"
      >
        {t.academicBackground}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        {t.educationItems.map((edu, i) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-4 rounded-lg border border-border/40 bg-muted/20 hover:bg-muted/40 transition-colors"
          >
            <span className="text-[10px] uppercase tracking-widest text-primary/70 font-medium">{edu.type}</span>
            <h3 className="text-sm text-foreground mt-1 leading-snug">{edu.title}</h3>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-muted-foreground">{edu.institution}</span>
              <span className="text-xs text-muted-foreground/60">{edu.period}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
