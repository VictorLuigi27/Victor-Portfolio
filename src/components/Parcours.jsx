// ParcoursPage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import '../index.css'; // Assure-toi que le fichier CSS contient les classes de Tailwind nécessaires
import { motion } from 'framer-motion'; // Importer Framer Motion
import { useInView } from 'react-intersection-observer'; // Importer Intersection Observer

// Importer l'image du CV
import CVImage from '/images/CV.jpg'; // Remplace ce chemin par le chemin réel de ton image de CV

const parcoursData = [
  { month: 'Février', year: '2024', title: 'Titre professionnel de développeur web Full Stack', description: "Début de la formation au titre professionnel de développeur web Full Stack, acquérant des compétences techniques essentielles pour le développement complet de sites et applications web." },
  { month: 'Mai', year: '2024', title: 'Spécialisation en React Js', description: "Achèvement de la spécialisation en React Js pour se concentrer sur le développement Front End, maîtrisant la création d'interfaces utilisateur dynamiques et réactives." },
  { month: 'Juin', year: '2024', title: 'Projet de groupe O\'Play', description: "Conception et développement d'un site de boutique de jeux vidéos nommé O'Play, marquant l'apothéose de la formation avec un projet collaboratif concret et innovant." },
  { month: 'Juillet à Septembre', year: '2024', title: 'Stage en développement web Full Stack', description: "Stage en développement web Full Stack chez une entreprise, utilisant Next.js, Prisma, et PostgreSQL pour développer un site éducatif complet, de la conception à la mise en production." },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const descriptionVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1 },
};

const cvVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' },
};

const ParcoursPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showCV, setShowCV] = useState(false);

  // Utiliser useInView pour observer la visibilité des éléments
  const { ref: containerRef, inView: containerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCVClick = () => {
    setShowCV(!showCV);
  };

  return (
    <div id='parcours' className="bg-purple-900 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-12">Mon parcours</h1>
      <div className="relative w-full max-w-4xl">
        <div className="border-l-4 border-indigo-500 ml-4" ref={containerRef}>
          {parcoursData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-8 p-4 bg-gray-800 rounded-lg shadow-lg cursor-pointer"
              initial="hidden"
              animate={containerInView ? 'visible' : 'hidden'}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center mb-2">
                <div className="bg-indigo-500 w-8 h-8 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h2 className="text-2xl text-white font-semibold">{item.month} {item.year}</h2>
              </div>
              <h3 className="text-xl text-white font-semibold mb-2">{item.title}</h3>
              <motion.div
                initial="hidden"
                animate={openIndex === index ? 'visible' : 'hidden'}
                variants={descriptionVariants}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* Bouton pour voir le CV */}
        <div className="flex justify-center w-full">
          <button 
            onClick={handleCVClick}
            className="mt-12 px-6 py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-colors duration-300"
          >
            {showCV ? 'Masquer mon CV' : 'Voir mon CV'}
          </button>
        </div>
        {/* Animation de l'image du CV */}
        <motion.div
          initial="hidden"
          animate={showCV ? 'visible' : 'hidden'}
          variants={cvVariants}
          transition={{ duration: 0.7 }}
          className="mt-8"
        >
          <img src={CVImage} alt="Mon CV" className="w-full max-w-4xl mx-auto rounded-lg shadow-lg" />
        </motion.div>
      </div>
    </div>
  );
};

export default ParcoursPage;