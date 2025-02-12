import React from "react";
import projects from "../common/projects";

const Projects = () => {
  return (
    <div id="projects">
      <div className="proj-wrapper">
        <div>
          <span className="green">swe-projects@MATT </span>
          <span className="orange">~/mattszeto/projects</span>
        </div>
        <span className="yellow">$</span> run ./load-projects
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
                    <a
                      className="link web-link"
                      href={project.demo}
                      target="__blank"
                    >
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
