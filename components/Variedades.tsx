"use client";

import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import AlfajorCard from "./AlfajorCard";
import alfajores from "@/data/alfajores";

export default function Variedades() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      {/* TÍTULO */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        sx={{ textAlign: "center", mb: 6 }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          VARIEDADES DE ALFAJORES
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 600,
            mx: "auto",
            color: "text.secondary",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Conocé nuestras variedades artesanales, elaboradas con ingredientes
          seleccionados y el auténtico sabor mendocino.
        </Typography>
      </Box>

      {/* GRID DE ALFAJORES */}
      <Grid container spacing={5}>
        {alfajores.map((a, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <AlfajorCard {...a} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
