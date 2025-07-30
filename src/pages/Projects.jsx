import React from "react";

export default function Projects() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">My Projects</h2>

      <div className="row gy-4">
        {/* Card 1 */}
        <div className="col-md-6">
          <div className="card shadow p-4 rounded h-100">
            <div className="card-body">
              <h5 className="card-title">React Portfolio</h5>
              <p className="card-text">
                <strong>Description:</strong> My personal portfolio made using React and Bootstrap. <br />
                <strong>Tech Used:</strong> React, Bootstrap
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-6">
          <div className="card shadow p-4 rounded h-100">
            <div className="card-body">
              <h5 className="card-title">Car Management System</h5>
              <p className="card-text">
                <strong>Concepts:</strong> Programming Fundamentals <br />
                <strong>Description:</strong> Created a basic system to store, update, and delete car records using file handling and user interaction. <br />
                <strong>Tech Used:</strong> C++
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-6">
          <div className="card shadow p-4 rounded h-100">
            <div className="card-body">
              <h5 className="card-title">School Management System</h5>
              <p className="card-text">
                <strong>Concepts:</strong> Object-Oriented Programming (OOP) <br />
                <strong>Description:</strong> Designed a system to manage student and staff records using classes, inheritance, and polymorphism. <br />
                <strong>Tech Used:</strong> C++
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-6">
          <div className="card shadow p-4 rounded h-100">
            <div className="card-body">
              <h5 className="card-title">Hospital Management System</h5>
              <p className="card-text">
                <strong>Concepts:</strong> Data Structures & Algorithms <br />
                <strong>Description:</strong> Developed a hospital system using linked lists and trees with optimized search and sorting. <br />
                <strong>Tech Used:</strong> C++
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-6">
          <div className="card shadow p-4 rounded h-100">
            <div className="card-body">
              <h5 className="card-title">Calculator</h5>
              <p className="card-text">
                <strong>Concepts:</strong> Frontend Web Dev <br />
                <strong>Description:</strong> A basic calculator using HTML, CSS, and JavaScript that performs all standard arithmetic operations. <br />
                <strong>Tech Used:</strong> HTML, CSS, JavaScript
              </p>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-6">
          <div className="card shadow p-4 rounded h-100">
            <div className="card-body">
              <h5 className="card-title">JavaScript Portfolio</h5>
              <p className="card-text">
                <strong>Concepts:</strong> Frontend Web Dev <br />
                <strong>Description:</strong> A personal portfolio made with HTML, CSS, and JavaScript featuring smooth scroll and responsive layout. <br />
                <strong>Tech Used:</strong> HTML, CSS, JavaScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
