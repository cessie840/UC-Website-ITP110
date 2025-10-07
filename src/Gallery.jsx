import React, { useState } from "react";
import "./App.css";
import "./Gallery.css";

const images = [
  {
    id: 1,
    src: "/images/front.jpg",
    title: "PNC Front Gate (Entrance)",
    description:
      "The PNC Main Entrance serves as the welcoming gateway to the university, symbolizing pride and progress. Its clean, modern design reflects the institution’s commitment to excellence, greeting students, faculty, and visitors with a sense of belonging and academic spirit.",
  },
  {
    id: 2,
    src: "/images/main.webp",
    title: "PNC Main Building",
    description:
      "The PNC Main Building stands as the heart of the campus — a modern architectural landmark that houses the university’s administrative offices, classrooms, and the state-of-the-art library.",
  },
  {
    id: 3,
    src: "/images/ground.jpg",
    title: "PNC Ground Area",
    description:
      "The PNC Ground Area offers an open and vibrant space where students can relax, study, and socialize. Surrounded by greenery, it serves as a central spot for campus activities and gatherings.",
  },
  {
    id: 4,
    src: "/images/parking.webp",
    title: "PNC Parking Area",
    description:
      "The PNC Parking Area provides a safe and organized space for students, faculty, and visitors. Designed for convenience and accessibility.",
  },
  {
    id: 5,
    src: "/images/mph.jpg",
    title: "PNC Multi-Purpose Hall",
    description:
      "Fully equipped multi-purpose hall for campus events and assemblies.",
  },
  {
    id: 6,
    src: "/images/pnc.webp",
    title: "I Love PNC sign",
    description:
      "The iconic I ❤️ PNC Sign is a favorite spot for students and visitors alike, symbolizing pride and love for the university.",
  },
  {
    id: 7,
    src: "/images/Registrar.jpg",
    title: "PNC Registrar Office",
    description:
      "The PNC Registrar’s Office ensures efficient processing of enrollment, transcripts, and certifications while providing reliable student assistance.",
  },
  {
    id: 8,
    src: "/images/comlab.jpg",
    title: "PNC Computer Laboratory 1",
    description:
      "Equipped with modern computers and high-speed internet, supporting programming and digital innovation.",
  },
  {
    id: 9,
    src: "/images/gym.jpg",
    title: "PNC Gymnasium",
    description:
      "The PNC Gymnasium serves as a venue for sports events, assemblies, and student activities promoting fitness and teamwork.",
  },
  {
    id: 10,
    src: "/images/office.jpg",
    title: "PNC Office",
    description:
      "The PNC Office provides professional space for administrative operations and staff collaboration.",
  },
  {
    id: 11,
    src: "/images/nursing.webp",
    title: "PNC CHAS & CAS Building",
    description:
      "Home to the College of Health and Allied Sciences and the College of Arts and Sciences — equipped with modern labs and lecture rooms.",
  },
  {
    id: 12,
    src: "/images/hallway.jpg",
    title: "PNC CHAS & CAS Building Hallway",
    description:
      "The PNC Hallway connects various areas of the campus, creating a bright and welcoming atmosphere for students and staff.",
  },
  {
    id: 13,
    src: "/images/lib2.jpg",
    title: "PNC Library",
    description:
      "The PNC Library serves as a hub for learning and research, offering digital and physical resources for academic exploration.",
  },
  {
    id: 14,
    src: "/images/lab1.jpg",
    title: "PNC CHAS & CAS Laboratory",
    description:
      "The laboratory provides hands-on learning spaces for practical training, research, and experimentation.",
  },
  {
    id: 15,
    src: "/images/building.jpg",
    title: "PNC Denha Building",
    description:
      "A symbol of growth and innovation within the campus — with advanced classrooms and laboratories supporting academic programs.",
  },
  {
    id: 16,
    src: "/images/classroom.jpg",
    title: "PNC Classroom",
    description:
      "Each PNC classroom is designed with comfort and functionality, supporting interactive learning and collaboration.",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-5 about-section">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="about-header">
              <h2 className="display-4 fw-bold mb-3 about-title">
              Gallery
              </h2>
              <p className="lead about-subtitle">
                Explore the beauty and spirit of Pamantasan ng Cabuyao. From its
                iconic landmarks to modern facilities, this gallery captures the
                essence of our university — a place of learning, growth, and
                pride.
              </p>
              <div className="about-divider"></div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {images.map((img) => (
            <div
              key={img.id}
              className="gallery-item"
              onClick={() => setSelected(img)}
            >
              <img src={img.src} alt={img.title} />
              <div className="gallery-overlay">
                <h3>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div className="modal" onClick={() => setSelected(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelected(null)}>
                &times;
              </button>
              <img
                src={selected.src}
                alt={selected.title}
                className="modal-img"
              />
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
