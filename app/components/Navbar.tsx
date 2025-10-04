"use client";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

export default function Navbar() {
  const sections = ["Inicio", "Nosotros", "Productos", "Eventos", "Contacto"];
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <AppBar position="fixed" color="default" elevation={1} sx={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: 'var(--mendukos-brown)' }}>
          Mendukos
        </Typography>

        {/* Desktop menu */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
          {sections.map((section) => (
            <ScrollLink key={section} to={section.toLowerCase()} smooth duration={600} offset={-70}>
              <Button color="inherit">{section}</Button>
            </ScrollLink>
          ))}
        </Box>

        {/* Mobile menu */}
        <IconButton edge="end" color="inherit" sx={{ display: { sm: 'none' } }} onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={toggleDrawer}>
          <List sx={{ width: 200 }}>
            {sections.map((section) => (
              <ListItem key={section} disablePadding>
                <ListItemButton onClick={toggleDrawer}>
                  <ScrollLink to={section.toLowerCase()} smooth duration={600} offset={-70}>
                    <ListItemText primary={section} />
                  </ScrollLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
