import React from "react";
import "./MissionVision.css";

function MissionVision() {
    return (
        <section className="mv-section">
            <div className="mv-container">
                <header className="mv-hero">
                    <p className="mv-badge">Pamantasan ng Cabuyao</p>
                    <h1 className="mv-title">Mission & Vision</h1>
                    <p className="mv-subtitle">Guiding principles that shape our purpose and future.</p>
                </header>

                {/* Mission and Vision */}
                <div className="mv-grid">
                    <article className="mv-card mv-mission">
                        <div className="mv-card-head">
                            <span className="mv-icon" aria-hidden>🎯</span>
                            <h2>Mission</h2>
                        </div>
                        <p className="mv-text">
                        An institution of higher learning committed to equip individuals with
                        knowledge, skills and values that will enable them to achieve
                        professional goals & provide leadership and service for national development.
                        </p>
                        
                    </article>

                    <article className="mv-card mv-vision">
                        <div className="mv-card-head">
                            <span className="mv-icon" aria-hidden>🌟</span>
                            <h2>Vision</h2>
                        </div>
                        <p className="mv-text">
                            An institution of higher learning in Region IV, developing globally
                            competitive and value-laden professionals and leaders instrumental to community development and nation building.
                        </p>
                    </article>
                </div>

                {/* Audience, Objectives, Commitments */}
                <div className="mv-grid" aria-label="Strategic details">
                    <article className="mv-card">
                        <div className="mv-card-head">
                            <span className="mv-icon" aria-hidden>🎓</span>
                            <h2>Who We Serve</h2>
                        </div>
                        <p className="mv-text">
                            Students and communities of Cabuyao and beyond—aspiring professionals
                            seeking accessible, high‑quality education grounded in service.
                        </p>
                    </article>

                    <article className="mv-card">
                        <div className="mv-card-head">
                            <span className="mv-icon" aria-hidden>✅</span>
                            <h2>Core Values</h2>
                        </div>
                        <ul className="mv-text">
                            <li>Personal Dignity</li>
                            <li>Nurturing Community</li>
                            <li>Commitment to Excellence</li>
                        </ul>
                    </article>

                    <article className="mv-card">
                        <div className="mv-card-head">
                            <span className="mv-icon" aria-hidden>🛡️</span>
                            <h2>PnC (UC) Graduate Attributes</h2>
                        </div>
                        <ul className="mv-text">
                            <li>Professional competent individual</li>
                            <li>Proficient communicator</li>
                            <li>Analytical & problem solver</li>
                            <li>Lifelong learner</li>
                            <li>Team leader or player</li>
                            <li>Productive individual</li>
                            <li>Socially and ethically responsible citizen</li>
                            <li>Technology‑driven professional</li>
                            <li>Value‑laden professional</li>
                        </ul>
                    </article>
                </div>

                {/* Principles and Inspiration */}
                <div className="mv-grid">
                    <article className="mv-card" style={{gridColumn: "1 / -1"}}>
                        <div className="mv-card-head">
                            <span className="mv-icon" aria-hidden>🧭</span>
                            <h2>Guiding Principles</h2>
                        </div>
                        <p className="mv-text">
                            Personal Dignity • Nurturing Community • Commitment to Excellence •
                            Lifelong Learning • Social Responsibility
                        </p>
                    </article>

                    <article className="mv-card" style={{gridColumn: "1 / -1"}}>
                        <div className="mv-card-head">
                            <span className="mv-icon" aria-hidden>💬</span>
                            <h2>Inspiration</h2>
                        </div>
                        <p className="mv-text" style={{fontStyle: "italic"}}>
                            "We honor personal dignity, build a nurturing community, and pursue
                            excellence—empowering lifelong learners to serve society with
                            integrity, innovation, and purpose."
                        </p>
                    </article>
                </div>

                {                       }
                <div className="mv-grid">
                    <article className="mv-card" style={{gridColumn: "1 / -1"}}>
                        <div className="mv-card-head">
                            <span className="mv-icon" aria-hidden>📌</span>
                            <h2>Get Involved</h2>
                        </div>
                        <p className="mv-text">
                            Advance our mission and graduate attributes by partnering on research
                            and extension projects, mentoring students, offering internships, or
                            volunteering in community programs. Connect with us to collaborate.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default MissionVision;


