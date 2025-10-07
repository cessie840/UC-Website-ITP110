import React from 'react';
import './MissionVision.css';

const MissionVision = () => {
  // Mission and Vision data
  const missionVisionData = [
    {
      title: "Mission",
      icon: "🎯",
      content: "An institution of higher learning committed to equip individuals with knowledge, skills and values that will enable them to achieve professional goals & provide leadership and service for national development.",
      color: "mission"
    },
    {
      title: "Vision", 
      icon: "🌟",
      content: "An institution of higher learning in Region IV, developing globally competitive and value-laden professionals and leaders instrumental to community development and nation building.",
      color: "vision"
    },
    {
      title: "Who We Serve",
      icon: "🎓", 
      content: "Students and communities of Cabuyao and beyond—aspiring professionals seeking accessible, high‑quality education grounded in service.",
      color: "serve"
    },
    {
      title: "Core Values",
      icon: "✅",
      content: ["Personal Dignity", "Nurturing Community", "Commitment to Excellence"],
      color: "values"
    },
    {
      title: "PnC (UC) Graduate Attributes", 
      icon: "🛡️",
      content: [
        "Professional competent individual",
        "Proficient communicator", 
        "Analytical & problem solver",
        "Lifelong learner",
        "Team leader or player",
        "Productive individual",
        "Socially and ethically responsible citizen",
        "Technology‑driven professional",
        "Value‑laden professional"
      ],
      color: "attributes"
    }
  ];

  return (
    <section id="mission-vision" className="py-5 mission-vision-section">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="mission-vision-header">
              <h2 className="display-4 fw-bold mb-3 mission-vision-title">
                Mission & Vision
              </h2>
              <p className="lead mission-vision-subtitle">
                Guiding principles that shape our purpose and future. Our commitment to excellence 
                in education and community development drives everything we do at Pamantasan ng Cabuyao.
              </p>
              <div className="mission-vision-divider"></div>
            </div>
          </div>
        </div>

        {/* First Row - Mission, Vision, Who We Serve */}
        <div className="row g-4 mb-4">
          {missionVisionData.slice(0, 3).map((item, index) => {
            const { title, icon, content, color } = item;
            
            return (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className={`card h-100 mission-vision-card shadow-lg border-0 ${color}-card`}>
                  <div className="card-body text-center p-4">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="mission-vision-icon">
                        {icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h5 className="card-title mb-3 fw-bold mission-vision-card-title">{title}</h5>
                    
                    {/* Content */}
                    <div className="mission-vision-content">
                      {Array.isArray(content) ? (
                        <ul className="mission-vision-list">
                          {content.map((item, idx) => (
                            <li key={idx} className="mission-vision-list-item">{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="card-text mission-vision-text">{content}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row - Core Values and Graduate Attributes (Centered Pair) */}
        <div className="row justify-content-center g-4">
          <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
            <div className={`card h-100 mission-vision-card shadow-lg border-0 ${missionVisionData[3].color}-card`}>
              <div className="card-body text-center p-4">
                {/* Icon */}
                <div className="mb-4">
                  <div className="mission-vision-icon">
                    {missionVisionData[3].icon}
                  </div>
                </div>
                
                {/* Title */}
                <h5 className="card-title mb-3 fw-bold mission-vision-card-title">{missionVisionData[3].title}</h5>
                
                {/* Content */}
                <div className="mission-vision-content">
                  <ul className="mission-vision-list">
                    {missionVisionData[3].content.map((item, idx) => (
                      <li key={idx} className="mission-vision-list-item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
            <div className={`card h-100 mission-vision-card shadow-lg border-0 ${missionVisionData[4].color}-card`}>
              <div className="card-body text-center p-4">
                {/* Icon */}
                <div className="mb-4">
                  <div className="mission-vision-icon">
                    {missionVisionData[4].icon}
                  </div>
                </div>
                
                {/* Title */}
                <h5 className="card-title mb-3 fw-bold mission-vision-card-title">{missionVisionData[4].title}</h5>
                
                {/* Content */}
                <div className="mission-vision-content">
                  <ul className="mission-vision-list">
                    {missionVisionData[4].content.map((item, idx) => (
                      <li key={idx} className="mission-vision-list-item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="mission-vision-additional">
              <div className="row text-center">
                <div className="col-md-6 mb-4">
                  <div className="additional-card">
                    <div className="additional-icon">🧭</div>
                    <h3 className="additional-title">Guiding Principles</h3>
                    <p className="additional-text">
                      Personal Dignity • Nurturing Community • Commitment to Excellence • 
                      Lifelong Learning • Social Responsibility
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="additional-card">
                    <div className="additional-icon">💬</div>
                    <h3 className="additional-title">Inspiration</h3>
                    <p className="additional-text" style={{fontStyle: "italic"}}>
                      "We honor personal dignity, build a nurturing community, and pursue 
                      excellence—empowering lifelong learners to serve society with 
                      integrity, innovation, and purpose."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get Involved Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="get-involved-section">
              <div className="get-involved-content text-center">
                <div className="get-involved-icon">📌</div>
                <h3 className="get-involved-title">Get Involved</h3>
                <p className="get-involved-text">
                  Advance our mission and graduate attributes by partnering on research 
                  and extension projects, mentoring students, offering internships, or 
                  volunteering in community programs. Connect with us to collaborate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;


