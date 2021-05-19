import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Web from "..//src/images/hero-img.png";
import Common from "./Common";

const About = () => {
  return (
    <Fragment>
      <Common
        name="Welcome to About page"
        imgsrc={Web}
        visit="/contact"
        btnname="Contact Now"
      />
    </Fragment>
  );
};
export default About;
