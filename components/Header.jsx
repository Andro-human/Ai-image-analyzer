'use client'

import { SignedIn, SignedOut, SignInButton, UserButton, RedirectToSignIn } from "@clerk/nextjs";
import { Avatar, Box, Button, Link, Typography } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "4rem",
        backgroundColor: "#ffffff",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "1rem",
          alignItems: "center",
        }}
      >
        <Avatar
          src="/assets/analysis.png"
          alt="Logo"
          sx={{ marginRight: "10px" }}
        />
        <Typography
          variant="h6"
          sx={{
            color: "#0077b6",
            fontWeight: "bold",
            backgroundColor: "#ffffff",
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
            },
          }}
        >
          Image Analyzer
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}></Box>
      <Box
        sx={{
          margin: {
            xs: "0",
            sm: "1rem",
          },
        }}
      >
        <Link
          sx={{
            cursor: "pointer",
            textDecoration: "none",
            margin: {
              xs: "0",
              sm: "0.6rem",
            },
            fontSize: {
              xs: "0.9rem",
              sm: "1.2rem",
            },
            "&:hover": {
              color: "#0056a0", // Color on hover
            },
          }}
          href="#"
        >
          Home
        </Link>
        <Link
          sx={{
            cursor: "pointer",
            textDecoration: "none",
            margin: "0.6rem",
            fontSize: {
              xs: "0.9rem",
              sm: "1.2rem",
            },
            "&:hover": {
              color: "#0056a0", // Color on hover
            },
          }}
          href="#how-it-works"
        >
          How It Works
        </Link>
      </Box>
      <Box
        sx={{
          marginRight: {
            xs: "0",
            sm: "1rem",
          },
        }}
      >
        <SignedIn>
          {/* If user is signed in, show UserButton */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* If user is signed out, show SignInButton */}
          <Button
            variant="contained"
            onClick={() => setOpenSignup(true)}
            sx={{
              color: "#fff", // Text color
              fontSize: "16px",
              borderRadius: "30px", // Rounded corners
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", 
              textTransform: "none", // Preserve the text case
              "&:hover": {
                backgroundColor: "#3700b3", // Darker color on hover
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.2)", // Larger shadow on hover
              },
              "&:active": {
                backgroundColor: "#03dac5", // Color change on click
              },
              transition: "all 0.3s ease-in-out", // Smooth transition for all states
            }}
          >
            Sign in
          </Button>
        </SignedOut>
      </Box>
      {openSignup &&
      <RedirectToSignIn />
      }
    </Box>

  );
};

export default Header;
