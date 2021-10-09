import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ConstructionIcon from "@mui/icons-material/Construction";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
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

export default function ProjectCreate(props) {
  const [selectedCat, setSelectedCat] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image_url: "",
    categories: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectedCat = (e) => {
    e.preventDefault();
    const newCat = props.categories.find(
      (cat) => cat.id === parseInt(selectedCat)
    );
    setFormData((prevState) => ({
      ...prevState,
      categories: [...prevState.categories, newCat],
    }));
    setSelectedCat("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <ConstructionIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Project Not Listed? Create It Below:
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              props.handleProjectCreate(formData);
            }}
            noValidate
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="image_url"
              label="Image URL"
              name="image_url"
              autoComplete="image_url"
              autoFocus
              value={formData.image_url}
              onChange={handleChange}
            />
            {formData.categories.map((category) => (
              <p>{category.name}</p>
            ))}
            <InputLabel id="cats">Category Dropdown</InputLabel>
            <Select
              labelId="cats"
              id="cats"
              onChange={(e) => setSelectedCat(e.target.value)}
              value={selectedCat}
            >
              {props.categories.map((category) => (
                <MenuItem value={category.id}>{category.name}</MenuItem>
              ))}
            </Select>

            <Button
              onClick={handleSelectedCat}
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Category
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit New Project
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>

    // <form
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //     props.handleProjectCreate(formData);
    //   }}
    // >
    //   <h3>Create New Project</h3>
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
