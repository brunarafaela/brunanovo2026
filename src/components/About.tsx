import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import profilePhoto from "@/assets/profile-photo.webp";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="px-6 md:px-12 lg:px-16 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profilePhoto}
            alt="Bruna Lima"
            className="w-full max-w-sm rounded-2xl object-cover aspect-square"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-sm font-medium text-primary mb-2">{t.aboutMe}</p>
          <p className="text-foreground leading-relaxed mb-4">{t.aboutP1}</p>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.aboutP2}</p>
          <p className="text-muted-foreground leading-relaxed mb-8">{t.aboutP3}</p>

          <div className="grid grid-cols-2 gap-3">
            {t.services.map((service) => (
              <div key={service} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-primary">▹</span>
                {service}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
