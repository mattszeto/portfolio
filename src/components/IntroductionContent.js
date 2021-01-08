import React from "react";
// import Typing from "react-typing-animation";
import UseDelay from "../utils/useDelay";

const HomeContent = () => {
  return (
    <div>
      <div>
        <span className="blue">software-engineer@MATT </span>
        <span className="orange">~/mattszeto/brain/tech</span>
        <span className="purple"> (master)</span>
      </div>
      <span className="yellow">$</span> run about-me --hire -me
      <br />
      <UseDelay waitBeforeShow={500}>
        <br />
        <div>Recent Grad with a B.S in Computer Science</div>
        - Experience with Full Stack Web Development and Software Engineering
        <br /> Click 'github' or 'linkedin' for more information.
        <br />
        <br />
        <UseDelay waitBeforeShow={500}>
          Loading languages...
          <br />{" "}
          <UseDelay waitBeforeShow={800}>
            {">>>"} Javascript / Typescript ........ 100%
            <br />
            <UseDelay waitBeforeShow={345}>
              {">>>"} Java ........................... 100%
              <br />
              <UseDelay waitBeforeShow={100}>
                {" "}
                {">>>"} Python ......................... 100%
                <br />
                <UseDelay waitBeforeShow={300}>
                  {">>>"} Swift .......................... 75%
                  <br />
                  <UseDelay waitBeforeShow={300}>
                    {">>>"} SQL ............................ 70%
                    <br />
                    <UseDelay waitBeforeShow={230}>
                      {" "}
                      {">>>"} GraphQL ........................ 65%
                      <br />
                      <UseDelay waitBeforeShow={150}>
                        <br />
                        Loading technologies...
                        <br />
                        <UseDelay waitBeforeShow={900}>
                          {">>>"} React.js / Next.js ............. 100%
                          <br />
                          <UseDelay waitBeforeShow={200}>
                            {">>>"} Node.js ........................ 100%
                            <br />
                            <UseDelay waitBeforeShow={500}>
                              {">>>"} Git ............................ 100%
                              <br />
                              <UseDelay waitBeforeShow={300}>
                                {">>>"} PostgreSQL ..................... 50%
                                <br />
                                <UseDelay waitBeforeShow={250}>
                                  <br />
                                  currently looking for software engineering
                                  roles...
                                </UseDelay>
                              </UseDelay>
                            </UseDelay>
                          </UseDelay>
                        </UseDelay>
                      </UseDelay>
                    </UseDelay>
                  </UseDelay>
                </UseDelay>
              </UseDelay>
            </UseDelay>
          </UseDelay>
        </UseDelay>
      </UseDelay>
    </div>
  );
};

export default HomeContent;
