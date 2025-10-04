"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function EventMundial() {
  return (
    <Box sx={{ py: 6, px: { xs: 2, sm: 4, md: 6 }, maxWidth: 900, mx: "auto" }}>
      <Typography variant="h4" sx={{ color: "var(--mendukos-brown)", mb: 3 }}>
        Mundial del Alfajor 2024
      </Typography>
      <Image
        src="/images/evento1.jpg"
        alt="Mundial del Alfajor"
        width={900}
        height={500}
        style={{ width: "100%", borderRadius: 12, objectFit: "cover", marginBottom: 16 }}
      />
      <Typography variant="body1" paragraph>
        Mendukos representó a Mendoza en el Mundial del Alfajor 2024, llevando
        la tradición artesanal a los visitantes de todo el país. Cada alfajor fue
        elaborado con dedicación y cuidado, mostrando el sabor auténtico de
        Mendoza.
      </Typography>
      <Typography variant="body1" paragraph>
        Durante el evento, se compartieron degustaciones y se realizaron
        demostraciones del proceso artesanal, generando gran interés y
        reconocimiento del público.
      </Typography>
      <Image
        src="/images/alfajor1.jpg"
        alt="Degustación"
        width={900}
        height={500}
        style={{ width: "100%", borderRadius: 12, objectFit: "cover", marginBottom: 16 }}
      />
    </Box>
  );
}
