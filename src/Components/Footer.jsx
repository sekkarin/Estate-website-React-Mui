import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
      textAlign: "center",

    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"

    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7a7a7e",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000"
    }
  }));

  return <Box sx={{py:10}}>
    <CustomContainer>
      <CustomContainer>
        <Box>
          <Typography sx={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#1c1c1d",
            mb: 2
          }}>Products</Typography>
          <FooterLink>Listing</FooterLink>
          <br></br>
          <FooterLink>Properties</FooterLink>
          <br></br>
          <FooterLink>Agents</FooterLink>
          <br></br>
          <FooterLink>Blog</FooterLink>
          <br></br>
        </Box>
        <Box>
          <Typography sx={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#1c1c1d",
            mb: 2
          }}>Resources</Typography>
          <FooterLink>Out Homes</FooterLink>
          <br></br>
          <FooterLink>Stoies</FooterLink>
          <br></br>
          <FooterLink>Video</FooterLink>
          <br></br>
          <FooterLink>free Trial</FooterLink>
          <br></br>
        </Box>
        <Box>
          <Typography sx={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#1c1c1d",
            mb: 2
          }}>Get in touch</Typography>
          <Typography sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#7a7a7e",
            mb: 2
          }}>You'll find your next home, in any style you prefer</Typography>
          <IconBox>
            <img src={fbIcon} alt="fbicon" style={{cursor:"pointer"}}></img>
            <img src={twitterIcon} alt="fbicon" style={{cursor:"pointer"}}></img>
            <img src={linkedinIcon} alt="fbicon" style={{cursor:"pointer"}}></img>
          </IconBox>
        </Box>
      </CustomContainer>
    </CustomContainer>
  </Box>;
};

export default Footer;
