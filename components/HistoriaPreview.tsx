"use client";

import { Box, Typography, Button } from "@mui/material";
import SectionTitle from "./SectionTitle";

export default function HistoriaPreview() {
  return (
    <Box
      sx={{
        my: 15,
        px: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Título */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: "center",
          justifyContent: "center",
          mb: 5,
        }}
      >
        <div>
          <SectionTitle>CONOCÉ</SectionTitle>
          <Typography
            sx={{
              fontSize: { sm: "2.3rem", xs: "19px" },
              color: "#777777ff",
              textAlign: { xs: "center" },
            }}
          >
            NUESTRA HISTORIA
          </Typography>
        </div>

        <Box
          sx={{
            backgroundColor: "#777777ff",
            height: { xs: "1px", sm: "7.5rem" },
            width: { xs: "7.5rem", sm: "1px" },
            mx: "1.5rem",
            my: { xs: "1rem" },
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            color={"#777777ff"}
            sx={{
              mb: 0,
              py: { sm: 1, xs: 0 },
              textAlign: { xs: "center", sm: "start" },
              fontSize: { sm: "1.5rem", xs: "19px" },
            }}
          >
            Te invitamos a conocer
          </Typography>
          <Typography
            color={"#777777ff"}
            fontSize={"1.5rem"}
            sx={{
              mb: 0,
              py: { sm: 1, xs: 0 },
              textAlign: { xs: "center", sm: "start" },
              fontSize: { sm: "1.5rem", xs: "19px" },
            }}
          >
            nuestra trayectoria
          </Typography>
        </Box>
      </Box>

      {/* 📸 Texto + Imagen */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          maxWidth: 1000,
        }}
      >
        {/* Texto */}
        <Typography
          sx={{ maxWidth: 400, textAlign: "center", color: "#777777ff" }}
        >
          “Comencé haciendo alfajores artesanales en casa, perfeccionando la
          receta con pasión. Hoy comparto dulzura auténtica en cada bocado,
          hecha con amor y tradición.”
        </Typography>

        {/* Imagen redonda */}
        <Box
          component="img"
          src="/images/historia.png"
          alt="Historia Mendukos"
          sx={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.25)",
            border: "4px solid #fff",
          }}
        />
      </Box>

      <Button variant="outlined" href="/nosotros" sx={{ mt: 4 }}>
        Conocer más
      </Button>
    </Box>
  );
}
