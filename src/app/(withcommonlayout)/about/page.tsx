import React from "react";
import { Container, Typography, Box, Grid, Avatar } from "@mui/material";

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
    <Container maxWidth="lg" sx={{ padding: "4rem 0" }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About RedLove
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="primary">
          {"Give Blood, Save Lives. Spread the Love"}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          component="p"
          paragraph
        >
          RedLove is dedicated to connecting generous blood donors with those in
          critical need of blood transfusions. Our mission is to create a world
          where no one has to worry about finding the blood they need during
          emergencies. We believe in the power of community and compassion to
          make a significant impact on lives.
        </Typography>
      </Box>

      {teamMembers.length > 0 && (
        <Box>
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
    </Container>
  );
};

export default About;
