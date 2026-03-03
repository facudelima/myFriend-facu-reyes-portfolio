export default function About() {
  return (
    <div className="container about-page-wrapper">
      <h2 className="page-title">About</h2>

      <div className="about-intro">
        <p>I'm a UX/UI Designer focused on creating clear, modern digital products with strong attention to detail. I design experiences that balance usability, visual clarity and consistency, and I also collaborate on visual design and motion projects when needed.</p>
      </div>

      <div className="about-content">
        <div className="about-what-i-do">
          <h3>What I do</h3>
          <ul className="do-list">
            <li>
              <div className="do-icon black-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div className="do-text">
                <strong>UX/UI Design:</strong> User flows, wireframes, and UI systems.
              </div>
            </li>
            <li>
              <div className="do-icon black-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </div>
              <div className="do-text">
                <strong>Visual Design:</strong> Branding and visual direction for digital projects.
              </div>
            </li>
            <li>
              <div className="do-icon black-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div className="do-text">
                <strong>Motion Graphics:</strong> Simple animations and motion pieces.
              </div>
            </li>
          </ul>
        </div>

        <div className="about-how-i-work">
          <h3>How I work</h3>
          <p>I work with a clear and structured design process, focusing on understanding the problem before moving into solutions. I value simplicity, iteration and collaboration to ensure every design decision is intentional and aligned with user and project goals.</p>
        </div>
      </div>

      <div className="about-footer">
        <a href="/images/cv.pdf" className="pill-button-solid" download>Download CV</a>
      </div>
    </div>
  );
}
