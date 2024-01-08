// src/pages/ProjectDetailsPage.jsx

import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../context/auth.context";

import { Link, useParams } from "react-router-dom";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";

import { get } from "../services/authService";

function ProjectDetailsPage() {
  const [project, setProject] = useState(null);

  const { projectId } = useParams();

  const { user } = useContext(AuthContext);

  const getProject = () => {
    console.log("Getting project"); //  <== ADD A NEW FUNCTION
    get(`/projects/${projectId}`)
      .then((response) => {
        const oneProject = response.data;
        console.log("Project ===>", oneProject);
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };

  const isOwner = () => {
    return project.owner._id == user._id;
  };

  useEffect(() => {
    // <== ADD AN EFFECT
    getProject();
  }, []);

  return (
    <div className="ProjectDetailsPage">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      {project && user && isOwner() && (
        <AddTask refreshProject={getProject} projectId={projectId} />
      )}

      {project &&
        project.tasks.map((task) => <TaskCard key={task.id} {...task} />)}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>

      {project && user && isOwner() && (
        <Link to={`/projects/edit/${projectId}`}>
          <button>Edit Project</button>
        </Link>
      )}
    </div>
  );
}

export default ProjectDetailsPage;
