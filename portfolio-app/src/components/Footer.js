import React from "react";

function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4">
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
              className="footer-icon"
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
              className="footer-icon"
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
              className="footer-icon"
              src={require("../img/design/linkedin.png")}
              alt="github icon"
            ></img>
          </a>
        </li>
      </ul>

      <div className="float-right footer-copyright text-center py-3 italic">
        © 2022 Copyright, Ryan Jewell
      </div>
    </footer>
  );
}

export default Footer;
