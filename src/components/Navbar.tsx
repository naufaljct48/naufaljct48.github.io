import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Github, FileText, Menu, X } from 'lucide-react';
import { useLocalStorage } from 'react-use';

const Navbar = () => {
  const [isDark, setIsDark] = useLocalStorage('darkMode', true);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl"
      >
        <div className="flex items-center justify-between px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => (
              <motion.a
      key={item.name}
      href={item.href}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative group px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      {item.name}
      {/* Wave underline */}
      <span className="absolute bottom-0 left-0 w-full h-[5px] bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,5 Q25,0 50,5 T100,5"
            fill="none"
            stroke="#2563eb" /* Change this color as needed */
            strokeWidth="1.5"
          />
        </svg>
      </span>
    </motion.a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            <motion.a
              href="https://github.com/naufaljct48"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://naufaljct48.github.io/public/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <FileText className="w-5 h-5" />
            </motion.a>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              className="absolute top-[4rem] right-0 bg-white dark:bg-gray-800 p-6 rounded-b-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="border-t border-gray-300 dark:border-gray-600 my-4"></div>
                <motion.a
                  href="https://github.com/naufaljct48"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="https://naufaljct48.github.io/public/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  <span>CV</span>
                </motion.a>
                <div className="border-t border-gray-300 dark:border-gray-600 my-4"></div>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
