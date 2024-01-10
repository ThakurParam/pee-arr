import { Box, Container, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import image from "../images/imageslide.png";
import "../filecss/News.css";

export const News = () => {
  const [newsState, setNewsState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setNewsState(true);
    }, 100);
  }, []);
  return (
    <>
      <Box
        sx={{
          bgcolor: "#f9fafb",
          mt: 10,
          // transform: `translateX(${newsState ? "0" : "1000px"})`,
          // transition: "transform 8s ease-in-out",
        }}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <Container maxWidth="xl" sx={{ textAlign: "start", padding: "0  px" }}>
          <p className="headingn">News</p>
          <h1 className="headingn0">News & Announcements</h1>
          <p className="textn">
            Let's join our famous class, the knowledge pprovided will definitely
            be useful for you.
          </p>
        </Container>
        <Container maxWidth="xl">
          <Swiper
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
            <SwiperSlide className="swipernews">
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 2,
                    width: { xs: "100%", md: "50%", lg: "30%" },
                    height: 500,
                    paddingBottom: "30px",
                    textAlign: "start",
                  },
                }}
              >
                <Paper>
                  <Box sx={{ height: "420px" }}>
                    <img src={image} className="imagenews"></img>
                  </Box>
                  <p className="textnews">12 june 2012</p>
                  <p className="textnews1">
                    here you'll get to know all the news about us{" "}
                  </p>
                </Paper>
                <Paper>
                  <Box sx={{ height: "420px" }}>
                    <img src={image} className="imagenews"></img>
                  </Box>
                  <p className="textnews">12 june 2012</p>
                  <p className="textnews1">
                    here you'll get to know all the news about us{" "}
                  </p>
                </Paper>
                <Paper
                // sx={{ display: { xs: "none", md: "none", lg: "block" } }}
                >
                  <Box
                    sx={{
                      height: "420px",
                    }}
                  >
                    <img src={image} className="imagenews"></img>
                  </Box>
                  <p className="textnews">12 june 2012</p>
                  <p className="textnews1">
                    here you'll get to know all the news about us{" "}
                  </p>
                </Paper>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 2,
                    width: 450,
                    height: 500,
                    paddingBottom: "30px",
                    textAlign: "start",
                  },
                }}
              >
                <Paper>
                  <Box sx={{ height: "420px" }}>
                    <img src={image} className="imagenews"></img>
                  </Box>
                  <p className="textnews">12 june 2012</p>
                  <p className="textnews1">
                    here you'll get to know all the news about us{" "}
                  </p>
                </Paper>
                <Paper>
                  <Box sx={{ height: "420px" }}>
                    <img src={image} className="imagenews"></img>
                  </Box>
                  <p className="textnews">12 june 2012</p>
                  <p className="textnews1">
                    here you'll get to know all the news about us{" "}
                  </p>
                </Paper>
                <Paper>
                  <Box sx={{ height: "420px" }}>
                    <img src={image} className="imagenews"></img>
                  </Box>
                  <p className="textnews">12 june 2012</p>
                  <p className="textnews1">
                    here you'll get to know all the news about us{" "}
                  </p>
                </Paper>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 2,
                    width: 450,
                    height: 500,
                    paddingBottom: "30px",
                    textAlign: "start",
                  },
                }}
              >
                <Paper>
                  <Box sx={{ height: "420px" }}>
                    <img src={image} className="imagenews"></img>
                  </Box>
                  <p className="textnews">12 june 2012</p>
                  <p className="textnews1">
                    here you'll get to know all the news about us{" "}
                  </p>
                </Paper>
                <Paper>
                  <Box sx={{ height: "420px" }}>
                    <img src={image} className="imagenews"></img>
                  </Box>
                  <p className="textnews">12 june 2012</p>
                  <p className="textnews1">
                    here you'll get to know all the news about us{" "}
                  </p>
                </Paper>
                <Paper>
                  <Box sx={{ height: "420px" }}>
                    <img src={image} className="imagenews"></img>
                  </Box>
                  <p className="textnews">12 june 2012</p>
                  <p className="textnews1">
                    here you'll get to know all the news about us{" "}
                  </p>
                </Paper>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 2,
                    width: 450,
                    height: 500,
                    paddingBottom: "30px",
                    textAlign: "start",
                  },
                }}
              >
                <Paper>
                  <Box sx={{ height: "420px" }}>
                    <img src={image} className="imagenews"></img>
                  </Box>
                  <p className="textnews">12 june 2012</p>
                  <p className="textnews1">
                    here you'll get to know all the news about us{" "}
                  </p>
                </Paper>
                <Paper>
                  <Box sx={{ height: "420px" }}>
                    <img src={image} className="imagenews"></img>
                  </Box>
                  <p className="textnews">12 june 2012</p>
                  <p className="textnews1">
                    here you'll get to know all the news about us{" "}
                  </p>
                </Paper>
                <Paper>
                  <Box sx={{ height: "420px" }}>
                    <img src={image} className="imagenews"></img>
                  </Box>
                  <p className="textnews">12 june 2012</p>
                  <p className="textnews1">
                    here you'll get to know all the news about us{" "}
                  </p>
                </Paper>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Container>
      </Box>
    </>
  );
};
