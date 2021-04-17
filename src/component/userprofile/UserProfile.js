import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";


export default function UserProfile() {
    const classes = useStyles();
    return (
      <>
        <Grid container className={classes.gridRootUserProfile}>
          <Grid item>
            <Card className={classes.cardRootUserProfile}>
              <CardContent>
                <Grid item className={classes.cardGridRootUserProfile}>
                  <img
                    src={"images/user2.jpg"}
                    alt="img"
                    className={classes.userProfImg}
                  />
                  <Typography variant={"h6"} component={"h1"}>
                    <b className={classes.b}>
                      <text style={{ color: "orange" }}>Name</text> : Mahdi
                      Keshavarz
                    </b>
                  </Typography>
                  <Typography variant={"h6"} component={"h1"}>
                    <b className={classes.b}>
                      <text style={{ color: "orange" }}>Age </text>: 21
                    </b>
                  </Typography>
                  <Typography variant={"h6"} component={"h1"}>
                    <b className={classes.b}>
                      <text style={{ color: "orange" }}>City</text> : Tehran
                    </b>
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    );
  }