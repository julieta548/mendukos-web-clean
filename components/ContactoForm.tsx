"use client";

import { Box, TextField, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";

export default function ContactoForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("¡Mensaje enviado! ✨ Pronto nos pondremos en contacto.");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: "#fff",
        p: 4,
        borderRadius: 3,
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Teléfono"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} textAlign="center">
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Enviar mensaje
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
