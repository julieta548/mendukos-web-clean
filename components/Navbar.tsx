"use client";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Contacto", href: "/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "#E7B10A",
          color: "#2B2B2B",
          borderBottom: "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LOGO */}
          <Box sx={{ display: "flex", alignItems: "center", ml: -6, }}>
            <Link href="/" style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/images/logo.svg" // 👉 tu archivo SVG
                alt="Logo Mendukos"
                width={140}
                height={50}
                style={{
                  fill: "#2B2B2B",
                  margin: "5px",
                  
                  }}
                
              />
            </Link>
          </Box>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {links.map((link) => (
              <Button
                key={link.href}
                component={Link}
                href={link.href}
                sx={{
                  color: "#2B2B2B",
                  fontWeight: 600,
                  "&:hover": { opacity: 0.7 },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#2B2B2B" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 260,
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* CLOSE BUTTON */}
          <IconButton
            sx={{ alignSelf: "flex-end", color: "#2B2B2B" }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>

          <List>
            {links.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      sx: {
                        fontWeight: 600,
                        color: "#2B2B2B",
                        fontSize: "1.1rem",
                        fontFamily: "'Inter', sans-serif",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
