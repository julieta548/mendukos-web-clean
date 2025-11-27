import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function AlfajorCard({ title, image, description, slug }) {
  return (
    <Grid container spacing={2} sx={{ mb: 6, alignItems: "center", display: "flex", justifyContent: "center" }}>
      
      <Grid item xs={12} md={4}>
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
          <CardMedia component="img" height="220" image={image} alt={title} />
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            {title}
          </Typography>

          <Typography variant="body1" sx={{ color: "grey.700", mb: 2 }}>
            {description}
          </Typography>

          <Link href={`/productos/${slug}`} style={{ textDecoration: "none" }}>
            <Button
              variant="text"
              sx={{
                color: "#F4A60A",
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
              }}
            >
              Ver más →
            </Button>
          </Link>

        </CardContent>
      </Grid>
    </Grid>
  );
}
