import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitch, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/brunarafaela", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/brunarafaela/", label: "LinkedIn" },
  { icon: Twitch, href: "#", label: "Twitch" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Hero = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 pt-20 pb-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl"
      >
        <span className="text-primary">Desenvolvedora Web</span> transformando ideias em experiências digitais com foco em performance e conversão
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">Disponível para novos projetos</span>
          </div>
          <p className="text-sm text-muted-foreground">
            São Paulo, SP · Full Stack · PHP, JavaScript, WordPress
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              {label}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
