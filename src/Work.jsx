import { useState } from 'react';

const projects = [
    // UX/UI
    { id: 1, title: 'Kiddest', image: '/images/kiddest portada.png', category: 'UX/UI', type: 'UX/UI Design', role: 'UX/UI Designer', goal: 'Educational Platform' },
    { id: 2, title: 'Eira', image: '/images/eira portada.png', category: 'UX/UI', type: 'UX/UI Design', role: 'UX/UI Designer', goal: 'Mental Health App' },
    { id: 3, title: 'DotStudio', image: '/images/dotstudio-portada.png', category: 'UX/UI', type: 'UX/UI Design', role: 'UX/UI Designer', goal: 'Creative Studio' },

    // Branding
    { id: 4, title: 'Fucdat', image: '/images/fucdat portada.png', category: 'Branding', type: 'Visual Identity', role: 'Brand Designer', goal: 'Health & Wellness' },
    { id: 5, title: 'Taura', image: '/images/taura-portada.png', category: 'Branding', type: 'Visual Identity', role: 'Brand Designer', goal: 'Modern Branding' },
    { id: 6, title: 'Exergia', image: '/images/exergia portada.png', category: 'Branding', type: 'Visual Identity', role: 'Brand Designer', goal: 'Sustainable Energy' },

    // Motion
    { id: 7, title: 'Motion Graphic 1', video: '/images/motiongraphics1.mp4', category: 'Motion', type: 'Explainer Video', role: 'Motion Designer', goal: 'Dynamic storytelling' },
    { id: 8, title: 'Motion Graphic 2', video: '/images/motiongraphics2.mp4', category: 'Motion', type: 'Social Media Ad', role: 'Animator', goal: 'User engagement' },
    { id: 9, title: 'Motion Graphic 3', video: '/images/motiongraphics3.mp4', category: 'Motion', type: 'Interface Animation', role: 'Motion Designer', goal: 'UX micro-interactions' },
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
