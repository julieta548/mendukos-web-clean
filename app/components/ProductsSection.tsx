"use client";
import { Box, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

const products = [
  { img: "/images/alfajor1.jpg", name: "Clásico de dulce de leche", desc: "Baño de chocolate negro y relleno casero." },
  { img: "/images/alfajor2.jpg", name: "Blanco con nuez", desc: "Chocolate blanco y toque de nuez molida." },
  { img: "/images/alfajor3.jpg", name: "Maicena artesanal", desc: "Suave, dulce y con coco rallado." },
];

export default function ProductsSection() {
  return (
    <Box id="productos" sx={{ py: 10, px: 3 }}>
      <Typography variant="h4" textAlign="center" gutterBottom sx={{ color: 'var(--mendukos-brown)'}}>
        Nuestros Alfajores
      </Typography>
      <Typography textAlign="center" mb={5}>
        Sabores únicos, con el toque artesanal de siempre.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.map((p) => (
          <Grid item key={p.name} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" height="220" image={p.img} alt={p.name} />
              <CardContent>
                <Typography variant="h6">{p.name}</Typography>
                <Typography variant="body2">{p.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
