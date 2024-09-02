import { NavLink } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import logo from "../../../../assets/thumb-01.png";
import styles from "./styles";

const navItems = ["home", "missionary_of_mercy", "contact"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    e.preventDefault();
    setAnchorElNav(null);
  };

  function toPascalCase(str) {
    return str
      .split("_") // Split the string by underscores
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(" "); // Join the words with spaces
  }

  return (
    <AppBar position="static" sx={{ ...styles.wrapper }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ ...styles.toolBar }}>
          <Box sx={{ ...styles.container }}>
            <Box sx={{ ...styles.display }}>
              <Box>
                <Box
                  component="img"
                  src={logo}
                  alt="logo"
                  title="logo"
                  sx={{ ...styles.navbar }}
                />
              </Box>
              <Box>
                <Typography variant="body1">
                  <Typography
                    variant="h4"
                    noWrap
                    component="a"
                    href="/"
                    sx={{ ...styles.title }}
                  >
                    Yesu Karunanidhi
                  </Typography>
                </Typography>
                <Typography variant="body1" noWrap sx={{ ...styles.tagline }}>
                  With Him The Sower
                </Typography>
              </Box>
            </Box>
            <Box component="div" sx={{ ...styles.xsDisplay }}>
              <Box
                component="img"
                src={logo}
                alt="logo"
                title="logo"
                sx={{ ...styles.logo }}
              />
              <Box>
                <Typography
                  variant="h4"
                  noWrap
                  component="a"
                  href="/"
                  sx={{ ...styles.xsTitle }}
                >
                  Yesu Karunanidhi
                </Typography>
                <Typography variant="body1" noWrap sx={{ ...styles.xsTagline }}>
                  With Him The Sower
                </Typography>
              </Box>
            </Box>
            <Box sx={{ ...styles.menuWrapper }}>
              {navItems.map((item) => (
                <NavLink key={item} to={item}>
                  {toPascalCase(item)}
                </NavLink>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  color: (theme) => theme.palette.default.darkgreen,
                }}
              >
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{ ...styles.xsMenuItem }}
                >
                  {navItems.map((item) => (
                    <NavLink key={item} to={item}>
                      {toPascalCase(item)}
                    </NavLink>
                  ))}
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
