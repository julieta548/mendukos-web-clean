import { Box, Container, Typography, Grid } from "@mui/material";
import ContactoForm from "@/components/ContactoForm";
import ContactoInfo from "@/components/ContactoInfo";

export default function ContactoPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        textAlign="center"
        sx={{ fontWeight: 700, mb: 1 }}
      >
        CONTACTO
      </Typography>

      <Typography
        variant="body1"
        textAlign="center"
        sx={{ mb: 6, color: "text.secondary" }}
      >
        Estamos para ayudarte. Escribinos y te responderemos a la brevedad.
      </Typography>

      <Grid container spacing={6}>
        {/* FORMULARIO */}
        <Grid item xs={12} md={7}>
          <ContactoForm />
        </Grid>

        {/* INFORMACIÓN */}
        <Grid item xs={12} md={5}>
          <ContactoInfo />
        </Grid>
      </Grid>
    </Container>
  );
}
