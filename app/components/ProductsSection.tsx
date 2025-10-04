"use client";
import { Box, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const products = [
  { img: "/images/alfajor1.jpg", name: "Clásico de dulce de leche", desc: "Baño de chocolate negro y relleno casero." },
  { img: "/images/alfajor2.jpg", name: "Blanco con nuez", desc: "Chocolate blanco y toque de nuez molida." },
  { img: "/images/alfajor3.jpg", name: "Maicena artesanal", desc: "Suave, dulce y con coco rallado." },
];

export default function ProductsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-960px

  return (
    <Box id="productos" sx={{ py: { xs: 6, sm: 8, md: 10 }, px: { xs: 2, sm: 4, md: 3 } }}>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        textAlign="center"
        gutterBottom
        sx={{ color: "var(--mendukos-brown)" }}
      >
        Nuestros Alfajores
      </Typography>
      <Typography textAlign="center" mb={5} variant={isMobile ? "body2" : "body1"}>
        Sabores únicos, con el toque artesanal de siempre.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {products.map((p) => (
          <Grid item key={p.name} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                height={isMobile ? 180 : 220}
                image={p.img}
                alt={p.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant={isMobile ? "subtitle1" : "h6"} fontWeight="bold">
                  {p.name}
                </Typography>
                <Typography variant={isMobile ? "body2" : "body2"}>{p.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
