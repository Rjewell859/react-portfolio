import React from "react";

export default function Project({ img, title, link, repo, alt }) {
  return (
    <div className="project shadow-sm">
      <h4>
        {title}
        <a href={repo} target="_blank" rel="noreferrer">
          <img
            className="grow"
            id="giticon"
            src={require("../img/design/repoicon.png")}
            alt="git icon"
          ></img>
        </a>
      </h4>
      <a href={link} target="_blank" rel="noreferrer">
        <img className="grow" src={img} alt={alt}></img>
      </a>
    </div>
  );
}
