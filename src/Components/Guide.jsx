import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";

import buyIcon from "../media/buy_icon.png";
import sellIcon from "../media/sell_icon.png";
import rentIcon from "../media/rent_icon.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "./CustomButton";

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginBottom:theme.spacing(5),
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      // width:"100%"
      // display:"column"
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          background: "#000339",
          margin: "0 auto",
        }}
      ></div>
      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        How it wordks?
      </Typography>
      <CustomBox>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5a6473",
            textAlign: "center",
          }}
          variant="body2"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          similique excepturi repudiandae, enim fugit minima?
        </Typography>
      </CustomBox>
      <GuidesBox>
        <GuideBox>
          <img src={sellIcon} alt="buyIcon"></img>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3b3c45",
              my: 1,
            }}
          >
            Buying Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689ff" }}
            >
              How to rent
            </Typography>
            <ArrowRightAltIcon style={{ color: "#0689ff" }}></ArrowRightAltIcon>
          </Box>
        </GuideBox>
        <GuideBox>
          <img src={rentIcon} alt="buyIcon"></img>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3b3c45",
              my: 1,
            }}
          >
            Renting Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689ff" }}
            >
              How to Renting
            </Typography>
            <ArrowRightAltIcon style={{ color: "#0689ff" }}></ArrowRightAltIcon>
          </Box>
        </GuideBox>
        <GuideBox>
          <img src={buyIcon} alt="buyIcon"></img>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3b3c45",
              my: 1,
            }}
          >
            Selling Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689ff" }}
            >
              How to sell
            </Typography>
            <ArrowRightAltIcon style={{ color: "#0689ff" }}></ArrowRightAltIcon>
          </Box>
        </GuideBox>
      </GuidesBox>
      <CustomButton
        backgroundColor="#0f1b4c"
        color={"#fff"}
        buttonText="See Full Guides"
        guideBtn={true}></CustomButton>
    </Box>
  );
};

export default Guide;
