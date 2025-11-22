import Banner from "@/components/Banner";
import ProductsFeatured from "@/components/ProductsFeatured";
import HistoriaPreview from "@/components/HistoriaPreview";
import PremiosPreview from "@/components/PremiosPreview";
import EventosPreview from "@/components/EventosPreview";
import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Banner />
      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection>
        <ProductsFeatured />
      </AnimatedSection>

      <AnimatedSection>
        <HistoriaPreview />
      </AnimatedSection>

      <AnimatedSection>
        <PremiosPreview />
      </AnimatedSection>

      <AnimatedSection>
        <EventosPreview />
      </AnimatedSection>
    </>
  );
}
