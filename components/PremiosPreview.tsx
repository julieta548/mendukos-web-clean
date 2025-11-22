"use client";

import { Box, Typography, Button } from "@mui/material";
import SectionTitle from "./SectionTitle";

export default function PremiosPreview() {
  return (
    <Box sx={{ my: 10, px: 3, textAlign: "center" }}>
      <SectionTitle>PARTICIPACIÓN · PREMIOS Y RECONOCIMIENTOS</SectionTitle>

      <Typography sx={{ maxWidth: 650, mx: "auto", mb: 3 }}>
        Mendukos fue reconocido a nivel nacional en el Mundial del Alfajor 2025,
        obteniendo el tercer lugar en su categoría gracias a su inconfundible
        sabor artesanal y la calidad de sus ingredientes mendocinos.
      </Typography>

      <Button variant="contained" href="/premios">
        Ver más
      </Button>
    </Box>
  );
}
