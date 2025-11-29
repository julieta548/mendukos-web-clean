import { Box, Container, Typography, Grid } from "@mui/material";
import ContactoForm from "@/components/Contacto";
import ContactoInfo from "@/components/ContactoInfo";
import Contacto from "@/components/Contacto";

export default function ContactoPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Contacto></Contacto>
    </Container>
  );
}
