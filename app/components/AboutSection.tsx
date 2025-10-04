"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function AboutSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-960px

  return (
    <Box
      id="nosotros"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 3 },
        backgroundColor: "var(--mendukos-bg)",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        direction={isMobile ? "column-reverse" : "row"} // Imagen debajo del texto en móviles
      >
        <Grid item xs={12} md={6}>
          <Image
            src="/images/alfajor1.jpg"
            alt="Proceso artesanal"
            width={600}
            height={420}
            style={{
              borderRadius: "16px",
              objectFit: "cover",
              width: "100%", // Imagen full width
              height: isMobile ? "auto" : 420,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant={isMobile ? "h5" : isTablet ? "h4" : "h4"}
            gutterBottom
            sx={{ color: "var(--mendukos-brown)", textAlign: isMobile ? "center" : "left" }}
          >
            El sabor de lo casero, la pasión por lo nuestro
          </Typography>
          <Typography sx={{ textAlign: isMobile ? "center" : "left" }}>
            Mendukos nació en Mendoza con la idea de recuperar la tradición del
            alfajor artesanal, hecho con ingredientes naturales y mucho cariño.
            Cada pieza está elaborada a mano, manteniendo el sabor casero que nos
            representa.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
