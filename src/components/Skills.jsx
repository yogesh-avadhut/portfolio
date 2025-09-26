import React from "react";
import "../styles/Skills.css";

import jsIcon from "../assets/icons/javascript.png";
import reactIcon from "../assets/icons/react.png";
import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import nodeIcon from "../assets/icons/node.png";
import expressIcon from "../assets/icons/express.png";
import mongoIcon from "../assets/icons/mongo.png";
import dockerIcon from "../assets/icons/docker.png";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: jsIcon },
    { name: "React.js", icon: reactIcon },
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "Express.js", icon: expressIcon },
    { name: "MongoDB", icon: mongoIcon },
    { name: "Docker", icon: dockerIcon },
  ];

  return (
    <><h2 className="title">My Skills</h2>
    <section className="skills-section">
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <p>{skill.name}</p>
            <img src={skill.icon} alt={skill.name} />
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
