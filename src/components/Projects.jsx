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
    tools: ["React", "TypeScript", "GraphQL", "PostgreSQL", "Node"],
    repo: "https://github.com/mattszeto/upvote",
    demo: "https://yupvote.net/",
    imgurl: "https://github.com/mattszeto/images-collection/blob/master/yupvote/yupvote-screenshot.png?raw=true",
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
              <h3 className="yellow">{project.title}</h3>
              <div className="subtitles">
                <p className="description">{project.description}</p>
              </div>
              <div className="tools">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className={idx % 2 === 0 ? "green" : "orange"}
                  >
                    {tool}{" "}
                  </span>
                ))}
              </div>
              <div className="links">
                <a className="link" href={project.repo} target="__blank">
                  <small>Repo</small>
                </a>

                {project.demo ? (
                  <span>
                    <a className="link" href={project.demo} target="__blank">
                      <small>Website</small>
                    </a>
                  </span>
                ) : (
                  ""
                )}
              </div>
              
            </div>
            {/* {project.imgurl ? 
            <div className="proj-img">
              <img alt={project.title + "-img"} src={project.imgurl}/>
            </div> : ""} */}
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
