"use client";
import { Box, Typography } from "@mui/material";
import EventCard from "./EventCard";

export default function EventsBlog() {
  const events = [
    {
      title: "Mundial del Alfajor 2024",
      date: "Septiembre 2024",
      text: "Mendukos representó a Mendoza en el prestigioso Mundial del Alfajor, mostrando la tradición y calidad de nuestros alfajores artesanales. Cada visitante pudo probar sabores únicos y conocer nuestra historia.",
      img: "/images/evento1.jpg",
    },
    {
      title: "Fiesta de las Colectividades 2025",
      date: "Octubre 2025",
      text: "Este fin de semana, Mendukos tendrá su stand en la Fiesta de las Colectividades. Vení a disfrutar de nuestros alfajores artesanales y llevarte un pedacito del sabor mendocino a tu casa.",
      img: "/images/evento2.jpg",
    },
  ];

  return (
    <Box id="eventos" sx={{ py: 10, px: { xs: 2, sm: 4, md: 3 } }}>
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{ color: "var(--mendukos-brown)", mb: 6 }}
      >
        Noticias y eventos
      </Typography>

      {events.map((e) => (
        <EventCard
          key={e.title}
          title={e.title}
          date={e.date}
          text={e.text}
          img={e.img}
        />
      ))}
    </Box>
  );
}
