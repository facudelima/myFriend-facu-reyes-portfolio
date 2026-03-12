import { useState, useEffect } from 'react';

export default function Header({ isMenuOpen, onToggleMenu }) {
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
        <header className={`global-header ${scrolled ? 'header-scrolled' : ''} ${isMenuOpen ? 'header-menu-active' : ''}`}>
            <div className="header-left">
                {scrolled && !isMenuOpen ? (
                    <button onClick={scrollToHome} className="home-scroll-btn" aria-label="Home">
                        <img src="/images/home.png" alt="Home" style={{ width: '36px', height: '36px' }} />
                    </button>
                ) : (
                    <a href="/images/cv.pdf" className="header-cv" download>Download CV</a>
                )}
            </div>
            <div className="header-right">
                <button className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`} onClick={onToggleMenu}>
                    <span className="icon-plus">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="2" x2="12" y2="22"></line>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                        </svg>
                    </span>
                    <span className="menu-text">{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
                </button>
            </div>
        </header>
    );
}
