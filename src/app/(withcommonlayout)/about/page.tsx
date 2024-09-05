"use client"

import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Avatar,
  Link,
  IconButton,
} from "@mui/material";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Dummy team member data
const teamMembers = [
  {
    name: "Sheikh Emon",
    role: "Founder & CEO",
    image: "https://i.ibb.co/qdZLNck/emon2.jpg",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/smdemon2k17",
    linkedin: "https://www.linkedin.com/in/emon69/",
    twitter: "https://www.twitter.com/",
  },
  {
    name: "Abdul Halim",
    role: "Chief Technical Officer",
    image: "https://i.ibb.co/ydLSVCB/img1.jpg",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/feed/",
    twitter: "https://www.twitter.com/",
  },
  {
    name: "Foyej Choudhury",
    role: "Head of Marketing",
    image: "https://i.ibb.co/McJkxPC/img2.jpg",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/feed/",
    twitter: "https://www.twitter.com/",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      sx={{
        py: {
          lg: 10,
        },
        backgroundColor: "primary.main",
        // clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%)",
        clipPath: {
          lg: "polygon(0 0, 100% 20%, 100% 100%, 0 80%)",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ padding: "4rem 0" }}>
        <Box  data-aos="fade-up" textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            About RedLove
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom color="white">
            {"Give Blood, Save Lives. Spread the Love"}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            paragraph
          >
            RedLove is dedicated to connecting generous blood donors with those
            in critical need of blood transfusions. Our mission is to create a
            world where no one has to worry about finding the blood they need
            during emergencies. We believe in the power of community and
            compassion to make a significant impact on lives.
          </Typography>
        </Box>

        {teamMembers.length > 0 && (
          <Box mb={4} sx={{ padding: "10px" }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Meet Our Team
            </Typography>
            <Grid data-aos="fade-up" container spacing={4} justifyContent="center">
              {teamMembers?.map((member, index) => (
                // <Grid item xs={12} sm={6} md={4} key={index}>
                //   <Box textAlign="center" p={2}>
                //     <Avatar
                //       alt={member.name}
                //       src={member.image}
                //       sx={{ width: 150, height: 150, margin: "0 auto" }}
                //     />
                //     <Typography variant="h6" component="h3" mt={2}>
                //       {member.name}
                //     </Typography>
                //     <Typography variant="body2" color="textSecondary">
                //       {member.role}
                //     </Typography>
                //   </Box>
                // </Grid>
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    className="relative"
                    textAlign="center"
                    p={2}
                    sx={{
                      "&:hover .social-overlay": {
                        opacity: 1,
                        visibility: "visible",
                      },
                    }}
                  >
                    {/* Member Avatar */}
                    <Box
                      sx={{
                        position: "relative",
                        width: 200,
                        height: 200,
                        margin: "0 auto",
                        borderRadius: "50%",
                        overflow: "hidden",
                      }}
                    >
                      <Avatar
                        alt={member?.name}
                        src={member?.image}
                        sx={{ width: "100%", height: "100%" }}
                      />
                      {/* Social Media Overlay */}
                      <Box
                        className="social-overlay absolute flex items-center justify-center bg-black bg-opacity-75 opacity-0 visibility-hidden transition-opacity duration-200"
                        sx={{
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div className="flex space-x-3 text-white">
                          {member?.facebook && (
                            <IconButton
                              color="inherit"
                              href={member?.facebook}
                              sx={{ color: "white" }}
                            >
                              <FaFacebookF />
                            </IconButton>
                          )}
                          {member?.twitter && (
                            <IconButton
                              color="inherit"
                              href={member?.twitter}
                              sx={{ color: "white" }}
                            >
                              <FaTwitter />
                            </IconButton>
                          )}
                          {member?.instagram && (
                            <IconButton
                              color="inherit"
                              href={member?.instagram}
                              sx={{ color: "white" }}
                            >
                              <FaInstagram />
                            </IconButton>
                          )}
                          {member?.linkedin && (
                            <IconButton
                              color="inherit"
                              href={member?.linkedin}
                              sx={{ color: "white" }}
                            >
                              <FaLinkedin />
                            </IconButton>
                          )}
                        </div>
                      </Box>
                    </Box>
                    {/* Member Name */}
                    <Typography variant="h6" component="h3" mt={2}>
                      {member.name}
                    </Typography>
                    {/* Member Role */}
                    <Typography variant="body2" color="textSecondary">
                      {member.role}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* <Box textAlign="center" mt={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="body1" component="p">
            <Email sx={{ verticalAlign: "middle" }} /> Email:
            <Link href="mailto:info@redlove.org" sx={{ ml: 1 }}>
              info@redlove.org
            </Link>
          </Typography>
          <Typography variant="body1" component="p">
            <Phone sx={{ verticalAlign: "middle" }} /> Phone: (123) 456-7890
          </Typography>
          <Box mt={2}>
            <Link
              href="https://www.facebook.com/RedLove"
              target="_blank"
              sx={{ mx: 1, color: "white" }}
            >
              <Facebook fontSize="large" />
            </Link>
            <Link
              href="https://www.twitter.com/RedLove"
              target="_blank"
              sx={{ mx: 1, color: "white" }}
            >
              <Twitter fontSize="large" />
            </Link>
            <Link
              href="https://www.instagram.com/RedLove"
              target="_blank"
              sx={{ mx: 1, color: "white" }}
            >
              <Instagram fontSize="large" />
            </Link>
          </Box>
        </Box> */}
      </Container>
    </Box>
  );
};

export default About;
