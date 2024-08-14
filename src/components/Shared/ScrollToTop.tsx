"use client"

import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import { KeyboardArrowUp as ArrowUpIcon } from "@mui/icons-material";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fab
      color="primary"
      size="small"
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        display: showButton ? "flex" : "none",
        backgroundColor: "white",
        border: "2px solid red",
      }}
    >
      <ArrowUpIcon sx={{ color: "red" }} />
    </Fab>
  );
};

export default ScrollToTop;
