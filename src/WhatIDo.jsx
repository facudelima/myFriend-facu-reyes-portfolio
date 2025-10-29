import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './WhatIDo.css'

// Translations object
const translations = {
  EN: {
    header: {
      back: "<",
      title: "WHAT I DO!!",
      cv: "CV"
    },
    illustrations: {
      title: "ILLUSTRATIONS"
    },
    motionGraphics: {
      title: "MOTION GRAPHICS"
    },
    uiux: {
      title: "UI/UX"
    },
    mainTools: {
      title: "MAIN TOOLS"
    },
    project: {
      aboutButton: "ABOUT THE PROJECT",
      modalTitle: "ABOUT THE PROJECT",
      modalText: "Kiddest is an educational mobile app that teaches English to kids through fun and interactive experiences. It combines mini-games, daily challenges, and visual rewards (like stars and customizable characters) to keep learners engaged and motivated. The interface is fully designed for mobile, using a colorful and accessible UX/UI focused on children's learning and enjoyment.",
      tryButton: "TRY THE PROTOTYPE"
    }
  },
  ES: {
    header: {
      back: "<",
      title: "QUÉ HAGO!!",
      cv: "CV"
    },
    illustrations: {
      title: "ILUSTRACIONES"
    },
    motionGraphics: {
      title: "MOTION GRAPHICS"
    },
    uiux: {
      title: "UI/UX"
    },
    mainTools: {
      title: "HERRAMIENTAS PRINCIPALES"
    },
    project: {
      aboutButton: "ACERCA DEL PROYECTO",
      modalTitle: "ACERCA DEL PROYECTO",
      modalText: "Kiddest es una aplicación móvil educativa que enseña inglés a los niños a través de experiencias divertidas e interactivas. Combina mini-juegos, desafíos diarios y recompensas visuales (como estrellas y personajes personalizables) para mantener a los estudiantes comprometidos y motivados. La interfaz está completamente diseñada para móvil, utilizando un UX/UI colorido y accesible enfocado en el aprendizaje y disfrute de los niños.",
      tryButton: "PROBAR EL PROTOTIPO"
    }
  }
}

// Software tool icons data
const softwareTools = [
  { name: 'Figma', icon: '/images/figma.png', skillLevel: 4 },
  { name: 'Photoshop', icon: '/images/ps.png', skillLevel: 5 },
  { name: 'After Effects', icon: '/images/ae.png', skillLevel: 3 },
  { name: 'Illustrator', icon: '/images/ai.png', skillLevel: 5 }
]

// Illustrations data
const illustrations = [
  {
    id: 1,
    image: '/images/illustration1.png'
  },
  {
    id: 2,
    image: '/images/illustration2.png'
  },
  {
    id: 3,
    image: '/images/illustration3.png'
  },
  {
    id: 4,
    image: '/images/illustration4.png'
  },
  {
    id: 5,
    image: '/images/illustration5.png'
  },
  {
    id: 6,
    image: '/images/illustration6.png'
  }
]

// Motion Graphics data
const motionGraphics = [
  {
    id: 1,
    video: '/images/motiongraphics1.mp4',
    title: 'Motion Graphics 1'
  },
  {
    id: 2,
    video: '/images/motiongraphics2.mp4',
    title: 'Motion Graphics 2'
  },
  {
    id: 3,
    video: '/images/motiongraphics3.mp4',
    title: 'Motion Graphics 3'
  },
  {
    id: 4,
    video: '/images/motiongraphics4.mp4',
    title: 'Motion Graphics 4'
  }
]

// UI/UX data
const uiuxDesigns = [
  { id: 2, image: '/images/uiux2.png', title: 'UI/UX Design 2' },
  { id: 1, image: '/images/uiux1.png', title: 'UI/UX Design 1' }
]

