import { Box, Container, Grid } from "@mui/material";
import React from "react";
import "../filecss/Footer.css";
import img from "../images/logosocila/Twitter.png";
import img1 from "../images/logosocila/Instagram.png";
import img2 from "../images/logosocila/Facebook.png";
import img3 from "../images/logosocila/LinkedIN.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Footertop = () => {
  return (
    <Box sx={{ bgcolor: "#f2f2f2", position: "relative", height: "500px" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{}}>
            <Box
              sx={{
                color: "white",
                bgcolor: "#121823",
                mt: 10,
                width: "650px",
                padding: "50px",
                position: "absolute",
              }}
            >
              <Box sx={{ width: "600px" }}>
                <div className="div3">
                  <div className="div">
                    <div>
                      <input placeholder="FULL NAME" className="input"></input>
                    </div>
                    <div>
                      <input
                        placeholder="PHONE NUMBER"
                        className="input"
                      ></input>
                    </div>
                  </div>
                  <div className="div2">
                    <div>
                      <input
                        placeholder="EMAIL ADDRESS"
                        className="input"
                      ></input>
                    </div>
                    <div>
                      <input placeholder="SUBJECT" className="input"></input>
                    </div>
                  </div>
                  <div className="div4">
                    <input
                      placeholder="ANY SUGGESTION"
                      className="input1"
                    ></input>
                  </div>
                  <button className="btn">
                    SEND MESSAGE <ArrowForwardIcon sx={{ fontSize: "small" }} />{" "}
                  </button>
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ width: "600px", padding: "40px" }}>
              <Box
                sx={{
                  borderBottom: "2px solid gray",
                  textAlign: "start",
                  pl: 4,
                }}
              >
                <p className="textfooter">CONTACT US</p>
                <h1 className="headingfooter">
                  Contact us to request a quote today
                  <span className="span">.</span>
                </h1>
                <p>
                  Lorem ipsum dfjbvks sdkjhbsk dhbvsk kjdsbvks jhbsvk djhvsbkx
                  ksjdbvs ksdvb ks shd vk
                </p>
              </Box>
              <Box sx={{ width: "300px" }}>
                <div className="divx">
                  <div>
                    <PhoneInTalkIcon />
                  </div>
                  <div>
                    <p>+1012 3456 789</p>
                  </div>
                </div>
                <div className="divx">
                  <div>
                    <MailOutlineIcon />
                  </div>
                  <div>
                    <p>demo@gmail.com</p>
                  </div>
                </div>
                <div className="divx">
                  <div>
                    <LocationOnIcon />
                  </div>
                  <div>
                    <p>
                      132 Dartmouth Street Boston,Massachusetts 02156 United
                      States
                    </p>
                  </div>
                </div>
                <div className="divfoot">
                  <div>
                    <img src={img}></img>
                  </div>
                  <div>
                    <img src={img1}></img>
                  </div>
                  <div>
                    <img src={img2}></img>
                  </div>
                  <div>
                    <img src={img3}></img>
                  </div>
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
