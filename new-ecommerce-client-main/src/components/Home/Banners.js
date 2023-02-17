import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Banner.css";
const Banners = () => {
  const [options, setOptions] = useState({
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  return (
    <div className="container">
      <OwlCarousel className="owl-theme" {...options}>
        <div
          className="item"
          style={{ background: "url(/assets/images/banner-slider-1.jpg)" }}
        >
          <div className="banner_text_part" style={{ height: 420 }}>
            <div className="text-white">
              <h4 className="mb-2">Laptop</h4>
              <h1 className="mt-4">The New-Experience Your Laptop</h1>
              <p className="mt-4">
                <span>$320.00</span> $295.00
              </p>
              <a href="shop-details.html" className="def-btn-3 mt-3">
                buy now
              </a>
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{ background: "url(/assets/images/banner-slider-2.jpg)" }}
        >
          <div className="banner_text_part" style={{ height: 420 }}>
            <div className="text-white">
              <h4 className="mb-2">Laptop</h4>
              <h1 className="mt-4">The New-Experience Your Laptop</h1>
              <p className="mt-4">
                <span>$320.00</span> $295.00
              </p>
              <a href="shop-details.html" className="def-btn-3 mt-3">
                buy now
              </a>
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{ background: "url(/assets/images/banner-slider-3.jpg)" }}
        >
          <div className="banner_text_part" style={{ height: 420 }}>
            <div className="text-white">
              <h4 className="mb-2">Laptop</h4>
              <h1 className="mt-4">The New-Experience Your Laptop</h1>
              <p className="mt-4">
                <span>$320.00</span> $295.00
              </p>
              <a href="shop-details.html" className="def-btn-3 mt-3">
                buy now
              </a>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Banners;
