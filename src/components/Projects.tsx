import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  link: string;
  featured?: boolean;
}

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectImageIndices, setProjectImageIndices] = useState<
    Record<number, number>
  >({});
  const [filter, setFilter] = useState<string>("all");

  const getProjectImageIndex = (projectId: number) =>
    projectImageIndices[projectId] || 0;

  const projects: Project[] = [
    {
      id: 1,
      title: "ByteLaunch",
      description:
        "Platform for creating tokens on Solana blockchain, managing asset portfolios, and providing affiliate systems with analytics features.",
      image: "/images/bytelaunch.webp",
      technologies: [
        "Nuxt.js 3",
        "Vue 3",
        "TypeScript",
        "Solana",
        "Raydium DEX",
      ],
      link: "#",
      featured: true,
    },
    {
      id: 15,
      title: "AIS Kiosk (AI Companion)",
      description:
        "3D interactive AI assistant for hospital KIOSK using Three.js and Gemini with real-time lip-sync.",
      images: ["/images/ais1.webp", "/images/ais2.webp"],
      image: "/images/ais1.webp",
      technologies: ["React", "Three.js", "Gemini", "WebGL"],
      link: "#",
      featured: true,
    },
    {
      id: 16,
      title: "DEMON",
      description:
        "Real-time MySQL dashboard with AI-powered query analysis and 'Auto-Kill' protocols for database optimization.",
      images: ["/images/demon1.webp", "/images/demon2.webp"],
      image: "/images/demon1.webp",
      technologies: ["React", "TypeScript", "Express.js", "MySQL", "Gemini AI"],
      link: "#",
      featured: true,
    },
    {
      id: 17,
      title: "Dimensi HRIS Mobile",
      description:
        "Multi-tenant HRIS mobile app with Face Recognition attendance, GPS geofencing, and employee self-service.",
      images: [
        "/images/dimensi1.webp",
        "/images/dimensi2.webp",
        "/images/dimensi3.webp",
      ],
      image: "/images/dimensi1.webp",
      technologies: ["React Native", "Expo", "TypeScript", "Face Recognition"],
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Hospital AIS RAG System",
      description:
        "Hospital chatbot with AI for medical information retrieval using Google Gemini AI and ChromaDB.",
      image: "/images/ais.webp",
      technologies: ["React", "TypeScript", "Gemini AI", "ChromaDB", "RAG"],
      link: "#",
    },
    {
      id: 3,
      title: "iStudy",
      description:
        "Education platform with modular features and Google Analytics integration.",
      image: "/images/istudy.webp",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      link: "https://iStudy.id",
    },
    {
      id: 4,
      title: "Dharmais Cendana",
      description:
        "Mobile-first digital health app with online appointments and medical record access.",
      image: "/images/cendana.webp",
      technologies: ["Next.js", "React", "TypeScript", "Shadcn/UI"],
      link: "#",
    },
    {
      id: 5,
      title: "ATiDar",
      description:
        "Blood Transfusion Application to simplify blood donor management.",
      images: ["/images/utdreg.webp", "/images/atidar.webp"],
      image: "/images/utdreg.webp",
      technologies: ["Bootstrap 5", "PHP", "CodeIgniter", "MySQL"],
      link: "#",
    },
    {
      id: 6,
      title: "SiKevin",
      description:
        "Modern and efficient Financial & Patient Verification Information System.",
      image: "/images/sikevin.webp",
      technologies: ["Bootstrap 5", "PHP", "Laravel"],
      link: "#",
    },
    {
      id: 7,
      title: "SiKetik",
      description:
        "Ethics Committee Information System for digital ethics management.",
      image: "/images/siketik.webp",
      technologies: ["Bootstrap 5", "PHP", "CodeIgniter", "MySQL"],
      link: "#",
    },
    {
      id: 8,
      title: "Library Management System",
      description: "Library Management System for book data management.",
      image: "/images/LMS.webp",
      technologies: ["Bootstrap 5", "PHP", "Laravel", "MySQL"],
      link: "https://github.com/naufaljct48/library",
    },
    {
      id: 9,
      title: "LookitCCTV",
      description:
        "Professional CCTV installation services with modern security solutions.",
      image: "/images/lookit.webp",
      technologies: ["WordPress", "YoastSEO", "Elementor"],
      link: "https://lookitcctv.id/",
    },
    {
      id: 10,
      title: "PD. Batara Membangun",
      description:
        "Regional company focused on North Barito regional development.",
      image: "/images/pdbm.webp",
      technologies: ["WordPress", "YoastSEO", "Elementor"],
      link: "https://pdbm.co.id/",
    },
    {
      id: 14,
      title: "Aidoku Indonesian Sources",
      description: "Third-party manga web scraping library for Aidoku.",
      image: "/images/aidoku.webp",
      technologies: ["Rust"],
      link: "https://github.com/naufaljct48/aidoku-community-sources",
    },
  ];

  const handleProjectImageNext = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId);
    if (project?.images) {
      setProjectImageIndices((prev) => {
        const currentIdx = prev[projectId] || 0;
        return {
          ...prev,
          [projectId]:
            currentIdx + 1 >= project.images!.length ? 0 : currentIdx + 1,
        };
      });
    }
  };

  const handleProjectImagePrev = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId);
    if (project?.images) {
      setProjectImageIndices((prev) => {
        const currentIdx = prev[projectId] || 0;
        return {
          ...prev,
          [projectId]:
            currentIdx - 1 < 0 ? project.images!.length - 1 : currentIdx - 1,
        };
      });
    }
  };

  const filteredProjects =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("projects.title")}{" "}
            <span className="text-accent">{t("projects.highlight")}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {t("projects.subtitle")}
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex items-center gap-2 p-1 rounded-xl bg-gray-100 dark:bg-white/5">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === "all"
                  ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {t("projects.all")}
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                filter === "featured"
                  ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              {t("projects.featured")}
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="bento-card cursor-pointer group p-0 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={
                    project.images
                      ? project.images[getProjectImageIndex(project.id)]
                      : project.image
                  }
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent text-white text-xs font-medium">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                )}

                {project.images && project.images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                    {project.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          idx === getProjectImageIndex(project.id)
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-dark-200 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.featured && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 mt-2 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      <Sparkles className="w-3 h-3" />
                      Featured Project
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <img
                  src={
                    selectedProject.images
                      ? selectedProject.images[
                          getProjectImageIndex(selectedProject.id)
                        ]
                      : selectedProject.image
                  }
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                {selectedProject.images &&
                  selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          handleProjectImagePrev(selectedProject.id)
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-dark-200/90 rounded-full shadow-lg hover:scale-110 transition-transform"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() =>
                          handleProjectImageNext(selectedProject.id)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-dark-200/90 rounded-full shadow-lg hover:scale-110 transition-transform"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {selectedProject.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              idx === getProjectImageIndex(selectedProject.id)
                                ? "bg-white"
                                : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  {t("projects.technologies")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              {selectedProject.link !== "#" && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-dark text-white font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t("projects.view")}
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
