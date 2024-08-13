// PresentationPage.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../index.css'; // Assure-toi que le fichier CSS contient les classes de Tailwind nécessaires
import { motion } from 'framer-motion'; // Importer Framer Motion

// Importer la photo
import VictorPhoto from '/images/Victor.jpg'; // Remplace ce chemin par le chemin réel de ta photo

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const PresentationPage = () => {
  return (
    <div id="presentation" className="bg-purple-900 min-h-screen flex items-center justify-center p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-purple-800 p-8 rounded-lg shadow-lg">
        
        {/* Texte à gauche */}
        <motion.div
          className="text-white md:w-1/2 mb-8 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={textVariants}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6">À propos de moi</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Je suis Victor, développeur web spécialisé dans le front-end. Passionné par les jeux vidéo et la programmation, je mets également un point d&apos;honneur à concevoir des maquettes créatives pour mes projets web. Mon esprit artistique et ma riche imagination me permettent de développer des idées novatrices et captivantes.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Depuis mon jeune âge, j&apos;ai toujours eu un attrait particulier pour le travail sur ordinateur, un environnement dans lequel je me sens particulièrement à l&apos;aise et inspiré. La création est ma véritable passion, et je m&apos;épanouis pleinement en concevant des projets qui allient fonctionnalité et esthétique.
          </p>
        </motion.div>
        
        {/* Photo à droite */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
        >
          <img src={VictorPhoto} alt="Victor" className="w-3/4 md:w-1/2 h-auto rounded-lg shadow-md" />
        </motion.div>
      </div>
    </div>
  );
};

export default PresentationPage;