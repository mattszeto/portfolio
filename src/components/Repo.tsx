import React from "react";

interface RepoProps {
  html_url: string;
  title: string;
  description?: string;
}

const Repo: React.FC<RepoProps> = ({ html_url, title, description }) => {
  return (
    <div style={{ fontSize: "11px", padding: "4px" }}>
      <a href={html_url}>{title}</a>
      <br />
      {description}
    </div>
  );
};

export default Repo;
