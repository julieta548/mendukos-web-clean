"use client";

import { Box, Typography } from "@mui/material";

export default function ContactoInfo() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Información de contacto
      </Typography>

      <Typography variant="body1">📍 Mendoza, Argentina</Typography>
      <Typography variant="body1">📞 +54 9 261 XXX XXXX</Typography>
      <Typography variant="body1">📧 contacto@mendukos.com</Typography>
    </Box>
  );
}
