import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Clock, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectsData, projectDetails } from "@/data/projects";
import Header from "@/components/Header";

const ProjectDetail = () => {
  const { slug } = useParams();
  const { lang, t } = useLanguage();

  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];
  const details = projectDetails[lang][projectIndex];

  if (!project || !details) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="px-6 md:px-12 lg:px-16 py-20 text-center">
          <p className="text-muted-foreground">
            {lang === "pt" ? "Projeto não encontrado." : "Project not found."}
          </p>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            {lang === "pt" ? "← Voltar" : "← Back"}
          </Link>
        </div>
      </div>
    );
  }

  const labels = {
    pt: { back: "Voltar", challenge: "Desafio", solution: "Solução", results: "Resultados", role: "Função", duration: "Duração", visitSite: "Visitar site", techs: "Tecnologias" },
    en: { back: "Back", challenge: "Challenge", solution: "Solution", results: "Results", role: "Role", duration: "Duration", visitSite: "Visit site", techs: "Technologies" },
  };
  const l = labels[lang];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="px-6 md:px-12 lg:px-16 py-12 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {l.back}
          </Link>

          <div className="rounded-2xl overflow-hidden border border-border/50 mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              {project.title}
            </h1>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {l.visitSite}
              </a>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">{details.description}</p>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4 text-primary" />
              <span>{details.role}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>{details.duration}</span>
            </div>
          </div>

          <div className="space-y-8 mb-10">
            {[
              { title: l.challenge, content: details.challenge },
              { title: l.solution, content: details.solution },
              { title: l.results, content: details.results },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="font-heading font-semibold text-foreground mb-2">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="font-heading font-semibold text-foreground mb-3">{l.techs}</h2>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
