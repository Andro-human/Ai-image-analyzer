import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import MainContainer from "@/components/MainContainer";
import { Box } from "@mui/material";

const page = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
    <Header />
    <MainContainer />
    <HowItWorks />
    <Footer />
  </Box>
  );
};

export default page;
