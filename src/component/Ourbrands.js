import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import img0 from "../images/name/protone.png";
import img1 from "../images/name/party.png";
import img2 from "../images/name/percy.png";
import img3 from "../images/name/rancher.png";
import img4 from "../images/name/mapzen.png";
import { X } from "@mui/icons-material";

export const Ourbrands = () => {
  const [transitionState, setTransitionState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTransitionState(true);
    }, 100);
  }, []);
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
              <Grid item xs={12} md={12}>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    textAlign: { xs: "center", md: "center" },
                    // ml: {
                    //   xs: { textAlign: "center" },
                    //   md: { textAlign: "center" },
                    // },
                    justifyContent: "space-around",
                    transform: `translateX(${
                      transitionState ? "0" : "-800px"
                    })`,
                    transition: "transform 2s ease-in-out",
                  }}
                >
                  <Grid item xs={12} md={2}>
                    <img src={img0}></img>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={2}
                    sx={{
                      mt: { xs: 2, md: 2 },
                    }}
                  >
                    <img src={img1}></img>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={2}
                    sx={{
                      mt: { xs: 5, md: 5 },
                    }}
                  >
                    <img src={img2}></img>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={2}
                    sx={{
                      mt: { xs: 5, md: 5 },
                    }}
                  >
                    <img src={img3}></img>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={2}
                    sx={{
                      mt: { xs: 5, md: 5 },
                    }}
                  >
                    <img src={img4}></img>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{
                    justifyContent: "space-around",
                    paddingTop: "40px",
                    transform: `translateX(${
                      transitionState ? "0" : "1000px"
                    })`,
                    transition: "transform 2s ease-in-out",
                  }}
                >
                  <Grid item xs={2} md={2}>
                    <img src={img0}></img>
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <img src={img1}></img>
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <img src={img2}></img>
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <img src={img3}></img>
                  </Grid>
                  <Grid item xs={2} md={2}>
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
