import React from "react";
import "./HeaderLink.css";
import { Link } from "react-scroll";

function HeaderLink(props) {
  return (
    <Link activeClass="active-header-link" className="header-link" to={props.anchor} onClick={props.onClick} spy={true} smooth={true} offset={-70} duration={500}>
      <span>
      {props.name}
      </span>
    </Link>
  )
}

export default HeaderLink;
