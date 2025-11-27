import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import productos from "@/data/productos";
import AlfajorCard from "./AlfajorCard";

export default function ProductosLista({ productos }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          py: 8,
          px: { xs: 3, md: 12 },
          animation: "fadeIn 0.8s ease-in-out",
          "@keyframes fadeIn": {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        }}
      >
        <Box sx={{ textAlign: "center", mb: 10,  }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: "#6D6D6D" }}>
            NUESTROS
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700, color: "#333" }}>
            ALFAJORES
          </Typography>
        </Box>

        {productos.map((p, index) => (
          <AlfajorCard
            key={index}
            image={p.image}
            title={p.title}
            description={p.description}
            slug={p.slug}
          />
        ))}
      </Box>
    </>
  );
}
