import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Avatar,
  Box,
} from "@mui/material";
// import "swiper/css";
// import { Swiper, SwiperSlide } from 'swiper/react';

const SuccessStories = () => {
  // Fake data for success stories
//   const successStoriesData = [
//     {
//       id: 1,
//       name: "John Doe",
//       story: "I donated blood and saved a life!",
//       image: "https://via.placeholder.com/300", // Placeholder for review-related image
//       avatar: "https://via.placeholder.com/100", // Placeholder for reviewer's avatar
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       story: "Receiving blood donation helped me recover quickly.",
//       image: "https://via.placeholder.com/300",
//       avatar: "https://via.placeholder.com/100",
//     },
//     {
//       id: 3,
//       name: "Michael Johnson",
//       story: "I encourage everyone to donate blood regularly.",
//       image: "https://via.placeholder.com/300",
//       avatar: "https://via.placeholder.com/100",
//     },
//   ];

  return (
    <Box
      sx={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "15px" }}
    >
      <Typography variant="h6" gutterBottom>
        Success Stories
      </Typography>
      
    </Box>
  );
};

export default SuccessStories;
