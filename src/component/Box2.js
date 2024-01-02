import { Box, Container, Grid } from "@mui/material";
import React from "react";
import image from "../images/logopcc/iconcart.png";
import image1 from "../images/logopcc/iconcamera.png";
import image2 from "../images/logopcc/iconpen.png";
import "../filecss/Box2.css";

export const Box2 = () => {
  return (
    <>
      <Box sx={{ padding: "50px", bgcolor: "lightgray" }}>
        <Container maxWidth="xl">
          <Grid container spacing={12}>
            <Grid item xs={4}>
              <div className="divbox2">
                <div>
                  <img src={image}></img>
                </div>
                <div>
                  <p>
                    No matter what kind of home you<br></br> have to share, you
                    can increase.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="divbox2">
                <div>
                  <img src={image1}></img>
                </div>
                <div>
                  <p>
                    No matter what kind of home you<br></br> have to share, you
                    can increase.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="divbox2">
                <div>
                  <img src={image2}></img>
                </div>
                <div>
                  <p>
                    No matter what kind of home you<br></br> have to share, you
                    can increase.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
