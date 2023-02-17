import React from "react";
import Feature from "../../components/Common/Feature";
import useScript from "../../components/Common/Reload";
import Banner from "../../components/Home/Banner";

import Blog from "../../components/Home/Blog";
import Category from "../../components/Home/Category";
import FeaturedProducts from "../../components/Home/FeaturedProducts";

const Home = () => {
  useScript("/assets/js/main.js");
  return (
    <div>
      {/* <Banners /> */}
      <Banner />
      {/*------------------------------- POPULAR CATEGORIES SECTION START -------------------------------*/}

      {/*------------------------------- POPULAR CATEGORIES SECTION END -------------------------------*/}
      <Category />

      {/*------------------------------- FEATURED PRODUCT SECTION START -------------------------------*/}
      <FeaturedProducts />
      {/*------------------------------- FEATURED PRODUCT SECTION END -------------------------------*/}
      {/*------------------------------- SUBSCRIBE SECTION START -------------------------------*/}
      <div className="subscribe py-25">
        <div className="container">
          <div className="bg">
            <div className="heading text-center">
              <h2>Subscribe Our Newsletter</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <form className="form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Here..."
                  />
                  <button type="submit" className="def-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------- SUBSCRIBE SECTION END -------------------------------*/}

      <Blog />

      {/*------------------------------- FEATURES SECTION START -------------------------------*/}
      <Feature />
      {/*------------------------------- FEATURES SECTION END -------------------------------*/}
    </div>
  );
};

export default Home;
