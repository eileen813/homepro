import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HouseIcon from "@mui/icons-material/House";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://home-pro.netlify.app/">
        HomePro
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function ProjectEdit(props) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    categories: [],
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleProject = props.projects.find(
        (project) => project.id === Number(id)
      );
      setFormData({
        name: singleProject.name,
        description: singleProject.description,
        image_url: singleProject.image_url,
        categories: singleProject.categories,
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

  const handleSelectCategory = (e) => {
    e.preventDefault();
    const newCategory = props.categories.find(
      (cat) => cat.id === parseInt(selectedCategory)
    );
    setFormData((prevState) => ({
      ...prevState,
      categories: [...prevState.categories, newCategory],
    }));
    setSelectedCategory("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          className="left-img"
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${formData.image_url})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <HouseIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Edit Project
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                props.handleProjectUpdate(id, formData);
              }}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                rows={6}
                required
                fullWidth
                multiline
                name="description"
                label="Description"
                id="description"
                autoComplete="current-description"
                value={formData.description}
                onChange={handleChange}
              />
              {formData.categories.map((cat) => (
                <p>{cat.name}</p>
              ))}
              <InputLabel id="categories">Category Dropdown</InputLabel>
              <Select
                labelId="categories"
                id="categories"
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
              >
                {props.categories.map((category) => (
                  <MenuItem value={category.id}>{category.name}</MenuItem>
                ))}
              </Select>

              <Button onClick={handleSelectCategory}>Add Category</Button>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit This Edit
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

    // <form
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //     props.handleProjectUpdate(id, formData);
    //   }}
    // >
    //   <h3>Edit Project</h3>
    //   <label>
    //     Name:
    //     <input
    //       type="text"
    //       name="name"
    //       value={formData.name}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <br />
    //   <button>Submit</button>
    // </form>
  );
}
