"use client";

import { Box, Typography, Button } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

export default function PremiosPreview() {
  return (
    <Box
      sx={{
        my: 10,
        px: 3,
        textAlign: "center",
        backgroundImage: "url('/images/image 4.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // ⭐ Parallax
        position: "relative",
        overflow: "hidden",
        height: "77rem",
      }}
    >
      {/* 🔥 Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          zIndex: 0,
        }}
      />

      {/* 🔥 Contenido */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: "center",
          justifyContent: "center",
          pt: "6rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionTitle>PARTICIPACIÓN</SectionTitle>
          <Typography style={{ fontSize: "2.4rem", color: "#fff" }}>
            PREMIOS Y RECONOCIMIENTOS
          </Typography>
        </motion.div>

        <Box
          sx={{
            backgroundColor: "#ffffff55",
            height: { xs: "1px", sm: "7.5rem" },
            width: { xs: "7.5rem", sm: "1px" },
            mx: "1rem",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              color="#fff"
              fontSize="1.5rem"
              sx={{ py: 1, textAlign: { xs: "center", sm: "start" } }}
            >
              Conocé
            </Typography>
            <Typography
              color="#fff"
              fontSize="1.5rem"
              sx={{ py: 1, textAlign: { xs: "center", sm: "start" } }}
            >
              nuestros premios
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* 🔥 Texto inferior animado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Typography
          sx={{
            maxWidth: 650,
            mx: "auto",
            mb: 3,
            mt: 4,
            color: "#eee",
            position: "relative",
            zIndex: 2,
          }}
        >
          Mendukos participa activamente en ferias y eventos, compartiendo su
          pasión por los alfajores artesanales. Cada encuentro es una
          oportunidad para conectar con la gente, mostrar nuestra calidad y
          celebrar la tradición que nos distingue.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Button
          variant="contained"
          href="/premios"
          sx={{ position: "relative", zIndex: 2 }}
        >
          Ver más
        </Button>
      </motion.div>

      {/* ⭐ GLASS CARD PREMIUM + ANIMACIÓN */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        sx={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          p: 4,
          textAlign: "center",
          maxWidth: 700,
          mx: "auto",
          position: "relative",
          overflow: "hidden",
          mt: "5rem",
          zIndex: 3, // ⭐ por encima de todo
          transition: "0.35s ease",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
            transform: "translateY(-4px)",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            mb: 0,
          }}
        >
          <Box
            component="img"
            src="/images/evento1.png"
            alt="Mundial"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </Box>

        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#eee",
              mb: 1,
              textAlign: "start",
              ml: 3,
            }}
          >
            <b>Mundial del alfajor</b>
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#fff", lineHeight: 1.6, textAlign: "start", ml: 3 }}
          >
            <b>Mendukos</b> fue reconocido a nivel nacional en el Mundial del
            Alfajor 2025, obteniendo el tercer lugar en su categoría gracias a
            su inconfundible sabor artesanal y la calidad de sus ingredientes
            mendocinos.
          </Typography>

          <Button
            variant="contained"
            href="/premios"
            sx={{ position: "relative", zIndex: 2, mt: 2 }}
          >
            Ver más
          </Button>
        </Box>
      </Box>

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        sx={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          p: 4,
          textAlign: "center",
          maxWidth: 700,
          mx: "auto",
          position: "relative",
          overflow: "hidden",
          mt: "5rem",
          zIndex: 3, // ⭐ por encima de todo
          transition: "0.35s ease",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
            transform: "translateY(-4px)",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            mb: 0,
          }}
        >
          <Box
            component="img"
            src="/images/colect 1.png"
            alt="Mundial"
            sx={{
              width: "12rem",
              height: "11rem",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </Box>

        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#eee",
              mb: 1,
              textAlign: "start",
              ml: 3,
            }}
          >
            <b>Fiesta de las colectividades 2025</b>
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#fff", lineHeight: 1.6, textAlign: "start", ml: 3 }}
          >
            <b>Mendukos</b> dijo presente el 9, 10 y 11 de octubre de 2025, en
            la Fiesta y Encuentro de las Colectividades de Mendoza 2025, que se
            realizó en el corazón del Boulevard Dorrego (Guaymallén).
          </Typography>

          <Button
            variant="contained"
            href="/premios"
            sx={{ position: "relative", zIndex: 2, mt: 2 }}
          >
            Ver más
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
