import React, { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "MERN E-Commerce Website",
      category: "mern",
      description: "Full-stack e-commerce platform with product catalog, cart, user authentication, and order management.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      icon: "🛒"
    },
    {
      id: 2,
      title: "React Portfolio",
      category: "web",
      description: "Personal portfolio made using React and Bootstrap with professional design.",
      tech: ["React", "Bootstrap"],
      icon: "⚛️"
    },
    {
      id: 3,
      title: "Car Management System",
      category: "cpp",
      description: "Basic system to store, update, and delete car records using file handling.",
      tech: ["C++"],
      icon: "🚗"
    },
    {
      id: 4,
      title: "School Management System",
      category: "cpp",
      description: "System to manage student and staff records using OOP concepts.",
      tech: ["C++", "OOP"],
      icon: "🏫"
    },
    {
      id: 5,
      title: "Hospital Management System",
      category: "cpp",
      description: "Hospital system using linked lists and trees with optimized search.",
      tech: ["C++", "DSA"],
      icon: "🏥"
    },
    {
      id: 6,
      title: "Calculator",
      category: "web",
      description: "Basic calculator with all standard arithmetic operations.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "🔢"
    },
    {
      id: 7,
      title: "JavaScript Portfolio",
      category: "web",
      description: "Portfolio with smooth scroll and responsive layout.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "💼"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="container py-5">
      {/* Header */}
      <header className="text-center mb-5">
        <h1 className="fw-bold text-info">My Projects</h1>
        <p className="lead text-light opacity-75">
          A collection of my academic and personal projects
        </p>
      </header>

      {/* Filter Buttons */}
      <nav aria-label="Project filters" className="mb-4">
        <div className="d-flex justify-content-center flex-wrap gap-1 gap-sm-2" style={{ rowGap: "0.75rem" }}>
          {[
            { value: "all", label: "All Projects", icon: "📁" },
            { value: "mern", label: "MERN Stack", icon: "🧩" },
            { value: "web", label: "Web Development", icon: "🌐" },
            { value: "cpp", label: "C++ Projects", icon: "⚙️" }
          ].map(btn => (
            <button
              key={btn.value}
              className={`btn ${filter === btn.value ? 'btn-info text-dark' : 'btn-outline-info'}`}
              style={{ 
                padding: "0.5rem 1rem",
                fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)",
                minHeight: "44px"
              }}
              onClick={() => setFilter(btn.value)}
              aria-pressed={filter === btn.value}
            >
              <span role="img" aria-hidden="true">{btn.icon}</span> {btn.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Project Count - System Status */}
      <p className="text-center text-muted mb-4" aria-live="polite">
        Showing {filteredProjects.length} of {projects.length} projects
      </p>

      {/* Project Cards Grid */}
      <div className="row gy-4">
        {filteredProjects.map(project => (
          <div className="col-md-6 col-lg-4" key={project.id}>
            <article 
              className="card h-100 shadow-lg border-0 overflow-hidden"
              style={{ 
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                className="card-header py-3 d-flex align-items-center gap-2"
                style={{ background: 'rgba(13, 202, 240, 0.1)', borderBottom: '1px solid rgba(13, 202, 240, 0.2)' }}
              >
                <span className="fs-4" role="img" aria-hidden="true">{project.icon}</span>
                <h2 className="card-title text-info mb-0 h5">{project.title}</h2>
              </div>
              
              <div className="card-body">
                <p className="card-text text-light">
                  {project.description}
                </p>
                
                {/* Tech Stack - Visual Icons */}
                <div className="mt-3">
                  <h3 className="text-info small text-uppercase fw-bold mb-2">Tech Stack</h3>
                  <div className="d-flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="badge bg-info bg-opacity-25 text-info border border-info"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

    
    </div>
  );
}
