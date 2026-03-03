import { useState } from 'react';

const projects = [
    // UX/UI
    { id: 1, title: 'UIUX Case Study 1', image: '/images/uiux1.png', category: 'UX/UI', type: 'Fintech App', role: 'Lead Designer', goal: 'User flow optimization' },
    { id: 2, title: 'UIUX Case Study 2', image: '/images/uiux2.png', category: 'UX/UI', type: 'E-commerce', role: 'Product Designer', goal: 'Mobile experience' },

    // Branding
    { id: 3, title: 'Brand Illustration Art', image: '/images/illustration3.png', category: 'Branding', type: 'Visual Identity', role: 'Illustrator', goal: 'Brand storytelling' },
    { id: 4, title: 'Corporate Branding Piece', image: '/images/illustration7.png', category: 'Branding', type: 'Photography/Graphic', role: 'Art Director', goal: 'Modern aesthetic' },
    { id: 5, title: 'Creative Visual Direction', image: '/images/illustration9.png', category: 'Branding', type: 'Composite Art', role: 'Visual Designer', goal: 'Impactful imagery' },

    // Motion
    { id: 6, title: 'Motion Graphic 1', video: '/images/motiongraphics1.mp4', category: 'Motion', type: 'Explainer Video', role: 'Motion Designer', goal: 'Dynamic storytelling' },
    { id: 7, title: 'Motion Graphic 2', video: '/images/motiongraphics2.mp4', category: 'Motion', type: 'Social Media Ad', role: 'Animator', goal: 'User engagement' },
    { id: 8, title: 'Motion Graphic 4', video: '/images/motiongraphics4.mp4', category: 'Motion', type: 'Interface Animation', role: 'Motion Designer', goal: 'UX micro-interactions' },
];

export default function Work() {
    const [activeTab, setActiveTab] = useState('UX/UI');
    const tabs = ['UX/UI', 'Branding', 'Motion'];

    const filteredProjects = projects.filter(p => p.category === activeTab);

    return (
        <div className="container work-page-wrapper">
            <h2 className="page-title">Work</h2>

            <div className="work-tabs">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className={`project-image ${project.category === 'Motion' ? 'motion-container' : ''}`}>
                            {project.video ? (
                                <video autoPlay loop muted playsInline className="project-video">
                                    <source src={project.video} type="video/mp4" />
                                </video>
                            ) : (
                                <img src={project.image} alt={project.title} className="project-img-content" />
                            )}
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>Type: {project.type}</p>
                            <p>Role: {project.role}</p>
                            <p>Goal: {project.goal}</p>
                        </div>
                        <div className="project-action">
                            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="pill-button project-link">
                                View on Behance
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px' }}>
                                    <path d="M8.28309 2.82215L1.16897 9.93628L0 8.76731L7.11413 1.65318H0.8438V0H9.93627V9.0925H8.28309V2.82215Z" fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
