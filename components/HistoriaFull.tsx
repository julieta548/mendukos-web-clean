"use client";

import { Box, Container, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";

export default function HistoriaFull() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="md" sx={{ width: { xs: "80%" } }}>
        {/* TÍTULO ANIMADO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            fontWeight={600}
            sx={{
              mb: 0,
              color: "#5f5e5eff",
              letterSpacing: { xs: "2px", md: "3px" },
              fontSize: { xs: "2.8rem", md: "66px" },
            }}
          >
            NUESTRA HISTORIA
          </Typography>
          <Typography
            variant="h4"
            align="center"
            fontWeight={400}
            sx={{
              mb: 2,
              color: "#5f5e5eff",
              letterSpacing: "0",
              fontSize: { xs: "0.8rem", md: "36px" },
            }}
          >
            UN CAMINO DE DULZURA Y TRADICIÓN
          </Typography>
        </motion.div>

        {/* DIVIDER PROFESIONAL */}
        <Box
          sx={{
            width: { md: "39rem", xs: "15rem" },
            height: "3px",
            mx: "auto",
            borderRadius: 2,
            background: "linear-gradient(to right, #E7B10A, #ffffff)",
            mb: 6,
          }}
        />

        {/* PÁRRAFOS ANIMADOS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "#5f5e5eff",
              mb: 3,
              textAlign: "center"
            }}
          >
            Desde nuestros inicios, buscamos crear un espacio donde el sabor, la
            dedicación y la tradición se unan para ofrecer una experiencia
            auténtica. Cada uno de nuestros alfajores está elaborado con recetas
            familiares, ingredientes seleccionados y un profundo amor por lo
            artesanal.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "#5f5e5eff",
              mb: 3,
              textAlign: "center"
            }}
          >
            Con el tiempo, crecimos y evolucionamos, pero jamás perdimos la
            esencia que nos caracteriza. Mendukos es más que un producto: es una
            historia contada a través del sabor, una invitación a compartir
            momentos y disfrutar pequeños placeres.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "#5f5e5eff",
              mb: 3,
              textAlign: "center"
            }}
          >
            Hoy seguimos expandiendo fronteras, manteniendo intacto el
            compromiso por la calidad y la pasión por la repostería artesanal.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
