import { Box, Container, Grid } from "@mui/material";
import React from "react";
import img0 from "../images/name/protone.png";
import img1 from "../images/name/party.png";
import img2 from "../images/name/percy.png";
import img3 from "../images/name/rancher.png";
import img4 from "../images/name/mapzen.png";

export const Ourbrands = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#f9fafb",
          paddingBottom: "100px",
          paddingTop: "10px",
          mt: 15,
        }}
      >
        <Container maxWidth="xl" sx={{ textAlign: "start" }}>
          <Box sx={{ borderBottom: "1px solid gray", pb: 3 }}>
            <h6 className="headingtop">Our Brands</h6>
            <h1 className="headingfeature">Partners & Affiliates</h1>
            <p>
              Let's join our famous class, the knowledge provided will
              definitely be useful for you.
            </p>
          </Box>
          <Box>
            <Grid container spacing={2} sx={{ paddingTop: "70px" }}>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    justifyContent: "space-around",
                  }}
                >
                  <Grid item xs={2}>
                    <img src={img0}></img>
                  </Grid>
                  <Grid item xs={2}>
                    <img src={img1}></img>
                  </Grid>
                  <Grid item xs={2}>
                    <img src={img2}></img>
                  </Grid>
                  <Grid item xs={2}>
                    <img src={img3}></img>
                  </Grid>
                  <Grid item xs={2}>
                    <img src={img4}></img>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    justifyContent: "space-around",
                    paddingTop: "40px",
                  }}
                >
                  <Grid item xs={2}>
                    <img src={img0}></img>
                  </Grid>
                  <Grid item xs={2}>
                    <img src={img1}></img>
                  </Grid>
                  <Grid item xs={2}>
                    <img src={img2}></img>
                  </Grid>
                  <Grid item xs={2}>
                    <img src={img3}></img>
                  </Grid>
                  <Grid item xs={2}>
                    <img src={img4}></img>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
