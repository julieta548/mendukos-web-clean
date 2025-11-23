import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="noMargin">
        <Navbar />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
