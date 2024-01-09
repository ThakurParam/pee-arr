import { Box, Container, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import img from "../images/Avatar.png";
import "../filecss/Testimonial.css";
import StarRating from "./StarRating";

export const Testimonials = () => {
  const [hoveredState, setHoveredState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHoveredState(true);
    }, 100);
  }, []);
  return (
    <>
      <Box
        sx={{
          pt: 5,
          mt: 5,

          // scale: hoveredState ? "" : "0.2",
          // transition: "all ease 5s",
        }}
        data-aos="flip-down"
      >
        <p className="headingt">Testimonials</p>
        <h1 className="headingt0">What Our Customer Says</h1>
        <p className="textt">
          We cater to the needs of all major Passenger Vechicle, Commercial
          Vechicle, Motorcycle & Scooter, Off-road
        </p>
        <Box sx={{ mt: 12, mb: 15 }}>
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 2,
                  width: 400,
                  height: 200,
                  //   justifyContent: "space-between",
                  padding: "25px",
                  bgcolor: "#f9fafb",
                },
              }}
            >
              <Paper>
                <Box sx={{ textAlign: "start" }}>
                  <StarRating />
                </Box>
                <Box sx={{ textAlign: "start" }}>
                  <p className="texttt">
                    I could probably go into sales for you. The service was
                    excellent. The service was excellent. Wow, Great Job, i'll
                    be ordering again!
                  </p>
                </Box>
                <Box sx={{ paddingTop: "15px" }}>
                  <div className="divtab">
                    <div>
                      <img src={img}></img>
                    </div>
                    <div>
                      <p className="text00">Morgan John</p>
                      <p className="text000">Manager</p>
                    </div>
                  </div>
                </Box>
              </Paper>
              <Paper></Paper>
              <Paper></Paper>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};