function WhatIDo({ language }) {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [displayedTitle, setDisplayedTitle] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [selectedTool, setSelectedTool] = useState(null)
  const [selectedIllustration, setSelectedIllustration] = useState(null)
  const [currentSection, setCurrentSection] = useState('illustrations') // 'illustrations', 'motionGraphics', or 'uiux'
  const [showProjectModal, setShowProjectModal] = useState(false)
  const t = translations[language]

  // Typing animation effect
  useEffect(() => {
    const fullTitle = t.header.title
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
  }, [t.header.title])

  const handleBack = () => {
    navigate('/')
  }

  const handleCV = () => {
    // Create a temporary link element to download the CV
    const link = document.createElement('a')
    link.href = '/images/cv.pdf'
    link.download = 'CV_Facundo_Reyes.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const nextSlide = () => {
    if (currentSection === 'illustrations') {
      setCurrentSection('motionGraphics')
    } else if (currentSection === 'motionGraphics') {
      setCurrentSection('uiux')
    } else if (currentSection === 'uiux') {
      setCurrentSection('illustrations')
    }
  }

  const prevSlide = () => {
    if (currentSection === 'uiux') {
      setCurrentSection('motionGraphics')
    } else if (currentSection === 'motionGraphics') {
      setCurrentSection('illustrations')
    } else if (currentSection === 'illustrations') {
      setCurrentSection('uiux')
    }
  }

  const getVisibleIllustrations = () => {
    return illustrations.slice(0, 6) // Show first 6 illustrations
  }

  const getVisibleMotionGraphics = () => {
    // Show 4 videos: 1, 2, 4 on top row, 3 on bottom wide
    const order = [0, 1, 3, 2] // motiongraphics1, motiongraphics2, motiongraphics4, motiongraphics3
    return order.map(index => motionGraphics[index])
  }

  const getVisibleUIUX = () => {
    return uiuxDesigns.slice(0, 2) // Show first 2 UI/UX designs
  }

  const handleToolClick = (toolName) => {
    setSelectedTool(selectedTool === toolName ? null : toolName)
  }

  const handleIllustrationClick = (illustration) => {
    setSelectedIllustration(illustration)
  }

  const handleCloseModal = () => {
    setSelectedIllustration(null)
  }

  const handleRecycleBinClick = () => {
    navigate('/recycle-bin')
  }

  const handleProjectClick = () => {
    setShowProjectModal(true)
  }

  const handleCloseProjectModal = () => {
    setShowProjectModal(false)
  }

  return (
    <div className="what-i-do-container">
      {/* Header */}
      <div className="what-i-do-header">
        <button className="back-button" onClick={handleBack}>
          {t.header.back}
        </button>
        <div className="title-banner">
          {displayedTitle}
          {isTyping && <span className="cursor">|</span>}
        </div>
        <button className="cv-button" onClick={handleCV}>
          <img
            src="/images/cv.png"
            alt="CV"
            className="cv-image"
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-header">
          <h2 className="content-title">
            {currentSection === 'illustrations' ? t.illustrations.title :
              currentSection === 'motionGraphics' ? t.motionGraphics.title : t.uiux.title}
          </h2>
        </div>

        <div className="content-grid-container">
          <button className="nav-arrow nav-arrow-left" onClick={prevSlide}>
            {'<'}
          </button>

          {currentSection === 'illustrations' ? (
            <div className="illustrations-grid">
              {getVisibleIllustrations().map((illustration, index) => (
                <div key={illustration.id} className="illustration-item" onClick={() => handleIllustrationClick(illustration)}>
                  <div className="illustration-frame">
                    <img
                      src={illustration.image}
                      alt={illustration.title}
                      className="illustration-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : currentSection === 'motionGraphics' ? (
            <div className="motion-graphics-grid">
              {getVisibleMotionGraphics().map((motionGraphic, index) => (
                <div key={motionGraphic.id} className="motion-graphic-item">
                  <div className="motion-graphic-frame">
                    <video
                      src={motionGraphic.video}
                      className="motion-graphic-video"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      controls={false}
                      onError={(e) => console.error(`Error loading video ${motionGraphic.id}:`, e)}
                      onLoadStart={() => console.log(`Loading video ${motionGraphic.id}: ${motionGraphic.video}`)}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="uiux-grid">
              {getVisibleUIUX().map((uiux, index) => (
                <div key={uiux.id} className="uiux-item">
                  <div className="uiux-frame">
                    <img
                      src={uiux.image}
                      alt={uiux.title}
                      className="uiux-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          <button className="nav-arrow nav-arrow-right" onClick={nextSlide}>
            {'>'}
          </button>
        </div>
      </div>

      {/* About Project Button - Only show in UI/UX section */}
      {currentSection === 'uiux' && (
        <div className="about-project-section">
          <button className="about-project-button" onClick={handleProjectClick}>
            {t.project.aboutButton}
          </button>
        </div>
      )}

      {/* Main Tools Section */}
      <div className="main-tools-section">
        <h2 className="main-tools-title">{t.mainTools.title}</h2>
        <div className="tools-grid">
          {softwareTools.map((tool, index) => (
            <div key={tool.name} className="tool-icon" onClick={() => handleToolClick(tool.name)}>
              <img
                src={tool.icon}
                alt={tool.name}
                className="tool-logo"
              />
              {selectedTool === tool.name && (
                <div className="tool-skill-indicator">
                  <div className="skill-text">SKILL</div>
                  <div className="skill-bars-container">
                    {Array.from({ length: tool.skillLevel }, (_, index) => (
                      <div key={index} className="skill-bar"></div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Recycle Bin */}
        <div className="floating-recycle-bin" onClick={handleRecycleBinClick}>
          <img
            src="/images/trash-icon.png"
            alt="Recycle Bin"
            className="trash-icon-image"
          />
        </div>
      </div>

      {/* Illustration Modal */}
      {selectedIllustration && (
        <div className="illustration-modal-overlay" onClick={handleCloseModal}>
          <div className="illustration-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={handleCloseModal}>×</button>
            <img
              src={selectedIllustration.image}
              alt="Illustration"
              className="modal-illustration-image"
            />
          </div>
        </div>
      )}

      {/* Project Modal */}
      {showProjectModal && (
        <div className="project-modal-overlay" onClick={handleCloseProjectModal}>
          <div className="project-modal-backdrop"></div>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={handleCloseProjectModal}>×</button>
            <h2 className="project-modal-title">{t.project.modalTitle}</h2>
            <p className="project-modal-text">
              {t.project.modalText}
            </p>
            <button className="prototype-button" onClick={() => window.open('https://www.figma.com/proto/aoYB5uXYZhpkk2JgTXM6ts/Prototipo-en-ALTA?page-id=0%3A1&node-id=112-29885&p=f&viewport=470%2C435%2C0.05&t=a6ccAKgZn9UVjueg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=112%3A29885', '_blank')}>
              {t.project.tryButton}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default WhatIDo
