// import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // Add the import at the top

// // Inside your <Routes>
// <Route path="/design" element={<Design/>}/>
// import Navbar from "./components/Navbar";
// import Attendance from "./components/Attendance";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";

// export default function App() {
//   return (
//     <div className="min-vh-100" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", color: "white" }}>
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/about" element={<About/>}/>
//       <Route path="/projects" element={<Projects/>}/>
//       <Route path="/contact" element={<Contact/>}/>
//       <Route path="/resume" element={<Resume/>}/>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import './index.css'; // Enhanced accessibility styles

export default function App() {
  return (
    <div className="min-vh-100" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", color: "white" }}>
      {/* Skip to Main Content Link - Accessibility Requirement */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <BrowserRouter>
        <Navbar />
        <main id="main-content" role="main">
          <Routes>
            {/* Portfolio Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}