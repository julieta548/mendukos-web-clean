"use client";

import { Box, Typography, Button } from "@mui/material";
import SectionTitle from "./SectionTitle";

export default function HistoriaPreview() {
  return (
    <Box sx={{ my: 10, px: 3, textAlign: "center" }}>
      <SectionTitle>NUESTRA HISTORIA</SectionTitle>

      <Typography sx={{ maxWidth: 600, mx: "auto", mb: 3 }}>
        “Comencé haciendo alfajores artesanales en casa, perfeccionando la
        receta con pasión. Hoy comparto dulzura auténtica en cada bocado,
        hecha con amor y tradición.”
      </Typography>

      <Button variant="outlined" href="/nosotros">
        Conocer más
      </Button>
    </Box>
  );
}
