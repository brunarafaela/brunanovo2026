import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-primary mb-4">Vamos conversar?</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Precisa de uma desenvolvedora?
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Estou sempre aberta a novas oportunidades e projetos interessantes. Se quiser trocar uma ideia, é só me chamar!
        </p>
        <a
          href="mailto:contato@brunarafaela.online"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Me contrate!
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>

      <div className="mt-20 pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground">
          © 2025 Bruna Lima. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
};

export default Contact;
