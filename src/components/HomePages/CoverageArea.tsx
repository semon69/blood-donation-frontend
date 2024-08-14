"use client";

import React, { useEffect } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Container,
} from "@mui/material";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const CoverageArea = () => {
  // Fake data for coverage areas with images
  const coverageAreaData = [
    {
      id: 1,
      region: "Chittagong",
      donors: 200,
      image: "https://i.ibb.co/42Nwhkg/chittangong.jpg",
    },
    {
      id: 2,
      region: "Dhaka",
      donors: 150,
      image: "https://i.ibb.co/J5ZScFM/dhaka.jpg",
    },
    {
      id: 3,
      region: "Khulna",
      donors: 320,
      image: "https://i.ibb.co/W3PgqXx/khula.jpg",
    },
    {
      id: 4,
      region: "Rangpur",
      donors: 120,
      image: "https://i.ibb.co/74ztSB5/rangpur.jpg",
    },
    {
      id: 5,
      region: "Sylhet",
      donors: 225,
      image: "https://i.ibb.co/0sFWDDp/sylhet2.jpg",
    },
    {
      id: 6,
      region: "Barishal",
      donors: 175,
      image: "https://i.ibb.co/CJvJhw7/barishal.jpg",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginY: "30px",
        }}
      >
        Coverage Area
      </Typography>
      <Box
        sx={{
          backgroundImage: "url(https://i.ibb.co/LkbJ5Nc/cover.jpg)", // Replace with the path to your image
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "10px",
        }}
      >
        <Container
          maxWidth={"lg"}
          sx={{
            margin: "auto",
          }}
        >
          <div className="my-10">
            <Grid container spacing={2}>
              {coverageAreaData.map((region) => (
                <Grid
                  data-aos="fade-up"
                  item
                  key={region.id}
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <Card
                    sx={{
                      height: "350px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardMedia />
                    <CardContent>
                      <Box
                        sx={{
                          borderRadius: "15px",
                          height: "240px",
                          position: "relative",
                          overflow: "hidden",
                          objectFit: "cover",
                        }}
                      >
                        <Image
                          src={region?.image}
                          alt="Image"
                          width={350}
                          height={300}
                        />
                      </Box>
                      <Typography gutterBottom variant="h5" component="div">
                        {region.region}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Donors: {region.donors}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </Box>
    </Box>
  );
};

export default CoverageArea;
