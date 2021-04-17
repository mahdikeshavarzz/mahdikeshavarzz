import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./Styles"


export default function Tabss() {
    const classes = useStyles();
  
    return (
      <div className={classes.navDiv}>
        <nav className={classes.navbar1} style={{ marginBottom: "4rem" }}>
          <ul className={classes.navUl}>
            <li className={classes.navLi}>
              <Link className={classes.navLink} to="/leftside">
                Skills
              </Link>
            </li>
            <li className={classes.navLi}>
              <Link className={classes.navLink} to="/rightside">
                Morality
              </Link>
            </li>
  
            <li className={classes.navLi}>
              <Link className={classes.navLink} to="/">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }