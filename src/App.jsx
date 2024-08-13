import CompetencesPage from './components/Competences';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import ParcoursPage from './components/Parcours';
import PresentationPage from './components/Presentation';
import RealisationsPage from './components/Realisations';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PresentationPage />
      <ParcoursPage />
      <CompetencesPage />
      <RealisationsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
