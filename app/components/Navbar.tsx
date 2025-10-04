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
  const [eventsAnchorEl, setEventsAnchorEl] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // md = 960px

  // Menú principal
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // Submenu de Eventos
  const handleEventsOpen = (event) => setEventsAnchorEl(event.currentTarget);
  const handleEventsClose = () => setEventsAnchorEl(null);

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
                <MenuItem
                  key={section}
                  onClick={section === "Eventos" ? handleEventsOpen : handleMenuClose}
                >
                  {section === "Eventos" ? "Eventos ▼" : (
                    <ScrollLink to={section.toLowerCase()} smooth duration={600} offset={-70}>
                      {section}
                    </ScrollLink>
                  )}
                </MenuItem>
              ))}
            </Menu>

            {/* Submenu de Eventos (Mobile) */}
            <Menu
              anchorEl={eventsAnchorEl}
              open={Boolean(eventsAnchorEl)}
              onClose={handleEventsClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem onClick={handleEventsClose}>
                <ScrollLink to="eventos-blog" smooth duration={600} offset={-70}>
                  Noticias
                </ScrollLink>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box>
            {sections.map((section) => (
              section === "Eventos" ? (
                <Box key={section} sx={{ display: "inline-block" }}>
                  <Button
                    color="inherit"
                    onMouseEnter={handleEventsOpen}
                    onMouseLeave={handleEventsClose}
                  >
                    {section} ▼
                  </Button>
                  <Menu
                    anchorEl={eventsAnchorEl}
                    open={Boolean(eventsAnchorEl)}
                    onClose={handleEventsClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                    MenuListProps={{ onMouseEnter: handleEventsOpen, onMouseLeave: handleEventsClose }}
                  >
                    <MenuItem onClick={handleEventsClose}>
                      <ScrollLink to="eventos-blog" smooth duration={600} offset={-70}>
                        Noticias
                      </ScrollLink>
                    </MenuItem>
                  </Menu>
                </Box>
              ) : (
                <ScrollLink
                  key={section}
                  to={section.toLowerCase()}
                  smooth
                  duration={600}
                  offset={-70}
                >
                  <Button color="inherit">{section}</Button>
                </ScrollLink>
              )
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
