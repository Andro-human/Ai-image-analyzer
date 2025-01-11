"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { Box, Typography } from "@mui/material";

export function WobbleCardDemo() {
  return (
    (<div
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
      <WobbleCard
        containerClassName=""
        className="">
         <Box
            sx={{
              display: "flex",
              marginBottom: "0.8rem",
            }}
          >
            <Typography variant="h4">1</Typography>
            <Typography
              variant="h5"
              sx={{
                margin: "1rem",
                fontWeight: "bold",
              }}
            >
              Upload Image
            </Typography>
          </Box>
          <Typography sx={{}}>
            Begin by selecting and uploading an image through our user-friendly
            interface. This image can be any photo or graphic that you want to
            analyze.
          </Typography>
      </WobbleCard>
      <WobbleCard containerClassName="">
      <Box
            sx={{
              display: "flex",
              marginBottom: "0.8rem",
            }}
          >
            <Typography variant="h4">2</Typography>
            <Typography
              variant="h5"
              sx={{
                margin: "1rem",
                fontWeight: "bold",
              }}
            >
              AI Analysis
            </Typography>
          </Box>
          <Typography sx={{}}>
            Once the image is uploaded, it is seamlessly passed to our
            AI-powered analysis engine. Utilizing the Gemini API, the image is
            processed and analyzed to extract meaningful insights.
          </Typography>
      </WobbleCard>
      <WobbleCard
        containerClassName="">
          <Box
            sx={{
              display: "flex",
              marginBottom: "0.8rem",
            }}
          >
            <Typography variant="h4">3</Typography>
            <Typography
              variant="h5"
              sx={{
                margin: "1rem",
                fontWeight: "bold",
              }}
            >
              Get Results
            </Typography>
          </Box>
          <Typography sx={{}}>
            Receive a comprehensive description of the image, along with related
            keywords and suggested questions for further exploration.
          </Typography>
      </WobbleCard>
    </div>)
  );
}
