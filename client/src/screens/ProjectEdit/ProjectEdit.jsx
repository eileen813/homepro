import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProjectEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleProject = props.projects.find(
        (project) => project.id === Number(id)
      );
      setFormData({
        name: singleProject.name,
      });
    };
    if (props.projects.length) {
      prefillFormData();
    }
  }, [props.projects, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleProjectUpdate(id, formData);
      }}
    >
      <h3>Edit Project</h3>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
