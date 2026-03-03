export default function MenuOverlay({ isOpen, onClose, onNavigate }) {
    if (!isOpen) return null;

    const links = [
        { label: 'WORK', id: 'work' },
        { label: 'ABOUT', id: 'about' },
        { label: 'CONTACT', id: 'contact' },
    ];

    return (
        <div className={`menu-overlay ${isOpen ? '' : 'hidden'}`}>
            <header className="global-header menu-header">
                <div className="header-left">
                    <a href="/images/cv.pdf" className="header-cv" download>Download CV</a>
                </div>
                <div className="header-right">
                    <button className="menu-toggle" onClick={onClose}>
                        <span className="icon-close">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </span>
                        <span className="menu-text">CLOSE</span>
                    </button>
                </div>
            </header>

            <nav className="menu-nav">
                <ul>
                    {links.map(link => (
                        <li key={link.id}>
                            <button
                                onClick={() => onNavigate(link.id)}
                                className="menu-link-btn"
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
