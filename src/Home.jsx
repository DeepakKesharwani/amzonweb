import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Web from "..//src/images/img2.svg";
import Common from "./Common";

const Home = () => {
  return (
    <Fragment>
     <Common
        name="Grow your business with"
        imgsrc={Web}
        visit="/service"
        btnname="Get Started"
      />
    </Fragment>
  );
};
export default Home;
