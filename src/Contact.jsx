export default function Contact() {
  return (
    <div className="contact-page-wrapper">
      <div className="container contact-container">
        <h2 className="page-title">Contact</h2>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message..." rows="6"></textarea>
          </div>
          <button type="submit" className="pill-button-solid submit-button">Send Message</button>
        </form>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/facur/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <img src="/images/linkedin.png" alt="LinkedIn" className="social-img" />
          </a>
          <a href="https://www.behance.net/facundoreyes" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Behance">
            <img src="/images/behance.png" alt="Behance" className="social-img" />
          </a>
          <a href="https://www.instagram.com/imfucdat/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
            <img src="/images/instagram.png" alt="Instagram" className="social-img" />
          </a>
        </div>
      </div>

      <footer className="global-footer">
        <p>Designed & built by Facu</p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
