import React, { useEffect, useState } from "react";
import Repo from "./Repo";

interface RepoType {
  html_url: string;
  full_name: string;
  description?: string;
}

const RepoList: React.FC = () => {
  const [repos, setRepos] = useState<RepoType[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/mattszeto/repos"
        );
        const data: RepoType[] = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <p>Oh.. you found this...</p>
      {repos.map((repo) => (
        <Repo
          key={repo.html_url}
          html_url={repo.html_url}
          title={repo.full_name}
          description={repo.description}
        />
      ))}
      <p>
        since you are here, check out my{" "}
        <a href="https://github.com/mattszeto">Github</a>
      </p>
    </div>
  );
};

export default RepoList;
