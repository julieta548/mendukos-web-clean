"use client";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      id="inicio"
      sx={{
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Image
        src="/images/hero.jpg"
        alt="Alfajores Mendukos"
        fill
        style={{ objectFit: "cover", zIndex: -1, filter: "brightness(0.5)" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" fontWeight="bold" sx={{ color: 'white' }}>
          Mendukos
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, color: 'white' }}>
          Alfajores artesanales mendocinos, hechos con amor y sabor auténtico.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, mb: 3, color: 'white' }}>
          Desde Mendoza al Mundial del Alfajor y la Fiesta de las Colectividades.
        </Typography>
        <Button variant="contained" color="primary" href="#productos">
          Ver productos
        </Button>
      </motion.div>
    </Box>
  );
}
