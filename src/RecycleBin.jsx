import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './RecycleBin.css'

// Translations object
const translations = {
  EN: {
    header: {
      back: "←",
      title: "RECYCLE BIN"
    },
    deletedDesigns: {
      title: "DELETED DESIGNS"
    }
  },
  ES: {
    header: {
      back: "←",
      title: "PAPELERA"
    },
    deletedDesigns: {
      title: "DISEÑOS ELIMINADOS"
    }
  }
}

// Deleted designs data
const deletedDesigns = [
  {
    id: 1,
    name: "deleted-design-000007",
    thumbnail: "/images/illustration7.png"
  },
  {
    id: 2,
    name: "deleted-design-000008", 
    thumbnail: "/images/illustration8.png"
  },
  {
    id: 3,
    name: "deleted-design-000009",
    thumbnail: "/images/illustration9.png"
  },
  {
    id: 4,
    name: "deleted-design-000010",
    thumbnail: "/images/illustration10.png"
  }
]

function RecycleBin({ language }) {
  const navigate = useNavigate()
  const [displayedTitle, setDisplayedTitle] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [selectedDesign, setSelectedDesign] = useState(null)
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
    }, 100)

    return () => clearInterval(typeInterval)
  }, [t.header.title])

  const handleBack = () => {
    navigate('/what-i-do')
  }

  const handleDesignClick = (design) => {
    setSelectedDesign(design)
  }

  const handleCloseModal = () => {
    setSelectedDesign(null)
  }

  return (
    <div className="recycle-bin-container">
      {/* Header */}
      <div className="recycle-bin-header">
        <button className="back-button" onClick={handleBack}>
          {t.header.back}
        </button>
        <div className="title-banner">
          {displayedTitle}
          {isTyping && <span className="cursor">|</span>}
        </div>
      </div>

      {/* Deleted Designs List */}
      <div className="deleted-designs-section">
        <div className="deleted-designs-list">
          {deletedDesigns.map((design) => (
            <div 
              key={design.id} 
              className="deleted-design-item"
              onClick={() => handleDesignClick(design)}
            >
              <div className="design-thumbnail">
                <img 
                  src={design.thumbnail} 
                  alt={design.name}
                  className="thumbnail-image"
                />
              </div>
              <div className="design-name">{design.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Design Modal */}
      {selectedDesign && (
        <div className="design-modal-overlay" onClick={handleCloseModal}>
          <div className="design-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={handleCloseModal}>×</button>
            <img 
              src={selectedDesign.thumbnail} 
              alt={selectedDesign.name}
              className="modal-design-image"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default RecycleBin
