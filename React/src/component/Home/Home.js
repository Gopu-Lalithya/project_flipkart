import React from "react";
import "./Home.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import HiddenBar from "./HiddenBar";
import Header from "./Header/Header";
import CategoryFields from "./CategoryFields/CategoryFields";
import Destination from "./Destination";
// import Coupon from "../Coupon/Coupon";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Coupon/> */}
      <div id="main" className="mywhite">
        <div className="responsive-search-bar" id="responsive-search-bar-id">
          <form className="d-flex" role="search" id="srch">
            <input
              className="form-control"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
              id="search"
            />
            <button className="btn btn-light" id="btn-search" type="button">
              <span>
                <i className="bi bi-search"></i>
              </span>
            </button>
          </form>
        </div>
        {/* <HiddenBar/> */}
        <Header />
        <CategoryFields />
        <Destination />
      </div>
      <Footer />
    </>
  );
};

export default Home;
