import React from "react";
import "./HeaderLink.css";
import { Link } from "react-scroll";

function HeaderLink(props) {
  return (
    <Link activeClass="active-header-link" className="header-link" to={props.anchor} spy={true} smooth={true} offset={-70} duration={500}>
      {props.name}
    </Link>
  )
}

export default HeaderLink;
