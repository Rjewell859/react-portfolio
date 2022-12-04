import React from "react";

const footerStyle = {
  clear: "both",
  marginTop: "80%",
  marginBottom: "0%",
  position: "sticky",
  display: "none",
};

function Footer() {
  return (
    <footer
      style={{ footerStyle }}
      className="page-footer font-small blue pt-4"
    >
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mt-md-0 mt-3"></div>
          <hr className="clearfix w-100 d-md-none pb-3"></hr>
          <div className="col-md-1 mb-md-0 mb-2">
            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/Rjewell859">
                  <img
                    className="footer-icon"
                    src={require("../img/design/github.png")}
                    alt="github icon"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-1 mb-md-0 mb-2">
            <ul className="list-unstyled">
              <li>
                <a href="https://stackoverflow.com/users/19155658/ryan-jewell">
                  <img
                    className="footer-icon"
                    src={require("../img/design/stackicon.png")}
                    alt="github icon"
                  ></img>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-1 mb-md-0 mb-2">
            <ul className="list-unstyled">
              <li>
                <a href="https://www.linkedin.com/in/ryan-jewell-29336023b/">
                  <img
                    className="footer-icon"
                    src={require("../img/design/linkedin.png")}
                    alt="github icon"
                  ></img>
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="float-right footer-copyright text-center py-3 italic">
        © 2022 Copyright, Ryan Jewell
      </div>
    </footer>
  );
}

export default Footer;
