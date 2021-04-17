import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./Styles"

export default function LeftSide() {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridCardLeft}>
      <Grid item>
        <Card
          style={{ backgroundColor: "black" }}
          className={classes.cardRootLeft}
        >
          <CardContent>
            <Grid item className={classes.cardGridRootLeft}>
              <Typography
                variant="h6"
                style={{ textAlign: "center", fontSize: "1.2rem" }}
              >
                <Typography
                  style={{
                    color: "orange",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  Skills
                </Typography>
                <b className={classes.b}>
                  HTML : <text style={{ color: "yellow" }}>70%</text> {<br />}{" "}
                  CSS : <text style={{ color: "yellow" }}>80%</text> {<br />}
                  Bootstrap : <text style={{ color: "yellow" }}>50%</text>{" "}
                  {<br />}
                  JS : <text style={{ color: "yellow" }}>35%</text>
                  {<br />} ES6 : <text style={{ color: "yellow" }}>50%</text>{" "}
                  {<br />} ReactJS :{" "}
                  <text style={{ color: "yellow" }}>Learning...</text>
                </b>
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
