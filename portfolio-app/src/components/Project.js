import React from "react";

function Project({ img, title, link, repo, alt }) {
  return (
    <div className="project">
      <h4>
        {title}
        <a href={repo} target="_blank" rel="noreferrer">
          <img
            id="giticon"
            src={require("../img/design/repoicon.png")}
            alt="git icon"
          ></img>
        </a>
      </h4>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt={alt}></img>
      </a>
    </div>
  );
}

export default Project;
