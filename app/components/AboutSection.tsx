"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function AboutSection() {
  return (
    <Box id="nosotros" sx={{ py: 10, px: 3, backgroundColor: "var(--mendukos-bg)" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Image
            src="/images/alfajor1.jpg"
            alt="Proceso artesanal"
            width={600}
            height={420}
            style={{ borderRadius: "16px", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ color: 'var(--mendukos-brown)'}}>
            El sabor de lo casero, la pasión por lo nuestro
          </Typography>
          <Typography>
            Mendukos nació en Mendoza con la idea de recuperar la tradición del
            alfajor artesanal, hecho con ingredientes naturales y mucho cariño.
            Cada pieza está elaborada a mano, manteniendo el sabor casero que nos
            representa.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
