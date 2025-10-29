import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './About.css'

// Translations object for About page
const translations = {
  EN: {
    title: "WHO AM I??????",
    backButton: "<",
    paragraph1: "First things first: I like to think I'm a decent human being - and that matters. On top of that, I'm a Graphic Designer and UX/UI Designer.",
    paragraph2: "I've learned plenty through formal studies - courses, academies, the usual. But a big part of my skills comes from being self-taught, which led me to explore AI tools, dive into After Effects, and even build my own creative brand.",
    paragraph3: "I like projects that make me think – even when they make me swear at my screen. Challenges keep me awake, coffee keeps me alive, and the rest is just figuring it out.",
    hobbiesTitle: "HOBBIES & INTERESTS",
    hobbiesText: "Outside of work, I'm usually sketching ideas for my brand, digging into music and urban aesthetics, or getting lost in video games. Those things help me switch off — but they also end up sparking ideas: a playlist can turn into a concept, a film into a moodboard, or a street texture into a design detail.",
    modalTitle: "¡RECOMENDATION ALERT!",
    modalText: "System flagged unusual activity, suggested games:",
    modalTextMusic: "System flagged unusual activity, sugested albums:",
    modalTextMovies: "System flagged unusual activity, sugested movies:",
    ignoreButton: "IGNORE"
  },
  ES: {
    title: "¿QUIÉN SOY??????",
    backButton: "<",
    paragraph1: "Primero lo primero: me gusta pensar que soy una persona decente - y eso importa. Además de eso, soy Diseñador Gráfico y Diseñador UX/UI.",
    paragraph2: "He aprendido mucho a través de estudios formales - cursos, academias, lo usual. Pero gran parte de mis habilidades provienen de ser autodidacta, lo que me llevó a explorar herramientas de IA, sumergirme en After Effects, e incluso construir mi propia marca creativa.",
    paragraph3: "Me gustan los proyectos que me hacen pensar - incluso cuando me hacen maldecir mi pantalla. Los desafíos me mantienen despierto, el café me mantiene vivo, y el resto es solo averiguarlo.",
    hobbiesTitle: "PASATIEMPOS E INTERESES",
    hobbiesText: "Fuera del trabajo, suelo estar dibujando ideas para mi marca, profundizando en música y estética urbana, o perdiéndome en videojuegos. Esas cosas me ayudan a desconectar — pero también terminan generando ideas: una playlist puede convertirse en un concepto, una película en un moodboard, o una textura de calle en un detalle de diseño.",
    modalTitle: "¡ALERTA DE RECOMENDACIÓN!",
    modalText: "El sistema detectó actividad inusual, juegos sugeridos:",
    modalTextMusic: "El sistema detectó actividad inusual, álbumes sugeridos:",
    modalTextMovies: "El sistema detectó actividad inusual, películas sugeridas:",
    ignoreButton: "IGNORAR"
  }
}

