import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    // Environment variables from .env
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('error');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div id="contact" className="contact-page-wrapper">
      <div className="container contact-container">
        <h2 className="page-title">Contact</h2>

        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="user_name" id="name" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" id="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="Your Message..." rows="6" required></textarea>
          </div>

          <button
            type="submit"
            className="pill-button-solid submit-button"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="form-status success">Message sent successfully! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="form-status error">Something went wrong. Please try again or email me directly.</p>
          )}
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
