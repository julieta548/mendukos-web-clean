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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2, // espacio entre logo y texto
            textAlign: "center", // centrado interno
            mb: 4,
            flexDirection: {xs: "column", sm: "row"}
          }}
        >
          <img
            src="/images/logo.svg"
            style={{
              width: "7rem",
              backgroundColor: "#E7B10A",
              borderRadius: "10px",
              padding: "1rem",
            }}
            alt="logo"
          />

          <Box sx={{ textAlign: "start", mb: 0 }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 500, color: "#ecb338ff" }}
            >
              NUESTROS
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: 500, color: "#696767ff" }}
            >
              ALFAJORES
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "2px",
            height: "7rem",
            background: "linear-gradient(to bottom, #ecb338ff, #ffffff)",
            mb: 5,
          }}
        ></Box>
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
