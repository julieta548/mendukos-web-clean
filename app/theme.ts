"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5f3b11a1",
    },
    secondary: {
      main: "#E7B10A",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#2B2B2B",
      secondary: "#555555",
    },
  },

  typography: {
    fontFamily: "'Inter', sans-serif",

    h1: { fontWeight: 700, marginTop: "3px", marginBottom: "3px" },
    h2: { fontWeight: 700, marginTop: "3px", marginBottom: "3px" },
    h3: { fontWeight: 700, marginTop: "3px", marginBottom: "3px" },
    h4: { fontWeight: 600, marginTop: "3px", marginBottom: "3px" },
    h5: { fontWeight: 600, marginTop: "3px", marginBottom: "3px" },
    h6: { fontWeight: 600, marginTop: "3px", marginBottom: "3px" },

    button: { textTransform: "none", fontWeight: 600 },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: "url('/images/fondo.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // opcional premium
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: "8px 20px",
          fontWeight: 700,
          boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
        },
        containedPrimary: {
          backgroundColor: "#5f3b11a1",
          "&:hover": { backgroundColor: "#6f0000" },
        },
        containedSecondary: {
          backgroundColor: "#E7B10A",
          color: "#5f3b11a1",
          "&:hover": { backgroundColor: "#d2a009" },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
          },
        },
      },
    },
  },
});

export default theme;
