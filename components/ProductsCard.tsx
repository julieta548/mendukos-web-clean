"use client";

import { Card, CardContent, CardActions, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

type Product = {
  slug: string;
  nombre: string;
  descripcion: string;
  precio?: string | number;
  img?: string; // ruta relativa si la tuvieras en /public
};

export default function ProductCard({ producto }: { producto: Product }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Imagen (opcional): si tenés imagenes en public/, usá <img> o next/image */}
      {producto.img && (
        <Box
          sx={{
            height: 180,
            backgroundImage: `url(${producto.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
      )}

      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {producto.nombre}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
          {producto.descripcion}
        </Typography>

        {producto.precio && (
          <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 700 }}>
            ${producto.precio}
          </Typography>
        )}
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          component={Link}
          href={`/productos/${producto.slug}`}
          variant="contained"
          fullWidth
        >
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
}
