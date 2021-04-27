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

export default function UserProfile() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  return (
    <>
      {!small ? (
        <Grid container className={classes.gridRootUserProfile}>
          <Grid item>
            <Card className={classes.cardRootUserProfile}>
              <CardContent>
                <Grid item className={classes.cardGridRootUserProfile}>
                  <Grid item className={classes.userGridImg}>
                    <img
                      src={"images/mk12.jpg"}
                      alt="img"
                      className={classes.userProfImg}
                    />
                  </Grid>
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
      ) : (
        <Grid container className={classes.smallGridRootUserProfile}>
          <Grid item>
            <Card className={classes.smallCardRootUserProfile}>
              <CardContent>
                <Grid item className={classes.cardGridRootUserProfile}>
                  <Grid item className={classes.userGridImg}>
                    <img
                      src={"images/mk12.jpg"}
                      alt="img"
                      className={classes.userProfImg}
                    />
                  </Grid>
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
      )}
    </>
  );
}
