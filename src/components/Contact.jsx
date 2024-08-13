// ContactPage.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../index.css';
import { motion } from 'framer-motion'; // Importer Framer Motion
import { useInView } from 'react-intersection-observer'; // Importer Intersection Observer
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div id="contact" className="bg-purple-900 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-12">Contact</h1>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg p-6 text-white"
      >
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-2xl text-purple-400 mr-4" />
          <span className="text-xl">victorpro669@gmail.com</span>
        </div>
        <div className="flex items-center mb-4">
          <FaPhone className="text-2xl text-purple-400 mr-4" />
          <span className="text-xl">07 75 73 96 79</span>
        </div>
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-2xl text-purple-400 mr-4" />
          <span className="text-xl">Essonne</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;