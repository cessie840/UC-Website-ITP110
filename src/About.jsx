import React from 'react';
import './About.css';
import maniclangImage from './assets/maniclang.jpg';
import caboImage from './assets/cabo.jpg';
import duenasImage from './assets/duenas.jpg';
import protacioImage from './assets/protacio.jpeg';
import barcomaImage from './assets/barcoma.jpeg';
import mahipusImage from './assets/mahipus.png';
import vergaraImage from './assets/vergara.jpg';

const About = () => {
  // Team members data - each member can update their own information
  const teamMembers = [
    {
      name: "Cess",
      role: "Project Lead & Frontend Developer",
      bio: "Passionate about creating user-friendly interfaces and leading team collaboration. Specializes in React development and project management.",
      image: maniclangImage
    },
    {
      name: "Cabo",
      role: "UI/UX Designer",
      bio: "Creative designer with a focus on modern, accessible user experiences. Loves turning complex ideas into beautiful, intuitive designs.",
      image: caboImage
    },
    {
      name: "Charles The Great",
      role: "Backend Developer",
      bio: "Experienced developer specializing in server-side technologies and database management. Ensures our application runs smoothly behind the scenes.",
      image: duenasImage
    },
    {
      name: "Protacio",
      role: "Full-Stack Developer",
      bio: "Versatile developer comfortable with both frontend and backend technologies. Contributes to all aspects of our application development.",
      image: protacioImage
    },
    {
      name: "Barcoma",
      role: "DevOps & Deployment",
      bio: "Manages our deployment pipeline and infrastructure. Ensures our application is accessible and performs optimally in production.",
      image: barcomaImage
    },
    {
      name: "Mahipus",
      role: "Quality Assurance & Testing",
      bio: "Dedicated to ensuring our application meets the highest quality standards. Specializes in testing methodologies and bug prevention.",
      image: mahipusImage
    },
    {
      name: "Vergara",
      role: "Documentation & Research",
      bio: "Keeps our project well-documented and researched. Ensures clear communication and maintains project knowledge for the team.",
      image: vergaraImage
    }
  ];

  return (
    <section id="about" className="py-5 about-section">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="about-header">
              <h2 className="display-4 fw-bold mb-3 about-title">
                About Our Team
              </h2>
              <p className="lead about-subtitle">
                Meet the talented individuals behind this project. Our diverse team brings together 
                unique skills and perspectives to create an exceptional single-page React application. 
                Each member contributes their expertise to deliver a seamless user experience.
              </p>
              <div className="about-divider"></div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="row g-4">
          {teamMembers.map((member, index) => {
            const { name, role, bio, initials, image } = member;
            
            // Center the last card (Vergara) in the third row
            const isLastCard = index === teamMembers.length - 1;
            const columnClass = isLastCard ? "col-lg-4 col-md-6 col-sm-12 mb-4 offset-lg-4" : "col-lg-4 col-md-6 col-sm-12 mb-4";
            
            return (
              <div key={index} className={columnClass}>
                <div className="card h-100 team-card shadow-lg border-0">
                  <div className="card-body text-center p-4">
                    {/* Profile Photo */}
                    <div className="mb-4">
                      {image ? (
                        <img 
                          src={image} 
                          alt={name}
                          className="rounded-circle mx-auto d-block team-photo" 
                        />
                      ) : (
                        <div className="rounded-circle team-avatar d-flex align-items-center justify-content-center mx-auto">
                          {name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                    
                    {/* Member Name */}
                    <h5 className="card-title mb-2 fw-bold team-name">{name}</h5>
                    
                    {/* Role */}
                    <h6 className="card-subtitle mb-3 team-role">{role}</h6>
                    
                    {/* Bio */}
                    <p className="card-text team-bio">{bio}</p>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      
        
        {/* Team Stats */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="team-stats">
              <div className="row text-center">
                <div className="col-md-3 col-6 mb-4">
                  <div className="stat-item">
                    <h3 className="stat-number">7</h3>
                    <p className="stat-label">Team Members</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-4">
                  <div className="stat-item">
                    <h3 className="stat-number">5+</h3>
                    <p className="stat-label">Specializations</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-4">
                  <div className="stat-item">
                    <h3 className="stat-number">100%</h3>
                    <p className="stat-label">Dedication</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-4">
                  <div className="stat-item">
                    <h3 className="stat-number">1</h3>
                    <p className="stat-label">Amazing Project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
