"use client";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ py: 3, backgroundColor: "var(--mendukos-dark)", color: "#fff", textAlign: "center", mt: 6 }}>
      <Typography variant="body2">
        © 2025 Mendukos – Alfajores Artesanales | Hecho en Mendoza
      </Typography>
    </Box>
  );
}
