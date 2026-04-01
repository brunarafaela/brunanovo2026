import { motion } from "framer-motion";
import { Mail, FileText, Moon, Sun, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-6 sticky top-0 bg-background/80 backdrop-blur-md z-50 border-b border-border/50"
    >
      <div className="flex items-center gap-3">
        <img
          src="https://www.brunarafaela.online/assets/profile-photo-QhkyKn_c.webp"
          alt="Bruna Lima"
          className="w-9 h-9 rounded-full object-cover"
        />
        <div>
          <p className="font-heading font-semibold text-sm text-foreground">Bruna Lima</p>
          <p className="text-xs text-muted-foreground">{t.webDeveloper}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="mailto:contato@brunarafaela.online"
          className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="w-3.5 h-3.5" />
          contato@brunarafaela.online
        </a>
        <a
          href="https://www.brunarafaela.online/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <FileText className="w-3.5 h-3.5" />
          {t.resume}
        </a>
        <button
          onClick={() => setLang(lang === "pt" ? "en" : "pt")}
          className="flex items-center gap-1 px-2 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Toggle language"
        >
          <Globe className="w-3.5 h-3.5" />
          {lang === "pt" ? "EN" : "PT"}
        </button>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Toggle theme"
        >
          {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
