"use client";

import { Box, Typography, Button } from "@mui/material";
import SectionTitle from "./SectionTitle";

export default function EventosPreview() {
  return (
    <Box sx={{ my: 10, px: 3, textAlign: "center" }}>
      <SectionTitle>EVENTOS</SectionTitle>

      <Typography sx={{ maxWidth: 650, mx: "auto", mb: 3 }}>
        Este 9, 10 y 11 de octubre, Mendukos dirá presente en la Fiesta de las
        Colectividades 2025 en Boulevard Dorrego, Guaymallén.
      </Typography>

      <Button variant="contained" href="/eventos">
        Conocer más
      </Button>
    </Box>
  );
}
