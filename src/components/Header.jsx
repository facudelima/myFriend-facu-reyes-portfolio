import { useState, useEffect } from 'react';

export default function Header({ onMenuClick }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToHome = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className={`global-header ${scrolled ? 'header-scrolled' : ''}`}>
            <div className="header-left">
                {scrolled ? (
                    <button onClick={scrollToHome} className="home-scroll-btn" aria-label="Home">
                        <img src="/images/home.png" alt="Home" style={{ width: '36px', height: '36px' }} />
                    </button>
                ) : (
                    <a href="/images/cv.pdf" className="header-cv" download>Download CV</a>
                )}
            </div>
            <div className="header-right">
                <button className="menu-toggle" onClick={onMenuClick}>
                    <span className="icon-plus">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </span>
                    <span className="menu-text">MENU</span>
                </button>
            </div>
        </header>
    );
}
