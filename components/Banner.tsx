"use client";

import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        backgroundColor: "#5f3b11a1",
        color: "white",
        textAlign: "center",
        py: 2,
        px: 2,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        ¡Mendukos estuvo presente en el Mundial del Alfajor 2025!
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "#5f3b11a1",
          fontWeight: "bold",
          borderRadius: "20px",
          "&:hover": { backgroundColor: "#f5f5f5" },
          mt: 2,
        }}
        href="/"
      >
        Más info
      </Button>
    </Box>
  );
}