function About({ language = 'EN' }) {
  const navigate = useNavigate()
  const t = translations[language]
  const [displayedTitle, setDisplayedTitle] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showGamesModal, setShowGamesModal] = useState(false)
  const [showMusicModal, setShowMusicModal] = useState(false)
  const [showMoviesModal, setShowMoviesModal] = useState(false)

  useEffect(() => {
    const fullTitle = t.title
    let currentIndex = 0
    
    const typeInterval = setInterval(() => {
      if (currentIndex < fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)
      }
    }, 100) // Velocidad de escritura (100ms por letra)

    return () => clearInterval(typeInterval)
  }, [t.title])

  // Handle body class for modal overlay and About page
  useEffect(() => {
    const isModalOpen = showGamesModal || showMusicModal || showMoviesModal
    
    // Add About page class
    document.body.classList.add('about-page')
    
    if (isModalOpen) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('modal-open', 'about-page')
    }
  }, [showGamesModal, showMusicModal, showMoviesModal])

  const handleBackClick = () => {
    navigate('/')
  }

  const handleGamesClick = () => {
    setShowGamesModal(true)
  }

  const handleCloseGamesModal = () => {
    setShowGamesModal(false)
  }

  const handleMusicClick = () => {
    setShowMusicModal(true)
  }

  const handleCloseMusicModal = () => {
    setShowMusicModal(false)
  }

  const handleMoviesClick = () => { // New handler for movies modal
    setShowMoviesModal(true)
  }

  const handleCloseMoviesModal = () => { // New handler to close movies modal
    setShowMoviesModal(false)
  }

  return (
    <>
      <div className={`about-container ${showGamesModal || showMusicModal || showMoviesModal ? 'blurred' : ''}`}>
        <div className="about-content">
          {/* Header */}
        <div className="about-header">
          <button className="back-button" onClick={handleBackClick}>
            {t.backButton}
          </button>
          <h1 className="about-title">
            {displayedTitle}
            {isTyping && <span className="cursor">|</span>}
          </h1>
        </div>

        {/* Main Content */}
        <div className="about-main">
          {/* Profile Placeholder */}
          <div className="profile-section">
            <div className="profile-container">
              <div className="profile-icon">
                <div className="profile-head"></div>
                <div className="profile-body"></div>
              </div>
              <div className="corner-bottom-left"></div>
              <div className="corner-bottom-right"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="about-text">
            <p className="about-paragraph">
              {t.paragraph1}
            </p>
            <p className="about-paragraph">
              {t.paragraph2}
            </p>
            <p className="about-paragraph">
              {t.paragraph3}
            </p>
          </div>
        </div>

        {/* Hobbies & Interests Section */}
        <div className="hobbies-section">
          <h2 className="hobbies-title">{t.hobbiesTitle}</h2>
          <p className="hobbies-text">{t.hobbiesText}</p>
          <div className="hobbies-icons">
            <div className="hobby-icon" onClick={handleGamesClick}>
              <img src="/images/game.png" alt="Games" className="icon-controller" />
            </div>
          <div className="hobby-icon" onClick={handleMusicClick}>
            <img src="/images/music.png" alt="Music" className="icon-music" />
          </div>
          <div className="hobby-icon" onClick={handleMoviesClick}>
            <img src="/images/movie.png" alt="Movies" className="icon-film" />
          </div>
          </div>
        </div>
        </div>
      </div>

      {/* Games Recommendation Modal */}
      {showGamesModal && (
        <div className="games-modal-overlay">
          <div className="games-modal">
            <div className="games-modal-header">
              <div className="warning-icon">⚠️</div>
              <span className="modal-title">{t.modalTitle}</span>
              <button className="close-button" onClick={handleCloseGamesModal}>✕</button>
            </div>
            <div className="games-modal-body">
              <p className="modal-text">{t.modalText}</p>
              <ul className="games-list">
                <li>Call of Duty: MW3</li>
                <li>Red Dead Redemption 2</li>
                <li>Skate 3</li>
              </ul>
              <button className="ignore-button" onClick={handleCloseGamesModal}>{t.ignoreButton}</button>
            </div>
          </div>
        </div>
      )}

      {/* Music Recommendation Modal */}
      {showMusicModal && (
        <div className="music-modal-overlay">
          <div className="music-modal">
            <div className="music-modal-header">
              <div className="warning-icon">⚠️</div>
              <span className="modal-title">{t.modalTitle}</span>
              <button className="close-button" onClick={handleCloseMusicModal}>✕</button>
            </div>
            <div className="music-modal-body">
              <p className="modal-text">{t.modalTextMusic}</p>
              <ul className="music-list">
                <li>4 Your Eyez Only – J. Cole</li>
                <li>Visión Túnel – Cruz Cafuné</li>
                <li>Brown Boy – Abhir</li>
              </ul>
              <button className="ignore-button" onClick={handleCloseMusicModal}>{t.ignoreButton}</button>
            </div>
          </div>
        </div>
          )}

      {/* Movies Recommendation Modal */}
      {showMoviesModal && (
        <div className="movies-modal-overlay">
          <div className="movies-modal">
            <div className="movies-modal-header">
              <div className="warning-icon">⚠️</div>
              <span className="modal-title">{t.modalTitle}</span>
              <button className="close-button" onClick={handleCloseMoviesModal}>✕</button>
            </div>
            <div className="movies-modal-body">
              <p className="modal-text">{t.modalTextMovies}</p>
              <ul className="movies-list">
                <li>The Hunger Games: The Ballad of Songbirds & Snakes</li>
                <li>Avengers: Endgame</li>
                <li>Focus</li>
              </ul>
              <button className="ignore-button" onClick={handleCloseMoviesModal}>{t.ignoreButton}</button>
            </div>
          </div>
        </div>
      )}
        </>
      )
    }

    export default About
