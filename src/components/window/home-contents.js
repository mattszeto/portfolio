import React, { Component } from "react";
import Delayed from "../delayed";

export default class homecontents extends Component {
  render() {
    return (
      <div className="change-font-size">
        Computer Science Student 1.4.0 <br />
        Copyright (c) Matt Szeto Corporation. All rights reserved.
        <br />
        <br />
        <br />
        https://matthewszeto.com
        <br />
        Click 'github' or 'linkedin' for more information.
        <br />
        <br />
        software-engineer@MATT ~\mattszeto\brain\tech$ run skills --hire -me
        <br />
        <br />
        <Delayed waitBeforeShow={500}>
          Loading languages...
          <br />{" "}
          <Delayed waitBeforeShow={1000}>
            {">>>"} Javascript / Typescript ............. 100%
            <br />
            <Delayed waitBeforeShow={345}>
              {">>>"} Java ................................ 100%
              <br />
              <Delayed waitBeforeShow={100}>
                {" "}
                {">>>"} Python .............................. 90%
                <br />
                <Delayed waitBeforeShow={300}>
                  {">>>"} Swift ............................... 75%
                  <br />
                  <Delayed waitBeforeShow={300}>
                    {">>>"} SQL ................................. 70%
                    <br />
                    <Delayed waitBeforeShow={230}>
                      {" "}
                      {">>>"} GraphQL ............................. 65%
                      <br />
                      <Delayed waitBeforeShow={150}>
                        <br />
                        Loading technologies...
                        <br />
                        <Delayed waitBeforeShow={1100}>
                          {">>>"} React.js / Next.js .................. 100%
                          <br />
                          <Delayed waitBeforeShow={200}>
                            {">>>"} Node.js ............................. 100%
                            <br />
                            <Delayed waitBeforeShow={500}>
                              {">>>"} Git ................................. 100%
                              <br />
                              <Delayed waitBeforeShow={300}>
                                {">>>"} PostgreSQL ..........................
                                50%
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
          {/*Displays mouse cordinates when hovering over SquareContainer (will be used later for parallax effect)*/}
          {/* <h1>
                  {x}
                  {y}
                </h1> */}
        </Delayed>
      </div>
    );
  }
}
