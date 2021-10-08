import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOneProject } from "../../services/projects";

export default function ProjectDetail(props) {
  const [project, setProject] = useState("");
  const { id } = useParams();
  const { categories } = props;

  useEffect(() => {
    const fetchProject = async () => {
      const projectData = await getOneProject(id);
      setProject(projectData);
    };
    fetchProject();
  }, [id]);

  return (
    <div>
      <h3>{project.name}</h3>
      <img src={project.image_url} />
      <h3>{project.description}</h3>

      <div key={project.id}>
        <Link to={`/projects/${project.id}`}>
          <p>{project.name}</p>
        </Link>
        <Link to={`/projects/${project.id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={() => props.handleProjectDelete(project.id)}>
          Delete
        </button>
      </div>

      <Link to="/projects/new">
        <button>create</button>
      </Link>
    </div>
  );
}
