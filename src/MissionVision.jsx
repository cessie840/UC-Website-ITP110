import React from "react";
import {
  FaBullseye,
  FaStar,
  FaUserGraduate,
  FaCheckCircle,
  FaShieldAlt,
  FaCompass,
  FaComments,
  FaThumbtack,
} from "react-icons/fa";
import "./MissionVision.css";

const MissionVision = () => {
  const missionVisionData = [
    {
      title: "Mission",
      icon: <FaBullseye className="white-icon" />,
      content:
        "An institution of higher learning committed to equip individuals with knowledge, skills and values that will enable them to achieve professional goals & provide leadership and service for national development.",
      color: "mission",
    },
    {
      title: "Vision",
      icon: <FaStar className="white-icon" />,
      content:
        "An institution of higher learning in Region IV, developing globally competitive and value-laden professionals and leaders instrumental to community development and nation building.",
      color: "vision",
    },
    {
      title: "Who We Serve",
      icon: <FaUserGraduate className="white-icon" />,
      content:
        "Students and communities of Cabuyao and beyond—aspiring professionals seeking accessible, high-quality education grounded in service.",
      color: "serve",
    },
    {
      title: "Core Values",
      icon: <FaCheckCircle className="white-icon" />,
      content: [
        "Personal Dignity",
        "Nurturing Community",
        "Commitment to Excellence",
      ],
      color: "values",
    },
    {
      title: "PnC (UC) Graduate Attributes",
      icon: <FaShieldAlt className="white-icon" />,
      content: [
        "Professional competent individual",
        "Proficient communicator",
        "Analytical & problem solver",
        "Lifelong learner",
        "Team leader or player",
        "Productive individual",
        "Socially and ethically responsible citizen",
        "Technology-driven professional",
        "Value-laden professional",
      ],
      color: "attributes",
    },
  ];

  return (
    <section id="mission-vision" className="py-5 mission-vision-section">
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="mission-vision-header">
              <h2 className="display-4 fw-bold mb-3 mission-vision-title">
                Mission & Vision
              </h2>
              <p className="lead mission-vision-subtitle">
                Guiding principles that shape our purpose and future. Our
                commitment to excellence in education and community development
                drives everything we do at Pamantasan ng Cabuyao.
              </p>
              <div className="mission-vision-divider"></div>
            </div>
          </div>
        </div>

        {/* First Row */}
        <div className="row g-4 mb-4">
          {missionVisionData.slice(0, 3).map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div
                className={`card h-100 mission-vision-card shadow-lg border-0 ${item.color}-card`}
              >
                <div className="card-body text-center p-4">
                  <div className="mb-4">
                    <div className="mission-vision-icon">{item.icon}</div>
                  </div>
                  <h5 className="card-title mb-3 fw-bold mission-vision-card-title">
                    {item.title}
                  </h5>
                  <div className="mission-vision-content">
                    {Array.isArray(item.content) ? (
                      <ul className="mission-vision-list">
                        {item.content.map((listItem, idx) => (
                          <li key={idx} className="mission-vision-list-item">
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="card-text mission-vision-text">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="row justify-content-center g-4">
          {missionVisionData.slice(3, 5).map((item, index) => (
            <div key={index} className="col-lg-5 col-md-6 col-sm-12 mb-4">
              <div
                className={`card h-100 mission-vision-card shadow-lg border-0 ${item.color}-card`}
              >
                <div className="card-body text-center p-4">
                  <div className="mb-4">
                    <div className="mission-vision-icon">{item.icon}</div>
                  </div>
                  <h5 className="card-title mb-3 fw-bold mission-vision-card-title">
                    {item.title}
                  </h5>
                  <div className="mission-vision-content">
                    <ul className="mission-vision-list">
                      {item.content.map((listItem, idx) => (
                        <li key={idx} className="mission-vision-list-item">
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="mission-vision-additional">
              <div className="row text-center">
                <div className="col-md-6 mb-4">
                  <div className="additional-card">
                    <div className="additional-icon">
                      <FaCompass />
                    </div>
                    <h3 className="additional-title">Guiding Principles</h3>
                    <p className="additional-text">
                      Personal Dignity • Nurturing Community • Commitment to
                      Excellence • Lifelong Learning • Social Responsibility
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="additional-card">
                    <div className="additional-icon">
                      <FaComments />
                    </div>
                    <h3 className="additional-title">Inspiration</h3>
                    <p
                      className="additional-text"
                      style={{ fontStyle: "italic" }}
                    >
                      "We honor personal dignity, build a nurturing community,
                      and pursue excellence—empowering lifelong learners to
                      serve society with integrity, innovation, and purpose."
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
            <div className="get-involved-section text-center">
              <div className="get-involved-icon">
                <FaThumbtack />
              </div>
              <h3 className="get-involved-title">Get Involved</h3>
              <p className="get-involved-text">
                Advance our mission and graduate attributes by partnering on
                research and extension projects, mentoring students, offering
                internships, or volunteering in community programs. Connect with
                us to collaborate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
