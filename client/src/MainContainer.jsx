import Projects from "./screens/Projects/Projects.jsx";
import ProjectDetail from "./screens/ProjectDetail/ProjectDetail";
import ProjectEdit from "./screens/ProjectEdit/ProjectEdit";
import ProjectCreate from "./screens/ProjectCreate/ProjectCreate";
import Categories from "./screens/Categories/Categories";
import Home from "./screens/Home/Home";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  getAllProjects,
  postProject,
  deleteProject,
  putProject,
} from "./services/projects.js";
import { getAllCategories } from "./services/categories.js";

export default function MainContainer() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const history = useHistory();

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

  const handleProjectCreate = async (projectData) => {
    const newProject = await postProject(projectData);
    setProjects((prevState) => [...prevState, newProject]);
    history.push("/projects");
  };

  const handleProjectDelete = async (id) => {
    await deleteProject(id);
    setProjects((prevState) =>
      prevState.filter((project) => project.id !== id)
    );
    history.push("/projects");
  };

  const handleProjectUpdate = async (id, projectData) => {
    const updatedProject = await putProject(id, projectData);
    setProjects((prevState) =>
      prevState.map((project) => {
        return project.id === Number(id) ? updatedProject : project;
      })
    );
    history.push("/projects");
  };

  return (
    <Switch>
      <Route path="/projects/new">
        <ProjectCreate
          handleProjectCreate={handleProjectCreate}
          categories={categories}
        />
      </Route>

      <Route path="/projects/:id/edit">
        <ProjectEdit
          projects={projects}
          handleProjectUpdate={handleProjectUpdate}
          categories={categories}
        />
      </Route>

      <Route path="/projects/:id">
        <ProjectDetail
          categories={categories}
          handleProjectDelete={handleProjectDelete}
        />
      </Route>

      <Route path="/projects">
        <Projects
          projects={projects}
          handleProjectDelete={handleProjectDelete}
        />
      </Route>

      <Route path="/categories">
        <Categories categories={categories} />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
