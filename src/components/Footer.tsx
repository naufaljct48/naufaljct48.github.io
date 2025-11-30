import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative py-16 mt-20">
      {/* Border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 dark:bg-white/10" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-3">Naufal Aziz</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{t("footer.quickLinks")}</h4>
            <div className="flex flex-col gap-2">
              <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors text-sm">
                {t("nav.home")}
              </a>
              <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors text-sm">
                {t("nav.about")}
              </a>
              <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors text-sm">
                {t("nav.projects")}
              </a>
              <a href="/Resume.pdf" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors text-sm">
                Resume
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{t("footer.connect")}</h4>
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/naufaljct48"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/naufal-aziz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:naufaljct48@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <p className="flex items-center gap-1">
              © {new Date().getFullYear()} {t("footer.madeWith")}{" "}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> {t("footer.by")}
            </p>
            <p>{t("footer.builtWith")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
