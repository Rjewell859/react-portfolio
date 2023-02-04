import React from "react";

import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

function Nav() {
  return (
    <listGroup style={{ float: "right" }} className="nav nav-tabs" as="ul">
      <ListGroup.Item className="nav-item" as="li">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </ListGroup.Item>

      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/portfolio">
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/resume">
          Resume
        </Link>
      </li>
    </listGroup>
  );
}

export default Nav;
