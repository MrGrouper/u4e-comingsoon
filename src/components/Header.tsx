// import React from "react";
import {
  AppBar,
  // Button,
  // Tab,
  // Tabs,
  Toolbar,
  Typography,
  // Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "./shared/Logo";
// import { Links } from "./drawer/Links";
// import DrawerComp from "./drawer/DrawerComp";
// import NavigationLink from "./shared/NavigationLink";

const Header = () => {
    const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar
      sx={{ bgcolor: "black", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <Typography>Coming soon...</Typography>
        {/* {isMatch ? (<DrawerComp />):(<Links />)} */}

      </Toolbar>
    </AppBar>
  );
};

export default Header;