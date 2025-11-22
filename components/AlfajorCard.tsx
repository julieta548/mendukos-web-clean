"use client";

import { Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionCard = motion(Card);

export default function AlfajorCard({ nombre, descripcion, imagen, slug }) {
  return (
    <MotionCard
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        backgroundColor: "white",
      }}
    >
      <CardMedia
        component="img"
        image={imagen}
        alt={nombre}
        sx={{ height: 220, objectFit: "cover" }}
      />

      <CardContent sx={{ textAlign: "center", p: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
          {nombre}
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: 2, whiteSpace: "pre-line" }}
        >
          {descripcion}
        </Typography>

        {/* BOTÓN COMPRAR */}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href={`/productos/${slug}`}
          sx={{
            borderRadius: "30px",
            px: 4,
            py: 1,
            fontWeight: 700,
          }}
        >
          Comprar
        </Button>
      </CardContent>
    </MotionCard>
  );
}
