import Projects from "./screens/Projects/Projects.jsx";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
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
    <Switch>
      <Route path="/projects">
        <Projects projects={projects}/>
      </Route>
    </Switch>
  );
}
