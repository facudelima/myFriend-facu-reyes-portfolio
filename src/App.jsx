import { useState, useEffect } from 'react';
import Header from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import Home from './components/Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll logic for standard anchor links
  const handleMenuClick = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-wrapper">
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleMenuClick}
      />

      <main className="main-content">
        <section id="home">
          <Home />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;