import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import "../filecss/Footer.css";
import footimage from "../images/name2.png";

export const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#121823", padding: "50px", marginTop: "70px" }}>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={8}
            sx={{ borderBottom: "1px solid gray", paddingBottom: "15px" }}
          >
            <Grid item xs={3} md={3} sx={{ textAlign: "left" }}>
              <img src={footimage}></img>
              <p className="textfoot">
                330,3rd Floor, Vipul Trade Centre, Sector-48,Sohna Road,Gurgaon,
                Haryana-122018
              </p>
            </Grid>
            <Grid item xs={2} md={2} sx={{ textAlign: "left" }}>
              <h5 className="heading">Resources</h5>
              <p className="foottext">Home</p>
              <p className="foottext">Company Overview</p>
              <p className="foottext">Business Verticals</p>
              <p className="foottext">Products</p>
            </Grid>
            <Grid item xs={3} md={3} sx={{ textAlign: "left" }}>
              <h5 className="heading">Other</h5>
              <p className="foottext">Customers</p>
              <p className="foottext">Facilities</p>
              <p className="foottext">Careers</p>
              <p className="foottext">Enterprise</p>
            </Grid>
            <Grid item xs={4} md={4} sx={{ textAlign: "left" }}>
              <h5 className="heading">Get Email Notifications</h5>
              <p className="foottext">
                Generate outside the box thinking with the possibility to target
                the low
              </p>
              <input
                className="inputmail"
                type="Email"
                placeholder="Enter email...."
              ></input>
              <button className="btnfooter">Submit</button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
