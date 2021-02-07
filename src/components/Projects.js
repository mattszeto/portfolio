import React, { useState } from "react";

const projects = [
  {
    title: "aSynth",
    description:
      "A music streaming platform for you and your friends to listen to music at the same time.",
    tools: ["React", "JavaScript", "Django", "Spotify API"],
    repo: "",
    demo: "",
    gif: "",
    gifPause: "",
  },
  {
    title: "yupvote",
    description:
      "Full-stack social media website for sharing ideas and creating conversations",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "PostgreSQL",
      "Node",
      "Apollo",
    ],
    repo: "",
    demo: "",
    gif: "",
    gifPause: "",
  },
  {
    title: "pyRo",
    description:
      "Algorithmic trading robot. Checks indicators, stores buy/sell triggers. Momentum algorithm (linear regression model)",
    tools: ["Python", "GCP", "BigQuery", "TDA API"],
    repo: "",
    demo: "",
    gif: "",
    gifPause: "",
  },
];

const Projects = () => {
  const [isPlaying, setIsPlaying] = useState(null);
  return (
    <div id="projects">
      <p className="title-section">Projects</p>
      <div className="proj-wrapper">
        {projects.map((project, index) => (
          <div
            key={index}
            className="proj"
            onMouseOut={() => setIsPlaying(null)}
            onMouseOver={() => setIsPlaying(index)}
          >
            <div className="details">
              <h2>{project.title}</h2>
              <div className="subtitles">
                <small className="description">{project.description}</small>
              </div>
              <div className="tools">
                {project.tools.map((tool, idx) => (
                  <small key={idx} className="description">
                    {tool}
                  </small>
                ))}
              </div>
              <div className="subtitles">
                <a className="link" href={project.repo} target="__blank">
                  {" "}
                  <small>Repository </small>{" "}
                </a>
                <a className="link" href={project.demo} target="__blank">
                  {" "}
                  <small>Website </small>{" "}
                </a>
              </div>
            </div>
            <div className="video-container">
              <img
                className="video"
                src={isPlaying === index ? project.gif : project.gifPause}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
