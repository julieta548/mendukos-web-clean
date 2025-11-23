import Banner from "@/components/Banner";
import ProductsFeatured from "@/components/ProductsFeatured";
import HistoriaPreview from "@/components/HistoriaPreview";
import PremiosPreview from "@/components/PremiosPreview";
import EventosPreview from "@/components/EventosPreview";
import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";
import { Box } from "@mui/material";
import ChocolateReal from "@/components/ChocolateReal";
import TapasArtesanales from "@/components/TapasArtesanales";

export default function Home() {
  return (
    <>
      <Banner />
      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <AnimatedSection>
          <ChocolateReal />
        </AnimatedSection>

        <AnimatedSection>
          <TapasArtesanales />
        </AnimatedSection>
      </Box>

      <AnimatedSection>
        <ProductsFeatured />
      </AnimatedSection>


      <AnimatedSection>
        <PremiosPreview />
      </AnimatedSection>
      
      <AnimatedSection>
        <HistoriaPreview />
      </AnimatedSection>
    </>
  );
}
