import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-4 pt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-8">
        <div className="flex flex-col lg:contents">
          {/* Greeting and Name - Always first */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-start-1"
          >
            <h1 className="text-4xl md:text-4xl font-bold">
              Halo 👋, saya
            </h1>
            <h1 className="text-4xl md:text-4xl font-bold mb-6">
              <span className="text-blue-600 dark:text-blue-400">Naufal Aziz Albaaqie</span>
            </h1>
          </motion.div>

          {/* Profile Picture - Second on mobile, second column on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center items-center my-8 lg:my-0 lg:col-start-2 lg:row-span-3"
          >
            {/* SVG Background */}
            <span className="absolute inset-0 -z-10 flex justify-center items-center">
              <svg
                width="400"
                height="400"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-64 h-64 lg:w-80 lg:h-80"
              >
                <path
                  fill="#14b8a6"
                  d="M47.4,-51C59.2,-35.6,65.1,-17.8,63.4,-1.7C61.7,14.5,52.6,28.9,40.8,36.6C28.9,44.2,14.5,45,-2,47C-18.4,49,-36.8,52.1,-45.4,44.5C-53.9,36.8,-52.5,18.4,-51.2,1.3C-49.9,-15.8,-48.7,-31.7,-40.2,-47.1C-31.7,-62.4,-15.8,-77.3,1,-78.3C17.8,-79.2,35.6,-66.3,47.4,-51Z"
                  transform="translate(100 100) scale(1.2)"
                ></path>
              </svg>
            </span>

            {/* Profile Picture */}
            <div className="relative w-[80%] h-auto lg:w-[70%]">
              <div className="aspect-square rounded-full overflow-hidden">
                <img
                  src="/public/images/naufal.png"
                  alt="Profile"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Description and Social Icons - Last on mobile, back to first column on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-start-1"
          >
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Seorang Full Stack Developer yang antusias dalam menciptakan pengalaman web yang user-friendly dan modern.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/naufaljct48"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/naufal-aziz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:naufaljct48@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;