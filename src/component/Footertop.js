import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
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
  const [transitionState, setTransitionState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTransitionState(true);
    }, 100);
  }, []);
  return (
    <Box
      sx={{
        bgcolor: "#f2f2f2",
        position: "relative",
        height: "640px",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ display: { xs: "flex" } }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "none", lg: "block" } }}
          >
            <Box
              sx={{
                color: "white",
                bgcolor: "#121823",
                mt: 10,
                width: "650px",
                padding: "50px",
                position: "absolute",
                // transform: `translateX(${transitionState ? "0px" : "1200px"})`,
                // transition: "transform 5s ease-in-out",
              }}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              // duration="5000"
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
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: { xs: "300px", md: "600px" },
                padding: "0px",
                ml: { xs: 0, md: 8 },
              }}
            >
              <Box
                sx={{
                  borderBottom: "2px solid gray",
                  textAlign: "start",
                  pr: { xs: 0, md: 10 },
                  width: { xs: "280px", md: "500px" },
                }}
              >
                <p className="textfooter">CONTACT US</p>
                <h1 className="headingfooter">
                  Contact us to request a quote today
                  <span className="span">.</span>
                </h1>
                <p className="textxfoot">
                  Lorem ipsum dfjbvks sdkjhbsk dhbvsk kjdsbvks jhbsvk djhvsbkx
                  ksjdbvs ksdvb ks shd vk
                </p>
              </Box>
              <Box sx={{ width: "300px", pr: 8, pt: 5 }}>
                <div className="divx">
                  <div>
                    <PhoneInTalkIcon />
                  </div>
                  <div className="footerdiv">
                    <p>+1012 3456 789</p>
                  </div>
                </div>
                <div className="divxx ">
                  <div>
                    <MailOutlineIcon />
                  </div>
                  <div className="footerdiv">
                    <p className="footerdivs">demo@gmail.com</p>
                  </div>
                </div>
                <div className="divxx">
                  <div>
                    <LocationOnIcon />
                  </div>
                  <div className="footerdiv">
                    <p className="footerdivxs">
                      132 Dartmouth Street Boston , Massachusetts 02156 United
                      States
                    </p>
                  </div>
                </div>
                <div className="divfoot">
                  <div>
                    <img src={img} className="imagesize"></img>
                  </div>
                  <div>
                    <img src={img1} className="imagesize"></img>
                  </div>
                  <div>
                    <img src={img2} className="imagesize"></img>
                  </div>
                  <div>
                    <img src={img3} className="imagesize"></img>
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
