import React from "react";
import "./ProjectItem.css";
import classNames from "classnames";

function ProjectItem(props) {
  const projectContainerClassNames = classNames(
    "project-container",
    { "flex-row-reverse": props.direction === "left" },
    { "flex-column": props.direction === "down" }
  );
  return (
    <div className={projectContainerClassNames} style={props.bgImage ? { backgroundImage: props.bgImage } : null}>
      <div className="project-info">
        <span className="project-title" style={props.textColor ? { color: props.textColor } : null}>
          {props.title}
        </span>
        <span className="project-details" style={props.textColor ? { color: props.textColor } : null}>
          &emsp;{props.details}
        </span>
        <span className="project-details" style={props.textColor ? { color: props.textColor } : null}>
          &emsp;{props.moreDetails}
        </span>
      </div>
      <img className="gb-image" src={props.image} alt={props.title} />
    </div>
  );
}

export default ProjectItem;
