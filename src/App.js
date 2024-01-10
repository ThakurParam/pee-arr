// import logo from "./logo.svg";

import { useEffect } from "react";
import "./App.css";
import { Bar } from "./component/Bar";
import { Blogs } from "./component/Blogs";

import { Box2 } from "./component/Box2";
import { Boxs } from "./component/Boxs";

import { Footer } from "./component/Footer";
import { Footertop } from "./component/Footertop";
import { News } from "./component/News";
import { Ourbrands } from "./component/Ourbrands";

import { Ourfeatures } from "./component/Ourfeatures";
import { Products } from "./component/Products";
import StarRating from "./component/StarRating";
import { Testimonials } from "./component/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "@mui/material";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Bar />
      <Boxs />
      <Box2 />
      <Ourfeatures />
      <Ourbrands />
      <Products />
      <News />
      <Testimonials />
      <Blogs />
      <Footertop />
      <Footer />

      {/* <StarRating /> */}
    </div>
  );
}

export default App;
