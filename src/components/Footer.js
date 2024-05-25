import React from "react";

export default function Footer() {
  return (
    <footer className="font-small blue pt-4">
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyleType: "none",
        }}
        className="list-unstyled"
      >
        <li>
          <a
            href="https://github.com/Rjewell859/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="grow footer-icon"
              src={require("../img/design/github.png")}
              alt="github icon"
            ></img>
          </a>
        </li>

        <li>
          <a
            href="https://stackoverflow.com/users/19155658/ryan-jewell/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="grow footer-icon"
              src={require("../img/design/stackicon.png")}
              alt="github icon"
            ></img>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/ryan-jewell-29336023b"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="grow footer-icon"
              src={require("../img/design/linkedin.png")}
              alt="github icon"
            ></img>
          </a>
        </li>
      </ul>

      <div id='copyright'>
        © 2022 Copyright, Ryan Jewell
      </div>
    </footer>
  );
}

