export default function MenuOverlay({ isOpen, onClose, onNavigate }) {
    if (!isOpen) return null;

    const links = [
        { label: 'WORK', id: 'work' },
        { label: 'ABOUT', id: 'about' },
        { label: 'CONTACT', id: 'contact' },
    ];

    return (
        <div className={`menu-overlay ${isOpen ? '' : 'hidden'}`}>
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
