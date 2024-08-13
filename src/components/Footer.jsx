// Footer.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../index.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white py-10"
    >
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-10 mb-6">
          <a
            href="https://www.linkedin.com/in/victordiazpro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400"
          >
            <FaLinkedin className="text-4xl" />
          </a>
          <a
            href="https://github.com/VictorLuigi27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400"
          >
            <FaGithub className="text-4xl" />
          </a>
        </div>
        <div className="text-center">
          <a href="/mentions-legales" className="text-white hover:text-purple-400">
            Mentions Légales
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
