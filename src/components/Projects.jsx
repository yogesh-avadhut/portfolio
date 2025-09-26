import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Kirana Store E-Commerce Platform</h3>
          <p>An e-commerce web app for a local Kirana shop with product catalog, cart, checkout, secure login, and admin panel.</p>
          <p><strong>Technologies:</strong> React.js, Node.js, MongoDB, PrimeReact</p>
        </div>

        <div className="project-card">
          <h3>Expense Tracker App</h3>
          <p>A web app to manage daily expenses with add, edit, and delete features for easy expense tracking.</p>
          <p><strong>Technologies:</strong> React.js, Node.js, MongoDB</p>
        </div>

        <div className="project-card">
          <h3>Cab Booking Clone - Savaari</h3>
          <p>A frontend application inspired by Ola/Uber with cab category selection, fare calculation, and booking confirmation.</p>
          <p><strong>Technologies:</strong> React.js, PrimeReact</p>
        </div>
      </div>
    </section>
  );
}
