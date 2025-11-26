"use client";

import { Typography, Box } from "@mui/material";
import SectionBox from "./SectionBox";

export default function SectionTitlePremios({ children }) {
  return (
    <SectionBox textAlign="center" my={4}>
      <Typography
        sx={{
          fontWeight: 500,
          fontFamily: "'Inter', sans-serif",
          fontSize: {
            xs: "2rem", // móviles
            sm: "5rem", // tablets y desktop
          },
          marginBottom: "3px",
          lineHeight: 1,
          color: "#777777ff"
        }}
      >
        {children}
      </Typography>
    </SectionBox>
  );
}
