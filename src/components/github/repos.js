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
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
