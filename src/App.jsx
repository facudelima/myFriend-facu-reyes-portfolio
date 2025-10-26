import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import About from './About'
import WhatIDo from './WhatIDo'
import RecycleBin from './RecycleBin'
import Contact from './Contact'

// Translations object
const translations = {
  EN: {
    error404: {
      title: "ERROR 404",
      text: "Accessing this page could damage your perception of design standards.",
      takeRisk: "I'LL TAKE THE RISK",
      ratherNot: "I'D RATHER NOT"
    },
    noOption: {
      text: "Sorry, you don't really have another option.",
      ok: "OK"
    },
    portfolio: {
      location: "MONTEVIDEO, UY",
      year: "2025",
      hello: "HELLO",
      imFacu: "I'M FACU",
      andThisIs: "AND THIS IS",
      myPortfolio: "MY PORTFOLIO",
      myPortfolioHover: "NOT",
      about: "ABOUT",
      aboutHover: "WHO AM I?",
      work: "WORK",
      workHover: "WHAT I DO",
      contact: "CONTACT",
      contactHover: "LETS TALK"
    }
  },
  ES: {
    error404: {
      title: "ERROR 404",
      text: "Acceder a esta página podría dañar tu percepción de estándares de diseño.",
      takeRisk: "ME ARRIESGO",
      ratherNot: "PREFIERO NO"
    },
    noOption: {
      text: "Lo siento, realmente no tienes otra opción.",
      ok: "OK"
    },
    portfolio: {
      location: "MONTEVIDEO, UY",
      year: "2025",
      hello: "HELLO",
      imFacu: "I'M FACU",
      andThisIs: "AND THIS IS",
      myPortfolio: "MY PORTFOLIO",
      myPortfolioHover: "NOT",
      about: "ACERCA",
      aboutHover: "QUIÉN SOY?",
      work: "TRABAJO",
      workHover: "QUÉ HAGO",
      contact: "CONTACTO",
      contactHover: "HABLEMOS"
    }
  }
}

// Error404Modal Component
function Error404Modal({ onTakeRisk, onRatherNot, language }) {
  const t = translations[language].error404
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1 className="modal-title">{t.title}</h1>
        <p className="modal-text">
          {t.text}
        </p>
        <div className="modal-buttons">
          <button className="modal-button" onClick={onTakeRisk}>
            {t.takeRisk}
          </button>
          <button className="modal-button" onClick={onRatherNot}>
            {t.ratherNot}
          </button>
        </div>
      </div>
    </div>
  )
}

// NoOptionModal Component
function NoOptionModal({ onOk, language }) {
  const t = translations[language].noOption
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="modal-text">
          {t.text}
        </p>
        <div className="modal-buttons">
          <button className="modal-button" onClick={onOk}>
            {t.ok}
          </button>
        </div>
      </div>
    </div>
  )
}

// LanguageSelector Component
function LanguageSelector({ language, onLanguageChange }) {
  return (
    <div className="language-selector">
      <button
        className={`lang-option ${language === 'EN' ? 'active' : ''}`}
        onClick={() => onLanguageChange('EN')}
      >
        EN
      </button>
      <button
        className={`lang-option ${language === 'ES' ? 'active' : ''}`}
        onClick={() => onLanguageChange('ES')}
      >
        ES
      </button>
    </div>
  )
}

// Portfolio Component
function Portfolio({ language, onLanguageChange }) {
  const navigate = useNavigate()
  const t = translations[language].portfolio
  
  const handleAboutClick = () => {
    navigate('/about')
  }
  
  const handleWorkClick = () => {
    navigate('/what-i-do')
  }
  
  const handleContactClick = () => {
    navigate('/contact')
  }
  
  return (
    <div className="portfolio-container">
      {/* Header */}
      <div className="header">
        <div className="location-box">{t.location}</div>
        <div className="year-container">
          <div className="year-box">{t.year}</div>
        </div>
        <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="bracket-top-left"></div>
        <div className="title-container">
          <h1 className="main-title">{t.hello}</h1>
          <h1 className="main-title">{t.imFacu}</h1>
        </div>
        <div className={`subtitle-container language-${language.toLowerCase()}`}>
          <span className="subtitle-text">{t.andThisIs}</span>
          <div 
            className="portfolio-box"
            data-hover-text={t.myPortfolioHover + ' '}
          >
            {t.myPortfolio}
          </div>
        </div>
        <div className="bracket-bottom-right"></div>
      </div>

      {/* Footer */}
      <div className="footer">
        <button 
          className="footer-button about-button" 
          onClick={handleAboutClick}
          onMouseEnter={(e) => e.target.textContent = t.aboutHover}
          onMouseLeave={(e) => e.target.textContent = t.about}
        >
          {t.about}
        </button>
        <button 
          className="footer-button work-button" 
          onClick={handleWorkClick}
          onMouseEnter={(e) => e.target.textContent = t.workHover}
          onMouseLeave={(e) => e.target.textContent = t.work}
        >
          {t.work}
        </button>
        <button 
          className="footer-button contact-button" 
          onClick={handleContactClick}
          onMouseEnter={(e) => e.target.textContent = t.contactHover}
          onMouseLeave={(e) => e.target.textContent = t.contact}
        >
          {t.contact}
        </button>
      </div>

      {/* Right side frame/scrollbar visual */}
      <div className="right-frame">
        <div className="frame-line"></div>
        <div className="frame-line"></div>
      </div>
    </div>
  )
}

// Main App Component
function App() {
  console.log('App component is rendering')
  const [showErrorModal, setShowErrorModal] = useState(true)
  const [showNoOptionModal, setShowNoOptionModal] = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [language, setLanguage] = useState('EN')

  const handleTakeRisk = () => {
    setShowErrorModal(false)
    setShowPortfolio(true)
  }

  const handleRatherNot = () => {
    setShowErrorModal(false)
    setShowNoOptionModal(true)
  }

  const handleOk = () => {
    setShowNoOptionModal(false)
    setShowPortfolio(true)
  }

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage)
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About language={language} />} />
          <Route path="/what-i-do" element={<WhatIDo language={language} />} />
          <Route path="/recycle-bin" element={<RecycleBin language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route path="/" element={
            <>
              {/* Always show portfolio, but blur it when modals are active */}
              <div className={`portfolio-background ${showErrorModal || showNoOptionModal ? 'blurred' : ''}`}>
                <Portfolio
                  language={language}
                  onLanguageChange={handleLanguageChange}
                />
              </div>
              
              {showErrorModal && (
                <Error404Modal
                  onTakeRisk={handleTakeRisk}
                  onRatherNot={handleRatherNot}
                  language={language}
                />
              )}
              
              {showNoOptionModal && (
                <NoOptionModal onOk={handleOk} language={language} />
              )}
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App