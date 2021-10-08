// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getOneProject, addCategoryToProject } from "../services/projects";

export default function ProjectDetail(props) {
  return (
    <h1>project detail component</h1>
  )
  // const [projectItem, setProjectItem] = useState(null);
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const { id } = useParams();
  // const { categories } = props;

  // useEffect(() => {
  //   const fetchProjectItem = async () => {
  //     const projectData = await getOneProject(id);
  //     setProjectItem(projectData);
  //   };
  //   fetchProjectItem();
  // }, [id]);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedCategory(value);
  // };

  // // Handle submit for adding a category to a project
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const projectItem = await addCategoryToProject(selectedCategory, id);
  //   setProjectItem(projectItem);
  // };

  // return (
  //   <div>
  //     <h3>{projectItem?.name}</h3>
  //     {projectItem?.categories.map((category) => (
  //       <p key={category.id}>{category.name}</p>
  //     ))}
  //     {/* category drop down */}
  //     <form onSubmit={handleSubmit}>
  //       <select onChange={handleChange} defaultValue="default">

  //         <option disabled value="default">
  //           -- Select a Flavor --
  //         </option>


  //         {categories.map((category) => (

  //           <option value={category.id}>{category.name}</option>
  //         ))}
  //       </select>
  //       <button>Add</button>
  //     </form>
  //   </div>
  // );
}
