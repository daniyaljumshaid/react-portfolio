import React from "react";
import mypic from "../assets/mypic.jpg"; // update the filename

export default function Home() {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-white"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        padding: "2rem",
      }}
    >
      <div className="text-center">
        <img
          src={mypic}
          alt="My Profile"
          className="rounded-circle mb-4"
          style={{ width: "150px", height: "150px", objectFit: "cover", border: "3px solid white" }}
        />
        <h1 className="fw-bold">Hi, I'm Daniyal Jumshaid</h1>
        <p className="lead">React Frontend Developer | Future MERN Stack Developer</p>
        <a href="/projects" className="btn btn-outline-light mt-3">See My Work</a>
      </div>
    </div>
  );
}
