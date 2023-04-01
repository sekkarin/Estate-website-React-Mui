import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import House from "./House";
import { properties } from "../properties";

const Properties = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    },
  }));

  return <Box sx={{ mt: 5, backgroundColor: "#f5fafe", py: 10 }}>
    <Container>
      <PropertiesTextBox>
        <Typography
          sx={{
            color: "#000339",
            fontSize: "35px",
            fontWeight: "bold"
          }}
        >
          Freatured Properties
        </Typography>
        <Typography
          sx={{
            color: "#5a6473", fontS
              : "16px", mt: 1
          }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem repellat doloremque quaerat?
        </Typography>
      </PropertiesTextBox>
      <PropertiesBox>
        {
          properties.map((property) => (
            <House key={property.id}
              img={property.img}
              price={property.price}
              address={property.address}
              bedrooms={property.bathrooms}
              bathrooms={property.bathrooms}
              space={property.space}
            >

            </House>
          ))
        }
      </PropertiesBox>
    </Container>
  </Box>;
};

export default Properties;
