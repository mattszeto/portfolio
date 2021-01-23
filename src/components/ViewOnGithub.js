import React from "react";
import GithubIcon from "../icons/Github";

const ViewOnGithub = (props) => {
  return (
    <a className="button-svg" href="https://github.com/mattszeto/portfolio">
      <span className="text-icon">view on</span>{" "}
      <GithubIcon className="svg-icon" width="25px" height="25px" />
    </a>
  );
};

export default ViewOnGithub;
