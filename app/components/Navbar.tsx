"use client";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const sections = ["Inicio", "Nosotros", "Productos", "Eventos", "Contacto"];

  return (
    <AppBar position="fixed" color="default" elevation={1} sx={{backgroundColor: 'rgba(255,255,255,0.9)'}}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: 'var(--mendukos-brown)' }}>
          Mendukos
        </Typography>
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
      </Toolbar>
    </AppBar>
  );
}
