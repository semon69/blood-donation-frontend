"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Box, Grid, Typography } from "@mui/material";
import { FaMedal, FaHeartbeat, FaTrophy, FaUsers } from "react-icons/fa";
import Image from "next/image";

const CountableSection = () => {
  const { ref, inView } = useInView({
    // triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Animation starts when 50% of the section is in view
  });

  return (
    <Box
      ref={ref}
      sx={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/hand-with-pills-dark-environment_23-2151459269.jpg?t=st=1723624717~exp=1723628317~hmac=9d6d912d6ad0f7f842271d14e91dd38eedeabda18d86f6a3453fe66a8fd07338&w=740')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px 0",
        textAlign: "center",
        color: "white",
      }}
    >
      <Grid
        container
        spacing={4}
        maxWidth={"lg"}
        sx={{
          margin: "auto",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "& > *": { mb: 1 },
          }}
        >
          <Image
            src="https://i.ibb.co/NjsDYRc/c1.png"
            alt="img"
            height={50}
            width={50}
          />
          <Typography variant="h3">
            {inView && <CountUp start={0} end={3} duration={2} />}
          </Typography>
          <Typography variant="body1" color={"white"} fontSize={25}>
            Year Experience
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "& > *": { mb: 1 },
          }}
        >
          <Image
            src="https://i.ibb.co/Mh8Nbhw/c2.png"
            alt="img"
            height={50}
            width={50}
          />
          <Typography variant="h3">
            {inView && <CountUp start={0} end={412} duration={3} />}
          </Typography>
          <Typography variant="body1" color={"white"} fontSize={25}>
            Happy Donors
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "& > *": { mb: 1 },
          }}
        >
          {/* <FaTrophy size={40} color="red" /> */}
          <Image
            src="https://i.ibb.co/m5PfZRq/c3.png"
            alt="img"
            height={50}
            width={50}
          />
          <Typography variant="h3">
            {inView && <CountUp start={0} end={11} duration={2.5} />}
          </Typography>
          <Typography variant="body1" color={"white"} fontSize={25}>
            Total Awards
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "& > *": { mb: 1 },
          }}
        >
          {/* <FaUsers size={40} color="red" /> */}
          <Image
            src="https://i.ibb.co/kXJvmSJ/c4.png"
            alt="img"
            height={50}
            width={50}
          />
          <Typography variant="h3">
            {inView && <CountUp start={0} end={405} duration={3} />}
          </Typography>
          <Typography variant="body1" color={"white"} fontSize={25}>
            Happy Recipients
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CountableSection;
