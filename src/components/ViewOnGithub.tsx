import React from "react";
import GithubIcon from "../icons/Github";

interface ViewOnGithubProps {
  href?: string;
  className?: string;
  iconClassName?: string;
  width?: string;
  height?: string;
}

const ViewOnGithub: React.FC<ViewOnGithubProps> = ({
  href = "https://github.com/mattszeto/portfolio",
  className = "button-svg",
  iconClassName = "svg-icon",
  width = "25px",
  height = "25px",
}) => {
  return (
    <a className={className} href={href}>
      <span className="text-icon">view on</span>{" "}
      <GithubIcon className={iconClassName} width={width} height={height} />
    </a>
  );
};

export default ViewOnGithub;
