"use client";
import { Box, Grid, Typography, TextField, Button, Stack, IconButton } from "@mui/material";
import { Instagram, Facebook } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ContactSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-960px

  return (
    <Box
      id="contacto"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 3 },
        backgroundColor: "var(--mendukos-bg)",
      }}
    >
      <Grid container spacing={4} alignItems="flex-start" direction={isMobile ? "column" : "row"}>
        {/* Formulario */}
        <Grid item xs={12} md={6}>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            gutterBottom
            sx={{ color: "var(--mendukos-brown)", textAlign: isMobile ? "center" : "left" }}
          >
            Contacto
          </Typography>
          
        </Grid>

        {/* Redes sociales */}
        <Grid item xs={12} md={6}>
          <Typography
            mb={2}
            sx={{ textAlign: isMobile ? "center" : "left" }}
          >
            Seguinos en nuestras redes:
          </Typography>
          <Box sx={{ display: "flex", justifyContent: isMobile ? "center" : "flex-start", gap: 1 }}>
            <IconButton href="https://instagram.com" target="_blank">
              <Instagram fontSize={isMobile ? "small" : "medium"} />
            </IconButton>
            <IconButton href="https://facebook.com" target="_blank">
              <Facebook fontSize={isMobile ? "small" : "medium"} />
            </IconButton>
          </Box>
          <Typography
            mt={3}
            sx={{ textAlign: isMobile ? "center" : "left" }}
          >
            Hechos en Mendoza, con amor para todo el país.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
