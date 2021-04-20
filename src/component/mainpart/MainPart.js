import React from "react";
import useStyles from "./Styles";
import Header from "../Header";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import UserProfile from "../userprofile/UserProfile";

const MainPart = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallSiza = useMediaQuery(theme.breakpoints.only("sm"));
  return (
    <>
      <Header />
      <div className={classes.mainPartRoot}>
        <Grid container justify="center">
          {!smallSiza ? (
            <Grid item style={{ marginTop: "3.4rem" }}>
              <UserProfile />
            </Grid>
          ) : (
            <Grid item>
              <UserProfile />
            </Grid>
          )}
        </Grid>
        <div>{children}</div>
      </div>
    </>
  );
};

export default MainPart;
