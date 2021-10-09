import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const theme = createTheme({
  typography: {
    fontSize: 18,
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ p: 2, margin: "auto", maxWidth: 1500, flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item>
            <ButtonBase sx={{ width: 800, height: 500 }}>
              <Img alt="Man Task List" src="To-do list.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Is your significant other a jack-of-all trades? Or how about
                  an enthusiastic handyman? Does your significant other love to
                  start home projects, but not finish them?
                </Typography>
              </Grid>

              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  HAVE NO FEAR! HomePro, Your Remodel Tracker is here to help
                  you and your family track your home remodeling projects! Let’s
                  get started! Login or register now to set the stage for your
                  home’s latest and greatest improvements!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
