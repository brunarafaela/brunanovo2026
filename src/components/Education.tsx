import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const { t } = useLanguage();

  return (
    <section className="px-6 md:px-12 lg:px-16 py-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium text-primary mb-10"
      >
        {t.academicBackground}
      </motion.p>

      <div className="flex flex-col divide-y divide-border">
        {t.educationItems.map((edu, i) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="py-6 first:pt-0 last:pb-0"
          >
            <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-1">
              {edu.title}
            </h3>
            <p className="text-sm text-muted-foreground">{edu.institution}</p>
            <p className="text-xs text-muted-foreground/60 mt-1">{edu.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
