import { Box, Container, Grid } from "@mui/material";
import React from "react";
import image from "../images/windowimage.png";
import "../filecss/Blog.css";

export const Blogs = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#f9fafb",
          pt: 2,
          mb: 12,
        }}
      >
        <Container maxWidth="xl" sx={{ textAlign: "left" }}>
          <p className="headingb">Blogs</p>
          <h1 className="headingb0">Our Latest Blogs</h1>
          <p className="textb">
            Let's join our famous class, the knowledge provided will definitely
            be useful for you.
          </p>
          <Box sx={{ mt: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <div className="divvv">
                      <div className=" divb">
                        <img src={image} className="imageblogs"></img>
                      </div>
                      <div className="divtext">
                        <p className=" textb2">September 24, 2017</p>
                        <p className=" textb0">Title of the blog</p>
                        <p className=" textb1">
                          Unlock Insights and Inspiration from Our Satisfied
                          Customer's Feedback. Describe Their Candid Opinions
                          and Experiences,Fueling our Commitment to Excellence
                          and Continuous Improvement.
                        </p>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={6} sx={{ mt: 5 }}>
                  <div className="divvv">
                    <div className=" divb">
                      <img src={image} className="imageblogs"></img>
                    </div>
                    <div className="divtext">
                      <p className=" textb2">September 24, 2017</p>
                      <p className="textb0">Title of the blog</p>
                      <p className="textb1">
                        Unlock Insights and Inspiration from Our Satisfied
                        Customer's Feedback. Describe Their Candid Opinions and
                        Experiences,Fueling our Commitment to Excellence and
                        Continuous Improvement.
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <img src={image}></img>
                <p className=" textb2">September 24, 2017</p>
                <p className=" textb0">Title of the blog</p>
                <p className=" textb1">
                  Unlock Insights and Inspiration from Our Satisfied Customer's
                  Feedback. Describe Their Candid Opinions and
                  Experiences,Fueling our Commitment to Excellence and
                  Continuous Improvement.
                </p>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
