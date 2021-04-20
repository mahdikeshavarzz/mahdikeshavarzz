import {
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";

export default function RightSide() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  return (
    <>
      {!small ? (
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
      ) : (
        <Grid container className={classes.gridCardRight}>
          <Grid item>
            <Card className={classes.smallCardRootRight}>
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
      )}
    </>
  );
}
