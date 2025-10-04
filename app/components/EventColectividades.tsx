"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function EventColectividades() {
  return (
    <Box sx={{ py: 6, px: { xs: 2, sm: 4, md: 6 }, maxWidth: 900, mx: "auto" }}>
      <Typography variant="h4" sx={{ color: "var(--mendukos-brown)", mb: 3 }}>
        Fiesta de las Colectividades 2025
      </Typography>
      <Image
        src="/images/evento2.jpg"
        alt="Fiesta de las Colectividades"
        width={900}
        height={500}
        style={{ width: "100%", borderRadius: 12, objectFit: "cover", marginBottom: 16 }}
      />
      <Typography variant="body1" paragraph>
        Mendukos estará presente en la Fiesta de las Colectividades 2025 con un
        stand lleno de sabor artesanal. Los visitantes podrán disfrutar de
        alfajores únicos, elaborados con ingredientes naturales y mucho amor.
      </Typography>
      <Typography variant="body1" paragraph>
        Esta participación busca compartir la tradición mendocina con toda la
        comunidad, ofreciendo degustaciones y mostrando el cuidado en cada paso
        del proceso de elaboración.
      </Typography>
      <Image
        src="/images/alfajor2.jpg"
        alt="Stand de Mendukos"
        width={900}
        height={500}
        style={{ width: "100%", borderRadius: 12, objectFit: "cover", marginBottom: 16 }}
      />
    </Box>
  );
}
