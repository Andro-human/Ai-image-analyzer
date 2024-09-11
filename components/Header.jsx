import { Avatar, Box, Link, Typography } from "@mui/material";
const Header = () => {
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
          backgroundColor: "inherit"
        }}
      >
        <Avatar
          src="/assets/analysis.png"
          alt="Logo"
          sx={{ marginRight: "10px" }}
        />
        <Typography variant="h6" sx={{ color: "#0077b6", fontWeight: "bold", backgroundColor: "#ffffff"}}>
          Image Analyzer
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}></Box>
      <Box sx={{margin: "1rem",  backgroundColor: "inherit"}}>
        <Link
          sx={{
            cursor: "pointer",
            textDecoration: "none",
            margin: "0.6rem",
            fontSize: "1.2rem",
            backgroundColor: "inherit"
          }}
        >
          Home
        </Link>
        <Link
          sx={{
            cursor: "pointer",
            textDecoration: "none",
            margin: "0.6rem",
            fontSize: "1.2em",
            backgroundColor: "inherit"
          }}
        >
          How It Works
        </Link>
        <Link
          sx={{
            cursor: "pointer",
            textDecoration: "none",
            margin: "0.6rem",
            fontSize: "1.2rem",
            backgroundColor: "inherit"
          }}
        >
          Features
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
