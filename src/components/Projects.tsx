import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  link: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [atidarImageIndex, setAtidarImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Dharmais Cendana (Mobile-first App)",
      description:
        "Aplikasi kesehatan digital mobile-first dengan layanan janji temu online, akses rekam medis, check-in mandiri, notifikasi, dan pengelolaan profil pasien menggunakan teknologi frontend modern.",
      image: "/images/cendana.webp",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "Shadcn/UI",
        "Framer Motion",
        "Express.js",
        "Bun Runtime",
      ],
      link: "#",
    },
    {
      id: 2,
      title: "Hospital AIS RAG System",
      description:
        "Sistem chatbot rumah sakit modern dengan kemampuan AI untuk retrieval informasi medis dan manajemen jadwal dokter menggunakan Google Gemini AI dan ChromaDB untuk RAG.",
      image: "/images/ais.webp",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Express.js",
        "Bun Runtime",
        "Prisma ORM",
        "MySQL",
        "Google Gemini AI",
        "ChromaDB",
      ],
      link: "#",
    },
    {
      id: 3,
      title: "iStudy - Platform Edukasi",
      description:
        "Aplikasi web edukasi dengan fitur modular, integrasi Google Analytics, dan proses deployment terotomasi. Dilengkapi script utilitas untuk update tracking ID dan dokumentasi deployment.",
      image: "/images/istudy.webp",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "PostCSS",
        "Google Analytics",
      ],
      link: "https://iStudy.id",
    },
    {
      id: 4,
      title: "ATiDar",
      description:
        "Aplikasi Transfusi Darah untuk mempermudah pengelolaan donor darah.",
      images: ["/images/utdreg.webp", "/images/atidar.webp"],
      image: "/images/utdreg.webp", // Fallback image
      technologies: ["Bootstrap 5", "PHP", "CodeIgniter", "MySQL"],
      link: "#",
    },
    {
      id: 5,
      title: "SiKevin",
      description:
        "Sistem Informasi Keuangan & Verifikasi Pasien yang modern dan efisien.",
      image: "/images/sikevin.webp",
      technologies: ["Bootstrap 5", "PHP", "Laravel", "Express.js", "MySQL"],
      link: "#",
    },
    {
      id: 6,
      title: "SiKetik",
      description:
        "Sistem Informasi Komite Etik untuk mengelola data dan proses etika secara digital.",
      image: "/images/siketik.webp",
      technologies: ["Bootstrap 5", "PHP", "CodeIgniter", "MySQL"],
      link: "#",
    },
    {
      id: 7,
      title: "Library Management System",
      description: "Library Management System untuk mengelola data buku.",
      image: "/images/LMS.webp",
      technologies: ["Bootstrap 5", "PHP", "Laravel", "MySQL"],
      link: "https://github.com/naufaljct48/library",
    },
    {
      id: 8,
      title: "LookitCCTV",
      description:
        "Jasa pemasangan CCTV profesional dengan solusi keamanan modern.",
      image: "/images/lookit.webp",
      technologies: ["WordPress", "YoastSEO", "Elementor"],
      link: "https://lookitcctv.id/",
    },
    {
      id: 9,
      title: "PD. Batara Membangun",
      description:
        "Perusahaan daerah yang berfokus pada pembangunan wilayah Barito Utara.",
      image: "/images/pdbm.webp",
      technologies: ["WordPress", "YoastSEO", "Elementor"],
      link: "https://pdbm.co.id/",
    },
    {
      id: 10,
      title: "Forecasting Pertumbuhan Penduduk",
      description:
        "Aplikasi prediksi populasi menggunakan metode Least Square.",
      image: "/images/forecasting.webp",
      technologies: ["Bootstrap", "CodeIgniter", "MySQL"],
      link: "#",
    },
    {
      id: 11,
      title: "XGamingStore",
      description: "Toko online game yang modern dan interaktif.",
      image: "/images/xgamingstore.webp",
      technologies: ["VueJS", "Bootstrap", "jQuery"],
      link: "#",
    },
    {
      id: 12,
      title: "Turbo Panel",
      description:
        "Platform SMM untuk pembelian followers, likes, dan kebutuhan media sosial lainnya.",
      image: "/images/turbo.webp",
      technologies: ["Laravel", "Bootstrap", "MySQL"],
      link: "#",
    },
    {
      id: 13,
      title: "Aidoku Indonesian Sources",
      description: "Library scraping web manga pihak ketiga untuk Aidoku.",
      image: "/images/aidoku.webp",
      technologies: ["Rust"],
      link: "https://github.com/naufaljct48/aidoku-community-sources",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= projects.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleAtidarImageNext = () => {
    const atidarProject = projects.find((p) => p.id === 4);
    if (atidarProject?.images) {
      setAtidarImageIndex((prevIndex) =>
        prevIndex + 1 >= atidarProject.images!.length ? 0 : prevIndex + 1
      );
    }
  };

  const handleAtidarImagePrev = () => {
    const atidarProject = projects.find((p) => p.id === 4);
    if (atidarProject?.images) {
      setAtidarImageIndex((prevIndex) =>
        prevIndex - 1 < 0 ? atidarProject.images!.length - 1 : prevIndex - 1
      );
    }
  };

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const swipeThreshold = 50;
    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

  const getVisibleProjects = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      result.push(projects[index]);
    }
    return result;
  };

  return (
    <section id="projects" className="pt-32 pb-8 px-4 lg:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="relative">
          <motion.div
            className="flex gap-6 overflow-hidden px-4"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence mode="popLayout">
              {getVisibleProjects().map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
                >
                  <div
                    onClick={() => !isDragging && setSelectedProject(project)}
                    className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 h-full flex flex-col"
                  >
                    {/* Image Container dengan rasio tetap */}
                    <div className="relative pt-[56.25%] w-full overflow-hidden">
                      {project.id === 4 && project.images ? (
                        <img
                          src={project.images[atidarImageIndex]}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          draggable="false"
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          draggable="false"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content Container dengan tinggi yang fleksibel */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 shadow-lg p-3 rounded-full hover:scale-110 transition-transform z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 shadow-lg p-3 rounded-full hover:scale-110 transition-transform z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              {/* Modal image dengan rasio tetap */}
              <div className="relative pt-[56.25%] w-full mb-4 rounded-lg overflow-hidden">
                {selectedProject.id === 4 && selectedProject.images ? (
                  <>
                    <img
                      src={selectedProject.images[atidarImageIndex]}
                      alt={selectedProject.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-1/2 left-2 -translate-y-1/2 z-10">
                      <button
                        onClick={handleAtidarImagePrev}
                        className="bg-white dark:bg-gray-800 shadow-lg p-3 rounded-full hover:scale-110 transition-transform"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                    </div>
                    <div className="absolute top-1/2 right-2 -translate-y-1/2 z-10">
                      <button
                        onClick={handleAtidarImageNext}
                        className="bg-white dark:bg-gray-800 shadow-lg p-3 rounded-full hover:scale-110 transition-transform"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>
                  </>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                View Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
