import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    { text: "How It Works", to: "/howitworks" },
    { text: "Contact", to: "/contact" },
    { text: "Get Started", to: "/career", isCTA: true }
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#333333" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#E0E0E0" }}>
            CareerGuideAI
          </Typography>

          {/* Mobile Menu Button */}
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Menu */}
          <List sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.to}
                variant={item.isCTA ? "contained" : "text"}
                sx={
                  item.isCTA
                    ? { backgroundColor: "#00E676", color: "#000", ml: 2, ":hover": { backgroundColor: "#00C853" } }
                    : { color: "#E0E0E0" }
                }
              >
                {item.text}
              </Button>
            ))}
          </List>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ "& .MuiDrawer-paper": { width: 250, backgroundColor: "#424242", color: "#E0E0E0" } }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} to={item.to} onClick={handleDrawerToggle}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
