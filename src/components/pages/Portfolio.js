import React from "react";
import Project from "../Project";

export default function Portfolio() {
  return (
    <div>
      <div className="card bg-light mb-3">
        <h1 className="card-header">Portfolio</h1>
        <p className="card-body">
          Welcome to my portfolio. Here you will find many of my completed projects, the first three are more complex as they were completed with a group of teammates. If you click on a
          project image it opens a new tab that will take you to the deployed
          website if available. Several of these projects are offline applications. Click on the the respective "
          <img
            style={{ height: "25px", width: "25px" }}
            id="giticon"
            src={require("../../img/design/repoicon.png")}
            alt="git icon"
          ></img>
          " icon to view a project repository.
        </p>
      </div>
      <div id="projects">
        <Project
          img={require("../../img/project/sheltr.JPG")}
          title="Sheltr"
          link="https://sheltr.tech/"
          repo="https://github.com/derekson333/sheltr"
          alt="A pet adoption website"
        />
        <Project
          img={require("../../img/project/lyrictionaryProjectImage.png")}
          title="Lyrictionary"
          link="https://derekson333.github.io/lyrictionary/"
          repo="https://github.com/derekson333/lyrictionary"
          alt="Dictionary for lyrics"
        />
        <Project
          img={require("../../img/project/spillin-beans.png")}
          title="Spillin Beans"
          link="https://spillin-beans.herokuapp.com/"
          repo="https://github.com/derekson333/Spillin-Beans"
          alt="Website for sharing recipes"
        />
        <Project
          img={require("../../img/project/note-taker.JPG")}
          title="Note Taker"
          link="https://mynote-taker64.herokuapp.com/"
          repo="https://github.com/Rjewell859/note-taker"
          alt="A simple note taking application"
        />
        <Project
          img={require("../../img/project/readme-gen.JPG")}
          title="Readme Generator"
          link="https://github.com/Rjewell859/readme-generator"
          repo="https://github.com/Rjewell859/readme-generator"
          alt="Offline app to generate a readme"
        />
        <Project
          img={require("../../img/project/socialmedia.JPG")}
          title="Social Media API"
          link="https://github.com/Rjewell859/social-media-api"
          repo="https://github.com/Rjewell859/social-media-api"
          alt="API for a social media website using mongoose"
        />
        <Project
          img={require("../../img/project/tracker.JPG")}
          title="Employee Tracker"
          link="https://github.com/Rjewell859/employee-tracker"
          repo="https://github.com/Rjewell859/employee-tracker"
          alt="An SQL based database for keeping track of employee data"
        />
        <Project
          img={require("../../img/project/teamprofile.JPG")}
          title="Team Generator"
          link="https://github.com/Rjewell859/team-profile-generator"
          repo="https://github.com/Rjewell859/team-profile-generator"
          alt="Generates a team profile webpage based on input"
        />
        <Project
          img={require("../../img/project/jate.JPG")}
          title="J.A.T.E Text Editor"
          link="https://text-editor0393.herokuapp.com/"
          repo="https://github.com/Rjewell859/text-edit"
          alt="A full stack text editor application"
        />
        <Project
          img={require("../../img/project/password.JPG")}
          title="Password Generator"
          link="https://rjewell859.github.io/passwordGenerator/"
          repo="https://github.com/Rjewell859/passwordGenerator"
          alt="Basic password generator"
        />
        <Project
          img={require("../../img/project/code-quiz.JPG")}
          title="Timed Code Quiz"
          link="https://rjewell859.github.io/timed-code-quiz/"
          repo="https://github.com/Rjewell859/timed-code-quiz"
          alt="A timed quiz about code"
        />
        <Project
          img={require("../../img/project/schedule.jpg")}
          title="Weekly Planner"
          link="https://rjewell859.github.io/weekly-planner/"
          repo="https://github.com/Rjewell859/weekly-planner"
          alt="A time based weekly planner"
        />
        <Project
          img={require("../../img/project/ecommerce.JPG")}
          title="Ecommerce Website"
          link="https://github.com/Rjewell859/e-commerce-site"
          repo="https://github.com/Rjewell859/e-commerce-site"
          alt="Backend code for an ecommerce site"
        />
        <Project
          img={require("../../img/project/weather-dash.JPG")}
          title="Weather Dashboard"
          link="https://rjewell859.github.io/weather-dash/"
          repo="https://github.com/Rjewell859/weather-dash"
          alt="Weekly/daily weather application"
        />
        <Project
          img={require("../../img/project/tech-blog.JPG")}
          title="Tech Blog"
          link="https://tech-blog52.herokuapp.com/"
          repo="https://github.com/Rjewell859/tech-blog"
          alt="A basic blog website"
        />
        <Project
          img={require("../../img/project/horiseonpicture.JPG")}
          title="Horiseon Refactor"
          link="https://rjewell859.github.io/horiseonRefactor/"
          repo="https://github.com/Rjewell859/horiseonRefactor"
          alt="A simple refactored website"
        />
      </div>
    </div>
  );
}
