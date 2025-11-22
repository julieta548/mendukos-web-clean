"use client";

import { Box, Grid, Button, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";
import productos from "@/data/productos";
import { StyleSheet } from "@emotion/sheet";

export default function ProductsFeatured() {
  const destacados = productos.slice(0, 3);

  return (
    <Box sx={{ my: 8, px: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column", // móviles
            sm: "row", // tablets y desktop
          },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <SectionTitle>NUESTROS</SectionTitle>
          <Typography style={{ fontSize: "2.05rem", color: "#777777ff" }}>
            PRODUCTOS DESTACADOS
          </Typography>
        </div>
        <div>
          <Box
            sx={{
              backgroundColor: "#777777ff",
              height: {
                xs: "1px",
                sm: "7.5rem",
                margin: "1rem",
              },
              width: {
                xs: "7.5rem",
                sm: "1px",
                margin: "1rem",
              },
            }}
          ></Box>
        </div>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            color={"#777777ff"}
            fontSize={"1.5rem"}
            sx={{ mb: 0, py: 1, textAlign: { xs: "center", sm: "start" } }}
          >
            Visitá nuestra amplia
          </Typography>
          <Typography
            color={"#777777ff"}
            fontSize={"1.5rem"}
            textAlign="start"
            sx={{ mb: 0, py: 1 }}
          >
            variedad de alfajores artesanales
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {destacados.map((p, i) => (
          <Grid
            key={p.slug}
            item
            xs={12}
            sm={i === 0 ? 5 : 7} // ← 1/3 para la primera, 2/3 para la segunda
          >
            <Box
              sx={{
                borderRadius: 3,
                p: 3,
                textAlign: "center",
                backgroundColor: "#fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {p.nombre}
              </Typography>
              <Typography variant="body2" sx={{ my: 1 }}>
                {p.descripcion}
              </Typography>

              <Button
                href={`/productos/${p.slug}`}
                variant="contained"
                sx={{ mt: 2 }}
              >
                Ver más
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
