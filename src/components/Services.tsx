import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  return (
    <section className="px-6 md:px-12 lg:px-16 py-20 bg-card">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {t.services.map((service, i) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-start gap-3"
          >
            <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
            <span className="font-heading text-base md:text-lg font-medium text-foreground">
              {service}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
