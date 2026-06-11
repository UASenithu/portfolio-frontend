import React, { useState } from 'react';

function App() {
  const [projects] = useState([
    {
      id: 1,
      title: "Inventory Management System",
      description: "A robust system for tracking assets and stock levels efficiently.",
      technologies: "Java, Spring Boot, MySQL",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Flood Warning System",
      description: "Research-based project analyzing historical flood data for early warnings.",
      technologies: "Data Analysis, Python, PowerBI",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "My personal portfolio developed to showcase my skills and projects.",
      technologies: "React.js, Bootstrap",
      githubLink: "#"
    }
  ]);

  return (
    <div className="pb-5">
      {/* 🌐 NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom fixed-top px-3">
        <div className="container max-w-6xl">
          <a className="navbar-brand fw-bold text-navy" href="#home">
            Senithu<span className="text-primary">.dev</span>
          </a>
          <div className="navbar-nav ms-auto d-none d-md-flex flex-row gap-4 align-items-center">
            <a className="nav-link text-secondary text-decoration-none" href="#home">Home</a>
            <a className="nav-link text-secondary text-decoration-none" href="#about">About</a>
            <a className="nav-link text-secondary text-decoration-none" href="#skills">Skills</a>
            <a className="nav-link text-secondary text-decoration-none" href="#projects">Projects</a>
            <a className="nav-link text-secondary text-decoration-none" href="#contact">Contact</a>
            <a href="/Senithu.pdf" download="Senithu_Nethviru_CV.pdf" className="btn bg-navy text-white btn-sm px-3 py-2 rounded-3 fw-semibold ms-3 text-decoration-none">
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {/* 🏠 HERO SECTION */}
      <section id="home" className="container" style={{ paddingTop: '150px', paddingBottom: '80px' }}>
        <div className="row align-items-center justify-content-between g-5">
          <div className="col-12 col-md-7 text-center text-md-start">
            <div className="d-inline-block bg-light text-navy px-3 py-1 rounded-pill small fw-medium mb-3 border border-blue-100">
              🚀 Open to Opportunities
            </div>
            <h1 className="display-5 fw-bold text-dark mb-3">Hi, I'm <span className="text-navy">Senithu Nethviru</span></h1>
            <p className="lead text-secondary mb-4 fs-6" style={{ lineHeight: '1.8' }}>
              An IT student passionate about full-stack software development, crafting clean mobile applications, and building robust systems.
            </p>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
              <a href="#projects" className="btn bg-navy text-white px-4 py-2.5 rounded-3 shadow-sm fw-medium">View My Work</a>
              <a href="#contact" className="btn btn-outline-secondary px-4 py-2.5 rounded-3 fw-medium">Let's Talk</a>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="bg-white border p-1 rounded-4 shadow" style={{ width: '250px', height: '250px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '4px solid #fff' }}>
              <img src="/newphoto.png" alt="My Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 👨‍💻 ABOUT ME & EDUCATION */}
      <section id="about" className="container py-5 border-top">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-md-6">
            <h2 className="fw-bold text-dark mb-3">About Me</h2>
            <div className="bg-navy" style={{ width: '50px', height: '4px', borderRadius: '2px' }}></div>
            <p className="text-secondary mt-4 fs-6" style={{ lineHeight: '1.8' }}>I am a dedicated IT student pursuing higher education in Information Technology...</p>
          </div>
          <div className="col-12 col-md-6">
            <div className="p-4 bg-white border rounded-4 shadow-sm">
              <h5 className="fw-bold mb-4 text-navy">Education & Certifications</h5>
              <div className="mb-3"><span className="badge bg-light text-navy border me-2">Degree</span> <span className="text-dark font-medium">BSc (Hons) in Computer Science - SLIIT City Uni</span></div>
              <div className="mb-3"><span className="badge bg-light text-navy border me-2">Diploma</span> <span className="text-dark font-medium">Higher Diploma in HRM - SLTC</span></div>
              <div className="mb-3"><span className="badge bg-light text-navy border me-2">Professional</span> <span className="text-dark font-medium">CCNA - WINSYS | Java - IIT</span></div>
              <div className="mb-3"><span className="badge bg-light text-navy border me-2">Availability</span> <span className="text-success font-semibold">Internships / Freelance Projects</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ... (අනිත් කොටස් මෙතනට ඇතුළත් කරන්න) ... */}
      
    </div>
  );
}

export default App;