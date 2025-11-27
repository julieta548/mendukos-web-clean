"use client";

import productos from "@/data/productos";
import { Box, Typography, Button, Card, CardMedia } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { use } from "react";

export default function ProductoPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const producto = productos.find((p) => p.slug === slug);

  if (!producto) {
    return (
      <Box sx={{ p: 10, textAlign: "center" }}>
        <Typography variant="h4">Producto no encontrado</Typography>
      </Box>
    );
  }

  return (
    <>

      <Box
        sx={{
          width: "100%",
          py: 8,
          px: { xs: 3, md: 12 },
          backgroundColor: "#FAF7F2",
        }}
      >
        {/* Título */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 6,
            color: "#333",
          }}
        >
          {producto.title}
        </Typography>

        {/* Contenedor principal */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Imagen */}
          <Card
            sx={{
              width: { xs: "100%", md: "40%" },
              borderRadius: 4,
              boxShadow: 4,
            }}
          >
            <CardMedia
              component="img"
              image={producto.image}
              alt={producto.title}
              sx={{ height: 350, objectFit: "cover" }}
            />
          </Card>

          {/* Texto */}
          <Box sx={{ maxWidth: 500 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2, color: "grey.700", whiteSpace: "pre-line" }}
            >
              {producto.details}
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#D9D9D9",
                color: "black",
                px: 4,
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#c8c8c8",
                },
              }}
              href="/productos"
            >
              ← Volver a productos
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
