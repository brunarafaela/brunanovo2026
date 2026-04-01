import { motion } from "framer-motion";

const education = [
  { type: "Especialização", title: "Pós-graduação em Engenharia de Software com Metodologias Ágeis", institution: "Universidade Cruzeiro do Sul", period: "2024 - 2025" },
  { type: "Graduação", title: "Tecnólogo em Análise e Desenvolvimento de Sistemas", institution: "FATEC Ipiranga", period: "2016 - 2020" },
  { type: "Técnico", title: "Técnico em Informática", institution: "ETEC de Heliópolis", period: "2013 - 2014" },
];

const Education = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium text-primary mb-8"
      >
        Formação Acadêmica
      </motion.p>

      <div className="space-y-0">
        {education.map((edu, i) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="py-5 border-b border-border last:border-b-0 grid md:grid-cols-[200px_1fr] gap-3"
          >
            <div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{edu.type}</span>
              <p className="text-xs text-muted-foreground mt-2">{edu.period}</p>
            </div>
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">{edu.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
