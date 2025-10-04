"use client";
import { Box, Grid, Typography, TextField, Button, Stack, IconButton } from "@mui/material";
import { Instagram, Facebook } from "@mui/icons-material";

export default function ContactSection() {
  return (
    <Box id="contacto" sx={{ py: 10, px: 3, backgroundColor: "var(--mendukos-bg)" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ color: 'var(--mendukos-brown)'}}>
            Contacto
          </Typography>
          <Stack spacing={2}>
            <TextField label="Nombre" variant="outlined" fullWidth />
            <TextField label="Email" variant="outlined" fullWidth />
            <TextField label="Mensaje" multiline rows={4} fullWidth />
            <Button
              variant="contained"
              color="primary"
              href="mailto:mendukos@gmail.com"
            >
              Enviar
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography mb={2}>
            Seguinos en nuestras redes:
          </Typography>
          <IconButton href="https://instagram.com" target="_blank">
            <Instagram />
          </IconButton>
          <IconButton href="https://facebook.com" target="_blank">
            <Facebook />
          </IconButton>
          <Typography mt={3}>
            Hechos en Mendoza, con amor para todo el país.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
