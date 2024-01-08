// src/pages/CreateProjectPage.jsx

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { post } from "../services/authService";


function CreateProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {                          // <== ADD
    e.preventDefault();
 
    const requestBody = { title, description };
    post('/projects', requestBody)
      .then((response) => {
        // Once the project is created navigate to Project List Page
        navigate("/projects");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="CreateProjectPage">
      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProjectPage;
