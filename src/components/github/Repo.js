import React from "react";

const Repo = (props) => {
  return (
    <div style={{ fontSize: "11px", padding: "4px" }}>
      <a href={props.html_url}>{props.title}</a>
      <br />
      {props.description}
    </div>
  );
};

export default Repo;
