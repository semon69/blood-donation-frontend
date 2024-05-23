import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", padding: "20px 0" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1">Email: contact@example.com</Typography>
            <Typography variant="body1">Phone: (123) 456-7890</Typography>
            <Box sx={{ display: "flex", marginTop: "10px" }}>
              <IconButton
                component={Link}
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
              >
                <Facebook />
              </IconButton>
              <IconButton
                component={Link}
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
              >
                <Twitter />
              </IconButton>
              <IconButton
                component={Link}
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
              >
                <Instagram />
              </IconButton>
              <IconButton
                component={Link}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Additional Links
            </Typography>
            <Link
              href="/terms"
              variant="body1"
              display="block"
              sx={{ marginBottom: "5px" }}
            >
              Terms of Use
            </Link>
            <Link href="/privacy" variant="body1" display="block">
              Privacy Policy
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Copyright Information
            </Typography>
            <Typography variant="body1">
              &copy; 2024 Your Company. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
