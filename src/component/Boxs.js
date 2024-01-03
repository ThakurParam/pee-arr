import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";
import img from "../images/box/Group 518.png";
import img1 from "../images/box/Briefcase.png";
import img2 from "../images/box/idea.png";
import imagebox from "../images/boxsideimage.png";
import logo from "../images/icon/Progress circle.png";
import logo1 from "../images/icon/icon.png";
import logo2 from "../images/icon/icon-1.png";
import { DisplaySettings } from "@mui/icons-material";

export const Boxs = () => {
  const Imageurl = 'url("")';
  return (
    <>
      <Box sx={{ backgroundImage: Imageurl }}>
        <Container maxWidth="xl" sx={{ padding: "20px" }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              md={6}
              sx={{
                // border: "2px solid gray",
                textAlign: "left",
                pr: 12,
              }}
            >
              <h1 className="headingbox">Your Trusted Car Parts Store</h1>
              <p className="textxbox">
                here you'll find your car parts here at the pee-arr store .here
                you'll get the all the needs parts of your Vechicle
              </p>
              <button className="btn-box">Explore More</button>
              <div className="divbox">
                <div className="divbox3">
                  <div>
                    <img src={img}></img>
                  </div>
                  <div>
                    <p className="textbox">Lorem Ipsum</p>
                  </div>
                </div>
                <div className="divbox3">
                  <div>
                    <img src={img1}></img>
                  </div>
                  <div>
                    <p className="textbox">Lorem Ipsum</p>
                  </div>
                </div>
                <div className="divbox3">
                  <div>
                    <img src={img2}></img>
                  </div>
                  <div>
                    <p className="textbox">Lorem Ipsum</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              sx={{
                // border: "2px solid gray",
                position: "relative",
              }}
            >
              <Paper
                sx={{
                  position: "absolute",
                  mt: 1,
                  right: 30,
                  padding: 2,
                  borderRadius: "20px",
                  border: " 1px solid #ef7345",
                }}
              >
                <Box>
                  <img src={logo}></img>
                </Box>
                <p className="texticon"> 5K+</p>
                <p className="texticon1">Online user</p>
              </Paper>
              <Paper
                sx={{
                  height: "70px",
                  width: "180px",
                  padding: "10px",
                  left: 0,
                  mt: 28,
                  position: "absolute",
                  borderRadius: "20px",
                  border: " 1px solid #ef7345",
                }}
              >
                <div className="icondiv">
                  <div>
                    <img src={logo1} className="imagediv"></img>
                  </div>
                  <div className="icondiv2">
                    <p className="texticon">MARI</p>
                    <p className="texticon1">Auto Parts</p>
                  </div>
                </div>
              </Paper>

              <img src={imagebox} className="imagebox"></img>
              <Paper
                sx={{
                  height: "65px",
                  width: "170px",
                  padding: "10px",
                  right: 30,
                  bottom: 30,
                  position: "absolute",
                  borderRadius: "20px",
                  border: " 1px solid #ef7345",
                }}
              >
                <div className="icondiv">
                  <div>
                    <img src={logo2} className="imagediv"></img>
                  </div>
                  <div className="icondiv3">
                    <p className="texticon2         ">Parts</p>
                    <p className="texticon3">150+</p>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
