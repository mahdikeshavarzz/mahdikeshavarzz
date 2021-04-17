import { useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import DrawerMenu from "./DrawerMenu";
import Tabss from "./tabs/Tabss";


const Header = () => {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    return <div>{small ? <DrawerMenu /> : <Tabss />}</div>;
  };
  
  export default Header;