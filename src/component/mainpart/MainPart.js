import React from "react";
import useStyles from "./Styles";
import Header from "../Header";
import { Grid } from "@material-ui/core";
import UserProfile from "../userprofile/UserProfile"



const MainPart = ({ children }) => {
    const classes = useStyles();
    return (
      <>
        <Header />
        <div className={classes.mainPartRoot}>
          <Grid container justify="center">
            <Grid item>
              <UserProfile />
            </Grid>
          </Grid>
          <div>{children}</div>
        </div>
      </>
    );
  };
  
  export default MainPart;
  