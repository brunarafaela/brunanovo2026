import { motion } from "framer-motion";

const services = [
  "Desenvolvimento full stack",
  "Suporte & manutenção",
  "Otimização de desempenho",
  "Integração de APIs",
  "Discovery & prototipação",
  "Implementação pixel perfect",
];

const About = () => {
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
            src="https://www.brunarafaela.online/assets/profile-photo-QhkyKn_c.webp"
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
          <p className="text-sm font-medium text-primary mb-2">Sobre mim</p>
          <p className="text-foreground leading-relaxed mb-4">
            Sou Bruna Lima, desenvolvedora paulistana nascida em 1992. Minha paixão por programação começou na adolescência quando descobri o mundo dos blogs e comecei a criar minhas próprias páginas web.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Iniciei meus estudos em 2013 e trabalho profissionalmente na área desde 2016. Sou pós-graduada em Engenharia de Software com Metodologias Ágeis. Minha especialidade é o desenvolvimento de aplicações web utilizando PHP (MVC, Procedural), MySQL e JavaScript, com sólida experiência em WordPress.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Fora do mundo tech, você me encontra explorando museus, fazendo crochê, aproveitando o sol ou curtindo um bom show de rock.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => (
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
