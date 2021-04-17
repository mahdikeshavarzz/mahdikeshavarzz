import { Drawer, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';



export default function DrawerMenu() {
    const [state, setState] = useState(false);
    const toggleClick = () => {
      setState((p) => !p);
    };
  
    return (
      <div>
        <IconButton onClick={() => toggleClick()}>
          <MenuIcon style={{ backgroundColor: "blue" }}></MenuIcon>
        </IconButton>
        {state ? (
          <Drawer anchor={"left"} open={state} onClose={() => toggleClick()}>
            <div>
              <nav
                style={{
                  backgroundColor: "orange",
                  height: "500px",
                  position: "fixed",
                }}
              >
                <ul>
                  <li>
                    <Link
                      style={{
                        color: "white",
                        backgroundColor: "#333",
                        display: "block",
                        borderBottom: "3px solid black",
                        padding: "0.4rem",
                        textDecoration: "none",
                        marginBottom: "0",
                        width: "200px",
                      }}
                      to="/leftside"
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        color: "white",
                        backgroundColor: "#333",
                        display: "block",
                        borderBottom: "3px solid black",
                        textDecoration: "none",
                        padding: "0.4rem",
                        width: "200px",
                      }}
                      to="/rightside"
                    >
                      Morality
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        color: "white",
                        backgroundColor: "#333",
                        display: "block",
                        borderBottom: "3px solid black",
                        padding: "0.4rem",
                        textDecoration: "none",
                        width: "200px",
                      }}
                      to="/"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Drawer>
        ) : undefined}
      </div>
    );
  }