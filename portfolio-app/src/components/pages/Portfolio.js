import React from 'react';
import Project from '../Project'

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div id = "projects">
        <Project 
        img = {require("../../img/project/horiseonpicture.JPG")}
        title = "Horiseon Refactor"
        link = "https://rjewell859.github.io/horiseonRefactor/"
        repo = "https://github.com/Rjewell859/horiseonRefactor"
        alt = "Horiseon refactored website"
        />
        <Project 
        img = {require("../../img/project/lyrictionaryProjectImage.png")}
        title = "Lyrictionary"
        link = "https://derekson333.github.io/lyrictionary/"
        repo = "https://github.com/derekson333/lyrictionary"
        alt = "Dictionary for lyrics"
        />
      </div>
    </div>
  );
}
