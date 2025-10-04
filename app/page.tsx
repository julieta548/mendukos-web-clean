"use client";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import EventsSection from "./components/EventsSection";
import ContactSection from "./components/ContactSection";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Hero />
      <AboutSection />
      <ProductsSection />
      <EventsSection />
      <ContactSection />
    </Box>
  );
}
