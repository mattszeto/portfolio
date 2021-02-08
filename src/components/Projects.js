import React, { useState } from "react";

const projects = [
  {
    title: "aSynth",
    description:
      "A music streaming platform for you and your friends to listen to music at the same time.",
    tools: ["React", "JavaScript", "Django", "Spotify API"],
    repo: "https://github.com/mattszeto/asynth",
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
    repo: "https://github.com/mattszeto/upvote",
    demo: "https://yupvote.net/",
    gif: "",
    gifPause: "",
  },
  {
    title: "pyRo",
    description:
      "Algorithmic trading robot. Checks indicators, stores buy/sell triggers. Momentum algorithm (linear regression model)",
    tools: ["Python", "GCP", "BigQuery", "tdaAPI"],
    repo: "https://github.com/mattszeto/pyRo",
    demo: "",
    gif: "",
    gifPause: "",
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <div className="proj-wrapper">
        {projects.map((project, index) => (
          <div key={index} className="proj">
            <div className="details">
              <br />
              <div className="yellow">{project.title}</div>
              <div className="subtitles">
                <p className="description">{project.description}</p>
              </div>
              <div className="tools">
                {project.tools.map((tool, idx) => (
                  <small
                    key={idx}
                    className={idx % 2 === 0 ? "green" : "orange"}
                  >
                    {tool}{" "}
                  </small>
                ))}
              </div>
              <div className="subtitles">
                <a className="link" href={project.repo} target="__blank">
                  <small>Repo</small>
                </a>

                {project.demo ? (
                  <span>
                    |
                    <a className="link" href={project.demo} target="__blank">
                      <small>Website</small>
                    </a>
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* <div className="video-container">
              <img
                className="video"
                src={isPlaying === index ? project.gif : project.gifPause}
                alt={project.title}
              />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
