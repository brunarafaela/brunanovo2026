import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const techsByCompany = [
  ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "SCSS", "Bootstrap", "Docker", "Azure DevOps", "Git"],
  ["WordPress", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "SCSS", "ACF", "SEO"],
  ["WordPress", "PHP", "JavaScript", "HTML", "CSS", "SCSS", "jQuery", "Liferay"],
  ["JavaScript", "HTML", "CSS", "Vue.js", "Git"],
  ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "WordPress", "jQuery", "Bootstrap"],
];

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
            className="group py-6 border-b border-border last:border-b-0 grid md:grid-cols-[200px_1fr] gap-4"
          >
            <div>
              <p className="text-xs text-muted-foreground">{exp.period}</p>
              <p className="text-sm font-medium text-foreground mt-1">{exp.company}</p>
            </div>
            <div>
              <p className="font-heading font-semibold text-foreground">{exp.role}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {techsByCompany[i].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
