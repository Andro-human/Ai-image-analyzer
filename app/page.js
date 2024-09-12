import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import { Box } from "@mui/material";

const page = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
    <Header />
    <MainContainer />
  </Box>
  );
};

export default page;
