import React from "react";
import UseDelay from "../utils/useDelay";

interface Line {
  text: React.ReactNode;
  delay: number;
}

const AboutMe: React.FC = () => {
  const lines: Line[] = [
    {
      text: (
        <>
          <span className="green">software-engineer@MATT </span>
          <span className="orange">~/mattszeto/brain/tech</span>
          <span className="purple"> (master)</span>
        </>
      ),
      delay: 0,
    },
    {
      text: (
        <>
          <span className="yellow">$</span> run about-me --hire -me
        </>
      ),
      delay: 500,
    },
    {
      text: <div className="yellow">Full Stack Software Engineer</div>,
      delay: 1000,
    },
    { text: <>{">"} B.S in Computer Science</>, delay: 1500 },
    {
      text: (
        <>
          {">"} Click <i>linkedin</i> or <i>github</i> for more information.
        </>
      ),
      delay: 2000,
    },
    { text: <div className="yellow">Loading languages...</div>, delay: 2500 },
    {
      text: (
        <>
          {">>>"} <span>JavaScript / Typescript</span> ........ 100%
        </>
      ),
      delay: 3300,
    },
    { text: <>{">>>"} Java ........................... 100%</>, delay: 3645 },
    { text: <>{">>>"} Python ......................... 100%</>, delay: 3745 },
    { text: <>{">>>"} SQL ............................ 80%</>, delay: 4045 },
    { text: <>{">>>"} GraphQL ........................ 65%</>, delay: 4275 },
    {
      text: <div className="yellow">Loading technologies...</div>,
      delay: 4425,
    },
    { text: <>{">>>"} React.js / Next.js ............. 100%</>, delay: 5325 },
  ];

  return (
    <div>
      {lines.map((line, index) => (
        <UseDelay key={index} waitBeforeShow={line.delay}>
          <div>{line.text}</div>
        </UseDelay>
      ))}
    </div>
  );
};

export default AboutMe;
