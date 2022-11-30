import React from 'react';
import Project from '../Project'

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div id = "projects">
        <Project 
        img = "./img/project/horiseonpicture.JPG"
        title = "Horiseon Refactor"
        link = "https://rjewell859.github.io/horiseonRefactor/"
        repo = "https://github.com/Rjewell859/horiseonRefactor"
        />
        <Project 
        img = "./img/project/lyrictionaryProjectImage.png"
        title = "Lyrictionary"
        link = "https://rjewell859.github.io/horiseonRefactor/"
        repo = "https://github.com/Rjewell859/horiseonRefactor"
        />
      </div>
    </div>
  );
}
