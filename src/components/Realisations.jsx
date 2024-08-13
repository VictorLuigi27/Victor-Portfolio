// RealisationsPage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../index.css'; // Assure-toi que le fichier CSS contient les classes de Tailwind nécessaires
import { motion } from 'framer-motion'; // Importer Framer Motion

// Importer les images des projets
import oplayImage from '/images/oplay.jpg';
import portfolioImage from '/images/portfolio.jpg';
import KiddoquestImage from '/images/kiddoquest.jpg';
import TodolistImage from '/images/todolist.jpg';
import DevinelemotImage from '/images/devinette.jpg';
import MotDePasse from '/images/motdepasse.jpg'

const grosProjets = [
  {
    title: 'Portfolio React',
    description: 'Un portfolio développé avec React pour présenter mes compétences et projets.',
    image: portfolioImage,
  },
  {
    title: 'O\'Play',
    description: 'Un site de boutique de jeux vidéo réalisé en groupe pour démontrer nos compétences en développement web.',
    image: oplayImage,
  },
  {
    title: 'KiddoQuest',
    description: 'Un site éducatif interactif pour enfants utilisant les dernières technologies de développement web.',
    image: KiddoquestImage,
  },
];

const petitsProjets = [
  { title: 'To-Do List', description: 'Une application simple pour gérer des tâches.', image: TodolistImage },
  { title: 'Devine le mot !', description: 'Un jeu de mots amusant', image: DevinelemotImage },
  { title: 'Générateur de mot de passe', description: 'Un générateur de mot de passe simple à utiliser !', image: MotDePasse },
  // Ajoutez plus de petits projets ici
];

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const descriptionVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1 },
};

const RealisationsPage = () => {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <div id="realisations" className="bg-purple-900 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-12">Réalisations</h1>

      {/* Section Gros Projets */}
      <div className="w-full max-w-5xl mb-12">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">Gros Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grosProjets.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={projectVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => toggleProject(index)}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl text-white font-semibold">{project.title}</h3>
              </div>
              <motion.div
                initial="hidden"
                animate={openProject === index ? 'visible' : 'hidden'}
                variants={descriptionVariants}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 p-4 text-white overflow-auto"
              >
                <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
                <p>{project.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Petits Projets */}
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">Petits Projets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {petitsProjets.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={projectVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="text-xl text-white font-semibold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealisationsPage;