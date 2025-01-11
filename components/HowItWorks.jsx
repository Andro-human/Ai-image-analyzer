"use client"
import { Box, Card, Typography } from "@mui/material";
import { WobbleCardDemo } from "./WobbleCard";
import { TextGenerateEffectDemo } from "./TextEffect";
import { useState, useEffect } from "react";
const HowItWorks = () => {
   const [showText, setShowText] = useState(false);
  useEffect(() => {
    // Delay the rendering of WobbleCardDemo by 2 seconds
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <Box
      id="how-it-works"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box sx={{marginBottom: "1rem"}}>
     {showText && <TextGenerateEffectDemo />}
     </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          width: "80%",
          justifyContent: "center",
        }}
      >
        <WobbleCardDemo />
      </Box>
    </Box>
  );
};

export default HowItWorks;
