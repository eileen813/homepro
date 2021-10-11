import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./Projects.css";

export default function Projects(props) {
  return (
    <Grid
      container
      className="projects-main-container"
      spacing={4}
      justifyContent="center"
    >
      {props.projects.map((project) => (
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={project.image_url}
                alt="project image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <p key={`project${project.id}`}>{project.name}</p>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`/projects/${project.id}`}>
                <Button size="small">MORE DETAILS</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
