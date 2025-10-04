"use client";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px

  return (
    <Box
      sx={{
        py: { xs: 3, sm: 4 },
        backgroundColor: "var(--mendukos-dark)",
        color: "#fff",
        textAlign: "center",
        mt: 6,
      }}
    >
      <Typography variant={isMobile ? "body2" : "body1"}>
        © 2025 Mendukos – Alfajores Artesanales | Hecho en Mendoza
      </Typography>
    </Box>
  );
}
