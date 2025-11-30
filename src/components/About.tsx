import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  Globe,
  Smartphone,
  Brain,
  Wallet,
  Server,
  GitBranch,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-5 h-5" />,
      items: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "TailwindCSS"],
    },
    {
      category: "Backend",
      icon: <Server className="w-5 h-5" />,
      items: ["Node.js", "Express", "Laravel", "PHP", "Python"],
    },
    {
      category: "Database",
      icon: <Database className="w-5 h-5" />,
      items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM"],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-5 h-5" />,
      items: ["React Native", "Expo"],
    },
    {
      category: "AI & ML",
      icon: <Brain className="w-5 h-5" />,
      items: ["LLM Integration", "Gemini AI", "RAG", "ChromaDB"],
    },
    {
      category: "Blockchain",
      icon: <Wallet className="w-5 h-5" />,
      items: ["Solana", "Web3.js", "SPL Tokens"],
    },
  ];

  const experiences = [
    {
      company: "RS Kanker Dharmais",
      role: "Full-Stack Developer",
      period: "Jan 2024 - Present",
    },
    {
      company: "PT. Dimensi Sukses Pratama",
      role: "Full-Stack Developer",
      period: "Aug 2025 - Present",
    },
    {
      company: "DreamsHive",
      role: "Full-Stack Developer",
      period: "May 2025 - Present",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("about.title")} <span className="text-accent">{t("about.me")}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("about.description")}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* About Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bento-card lg:col-span-2"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{t("about.role")}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t("about.bio")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bento-card"
          >
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{t("about.experience")}</h3>
            <div className="space-y-3">
              {experiences.map((exp, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm text-gray-900 dark:text-white">{exp.company}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{exp.role}</p>
                    <p className="text-xs text-accent">{exp.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bento-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Tools Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bento-card lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white">{t("about.tools")}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Git", "Docker", "GitHub Actions", "Vercel", "REST APIs", "JWT", "Postman", "VS Code", "Bun Runtime"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
