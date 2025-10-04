"use client";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function AlfajorSpinner3D() {
  const spinTransition = { repeat: Infinity, duration: 1.5, ease: "linear" };
  const liftTransition = { repeat: Infinity, duration: 1, ease: "easeInOut", y: [0, -12, 0] };

  return (
    <Box
      sx={{
        width: 100,
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: 400, // agrega efecto 3D
        margin: "0 auto",
      }}
    >
      <motion.div
        style={{
          width: 60,
          height: 60,
          position: "relative",
        }}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      >
        {/* Galleta inferior */}
        <motion.div
          animate={{ y: liftTransition.y }}
          transition={liftTransition}
          style={{
            width: 60,
            height: 12,
            backgroundColor: "#d2a679",
            borderRadius: 6,
            position: "absolute",
            bottom: 0,
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        />
        {/* Relleno dulce de leche */}
        <motion.div
          animate={{ y: liftTransition.y }}
          transition={{ ...liftTransition, delay: 0.1 }}
          style={{
            width: 50,
            height: 16,
            backgroundColor: "#f5c16c",
            borderRadius: 6,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          }}
        />
        {/* Galleta superior */}
        <motion.div
          animate={{ y: liftTransition.y }}
          transition={{ ...liftTransition, delay: 0.2 }}
          style={{
            width: 60,
            height: 12,
            backgroundColor: "#d2a679",
            borderRadius: 6,
            position: "absolute",
            top: 0,
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        />
        {/* Chocolate cobertura (opcional efecto extra) */}
        <motion.div
          animate={{ y: liftTransition.y }}
          transition={{ ...liftTransition, delay: 0.3 }}
          style={{
            width: 64,
            height: 8,
            backgroundColor: "#8b5e3c",
            borderRadius: 4,
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
          }}
        />
      </motion.div>
    </Box>
  );
}
