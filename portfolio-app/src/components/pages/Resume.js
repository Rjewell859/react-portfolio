import React from "react";

export default function Contact() {
  return (
    <div id="contact">
      <div className="card bg-light mb-3">
        <h1 className="card-header">
          Resume
          <span id="resume-text" className="float-right">
            Download my{" "}
            <a
              id="resume"
              href={require("../../Resume.pdf")}
              type="application/octet-stream"
              download
            >
              resume
            </a>
            .
          </span>
        </h1>
        <section className="card-body">
          <br></br>
          <h3>Front-end:</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <br></br>
          <h3>Back-end:</h3>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>GraphQL</li>
            <li>Apollo</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
