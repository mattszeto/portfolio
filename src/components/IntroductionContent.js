import React from "react";
// import Typing from "react-typing-animation";
import UseDelay from "../utils/useDelay";

const HomeContent = () => {
  return (
    <div>
      <div>
        <span className="green">software-engineer@MATT </span>
        <span className="orange">~/mattszeto/brain/tech</span>
        <span className="purple"> (master)</span>
      </div>
      <span className="yellow">$</span> run about-me --hire -me
      <br />
      <UseDelay waitBeforeShow={500}>
        <br />
        <div className="yellow">Recent Grad with a B.S in Computer Science</div>
        {">"} Experience with Full Stack Development and Software Engineering
        <div>
          {">"} Click <i>linkedin</i> or <i>github</i> for more information.
        </div>
        <br />
        <UseDelay waitBeforeShow={500}>
          <div className="yellow">Loading languages...</div>
          <UseDelay waitBeforeShow={800}>
            {">>>"} <span>JavaScript / Typescript</span> ........ 100%
            <br />
            <UseDelay waitBeforeShow={345}>
              {">>>"} Java ........................... 100%
              <br />
              <UseDelay waitBeforeShow={100}>
                {" "}
                {">>>"} Python ......................... 100%
                <br />
                <UseDelay waitBeforeShow={300}>
                  {">>>"} SQL ............................ 80%
                  <br />
                  <UseDelay waitBeforeShow={230}>
                    {" "}
                    {">>>"} GraphQL ........................ 65%
                    <br />
                    <UseDelay waitBeforeShow={150}>
                      <br />
                      <div className="yellow">Loading technologies...</div>
                      <UseDelay waitBeforeShow={900}>
                        {">>>"} React.js / Next.js ............. 100%
                        <br />
                        <UseDelay waitBeforeShow={200}>
                          {">>>"} Node.js ........................ 100%
                          <br />
                          <UseDelay waitBeforeShow={500}>
                            {">>>"} Git ............................ 100%
                            <br />
                            <UseDelay waitBeforeShow={200}>
                              {">>>"} Django ......................... 75%
                              <br />
                              <UseDelay waitBeforeShow={300}>
                                {">>>"} PostgreSQL ..................... 75%
                                <br />
                                <UseDelay waitBeforeShow={250} color="red">
                                  <br />
                                  currently looking for entry-level software
                                  engineering roles...
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
