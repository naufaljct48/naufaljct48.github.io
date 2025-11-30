import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center px-4 pt-24 pb-12 lg:pt-32">
      <div className="max-w-6xl mx-auto w-full">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* Main intro card - spans 2 cols on lg */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bento-card lg:col-span-2 flex flex-col justify-center min-h-[280px]"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                {t("hero.available")}
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                {t("hero.greeting")}{" "}
                <span className="text-accent">Naufal Aziz</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl">
                {t("hero.description")}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <motion.a
                  href="/Resume.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-dark text-white font-medium transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {t("hero.download")}
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                >
                  {t("hero.viewProjects")}
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Profile Picture Card - No rounded, square with slight border radius */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card p-0 overflow-hidden md:row-span-2"
          >
            <img
              src="/images/naufal.webp"
              alt="Naufal Aziz"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </motion.div>

          {/* Current Work + Social Links Combined Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bento-card lg:col-span-2"
          >
            {/* Current Work Section */}
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-white/10">
              <div className="p-3 rounded-xl bg-accent/10">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t("hero.currentWork")}</p>
                <p className="font-semibold text-gray-900 dark:text-white">RS Kanker Dharmais</p>
                <p className="text-sm text-accent">Full-Stack Developer</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="w-3 h-3" />
                  <span>Jan 2024 - Present</span>
                </div>
              </div>
            </div>

            {/* Social Links Section */}
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{t("hero.connect")}</p>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="https://github.com/naufaljct48"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/naufal-aziz"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="mailto:naufaljct48@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Email</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
