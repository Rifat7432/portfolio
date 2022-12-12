import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://protfolio-server-bay.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <h1 className=" text-3xl font-bold text-primary  text-center my-10">My Projects</h1>
      <div className="grid grid-cols-1 py-20 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project}>
            {" "}
          </ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
