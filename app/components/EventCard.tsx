"use client";
import { Box, Typography, Paper } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function EventCard({ title, date, text, img }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        mb: 4,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 600,
        mx: "auto",
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: isMobile ? 180 : 250 }}>
        <Image
          src={img}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight="bold"
          gutterBottom
          sx={{ color: "var(--mendukos-brown)" }}
        >
          {title}
        </Typography>
        {date && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            {date}
          </Typography>
        )}
        <Typography variant={isMobile ? "body2" : "body1"} sx={{ color: "#333" }}>
          {text}
        </Typography>
      </Box>
    </Paper>
  );
}
