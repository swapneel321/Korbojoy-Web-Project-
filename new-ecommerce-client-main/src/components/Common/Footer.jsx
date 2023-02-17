import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/register" || location.pathname === "/login") {
    return null;
  }
  return (
    <div>
      <div className="footer footer-2">
        <div className="main-footer">
          <div className="container">
            <div className="custom-row">
              <div className="custom-col-2">
                <div className="footer-about">
                  <div className="footer-logo">
                    <img src="/assets/images/Logo1.png" alt="Logo" />
                  </div>
                  <p>Got Question? Call us 24/7</p>
                  <ul>
                    <li>
                      <div className="icon">
                        <span>
                          <i className="flaticon-map" />
                        </span>
                      </div>
                      <div className="txt">
                        <span>101/B CHOWDHURIPARA MALIBAGH,DHAKA 1219</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span>
                          <i className="flaticon-email" />
                        </span>
                      </div>
                      <div className="txt">
                        <a href="mailto:info@example.com">pino@gmail.com</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span>
                          <i className="flaticon-telephone" />
                        </span>
                      </div>
                      <div className="txt">
                        <a href="tel:+123456679123">+8801789999751</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="custom-col-2">
                <div className="link-wrap">
                  <div className="footer-link">
                    <h3 className="footer-title">Information</h3>
                    <ul>
                      <li>
                        <NavLink to="/about">About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">Contact Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blog">Blogs</NavLink>
                      </li>
                      <li>
                        <NavLink to="/terms_condition">Terms Of Use</NavLink>
                      </li>
                      <li>
                        <NavLink to="/privacy">Privacy Policies</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-link">
                    <h3 className="footer-title">Information</h3>
                    <ul>
                      <li>
                        <NavLink to="/refund">Refund Policies</NavLink>
                      </li>
                      <li>
                        <NavLink to="/return">Return Policies</NavLink>
                      </li>
                      <li>
                        <a href="cart.html">My Order</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="footer-gallery">
                  <h3 className="footer-title">Instagram</h3>
                  <ul>
                    <li>
                      <a href="https://instagram.com/" target="_blank">
                        <img src="assets/images/gl-1.png" alt="image" />
                        <span>
                          <i className="fa-brands fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/" target="_blank">
                        <img src="assets/images/gl-2.png" alt="image" />
                        <span>
                          <i className="fa-brands fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/" target="_blank">
                        <img src="assets/images/gl-3.png" alt="image" />
                        <span>
                          <i className="fa-brands fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/" target="_blank">
                        <img src="assets/images/gl-4.png" alt="image" />
                        <span>
                          <i className="fa-brands fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/" target="_blank">
                        <img src="assets/images/gl-5.png" alt="image" />
                        <span>
                          <i className="fa-brands fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/" target="_blank">
                        <img src="assets/images/gl-6.png" alt="image" />
                        <span>
                          <i className="fa-brands fa-instagram" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="custom-col">
                <div className="footer-subscribe">
                  <h3 className="footer-title">Subscribe</h3>
                  <p>
                    Lorem ipsum dolor si consectetur adipisicing elit, sed
                    eiusmotempor incididunt ut labore et
                  </p>
                  <form>
                    <input type="email" name="email" placeholder="Your Email" />
                    <button type="submit">
                      <i className="fa-solid fa-paper-plane" />
                    </button>
                  </form>
                  <div className="btn-box">
                    <a href="#">
                      <img
                        src="assets/images/play-store.png"
                        alt="Play Store"
                      />
                    </a>
                    <a href="#">
                      <img src="assets/images/app-store.png" alt="App Store" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p>Copyright © 2023 Korbojoy All Right Reserved</p>
              </div>
              <div className="col-md-6">
                <div className="part-img d-flex justify-content-md-end justify-content-center">
                  <img
                    src="https://cdn3.arogga.com/public/img/payment-options.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
