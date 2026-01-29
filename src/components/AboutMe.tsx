import type { ReactNode } from "react";
import UseDelay from "../utils/useDelay";

type Line = {
  id: string;
  content: ReactNode;
  delay: number;
};

const LINES: readonly Line[] = [
  {
    id: "shell-path",
    content: (
      <>
        <span className="green">software-engineer@MATT </span>
        <span className="orange">~/mattszeto/brain/tech</span>
        <span className="purple"> (master)</span>
      </>
    ),
    delay: 0,
  },
  {
    id: "command",
    content: (
      <>
        <span className="yellow">$</span> run about-me --hire -me
      </>
    ),
    delay: 500,
  },
  {
    id: "title",
    content: <span className="yellow">Full Stack Software Engineer</span>,
    delay: 1000,
  },
  {
    id: "degree",
    content: <span>{">"} B.S in Computer Science</span>,
    delay: 1500,
  },
  {
    id: "cta",
    content: (
      <span>
        {">"} Click <i>linkedin</i> or <i>github</i> for more information.
      </span>
    ),
    delay: 2000,
  },
  {
    id: "loading-languages",
    content: <span className="yellow">Loading languages...</span>,
    delay: 2500,
  },
  {
    id: "lang-js-ts",
    content: (
      <span>
        {">>>"} <span>JavaScript / Typescript</span> ........ 100%
      </span>
    ),
    delay: 3300,
  },
  {
    id: "lang-java",
    content: <span>{">>>"} Java ........................... 100%</span>,
    delay: 3645,
  },
  {
    id: "lang-python",
    content: <span>{">>>"} Python ......................... 100%</span>,
    delay: 3745,
  },
  {
    id: "lang-sql",
    content: <span>{">>>"} SQL ............................ 80%</span>,
    delay: 4045,
  },
  {
    id: "lang-graphql",
    content: <span>{">>>"} GraphQL ........................ 65%</span>,
    delay: 4275,
  },
  {
    id: "loading-tech",
    content: <span className="yellow">Loading technologies...</span>,
    delay: 4425,
  },
  {
    id: "tech-react-next",
    content: <span>{">>>"} React.js / Next.js ............. 100%</span>,
    delay: 5325,
  },
];

function AboutMe() {
  return (
    <section aria-label="About me">
      {LINES.map((line) => (
        <UseDelay key={line.id} waitBeforeShow={line.delay}>
          <p>{line.content}</p>
        </UseDelay>
      ))}
    </section>
  );
}

export default AboutMe;
