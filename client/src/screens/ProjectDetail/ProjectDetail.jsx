import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOneProject } from "../../services/projects";

export default function ProjectDetail(props) {
  const [project, setProject] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  // const { categories } = props;

  useEffect(() => {
    const fetchProject = async () => {
      const projectData = await getOneProject(id);
      setProject(projectData);
    };
    fetchProject();
    setLoaded(true);
  }, [id]);

  return (
    <div>
      <h3>{project?.name}</h3>
      <img src={project?.image_url} />
      <h3>{project?.description}</h3>

      {project?.categories.map((category) => (
        <p key={category.id}>{category.name}</p>
      ))}

      <div>
        <Link to={`/projects/${project?.id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={() => props.handleProjectDelete(project.id)}>
          Delete
        </button>
      </div>

      <Link to="/projects/new">
        <button>Add New Project</button>
      </Link>
    </div>
  );
}
