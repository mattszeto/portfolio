export interface Experience {
  company: string;
  title: string;
  type: string;
  start: string;
  end: string;
  current: boolean;
  description: string;
  tools: string[];
  company_image: string;
}

const experiences: Experience[] = [
  {
    company: "Mcgraw Hill",
    title: "Software Engineer",
    type: "Full-Time",
    description: "Platform Interoperability and L-Services",
    start: "2021",
    end: "present",
    current: true,
    tools: ["Golang", "Angular", "TypeScript"],
    company_image: "",
  },
  {
    company: "Open Source",
    title: "Open Source Developer",
    type: "Self-Employed",
    description:
      "Working on open source projects like PyRo, a python algorithmic trading robot and YupVote, a full-stack application used to share and dicuss ideas",
    start: "2020",
    end: "2021",
    current: false,
    tools: [
      "React",
      "GraphQL",
      "Python",
      "SQL",
      "GCP",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    company_image: "",
  },
  {
    company: "TechStyle",
    title: "Software Engineer Intern",
    type: "Intern",
    description:
      "Developed UI/UX features with the iOS mobile team for 2 brands (JustFab & Fabletics). Additionally worked on an OTA (Over The Air) feature for updating the mobile app without hassle.",
    start: "2019",
    end: "2019",
    current: false,
    tools: [
      "TypeScript",
      "React Native",
      "Node.js",
      "Objective-C",
      "Agile Development",
      "Jira",
    ],
    company_image: "",
  },
  // {
  //   company: "iD Tech - Stanford University",
  //   title: "Programming Mentor",
  //   type: "Internship",
  //   description:
  //     "Worked as a mentor to incoming high-school and college students, teaching them python and java fundamentals.",
  //   start: "2017",
  //   end: "2017",
  //   current: false,
  //   tools: ["Java", "Python"],
  //   company_image: "",
  // },
];

export default experiences;
