export default function Home() {
    const scrollToWork = (e) => {
        e.preventDefault();
        const workSection = document.getElementById('work');
        if (workSection) {
            workSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="home-page">
            <div className="home-content">
                <div className="home-title">
                    <h1>HELLO</h1>
                    <h1>I'M FACU</h1>
                </div>
                <div className="home-subtitle">
                    UX/UI & Visual Designer
                </div>
                <div className="home-button-wrapper">
                    <a href="#work" onClick={scrollToWork} className="pill-button-solid">View Work</a>
                </div>
            </div>
        </div>
    );
}
