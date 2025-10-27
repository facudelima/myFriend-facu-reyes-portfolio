import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'

const Contact = ({ language }) => {
  const navigate = useNavigate()
  const [displayedTitle, setDisplayedTitle] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  // Translations
  const translations = {
    EN: {
      header: {
        back: '←',
        title: "LET'S TALK!"
      },
      form: {
        title: "Contact Form",
        subtitle: "Please contact me directly at facuudelimaa@gmail.com or drop your info here.",
        fullName: "Full name",
        email: "Email Address",
        message: "Your Message",
        fullNamePlaceholder: "Your Name",
        emailPlaceholder: "you@example.com",
        messagePlaceholder: "Tell me about your project...",
        privacy: "I'll never share your data with anyone else.",
        sendButton: "Send Message"
      }
    },
    ES: {
      header: {
        back: '←',
        title: "¡HABLEMOS!"
      },
      form: {
        title: "Formulario de Contacto",
        subtitle: "Por favor contáctame directamente en facuudelimaa@gmail.com o deja tu información aquí.",
        fullName: "Nombre completo",
        email: "Dirección de Email",
        message: "Tu Mensaje",
        fullNamePlaceholder: "Tu Nombre",
        emailPlaceholder: "tu@ejemplo.com",
        messagePlaceholder: "Cuéntame sobre tu proyecto...",
        privacy: "Nunca compartiré tus datos con nadie más.",
        sendButton: "Enviar Mensaje"
      }
    }
  }

  const t = translations[language]

  // Typewriter animation for title
  useEffect(() => {
    const title = t.header.title
    let index = 0
    setIsTyping(true)
    
    const typeInterval = setInterval(() => {
      if (index < title.length) {
        setDisplayedTitle(title.substring(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [t.header.title])

  const handleBack = () => {
    navigate('/')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add email sending logic here
  }

  const handleEmailClick = () => {
    window.open('mailto:facuudelimaa@gmail.com', '_blank')
  }

  const handleSocialClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <button className="back-button" onClick={handleBack}>
          {t.header.back}
        </button>
        <div className="title-banner">
          {displayedTitle}
          {isTyping && <span className="cursor">|</span>}
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">{t.form.fullName}</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder={t.form.fullNamePlaceholder}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">{t.form.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.form.emailPlaceholder}
                  className="form-input"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">{t.form.message}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t.form.messagePlaceholder}
                className="form-textarea"
                rows="4"
                required
              />
            </div>
            
            <button type="submit" className="submit-button">
              {t.form.sendButton}
            </button>
          </form>
          
          {/* Social Media Links */}
          <div className="social-media-container">
            <div className="social-media-links">
          <button 
            className="social-link linkedin" 
            onClick={() => handleSocialClick('https://www.linkedin.com/in/facur/')}
            title="LinkedIn"
          >
            <img src="/images/linkedin.png" alt="LinkedIn" className="social-icon" />
          </button>
          <button 
            className="social-link instagram" 
            onClick={() => handleSocialClick('https://www.instagram.com/imfucdat/')}
            title="Instagram"
          >
            <img src="/images/instagram.png" alt="Instagram" className="social-icon" />
          </button>
          <button 
            className="social-link behance" 
            onClick={() => handleSocialClick('https://www.behance.net/facundoreyes')}
            title="Behance"
          >
            <img src="/images/behance.png" alt="Behance" className="social-icon" />
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
