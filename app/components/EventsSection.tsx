"use client";
import { Box, Grid, Typography, Paper } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const events = [
  { title: "Mundial del Alfajor 2025", text: "Representando a Mendoza entre los mejores del país.", img: "/images/evento1.png" },
  { title: "Fiesta de las Colectividades 2025", text: "Visitá nuestro stand este fin de semana.", img: "/images/evento2.jpg" },
];

export default function EventsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-960px

  return (
    <Box
      id="eventos"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 3 },
        backgroundColor: "var(--mendukos-beige)",
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
        textAlign="center"
        gutterBottom
        sx={{ color: "var(--mendukos-brown)" }}
      >
        Participaciones y reconocimientos
      </Typography>
      <Typography
        textAlign="center"
        mb={5}
        variant={isMobile ? "body2" : "body1"}
      >
        Llevamos el sabor mendocino a los grandes eventos.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {events.map((e) => (
          <Grid item xs={12} sm={6} md={4} key={e.title}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Image
                src={e.img}
                alt={e.title}
                width={400}
                height={isMobile ? 200 : 250}
                style={{ borderRadius: 12, objectFit: "cover", width: "100%" }}
              />
              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                mt={2}
                fontWeight="bold"
              >
                {e.title}
              </Typography>
              <Typography variant={isMobile ? "body2" : "body2"}>{e.text}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
