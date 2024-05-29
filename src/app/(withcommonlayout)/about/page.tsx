import React from "react";
import { Container, Typography, Box, Grid, Avatar, Link } from "@mui/material";
import {
  Email,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from "@mui/icons-material";

// Dummy team member data
const teamMembers = [
  {
    name: "Sheikh Emon",
    role: "Founder & CEO",
    image: "https://i.ibb.co/qdZLNck/emon2.jpg",
  },
  {
    name: "Abdul Halim",
    role: "Chief Technical Officer",
    image: "https://i.ibb.co/ydLSVCB/img1.jpg",
  },
  {
    name: "Foyej Choudhury",
    role: "Head of Marketing",
    image: "https://i.ibb.co/McJkxPC/img2.jpg",
  },
];

const About = () => {
  return (
    <Box
      sx={{
        // my: 10,
        py: 10,
        backgroundColor: "primary.main",
        clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%)",
      }}
    >
      <Container maxWidth="lg" sx={{ padding: "4rem 0" }}>
        <Box textAlign="center" mb={4}>
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
          <Box mb={4}>
            <Typography variant="h5" component="h2" gutterBottom>
              Meet Our Team
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box textAlign="center" p={2}>
                    <Avatar
                      alt={member.name}
                      src={member.image}
                      sx={{ width: 150, height: 150, margin: "0 auto" }}
                    />
                    <Typography variant="h6" component="h3" mt={2}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {member.role}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        <Box textAlign="center" mt={4}>
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
        </Box>
      </Container>
    </Box>
  );
};

export default About;
