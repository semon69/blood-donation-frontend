// src/DonationTips.js
"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const tips = [
  {
    title: "Stay Hydrated",
    description: "Drink plenty of water before and after your donation.",
    image: "https://i.ibb.co/59Kz6Gd/stay-hydrated.jpg",
  },
  {
    title: "Eat a Healthy Meal",
    description: "Have a balanced meal before donating. Avoid fatty foods.",
    image: "https://i.ibb.co/jznbBP0/eat-healthy.jpg",
  },
  {
    title: "Wear Comfortable Clothing",
    description: "Wear clothing with sleeves that can be easily rolled up.",
    image: "https://i.ibb.co/SNZY6MM/wear.jpg",
  },
  {
    title: "Bring an ID",
    description: "Bring a valid ID with you to the donation center.",
    image: "https://i.ibb.co/KzyQ0bn/id.webp",
  },
  {
    title: "Relax",
    description:
      "Stay calm and relaxed. Listen to music or read a book while donating.",
    image: "https://i.ibb.co/ZhT5HfK/relax.jpg",
  },
  {
    title: "Avoid Heavy Lifting",
    description:
      "Avoid heavy lifting or strenuous exercise for the rest of the day after your donation.",
    image: "https://i.ibb.co/nQVfSPz/lifting.jpg",
  },
];

const CardContainer = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  boxShadow: "0 10px 20px rgba(0,0,0,0.12), 0 6px 6px rgba(0,0,0,0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 15px 25px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.05)",
  },
}));

const DonationTips = () => {
  return (
    <Container sx={{ marginY: "50px" }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Donation Tips
      </Typography>
      <Grid container justifyContent="center" spacing={4}>
        {tips.map((tip, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <CardContainer sx={{ height: "350px" }}>
              <CardMedia
              />
              <CardContent>
                <Box
                  sx={{
                    borderRadius: "15px",
                    height: "210px",
                    position: "relative",
                    overflow: "hidden",
                    objectFit: "cover",
                  }}
                >
                  <Image
                    src={tip.image}
                    width={300}
                    height={300}
                    alt="image"
                    style={{
                      // borderRadius: "15px",
                    }}
                  />
                </Box>
                <Typography gutterBottom variant="h5" component="div">
                  {tip.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {tip.description}
                </Typography>
              </CardContent>
            </CardContainer>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DonationTips;
