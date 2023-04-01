import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import heroImg from "../media/hero_illustration.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: '#E6f0FF' }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography variant="body2" sx={{ fontsize: "18px", color: "#687690", fontWeight: '500', mt: 10, mb: 10 }}>
              Welcome to ......
            </Typography>
            <Title variant="h1">
              Discover a place where you'll love to live
            </Title>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, iusto!
            </Typography>
            <CustomButton backgroundColor={"#0F1B4c"}
              color="#fff"
              buttonText={"More About Us"}
              heroBtn={true}
            ></CustomButton>
          </Box>
          <Box sx={{flex:"1.25"}}>
            <img src={heroImg} alt="heroImg" style={{maxWidth:"100%",marginBottom:"2rem"}} />
          </Box>
        </CustomBox>
      </Container>
    </Box>);
};

export default Hero;
