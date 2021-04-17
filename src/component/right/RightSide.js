import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";





export default function RightSide() {
    const classes = useStyles();
    return (
      <Grid container className={classes.gridCardRight}>
        <Grid item>
          <Card className={classes.cardRootRight}>
            <CardContent className={classes.cardGridRootRight}>
              <Grid item>
                <Typography variant="h6" style={{ textAlign: "center" }}>
                  <Typography
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    Morality
                  </Typography>
                  <b className={classes.b}>
                    Responsible{<br />}
                    Social Person{<br />}
                    With an interest {<br />} in teamwork{<br />}
                    Motivated
                  </b>
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
  