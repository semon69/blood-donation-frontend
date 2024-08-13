import React from "react";
import { Container, Grid, IconButton, Button } from "@mui/material";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ExtraNavbar = () => {
  return (
    <div className="bg-black text-white">
      <Container className="py-3">
        <Grid container spacing={0}>
          {/* First Grid: Black Background */}
          <Grid
            item
            xs={8}
            className="flex justify-between items-center bg-black p-3"
          >
            <div className="flex items-center space-x-2">
              <PhoneIcon />
              <span>+8801817855902</span>
            </div>
            <div className="flex items-center space-x-2">
              <EmailIcon />
              <span>contact@redlove.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <LocationOnIcon />
              <span>1260 Uttara, Dhaka, Bangladesh</span>
            </div>
          </Grid>

          {/* Second Grid: Red Background */}
          <Grid
            item
            xs={4}
            className="flex justify-between items-center  p-3"
            style={{
              backgroundColor: "#F01C0B",
            }}
          >
            <button color="inherit" className="bg-black px-3 py-2 rounded">
              Follow Now
            </button>
            <IconButton color="inherit">
              <FaFacebookF />
            </IconButton>
            <IconButton color="inherit">
              <FaTwitter />
            </IconButton>
            <IconButton color="inherit">
              <FaInstagram />
            </IconButton>
            <IconButton color="inherit">
              <FaPinterestP />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ExtraNavbar;
