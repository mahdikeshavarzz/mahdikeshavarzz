import { Grid, IconButton, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";
import { Telegram } from "@material-ui/icons";

  
  export default function Footer() {
    const theme = useTheme();
    const FooterSize = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles();
    return (
      <>
        {!FooterSize ? (
          <Grid container justify="space-around" className={classes.Footer}>
            <Grid item>
              <Typography className={classes.FooterTelId}>
                <IconButton
                  style={{
                    backgroundColor: "cyan",
                    color: "blue",
                  }}
                >
                  <Telegram />
                </IconButton>
                <text
                  style={{
                    fontSize: "1.2rem",
                    color: "black",
                    fontWeight: "600",
                    marginInline: "1rem",
                  }}
                >
                  @Mahdi_KS78
                </text>
              </Typography>
              <Typography
                className={classes.FooterWebDesign}
                style={{ marginTop: "1rem" }}
              >
                <text
                  style={{
                    fontSize: "1rem",
                    color: "black",
                    fontWeight: "600",
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
              <IconButton
                style={{
                  backgroundColor: "cyan",
                  color: "blue",
                }}
              >
                <Telegram />
              </IconButton>
              <text
                style={{
                  fontSize: "1.2rem",
                  color: "black",
                  fontWeight: "600",
                  marginInline: "1rem",
                }}
              >
                @Mahdi_KS78
              </text>
            </Typography>
            <br />
            <Typography className={classes.FooterWebDesign}>
              <text
                style={{
                  fontSize: "1rem",
                  color: "black",
                  fontWeight: "600",
                }}
              >
                Web Design by Mahdi-Keshavarz
              </text>
            </Typography>
          </Grid>
        )}
      </>
    );
  }
  