import React, { useState } from 'react'; 

function App() {
  // මෙතන loading කියන එක නෑ, projects විතරයි
  const [projects] = useState([
    {
      id: 1,
      title: "Inventory Management System",
      // ... අනිත් විස්තර
    },
    // ...
  ]);

  // useEffect එක සම්පූර්ණයෙන්ම අයින් කරා!
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
            <a 
              href="/Senithu.pdf" 
              download="Senithu_Nethviru_CV.pdf" 
              className="btn bg-navy text-white btn-sm px-3 py-2 rounded-3 fw-semibold ms-3 text-decoration-none">
              Download CV
            </a>
          </div>
        </div>
      </nav>


      {/* 🏠 HERO SECTION */}
<section id="home" className="container" style={{ paddingTop: '150px', paddingBottom: '80px' }}>
  <div className="row align-items-center justify-content-between g-5">
    
    {/* Text Section (7 columns) */}
    <div className="col-12 col-md-7 text-center text-md-start">
      <div className="d-inline-block bg-light text-navy px-3 py-1 rounded-pill small fw-medium mb-3 border border-blue-100">
        🚀 Open to Opportunities
      </div>
      <h1 className="display-5 fw-bold text-dark mb-3">
        Hi, I'm <span className="text-navy">Senithu Nethviru</span>
      </h1>
      <p className="lead text-secondary mb-4 fs-6" style={{ lineHeight: '1.8' }}>
        An IT student passionate about full-stack software development, crafting clean mobile applications, and building robust systems.
      </p>
      <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
        <a href="#projects" className="btn bg-navy text-white px-4 py-2.5 rounded-3 shadow-sm fw-medium">View My Work</a>
        <a href="#contact" className="btn btn-outline-secondary px-4 py-2.5 rounded-3 fw-medium">Let's Talk</a>
      </div>
    </div>

    {/* Photo Section (Now part of the same row - 4 columns) */}
    <div className="col-12 col-md-4 d-flex justify-content-center">
<div className="bg-white border p-1 rounded-4 shadow" // 'shadow-sm' වෙනුවට 'shadow' දැම්මම තව ලස්සනයි
     style={{ 
       width: '250px', 
       height: '250px', 
       overflow: 'hidden', 
       display: 'flex', 
       justifyContent: 'center', 
       alignItems: 'center',
       border: '4px solid #fff' // මේකෙන් ෆොටෝ එක වටේ සුදු පාට පෝඩර් එකක් ඇවිත් තව ලස්සන වෙනවා
     }}>
<img 
  src="/newphoto.png" 
  alt="My Profile" 
  style={{ 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover', 
    borderRadius: '12px' // මේක එකතු කරන්න (කොටුවේ කොන් වල හැඩයට ගැලපෙන්න)
  }} 
/>
      </div>
    </div>

  </div> {/* row එක මෙතනින් වහන්න */}
</section>

      {/* 👨‍💻 ABOUT ME SECTION */}
      <section id="about" className="container py-5 border-top">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-md-6">
            <h2 className="fw-bold text-dark mb-3">About Me</h2>
            <div className="bg-navy" style={{ width: '50px', height: '4px', borderRadius: '2px' }}></div>
            <p className="text-secondary mt-4 fs-6" style={{ lineHeight: '1.8' }}>
              I am a dedicated IT student pursuing higher education in Information Technology. 
              My primary focus revolves around full-stack system architecture, crafting secure network 
              infrastructures, and developing seamless cross-platform mobile applications.
            </p>
            <p className="text-secondary fs-6" style={{ lineHeight: '1.8' }}>
              Beyond coding, I have a deep passion for system designing, exploring technical advancements, 
              and enjoying creative hobbies like vehicle styling and traveling.
            </p>
          </div>


              <div>
                <div className="p-4 bg-white border rounded-4 shadow-sm">
                    <h5 className="fw-bold mb-4 text-navy">Education & Certifications</h5>
                    
                    <div className="mb-3">
                      <span className="badge bg-light text-navy border me-2">Degree</span>
                      <span className="text-dark font-medium">BSc (Hons) in Computer Science - SLIIT City Uni (2023 - Present)</span>
                    </div>
                    
                    <div className="mb-3">
                      <span className="badge bg-light text-navy border me-2">Diploma</span>
                      <span className="text-dark font-medium">Higher Diploma in HRM - SLTC</span>
                    </div>
                    
                    <div className="mb-3">
                      <span className="badge bg-light text-navy border me-2">Professional</span>
                      <span className="text-dark font-medium">CCNA - WINSYS Institute | Java Programming - IIT</span>
                    </div>

                    <div className="mb-3">
                      <span className="badge bg-light text-navy border me-2">Schooling</span>
                      <span className="text-dark font-medium">GCE A/L & O/L Qualified</span>
                    </div>
                    <div className="mb-3">
                     <span className="badge bg-light text-navy border me-2">Availability</span>
                     <span className="text-success font-semibold">Internships / Freelance Projects</span>
                    </div>
                  </div>
              </div>
            </div>
      </section>

      {/* 🧠 SKILLS SECTION */}
      <section id="skills" className="container py-5 border-top">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Technical Skills</h2>
          <p className="text-secondary small">My technology stack and proficiency levels</p>
        </div>
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="p-4 bg-white border rounded-4 shadow-sm h-100">
              <h5 className="fw-bold text-navy mb-4">Frontend & Mobile</h5>
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1 small fw-medium">
                  <span>React.js / JavaScript</span>
                  <span className="text-secondary">80%</span>
                </div>
                <div className="progress" style={{ height: '8px', backgroundColor: '#E9ECEF' }}>
                  <div className="progress-bar bg-navy" style={{ width: '80%', borderRadius: '4px' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1 small fw-medium">
                  <span>Flutter / Dart</span>
                  <span className="text-secondary">75%</span>
                </div>
                <div className="progress" style={{ height: '8px', backgroundColor: '#E9ECEF' }}>
                  <div className="progress-bar bg-primary" style={{ width: '75%', borderRadius: '4px' }}></div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between mb-1 small fw-medium">
                  <span>HTML5 / CSS3 / Bootstrap</span>
                  <span className="text-secondary">90%</span>
                </div>
                <div className="progress" style={{ height: '8px', backgroundColor: '#E9ECEF' }}>
                  <div className="progress-bar bg-secondary" style={{ width: '90%', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="p-4 bg-white border rounded-4 shadow-sm h-100">
              <h5 className="fw-bold text-navy mb-4">Backend, Security & Infrastructure</h5>
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1 small fw-medium">
                  <span>Java / Spring Boot</span>
                  <span className="text-secondary">85%</span>
                </div>
                <div className="progress" style={{ height: '8px', backgroundColor: '#E9ECEF' }}>
                  <div className="progress-bar bg-navy" style={{ width: '85%', borderRadius: '4px' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1 small fw-medium">
                  <span>MariaDB / MySQL</span>
                  <span className="text-secondary">80%</span>
                </div>
                <div className="progress" style={{ height: '8px', backgroundColor: '#E9ECEF' }}>
                  <div className="progress-bar bg-primary" style={{ width: '80%', borderRadius: '4px' }}></div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between mb-1 small fw-medium">
                  <span>Network Design (Cisco Packet Tracer / DMZ / ACLs)</span>
                  <span className="text-secondary">75%</span>
                </div>
                <div className="progress" style={{ height: '8px', backgroundColor: '#E9ECEF' }}>
                  <div className="progress-bar bg-secondary" style={{ width: '75%', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
      </section>

      {/* 💼 DYNAMIC PROJECTS SECTION */}
          <section id="projects" className="container py-5 border-top">
            <div className="text-center mb-5">
              <h2 className="fw-bold text-dark">Featured Projects</h2>
              <p className="text-secondary small">A showcase of my recent system developments and academic projects</p>
            </div>

            <div className="row g-4">
              {projects.map((project) => {
                let currentIcon = "📦";
                let badgeColor = "text-navy";

                if (project.title.toLowerCase().includes("management")) {
                  currentIcon = "⚙️";
                  badgeColor = "text-primary";
                } else if (project.title.toLowerCase().includes("flood")) {
                  currentIcon = "🌊";
                  badgeColor = "text-secondary";
                }

                return (
                  <div className="col-12 col-md-4" key={project.id}>
                    <div className="card h-100 bg-white border rounded-4 shadow-sm overflow-hidden border-0">
                      <div className="p-4 bg-light border-bottom text-center d-flex align-items-center justify-content-center" style={{ height: '160px' }}>
                        <span className="display-4 opacity-75">{currentIcon}</span>
                      </div>
                      <div className="card-body p-4 d-flex flex-column">
                        <h5 className="card-title fw-bold text-dark mb-2">{project.title}</h5>
                        <p className="card-text text-secondary small flex-grow-1" style={{ lineHeight: '1.6' }}>
                          {project.description}
                        </p>
                        <div className="mb-3 mt-2">
                          {project.technologies.split(',').map((tech, index) => (
                            <span className={`badge bg-light ${badgeColor} border me-1 mb-1`} key={index}>
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-navy fw-semibold text-decoration-none small">
                          Explore Project →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

      {/* 📞 CONTACT SECTION */}
      <section id="contact" className="container py-5 border-top">
        <div className="row g-5">
          <div className="col-12 col-md-6">
            <h2 className="fw-bold text-dark mb-3">Let's Connect</h2>
            <div className="bg-navy" style={{ width: '50px', height: '4px', borderRadius: '2px' }}></div>
            <p className="text-secondary mt-4 fs-6" style={{ lineHeight: '1.8' }}>
              Whether you want to discuss a potential project, internship opportunity, or just want to say hi, feel free to drop a message!
            </p>
            <div className="mt-4">
              <div className="d-flex align-items-center mb-3">
                <span className="fs-5 me-3 text-navy">📧</span>
                <span className="text-secondary">snethviru@gmail.com</span>
              </div>
              <div className="d-flex align-items-center">
                <span className="fs-5 me-3 text-success">💬</span>
                <span className="text-secondary">Available via WhatsApp & LinkedIn</span>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-6">
            <form className="p-4 bg-white border rounded-4 shadow-sm">
              <div className="mb-3">
                <label className="form-label small fw-medium text-dark">Your Name</label>
                <input type="text" className="form-content form-control form-control-sm rounded-3" placeholder="John Doe" />
              </div>
              <div className="mb-3">
                <label className="form-label small fw-medium text-dark">Email Address</label>
                <input type="email" className="form-control form-control-sm rounded-3" placeholder="john@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label small fw-medium text-dark">Your Message</label>
                <textarea className="form-control form-control-sm rounded-3" rows="4" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="btn bg-navy text-white btn-sm px-4 py-2 rounded-3 fw-semibold w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )}

export default App;