import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOneProject } from "../../services/projects";
import Button from "@mui/material/Button";
import "./ProjectDetail.css";

export default function ProjectDetail(props) {
  const [project, setProject] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const projectData = await getOneProject(id);
      setProject(projectData);
    };
    fetchProject();
    setLoaded(true);
  }, [id]);

  return (
    <>
      <div className="main-container">
        <div className="img-column">
          <h3>{project?.name}</h3>
          <img src={project?.image_url} />
        </div>

        <div className="desc-column">
          <p>{project?.description}</p>

          <h4>Current Selected Categories:</h4>
          {project?.categories.map((category) => (
            <p key={category.id}>{category.name}</p>
          ))}
        </div>
      </div>

      <div className="buttons">
        <Link to={`/projects/${project?.id}/edit`}>
          <Button color="secondary" variant="contained">
            Edit
          </Button>
        </Link>

        <Button
          onClick={() => props.handleProjectDelete(project.id)}
          color="secondary"
          variant="contained"
        >
          Delete
        </Button>

        <Link to="/projects/new">
          <Button color="secondary" variant="contained">
            Add New Project
          </Button>
        </Link>
      </div>
    </>
  );
}
