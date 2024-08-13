// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-scroll';
import '../index.css';
import HomeNavigation from '../assets/logos/Home-navigation.svg';
import PrésentationNavigation from '../assets/logos/Présentation-Navigation.svg';
import ParcoursNavigation from '../assets/logos/Parcours-Navigation.svg';
import ProjetsNavigation from '../assets/logos/Computer-Projet-Navigation.svg';
import ContactNavigation from '../assets/logos/Contact-Nav.svg';

const Header = () => {
  return (
    <>
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-pink-300 to-purple-500 via-pink-400 animate-gradient">
        <div className="relative text-center text-white px-6 md:px-12 z-10">
          <p className="text-2xl md:text-5xl font-light animate-fade-in mb-4">
            Ce qu&apos;on fait avec amour devient possible
          </p>
        </div>
      </header>

      <nav className={`fixed top-0 left-0 w-full bg-gray-800 text-white flex items-center justify-around py-4 shadow-md z-20 transition-opacity duration-500`}>
        <ul className="flex space-x-8">
          <li className="relative group">
            <a href="#presentation" className="flex items-center">
              <img src={HomeNavigation} alt="Présentation" className="w-12 h-12" /> {/* Icônes agrandies */}
            </a>
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 py-1 bg-gray-700 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Présentation
            </span>
          </li>
          <li className="relative group">
            <a href="#parcours" className="flex items-center">
              <img src={PrésentationNavigation} alt="Mon Parcours" className="w-12 h-12" /> {/* Icônes agrandies */}
            </a>
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 py-1 bg-gray-700 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Mon Parcours
            </span>
          </li>
          <li className="relative group">
            <a href="#competences" className="flex items-center">
              <img src={ParcoursNavigation} alt="Mes Compétences" className="w-12 h-12" /> {/* Icônes agrandies */}
            </a>
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 py-1 bg-gray-700 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Mes Compétences
            </span>
          </li>
          <li className="relative group">
            <a href="#realisations" className="flex items-center">
              <img src={ProjetsNavigation} alt="Réalisations" className="w-12 h-12" /> {/* Icônes agrandies */}
            </a>
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 py-1 bg-gray-700 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Réalisations
            </span>
          </li>
          <li className="relative group">
            <a href="#contact" className="flex items-center">
              <img src={ContactNavigation} alt="Contact" className="w-12 h-12" /> {/* Icônes agrandies */}
            </a>
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 py-1 bg-gray-700 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Contact
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;