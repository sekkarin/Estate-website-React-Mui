import { Box, styled, Typography } from "@mui/material";
import React from "react";
import bedroomsIcon from "../media/bedroomsIcon.png";
import bathroomsIcon from "../media/bathroomsIcon.png";
import spaceIcon from "../media/spaceIcon.png";

const House = ({ img, price, address, bedrooms, bathrooms, space }) => {
  const HouseBox = styled(Box)(({ theme }) => ({
    maxWidth: 350,
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: 'column',
    alignItems: "center"
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%"
  }));

  return <HouseBox>
    <ImgContainer>
      <img src={img} alt="housePhoto" style={{ maxWidth: "100%" }}></img>
    </ImgContainer>
    <Box sx={{ padding: "1rem" }}>
      <Typography sx={{ fontWeight: "700" }} variant={"body2"}>
        ${price}
      </Typography>
      <Typography sx={{ my: 2 }} variant={"body2"}>
        {address}
      </Typography>
      <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <InfoBox>
          <img src={bedroomsIcon} alt="bedrooms"></img>
          <Typography sx={{ mt: 1 }}>
            {bedrooms}
          </Typography>
        </InfoBox>
        <InfoBox>
          <img src={bathroomsIcon} alt="bathrooms"></img>
          <Typography sx={{ mt: 1 }}>
            {bathrooms}
          </Typography>
        </InfoBox>
        <InfoBox>
          <img src={spaceIcon} alt="space"></img>
          <Typography sx={{ mt: 1 }}>
            {space}
          </Typography>
        </InfoBox>
      </Typography>
    </Box>
  </HouseBox>;
};

export default House;
