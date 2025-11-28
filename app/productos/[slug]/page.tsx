"use client";

import productos from "@/data/productos";
import { Box, Typography, Button, Card, CardMedia } from "@mui/material";
import { useParams } from "next/navigation";

export default function ProductoPage() {
  const params = useParams();
  const slug = params.slug;

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
        }}
      >
        {/* Contenedor principal */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            gap: 5,
            alignItems: { md: "flex-start", xs: "flex-start" },
            justifyContent: "center",
          }}
        >
          {/* Imagen */}
          <Card
            sx={{
              width: { xs: "100%", md: "40%" },
              borderRadius: 1,
              boxShadow: 1,
            }}
          >
            <CardMedia
              component="img"
              image={producto.image}
              alt={producto.title}
              sx={{ height: 350, objectFit: "cover" }}
            />
          </Card>

          {/* Separador */}
          <Box
            sx={{
              width: { xs: "20rem", md: "3px" },
              height: { xs: "3px", md: "25rem" },
              background: {
                md: "linear-gradient(to bottom, #ecb338ff, #ffffff)",
                xs: "linear-gradient(to right, #ecb338ff, #ffffff)",
              },
              mb: 5,
            }}
          ></Box>

          {/* Texto */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* Descripción */}
            <Box sx={{ maxWidth: 500 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
                  textAlign: "start",
                  mb: 2,
                  color: "#757575ff",
                }}
              >
                {producto.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  color: "grey.500",
                  whiteSpace: "pre-line",
                }}
              >
                {producto.details}
              </Typography>
            </Box>

            {/* Botones */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#D9D9D9",
                  color: "#525151ff",
                  px: 4,
                  py: 1,
                  borderRadius: 2,
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#c8c8c8",
                  },
                  mb: 3,
                }}
                href={`https://wa.me/5492610000000?text=Hola!%20Quiero%20comprar%20el%20alfajor%20${encodeURIComponent(
                  producto.nombre
                )}`}
                target="_blank"
              >
                ¡Lo quiero!
              </Button>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#D9D9D9",
                  color: "#525151ff",
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
      </Box>
    </>
  );
}
