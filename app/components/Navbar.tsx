"use client";
import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Navbar() {
  const sections = ["Inicio", "Nosotros", "Productos", "Eventos", "Contacto"];
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // md = 960px

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" color="default" elevation={1} sx={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: 'var(--mendukos-brown)' }}>
          Mendukos
        </Typography>

        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {sections.map((section) => (
                <MenuItem key={section} onClick={handleMenuClose}>
                  <ScrollLink
                    to={section.toLowerCase()}
                    smooth
                    duration={600}
                    offset={-70}
                  >
                    {section}
                  </ScrollLink>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box>
            {sections.map((section) => (
              <ScrollLink
                key={section}
                to={section.toLowerCase()}
                smooth
                duration={600}
                offset={-70}
              >
                <Button color="inherit">{section}</Button>
              </ScrollLink>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
