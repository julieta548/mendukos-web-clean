"use client";

import { Box, Container, Typography, Grid, Button, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { Instagram, WhatsApp, Email, LocationOn, AccessTime } from "@mui/icons-material";

export default function Contacto() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#fffdf7",
      }}
    >
      <Container maxWidth="lg">
        
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            align="center"
            fontWeight={700}
            sx={{ mb: 2, color: "#696767ff", fontSize: {md: "3rem", xs: "1.5rem" } }}
          >
            CONTACTANOS
          </Typography>
        </motion.div>

        {/* DIVIDER */}
        <Box
          sx={{
            width: "240px",
            height: "3px",
            mx: "auto",
            mb: 5,
            borderRadius: 2,
            background: "linear-gradient(to right, #E7B10A, #ffffff)",
          }}
        />

        {/* TARJETAS DE INFO */}
        <Grid container spacing={4} justifyContent="center">
          
          {/* UBICACIÓN */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                  p: 1,
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <LocationOn sx={{ fontSize: 40, color: "#E7B10A" }} />
                  <Typography variant="h6" fontWeight={600} sx={{ mt: 1 }}>
                    Nuestra ubicación
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, mb: 2, color: "#555" }}>
                    Mendoza, Argentina  
                    <br /> Elaboración artesanal local.
                  </Typography>

                  <Box
                    sx={{
                      width: "100%",
                      height: 180,
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.086019301901!2d-68.844614!3d-32.889458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090bb20ffc7b%3A0x24fc60d87401e8a3!2sMendoza!5e0!3m2!1ses!2sar!4v1697052328479!5m2!1ses!2sar"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                    ></iframe>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* HORARIOS */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                  p: 1,
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <AccessTime sx={{ fontSize: 40, color: "#E7B10A" }} />
                  <Typography variant="h6" fontWeight={600} sx={{ mt: 1 }}>
                    Horarios de atención
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
                    Lunes a Viernes  
                    <br />
                    <strong>9:00 a 18:00</strong>
                    <br />
                    Sábados  
                    <br />
                    <strong>10:00 a 14:00</strong>
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* CONTACTO DIRECTO */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                  p: 1,
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight={600} sx={{ mt: 1 }}>
                    Contactanos directamente
                  </Typography>
                  
                  <Box sx={{ mt: 2 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<WhatsApp />}
                      href="https://wa.me/5492610000000"
                      target="_blank"
                      sx={{
                        mb: 2,
                        py: 1.2,
                        backgroundColor: "#25D366",
                        ":hover": { backgroundColor: "#1ebe59" },
                        borderRadius: 3,
                        fontWeight: 600,
                      }}
                    >
                      WhatsApp
                    </Button>

                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<Instagram />}
                      href="https://instagram.com/"
                      target="_blank"
                      sx={{
                        mb: 2,
                        py: 1.2,
                        borderRadius: 3,
                        fontWeight: 600,
                        color: "#E1306C",
                        borderColor: "#E1306C",
                        ":hover": {
                          borderColor: "#c22659",
                          backgroundColor: "rgba(225,48,108,0.08)",
                        },
                      }}
                    >
                      Instagram
                    </Button>

                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<Email />}
                      href="mailto:contacto@mendukos.com"
                      sx={{
                        py: 1.2,
                        borderRadius: 3,
                        fontWeight: 600,
                      }}
                    >
                      Email
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
