"use client";

import { Box, Typography, Container } from "@mui/material";

export default function HistoriaFull() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* TÍTULO */}
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          fontWeight: 700,
          mb: 4,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        CONOCÉ
        <br />
        NUESTRA HISTORIA
      </Typography>

      {/* FOTO PERSONAL (OPCIONAL) */}
      <Box
        sx={{
          width: "100%",
          height: 320,
          borderRadius: 3,
          backgroundImage: "url('/images/historia.jpg')", // reemplazá si querés
          backgroundSize: "cover",
          backgroundPosition: "center",
          mb: 4,
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        }}
      />

      {/* TEXTO */}
      <Typography
        variant="body1"
        sx={{
          lineHeight: 1.7,
          fontSize: "1.15rem",
          whiteSpace: "pre-line",
          textAlign: "center",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {`
“Comencé haciendo alfajores artesanales en casa, perfeccionando 
la receta con pasión.

Hoy, comparto dulzura auténtica en cada bocado, hecha con amor 
y tradición.”

Cada alfajor Mendukos es elaborado con dedicación, utilizando 
ingredientes seleccionados para lograr un sabor inconfundible que 
representa lo mejor de la repostería artesanal mendocina.

Nuestro compromiso siempre ha sido crear productos que transmitan 
la esencia de nuestra tierra, con el toque cálido y familiar de una 
receta creada en casa y perfeccionada con el tiempo.
        `}
      </Typography>
    </Container>
  );
}
