import { Box, Grid, Container, Typography, Button } from "@mui/material";
import SectionTitle from "@/components/SectionTitle";
import ProductsCard from "@/components/ProductsCard";
import productos from "@/data/productos"; // <- ruta relativa a tu data/
import Variedades from "@/components/Variedades";

export default function ProductosPage() {
  // Si quisieras filtrar o paginar, hacelo aquí
  return (
    <main>
      <Variedades />
    </main>
  );
}
