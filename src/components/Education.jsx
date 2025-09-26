import React from "react";
import "../styles/Education.css";

export default function Education() {
  return (
    <>
      <h2 className="my-title">My Education</h2>
      <section className="education-section">

        <div className="education-container">
          <div className="education-card">
            <h3>MCA</h3>
            <p>2023</p>
            <p>Dr. Babasaheb Ambedkar Marathwada University Sub-campus, Dharashiv</p>
          </div>

          <div className="education-card">
            <h3>BCA</h3>
            <p>2021</p>
            <p>Shriman Bhahusaheb Zadbuke Mahavidyalaya, Barshi</p>
          </div>

          <div className="education-card">
            <h3>HSC</h3>
            <p>2018</p>
            <p>Kalegaon Jr. College, Kalegaon</p>
          </div>

          {/* <div className="education-card">
          <h3>SSC</h3>
          <p>2014</p>
          <p>Latur Board</p>
        </div> */}
        </div>
      </section>
    </>
  );
}
