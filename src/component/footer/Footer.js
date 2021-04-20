import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";

export default function Footer() {
  const theme = useTheme();
  const FooterSize = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  return (
    <>
      {!FooterSize ? (
        <Grid container justify="space-around" className={classes.Footer}>
          <Grid item>
            <Typography className={classes.FooterTelId}>
              <text
                style={{
                  fontSize: "1rem",
                  color: "black",
                }}
              >
                <b style={{ color: "blue" }}>Telegram : </b>@Mahdi_KS78
              </text>
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.FooterWebDesign}>
              <text
                style={{
                  fontSize: "1rem",
                  color: "black",
                }}
              >
                Web Design by Mahdi-Keshavarz
              </text>
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Grid className={classes.FooterSmall}>
          <Typography className={classes.FooterTelId}>
            <text
              style={{
                fontSize: "1rem",
                color: "black",
                fontFamily: "serif",
              }}
            >
              <b style={{ color: "blue" }}>Telegram : </b>@Mahdi_KS78
            </text>
          </Typography>
          <Typography className={classes.FooterWebDesign}>
            <text
              style={{
                fontSize: "1rem",
                color: "black",
              }}
            >
              Web Design : <b style={{ color: "red" }}>Me</b>
            </text>
          </Typography>
        </Grid>
      )}
    </>
  );
}
