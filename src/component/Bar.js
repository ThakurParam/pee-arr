import { Box, Container, Grid } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import "../filecss/Bar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import YouTubeIcon from "@mui/icons-material/YouTube";
import image from "../images/peearr.png";
export const Bar = () => {
  return (
    <>
      {/* <Box> */}
      {/* <Container maxWidth="lg"> */}
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={8}>
          <Grid item xs={3}>
            <img src={image}></img>
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <p className="text">Company overview</p>
              </Grid>
              <Grid item xs={2}>
                <p className="text">Business Verticals</p>
              </Grid>
              <Grid item xs={1}>
                <p className="text"> Products</p>
              </Grid>
              <Grid item xs={1}>
                <p className="text">Customers</p>
              </Grid>
              <Grid item xs={1}>
                <p className="text">Facilities</p>
              </Grid>
              <Grid item xs={1}>
                <p className="text">Quality</p>
              </Grid>
              <Grid item xs={1}>
                <p className="text">Blogs</p>
              </Grid>
              <Grid item xs={1}>
                <p className="text"> Career</p>
              </Grid>
              <Grid item xs={1}>
                <div>
                  <p className="contact">Contact us</p>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ bgcolor: "#ef7345", mt: 3, height: "50px" }}>
        <Grid container spacing={2} sx={{}}>
          <Grid item xs={4}>
            <Grid container spacing={0}>
              <Grid item xs={5} sx={{ color: "white", fontSize: "20px" }}>
                <p className="textbar">Have a question ?</p>
              </Grid>
              <Grid item xs={4} sx={{ color: "white", fontSize: "20px" }}>
                <div className="iconphone">
                  <div>
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="textbar">+91-98765434567</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} sx={{ borderLeft: "1px solid white" }}>
            {/* <div className="divtab"> */}
            <Grid container spacing={6}>
              <Grid item xs={3} sx={{ color: "white", fontSize: "20px" }}>
                <p className="textbar">Customer Care Helpline</p>
              </Grid>
              <Grid item xs={2} sx={{ color: "white", fontSize: "20px" }}>
                <div className="iconphone">
                  <div>
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="textbar">011-22331354</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={7} sx={{ justifyContent: "end" }}>
                <div></div>
                <div className="iconphone">
                  <div>{/* <LinkedInIcon /> */}</div>
                  <div>{/* <MailOutlineIcon /> */}</div>
                  <div>{/* <YouTubeIcon /> */}</div>
                </div>
              </Grid>
            </Grid>
            {/* </div> */}
          </Grid>
        </Grid>
      </Box>
      {/* </Container> */}
      {/* </Box> */}
    </>
  );
};
