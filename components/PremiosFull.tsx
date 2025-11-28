"use client";

import { Box, Typography, Grid, CardMedia } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Premios() {
  return (
    <Box sx={{ width: "100%" }}>
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          height: "350px",
          backgroundImage: "url('/images/premios.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(236,179,56,0.55)", // overlay amarillo
          }}
        />

        <Box
          sx={{
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "#fff", fontWeight: 600, mb: 1 }}
          >
            ORGULLO MENDOCINO
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#fff", fontWeight: 400 }}
          >
            CONOCÉ AQUÍ NUESTROS PREMIOS
          </Typography>
        </Box>
      </Box>

      {/* SECCIÓN PREMIOS */}
      <Box
        sx={{
          width: "100%",
          py: 8,
          px: { xs: 3, md: 12 },
          backgroundImage: "url('/images/textura.jpg')", // textura papel
          backgroundSize: "cover",
        }}
      >
        <Grid
          container
          spacing={6}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          {/* Premio 1 */}
          <Grid item xs={12} md={4} textAlign="center">
            <CardMedia
              component="img"
              image="/images/historia.png"
              alt="Premio 1"
              sx={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                objectFit: "cover",
                mx: "auto",
                mb: 3,
              }}
            />

            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              PREMIO N° 1
            </Typography>
            <Typography variant="body1" sx={{ color: "grey.700" }}>
              Nombre del premio
            </Typography>
          </Grid>

          {/* Premio 2 */}
          <Grid item xs={12} md={4} textAlign="center">
            <CardMedia
              component="img"
              image="/images/historia.png"
              alt="Premio 2"
              sx={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                objectFit: "cover",
                mx: "auto",
                mb: 3,
              }}
            />

            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              PREMIO N° 2
            </Typography>
            <Typography variant="body1" sx={{ color: "grey.700" }}>
              Nombre del premio
            </Typography>
          </Grid>
        </Grid>

        {/* TEXTO INFERIOR */}
        <Typography
          variant="body1"
          sx={{
            maxWidth: 600,
            mx: "auto",
            textAlign: "center",
            color: "#555",
            lineHeight: 1.6,
          }}
        >
          <strong>Mendukos</strong> fue reconocido a nivel nacional en el Mundial
          del Alfajor 2025, obteniendo el tercer lugar en su categoría gracias a
          su inconfundible sabor artesanal y la calidad de sus ingredientes
          mendocinos.
        </Typography>
      </Box>      
    </Box>
  );
}
