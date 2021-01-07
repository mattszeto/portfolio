import React from "react";
import Delayed from "../../utils/delayed";
import "./introductioncontent.css";

const HomeContent = () => {
  return (
    <div>
      <div>
        <span className="blue">software-engineer@MATT </span>
        <span className="orange">~\mattszeto\brain\tech</span>
        <span className="purple"> (master)</span>
      </div>
      <span className="yellow">$</span>{" "}
      <Delayed waitBeforeShow={700}>
        run about-me --hire -me
        <br />
        <br />
        <Delayed waitBeforeShow={400}>
          <div>Recent Grad with a B.S in Computer Science</div>
          - Experience with Full Stack Web Development and Software Engineering
          <br /> Click 'github' or 'linkedin' for more information.
          <br />
          <br />
          <Delayed waitBeforeShow={500}>
            Loading languages...
            <br />{" "}
            <Delayed waitBeforeShow={1000}>
              {">>>"} Javascript / Typescript ........ 100%
              <br />
              <Delayed waitBeforeShow={345}>
                {">>>"} Java ........................... 100%
                <br />
                <Delayed waitBeforeShow={100}>
                  {" "}
                  {">>>"} Python ......................... 100%
                  <br />
                  <Delayed waitBeforeShow={300}>
                    {">>>"} Swift .......................... 75%
                    <br />
                    <Delayed waitBeforeShow={300}>
                      {">>>"} SQL ............................ 70%
                      <br />
                      <Delayed waitBeforeShow={230}>
                        {" "}
                        {">>>"} GraphQL ........................ 65%
                        <br />
                        <Delayed waitBeforeShow={150}>
                          <br />
                          Loading technologies...
                          <br />
                          <Delayed waitBeforeShow={1100}>
                            {">>>"} React.js / Next.js ............. 100%
                            <br />
                            <Delayed waitBeforeShow={200}>
                              {">>>"} Node.js ........................ 100%
                              <br />
                              <Delayed waitBeforeShow={500}>
                                {">>>"} Git ............................ 100%
                                <br />
                                <Delayed waitBeforeShow={300}>
                                  {">>>"} PostgreSQL ..................... 50%
                                  <br />
                                  <Delayed waitBeforeShow={250}>
                                    <br />
                                    currently looking for software engineering
                                    roles...
                                  </Delayed>
                                </Delayed>
                              </Delayed>
                            </Delayed>
                          </Delayed>
                        </Delayed>
                      </Delayed>
                    </Delayed>
                  </Delayed>
                </Delayed>
              </Delayed>
            </Delayed>
          </Delayed>
        </Delayed>
      </Delayed>
    </div>
  );
};

export default HomeContent;
