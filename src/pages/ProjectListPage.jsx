// src/pages/ProjectListPage.jsx

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

import { get } from "../services/authService";


function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    
    get('/projects')
      .then((response) => {
        console.log("projects", response.data)
        setProjects(response.data)})
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, [] );

  
  return (
    <div className="ProjectListPage">\

      <Link to="/projects/create">
        <button>Create Project</button>
      </Link>

      {projects.map((project) => {
        return (
            <ProjectCard key={project.id} {...project} />
        );
      })}
    </div>
  );
}

export default ProjectListPage;
