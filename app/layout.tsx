import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>     
        <Footer />
      </body>
    </html>
  );
}
