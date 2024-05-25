import React from "react";

import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

export default function Nav() {
  return (
    <listGroup style={{ float: "right" }} className="nav nav-tabs" as="ul">
      <ListGroup.Item className="nav-item" as="li">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </ListGroup.Item>
      <ListGroup.Item className="nav-item" as="li">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </ListGroup.Item>
      <ListGroup.Item className="nav-item" as="li">
        <Link className="nav-link" to="/portfolio">
          Portfolio
        </Link>
      </ListGroup.Item>
      <ListGroup.Item className="nav-item" as="li">
        <Link className="nav-link" to="/resume">
          Resume
        </Link>
      </ListGroup.Item>
    </listGroup>
  );
}
