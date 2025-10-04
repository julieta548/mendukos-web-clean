"use client";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import AlfajorSpinner3D from "./AlfajorSpinner3D";

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box
      id="inicio"
      sx={{
        height: { xs: "80vh", sm: "90vh", md: "100vh" },
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        px: { xs: 2, sm: 4 },
      }}
    >
      {!imageLoaded && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            backgroundColor: "#000",
          }}
        >
          <AlfajorSpinner3D />
        </Box>
      )}

      <Image
        src="/images/hero.jpg"
        alt="Alfajores Mendukos"
        fill
        style={{ objectFit: "cover", zIndex: -1, filter: "brightness(0.5)" }}
        onLoadingComplete={() => setImageLoaded(true)}
      />

      {imageLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
            fontWeight="bold"
            sx={{ color: "white" }}
          >
            Mendukos
          </Typography>

          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{ mt: 2, color: "white" }}
          >
            Alfajores artesanales mendocinos, hechos con amor y sabor auténtico.
          </Typography>

          <Typography
            variant={isMobile ? "body2" : "body1"}
            sx={{ mt: 1, mb: 3, color: "white" }}
          >
            Desde Mendoza al Mundial del Alfajor y la Fiesta de las Colectividades.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            href="#productos"
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem" },
              px: { xs: 2, sm: 4 },
              py: { xs: 1, sm: 1.5 },
            }}
          >
            Ver productos
          </Button>
        </motion.div>
      )}
    </Box>
  );
}
