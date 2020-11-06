import React, { Component } from "react";

export default class repos extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, repos: [] };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/mattszeto/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ isLoaded: true, repos: result });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { isLoaded, repos } = this.state;
    return (
      <div>
        <div>Oh... you were not suppose to find this..</div>
        <br />
        <ul>
          {" "}
          Github Repos
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
        Since you are here... <br /> check out my{" "}
        <a href="https://github.com/mattszeto">Github</a>
      </div>
    );
  }
}
