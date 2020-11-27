import React, { useEffect, useState } from "react";
import Repo from "./Repo";

const Repos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(
      "https://api.github.com/users/mattszeto/repos"
    );
    const data = await response.json();
    setRepos(data);
    console.log(data[0]);
  };

  return (
    <div>
      <p>Oh.. you found this...</p>
      {repos.map((repo) => (
        <Repo
          html_url={repo.html_url}
          title={repo.full_name}
          description={repo.description}
        />
      ))}
      <p>
        Since you are here, check out my{" "}
        <a href="https://github.com/mattszeto">Github</a>
      </p>
    </div>
  );
};

export default Repos;
