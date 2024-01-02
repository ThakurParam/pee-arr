import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";
import "../filecss/Products.css";
import image from "../images/partsimage/fan.png";

export const Products = () => {
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
          {" "}
          Vechicle & Tier 1 Manufactures in India & Overseas.
        </p>
        <Container maxWidth="xl" sx={{ pt: 10 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={7}>
                <Grid item xs={3}>
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
                <Grid item xs={3}>
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
                <Grid item xs={3}>
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
                <Grid item xs={3}>
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
            <Grid item xs={12} sx={{ mt: 8 }}>
              <Grid container spacing={7}>
                <Grid item xs={3}>
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
                <Grid item xs={3}>
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
                <Grid item xs={3}>
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
                <Grid item xs={3}>
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