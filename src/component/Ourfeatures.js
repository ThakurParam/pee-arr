import { Box, Container, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../filecss/Our.css";
import loogo from "../images/frame/Frame 390.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const Ourfeatures = () => {
  const [hoveredState, setHoveredState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHoveredState(true);
    }, 100);
  }, []);
  const paperStyle = {
    backgroundColor: "#ef7345",
  };
  return (
    <>
      <Box
        sx={{
          pt: 10,
        }}
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <Container maxWidth="xl">
          <h6 className="headingtop">Our Features</h6>
          <h1 className="headingfeature">Our Core Features</h1>
          <p className="headingtext">
            we cater to the needs of all major Passenger vechile, Commercial
            Vechicle, Motorcycle & Scooter, Off-road
          </p>
          <p className="headingtext">
            Vechicle & Tier 1 Manufactures in India and Overseas.
          </p>
          <Box sx={{ bgcolor: "#f9f9f9", mt: 10 }}>
            <Swiper
              className="swiper"
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              // navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 380,
                      height: 250,
                    },
                    padding: "70px",
                    paddingLeft: { xs: "0px", md: "0px", lg: "80px" },
                    paddingRight: { xs: "0px", md: "0px", lg: "40px" },
                    justifyContent: "space-around",
                    // borderRadius: "20px",
                  }}
                >
                  <Paper style={paperStyle}>
                    <Box sx={{ mt: 3, ml: 5 }}>
                      <div className="divour">
                        <div>
                          <img src={loogo}></img>
                        </div>
                        <div className="textours">
                          <p>Lorem Ipsum</p>
                        </div>
                      </div>
                    </Box>
                    <Box sx={{ mt: 3, pr: 7, pl: 4 }}>
                      <p className="textour">
                        Lessons on design that cover the most recent
                        developments.
                      </p>
                    </Box>
                    <Box sx={{ textAlign: "start", ml: 5 }}>
                      <button className="btn-our">Learn more </button>
                    </Box>
                  </Paper>
                  <Paper>hello</Paper>
                  <Paper>hello</Paper>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 380,
                      height: 250,
                    },
                    padding: "70px",
                    paddingLeft: "80px",
                    paddingRight: "40px",
                    justifyContent: "space-around",
                  }}
                >
                  <Paper style={paperStyle}>hello</Paper>
                  <Paper>hello</Paper>
                  <Paper>hello</Paper>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 380,
                      height: 250,
                    },
                    padding: "70px",
                    paddingLeft: "80px",
                    paddingRight: "40px",
                    justifyContent: "space-around",
                  }}
                >
                  <Paper style={paperStyle}>hello</Paper>
                  <Paper>hello</Paper>
                  <Paper>hello</Paper>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 380,
                      height: 250,
                    },
                    padding: "70px",
                    paddingLeft: "80px",
                    paddingRight: "40px",
                    justifyContent: "space-around",
                  }}
                >
                  <Paper style={paperStyle}>hello</Paper>
                  <Paper>hello</Paper>
                  <Paper>hello</Paper>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Container>
      </Box>
    </>
  );
};
