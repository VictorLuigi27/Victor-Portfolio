// CompetencesPage.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../index.css'; // Assure-toi que le fichier CSS contient les classes de Tailwind nécessaires
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Importer les icônes
import HtmlIcon from '../assets/logos/html.svg';
import CssIcon from '../assets/logos/css.svg';
import JavascriptIcon from '../assets/logos/javascript.svg';
import ReactIcon from '../assets/logos/reactjs.svg';
import TypescriptIcon from '../assets/logos/typescript.svg';
import PhpIcon from '../assets/logos/php.svg';
import MysqlIcon from '../assets/logos/mysql.svg';
import TailwindIcon from '../assets/logos/tailwind.svg';
import BootstrapIcon from '../assets/logos/bootstrap.svg';
import FigmaIcon from '../assets/logos/figma.svg';
import CanvaIcon from '../assets/logos/canva.svg';
import NextjsIcon from '../assets/logos/nextjs.svg';
import PrismaIcon from '../assets/logos/prisma.svg';
import PostgresqlIcon from '../assets/logos/postgresql.svg';

// Définir les compétences par catégorie
const skillsData = {
  'Front-end': [
    { name: 'HTML', icon: HtmlIcon },
    { name: 'CSS', icon: CssIcon },
    { name: 'JavaScript', icon: JavascriptIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'TypeScript', icon: TypescriptIcon },
  ],
  'Back-end': [
    { name: 'PHP', icon: PhpIcon },
    { name: 'MySQL', icon: MysqlIcon },
  ],
  'Frameworks': [
    { name: 'Tailwind', icon: TailwindIcon },
    { name: 'Bootstrap', icon: BootstrapIcon },
  ],
  'Design UX/UI': [
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Canva', icon: CanvaIcon },
  ],
  'Compétences en cours': [
    { name: 'Next.js', icon: NextjsIcon },
    { name: 'Prisma', icon: PrismaIcon },
    { name: 'PostgreSQL', icon: PostgresqlIcon },
  ],
};

const CompetencesPage = () => {
  const [refFrontEnd, inViewFrontEnd] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refBackEnd, inViewBackEnd] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refFrameworks, inViewFrameworks] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refDesign, inViewDesign] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refInProgress, inViewInProgress] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div id="competences" className="bg-purple-900 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-12">Mes Compétences</h1>
      <div className="w-full max-w-5xl">
        {/* Section Front-end */}
        <div id="front-end" className="mb-12">
          <h2 className="text-3xl text-white font-bold mb-6">Front-end</h2>
          <motion.div
            ref={refFrontEnd}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inViewFrontEnd ? 1 : 0, y: inViewFrontEnd ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skillsData['Front-end'].map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-3 py-1 rounded-lg text-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Section Back-end */}
        <div id="back-end" className="mb-12">
          <h2 className="text-3xl text-white font-bold mb-6">Back-end</h2>
          <motion.div
            ref={refBackEnd}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inViewBackEnd ? 1 : 0, y: inViewBackEnd ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skillsData['Back-end'].map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-3 py-1 rounded-lg text-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Section Frameworks */}
        <div id="frameworks" className="mb-12">
          <h2 className="text-3xl text-white font-bold mb-6">Frameworks</h2>
          <motion.div
            ref={refFrameworks}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inViewFrameworks ? 1 : 0, y: inViewFrameworks ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skillsData['Frameworks'].map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-3 py-1 rounded-lg text-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Section Design UX/UI */}
        <div id="design" className="mb-12">
          <h2 className="text-3xl text-white font-bold mb-6">Design UX/UI</h2>
          <motion.div
            ref={refDesign}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inViewDesign ? 1 : 0, y: inViewDesign ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skillsData['Design UX/UI'].map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-3 py-1 rounded-lg text-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Section Compétences en cours */}
        <div id="in-progress" className="mb-12">
          <h2 className="text-3xl text-white font-bold mb-6">Compétences en cours</h2>
          <motion.div
            ref={refInProgress}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inViewInProgress ? 1 : 0, y: inViewInProgress ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skillsData['Compétences en cours'].map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-3 py-1 rounded-lg text-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompetencesPage;