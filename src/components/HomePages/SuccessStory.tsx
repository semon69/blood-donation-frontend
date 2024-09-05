// src/SuccessStories.js
"use client";

import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Recipient",
    quote:
      "I am so grateful for the blood donation that saved my life. Thank you to all the donors!",
    image: "https://i.ibb.co/bHmxXQq/p1.jpg",
  },
  {
    name: "John Smith",
    role: "Donor",
    quote:
      "Donating blood was a simple process, and it feels great to help save lives.",
    image: "https://i.ibb.co/1Qdy2k3/p2.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Recipient",
    quote:
      "The blood I received during my surgery was crucial to my recovery. Thank you!",
    image: "https://i.ibb.co/R0NgxLj/p3.jpg",
  },
  {
    name: "Michael Brown",
    role: "Donor",
    quote:
      "I donate blood regularly and encourage everyone to do the same. It makes a big difference.",
    image: "https://i.ibb.co/Dw04vG5/p4.jpg",
  },
  {
    name: "Sarah Wilson",
    role: "Recipient",
    quote:
      "Blood donations are vital. I am alive today because of the generosity of others.",
    image: "https://i.ibb.co/P4VgXNv/p5.jpg",
  },
  {
    name: "David Lee",
    role: "Donor",
    quote:
      "Knowing that my blood donation can save lives is incredibly rewarding.",
    image: "https://i.ibb.co/LzLFSFT/p6.jpg",
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

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const SuccessStories = () => (
  <Container sx={{ mt: 5 }}>
    <Typography variant="h4" component="h1" gutterBottom align="center">
      Success Stories
    </Typography>
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <Box key={index} sx={{ px: 2 }}>
          <CardContainer sx={{ height: "400px" }}>
            <CardMedia />
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
                  src={testimonial?.image ? testimonial?.image : "/image"}
                  width={300}
                  height={300}
                  alt="image"
                  style={{
                    borderRadius: "15px",
                  }}
                />
              </Box>
              <Typography gutterBottom variant="h5" component="div">
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {testimonial.role}
              </Typography>
              <Typography variant="body1" color="textPrimary" sx={{ mt: 1 }}>
                {testimonial.quote}
              </Typography>
            </CardContent>
          </CardContainer>
        </Box>
      ))}
    </Slider>
  </Container>
);

export default SuccessStories;
