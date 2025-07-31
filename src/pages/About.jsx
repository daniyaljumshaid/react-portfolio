import React from "react";
import mypic2 from "../assets/mypic2.jpg"; // make sure the image path is correct
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Profile Image */}
        <div className="col-md-4 text-center mb-4">
          <img
            src={mypic2}
            alt="Daniyal"
            style={{ width: "350px", height: "400px", objectFit: "cover",borderRadius: "60px"}}
          />
        </div>

        {/* About Text */}
        <div className="col-md-8">
          <h2 className="mb-3">About Me</h2>
          <p>
          <h3>Intro:</h3>
            Hi, I'm <strong>Daniyal Jumshaid</strong> — a frontend developer who loves building
            clean and user-friendly web applications.

            <h3>Educational Background:</h3>
             I'm currently studying BSCS at UET Lahore.I have developed skils in HTML,CSS,Bootstrap,JS and React JS.I have experience working on several academic and personal projects in both C++ and JavaScript which helped strengthen my fundamentals in programming and frontend development.
          </p>
          <p>
           <h3>Goals:</h3>
           Currently, I’m focused on learning React and the MERN stack, with the goal of becoming a full-stack developer and building real-world applications.
          </p>
            <h5 className="mt-4">Tech Stack:</h5>
        <div className="d-flex flex-wrap gap-4 fs-2 mt-2">
  <FaHtml5 title="HTML5" color="#e34c26" />
  <FaCss3Alt title="CSS3" color="#264de4" />
  <FaJs title="JavaScript" color="#f0db4f" />
  <FaBootstrap title="Bootstrap" color="#7952b3" />
  <FaReact title="React" color="#61DBFB" />
  <FaGitAlt title="Git" color="#f1502f" />
</div>
        </div>
      </div>

    </div>
  );
}
