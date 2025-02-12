import React from "react";
import experiences, {
  Experience as ExperienceType,
} from "../common/experiences";

const ExperienceItem: React.FC<{ experience: ExperienceType }> = ({
  experience,
}) => (
  <div className="proj">
    <div className="details">
      <h3 className="yellow experience-company">{experience.company}</h3>
      <p className="green experience-title">{experience.title}</p>
      <p className="grey experience-timeline">
        {experience.start} - {experience.end}
      </p>
      <div className="subtitles">
        <p className="description">{experience.description}</p>
      </div>
      <div className="tools">
        {experience.tools.map((tool, idx) => (
          <span key={idx} className={idx % 2 === 0 ? "green" : "orange"}>
            {tool}{" "}
          </span>
        ))}
      </div>
      <div className="links"></div>
    </div>
  </div>
);

const Experience: React.FC = () => (
  <div>
    <div>
      <span className="green">software-engineer@MATT </span>
      <span className="orange">~/mattszeto/experience</span>
      <span className="purple"> (master)</span>
    </div>
    <span className="yellow">$</span> run experience .
    {experiences.map((experience, index) => (
      <ExperienceItem key={index} experience={experience} />
    ))}
  </div>
);

export default Experience;
