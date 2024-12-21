import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  FileCode2, 
  Server, 
  Code2,
  GitFork,
  Terminal,
  Shield
} from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'JavaScript', icon: <FileCode2 className="w-8 h-8" /> },
    { name: 'PHP (Laravel, CodeIgniter)', icon: <Code2 className="w-8 h-8" /> },
    { name: 'Python', icon: <Terminal className="w-8 h-8" /> },
    { name: 'Node.js', icon: <Server className="w-8 h-8" /> },
    { name: 'MySQL & PostgreSQL', icon: <Database className="w-8 h-8" /> },
    { name: 'Basic DevOps', icon: <Server className="w-8 h-8" /> },
    { name: 'WordPress', icon: <Code2 className="w-8 h-8" /> },
    { name: 'Git', icon: <GitFork className="w-8 h-8" /> },
    { name: 'Security', icon: <Shield className="w-8 h-8" /> }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-bold mb-6">Tentang Saya</h1>
            <div className="prose dark:prose-invert">
              <h2 className="text-2xl font-semibold mb-4">Full-stack Developer</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Berpengalaman dalam pengembangan full-stack menggunakan PHP, JavaScript, Python, dan SQL. 
                Terampil dalam membangun aplikasi yang efisien, mengoptimalkan basis data, dan 
                mengimplementasikan integrasi API. Berkomitmen untuk memberikan solusi digital inovatif 
                dan mencari peluang untuk mengembangkan keahlian lebih lanjut di bidang pengembangan web.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-2">
                  {skill.icon}
                </div>
                <span className="text-sm text-center font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;