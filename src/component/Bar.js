import {
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import "../filecss/Bar.css";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import YouTubeIcon from "@mui/icons-material/YouTube";
import image from "../images/peearr.png";

const drawerWidth = 240;

export const Bar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* <Box> */}
      <Container maxWidth="xl">
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={8}>
            <Grid item xs={3} md={3}>
              <img src={image}></img>
            </Grid>
            <Grid item xs={9} md={9}>
              <Box
                sx={{
                  display: { xs: "block", md: "none", lg: "none" },
                }}
              >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Toolbar sx={{ mr: "-65px" }}>
                    <IconButton
                      // color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      sx={{ mr: 2, display: { md: "none" } }}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Toolbar>
                  <Drawer
                    variant="temporary"
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                      display: { xs: "block", md: "none" },
                      "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                        bgcolor: "black",
                        color: "white",
                        // fontSize: 20,
                      },
                    }}
                  >
                    <List>
                      <ListItem button>
                        <ListItemText primary="Company Overview" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Products" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Customers" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Facilities" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Quality" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Blogs" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Careers" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Contact Us" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Business Verticals" />
                      </ListItem>
                    </List>
                  </Drawer>

                  <Toolbar />
                </div>
              </Box>
              <Grid
                container
                spacing={2}
                sx={{ display: { xs: "none", md: "none", lg: "inline-flex" } }}
              >
                <Grid item xs={2} md={2}>
                  <p className="text">Company overview</p>
                </Grid>
                <Grid item xs={2} md={2}>
                  <p className="text">Business Verticals</p>
                </Grid>
                <Grid item xs={1} md={1}>
                  <p className="text"> Products</p>
                </Grid>
                <Grid item xs={1} md={1}>
                  <p className="text">Customers</p>
                </Grid>
                <Grid item xs={1} md={1}>
                  <p className="text">Facilities</p>
                </Grid>
                <Grid item xs={1} md={1}>
                  <p className="text">Quality</p>
                </Grid>
                <Grid item xs={1} md={1}>
                  <p className="text">Blogs</p>
                </Grid>
                <Grid item xs={1} md={1}>
                  <p className="text"> Career</p>
                </Grid>
                <Grid item xs={2} md={2}>
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
            <Grid item xs={6} md={4} lg={4}>
              <Grid container spacing={0}>
                <Grid
                  item
                  xs={5}
                  md={5}
                  sx={{ color: "white", fontSize: "20px" }}
                >
                  <p className="textbar">Have a question ?</p>
                </Grid>
                <Grid
                  item
                  xs={4}
                  md={4}
                  sx={{ color: "white", fontSize: "20px" }}
                >
                  <div className="iconphone">
                    <div>
                      <PhoneIcon
                        sx={{
                          display: { xs: "none", md: "none", lg: "block" },
                          mt: "-5px",
                        }}
                      />
                    </div>
                    <div>
                      <p className="textbar">+91-98765434567</p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              md={8}
              lg={8}
              sx={{ borderLeft: "1px solid white" }}
            >
              {/* <div className="divtab"> */}
              <Grid container spacing={6}>
                <Grid
                  item
                  xs={6}
                  md={3}
                  lg={3}
                  sx={{ color: "white", fontSize: "20px" }}
                >
                  <p className="textbar">Customer Care Helpline</p>
                </Grid>
                <Grid item xs={6} md={3} lg={3} sx={{ color: "white" }}>
                  <div className="iconphone">
                    <div>
                      <PhoneIcon
                        sx={{
                          display: { xs: "none", md: "none", lg: "block" },
                          mt: "-5px",
                        }}
                      />
                    </div>
                    <div>
                      <p className="textbar">011-22331354</p>
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={7}
                  md={7}
                  lg={7}
                  sx={{
                    justifyContent: "end",
                    display: { xs: "none", md: "block", lg: "block" },
                  }}
                >
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
      </Container>
      {/* </Box> */}
    </>
  );
};
