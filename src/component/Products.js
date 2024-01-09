import { Box, Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../filecss/Products.css";
import image from "../images/partsimage/fan.png";

export const Products = () => {
  // const [discState, setDiscState] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDiscState(true);
  //   }, 100);
  // }, []);
  return (
    <>
      <Box sx={{ pt: 3, pb: 5 }}>
        <p className="heading1 ">Products</p>
        <h1 className="heading0">Get Products For Every Need </h1>
        <p className="textproduct">
          We cater to the needs of all major Passenger Vechicle, Commercial
          Vechicle, Motorcycle & Scooter, Off-road
        </p>
        <p className="textproduct">
          Vechicle & Tier 1 Manufactures in India & Overseas.
        </p>
        <Container maxWidth="xl" sx={{ pt: 10 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={12}
              sx={
                {
                  // transform: `translateX(${discState ? "0px" : "1200px"})`,
                  // transition: "transform 5s ease-in-out",
                }
              }
              data-aos="fade-down-left"
              data-aos-duration="2000"
            >
              <Grid container spacing={7}>
                <Grid item xs={12} md={6} lg={3}>
                  <Paper
                    elevation={20}
                    sx={{
                      height: "300px",
                      borderRadius: "20px",
                    }}
                  >
                    <Box>
                      <img src={image} className="imageproduct"></img>
                    </Box>
                    <Box>
                      <p className="textsproduct">Brushed Axial Fan</p>
                      <p className="textxx">
                        $ 3,127.00{" "}
                        <span className="spanclass">For 1 Piece</span>
                      </p>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Paper
                    elevation={20}
                    sx={{
                      height: "300px",
                      borderRadius: "20px",
                    }}
                  >
                    <Box>
                      <img src={image} className="imageproduct"></img>
                    </Box>
                    <Box>
                      <p className="textsproduct">Brushed Axial Fan</p>
                      <p className="textxx">
                        $ 3,127.00{" "}
                        <span className="spanclass">For 1 Piece</span>
                      </p>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Paper
                    elevation={20}
                    sx={{
                      height: "300px",
                      borderRadius: "20px",
                    }}
                  >
                    <Box>
                      <img src={image} className="imageproduct"></img>
                    </Box>
                    <Box>
                      <p className="textsproduct">Brushed Axial Fan</p>
                      <p className="textxx">
                        $ 3,127.00{" "}
                        <span className="spanclass">For 1 Piece</span>
                      </p>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Paper
                    elevation={20}
                    sx={{
                      height: "300px",
                      borderRadius: "20px",
                    }}
                  >
                    <Box>
                      <img src={image} className="imageproduct"></img>
                    </Box>
                    <Box>
                      <p className="textsproduct">Brushed Axial Fan</p>
                      <p className="textxx">
                        $ 3,127.00{" "}
                        <span className="spanclass">For 1 Piece</span>
                      </p>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                mt: 8,
                display: { xs: "none", md: "block" },

                // transform: `translateX(${discState ? "0px" : "-1200px"})`,
                // transition: "transform 5s ease-in-out",
              }}
              data-aos="fade-down-right"
              data-aos-duration="3000"
            >
              <Grid container spacing={7}>
                <Grid item xs={3} md={3}>
                  <Paper
                    elevation={20}
                    sx={{
                      height: "300px",
                      borderRadius: "20px",
                    }}
                  >
                    <Box>
                      <img src={image} className="imageproduct"></img>
                    </Box>
                    <Box>
                      <p className="textsproduct">Brushed Axial Fan</p>
                      <p className="textxx">
                        $ 3,127.00{" "}
                        <span className="spanclass">For 1 Piece</span>
                      </p>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Paper
                    elevation={20}
                    sx={{
                      height: "300px",
                      borderRadius: "20px",
                    }}
                  >
                    <Box>
                      <img src={image} className="imageproduct"></img>
                    </Box>
                    <Box>
                      <p className="textsproduct">Brushed Axial Fan</p>
                      <p className="textxx">
                        $ 3,127.00{" "}
                        <span className="spanclass">For 1 Piece</span>
                      </p>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Paper
                    elevation={20}
                    sx={{
                      height: "300px",
                      borderRadius: "20px",
                    }}
                  >
                    <Box>
                      <img src={image} className="imageproduct"></img>
                    </Box>
                    <Box>
                      <p className="textsproduct">Brushed Axial Fan</p>
                      <p className="textxx">
                        $ 3,127.00{" "}
                        <span className="spanclass">For 1 Piece</span>
                      </p>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Paper
                    elevation={20}
                    sx={{
                      height: "300px",
                      borderRadius: "20px",
                    }}
                  >
                    <Box>
                      <img src={image} className="imageproduct"></img>
                    </Box>
                    <Box>
                      <p className="textsproduct">Brushed Axial Fan</p>
                      <p className="textxx">
                        $ 3,127.00{" "}
                        <span className="spanclass">For 1 Piece</span>
                      </p>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <button className="btun">EXPLORE MORE</button>
      </Box>
    </>
  );
};
