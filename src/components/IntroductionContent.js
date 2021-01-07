import React from "react";
import useDelay from "../utils/useDelay";

const HomeContent = () => {
  return (
    <div>
      <div>
        <span className="blue">software-engineer@MATT </span>
        <span className="orange">~\mattszeto\brain\tech</span>
        <span className="purple"> (master)</span>
      </div>
      <span className="yellow">$</span>{" "}
      <useDelay waitBeforeShow={700}>
        run about-me --hire -me
        <br />
        <br />
        <useDelay waitBeforeShow={400}>
          <div>Recent Grad with a B.S in Computer Science</div>
          - Experience with Full Stack Web Development and Software Engineering
          <br /> Click 'github' or 'linkedin' for more information.
          <br />
          <br />
          <useDelay waitBeforeShow={500}>
            Loading languages...
            <br />{" "}
            <useDelay waitBeforeShow={1000}>
              {">>>"} Javascript / Typescript ........ 100%
              <br />
              <useDelay waitBeforeShow={345}>
                {">>>"} Java ........................... 100%
                <br />
                <useDelay waitBeforeShow={100}>
                  {" "}
                  {">>>"} Python ......................... 100%
                  <br />
                  <useDelay waitBeforeShow={300}>
                    {">>>"} Swift .......................... 75%
                    <br />
                    <useDelay waitBeforeShow={300}>
                      {">>>"} SQL ............................ 70%
                      <br />
                      <useDelay waitBeforeShow={230}>
                        {" "}
                        {">>>"} GraphQL ........................ 65%
                        <br />
                        <useDelay waitBeforeShow={150}>
                          <br />
                          Loading technologies...
                          <br />
                          <useDelay waitBeforeShow={1100}>
                            {">>>"} React.js / Next.js ............. 100%
                            <br />
                            <useDelay waitBeforeShow={200}>
                              {">>>"} Node.js ........................ 100%
                              <br />
                              <useDelay waitBeforeShow={500}>
                                {">>>"} Git ............................ 100%
                                <br />
                                <useDelay waitBeforeShow={300}>
                                  {">>>"} PostgreSQL ..................... 50%
                                  <br />
                                  <useDelay waitBeforeShow={250}>
                                    <br />
                                    currently looking for software engineering
                                    roles...
                                  </useDelay>
                                </useDelay>
                              </useDelay>
                            </useDelay>
                          </useDelay>
                        </useDelay>
                      </useDelay>
                    </useDelay>
                  </useDelay>
                </useDelay>
              </useDelay>
            </useDelay>
          </useDelay>
        </useDelay>
      </useDelay>
    </div>
  );
};

export default HomeContent;
