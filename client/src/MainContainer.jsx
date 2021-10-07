import { useState, useEffect } from "react";
import { getAllProjects } from "./services/projects.js";
import { getAllCategories } from "./services/categories.js";

export default function MainContainer() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectList = await getAllProjects();
      setProjects(projectList);
    };
    return fetchProjects();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getAllCategories();
      setCategories(categoryList);
    };
    return fetchCategories();
  }, []);

  return (
    <div>
      <h1>main container component</h1>
    </div>
  );
}
