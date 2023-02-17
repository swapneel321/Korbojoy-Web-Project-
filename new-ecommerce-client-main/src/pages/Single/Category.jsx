import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { add_item } from "../../redux/actions/cartAction";
import { setCategory } from "../../redux/actions/categoryAction";
import Feature from "../../components/Common/Feature";

import useScript from "../../components/Common/Reload";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Successfully add your item!");
const Category = () => {
  useScript("/assets/js/shop-page.js");

  let { id } = useParams();

  const category = useSelector((state) => state.allCategory.category);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get(`https://korbojoy-server.onrender.com/api/category/${id}`)
      .catch((err) => {});
    dispatch(setCategory(response.data.products));
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const price = category.map((pd) => pd.buyPrice);
  const handleSort = (e) => {
    // const sort = price.sort((a, b) => a - b);
    console.log("sss");
    e.preventDefault();
  };

  //cart

  const handleAddItem = (e) => {
    dispatch(add_item(e));
    notify();
  };
  return (
    <div>
      <div>
        <div className="banner banner-inner">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 col-md-9 col-8">
                <div className="breadcrumb-txt">
                  <h1>Shop Page</h1>
                  <ul>
                    <li>
                      <a href="index.html">
                        <i className="fa-regular fa-house" />
                      </a>
                    </li>
                    <li>/</li>
                    <li>Shop</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-3 col-4">
                <div className="part-img">
                  <img src="/assets/images/breadcrumb-img.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*------------------------------- BANNER SECTION END -------------------------------*/}
        {/*------------------------------- SHOP SECTION START -------------------------------*/}
        <div className="shop-wrap py-120">
          <div className="container">
            <div className="row g-4">
              <div className="col-xl-3 col-lg-4">
                <div className="shop-sidebar">
                  <div className="sidebar-box">
                    <h3 className="sidebar-title">By Category</h3>
                    <ul className="brand-filter" id="brandFilter">
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="brand1"
                          />
                          <label className="form-check-label" htmlFor="brand1">
                            <span className="name">Club JM</span>
                            <span>(90)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="brand2"
                          />
                          <label className="form-check-label" htmlFor="brand2">
                            <span className="name">EVANS21</span>
                            <span>(80)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="brand3"
                          />
                          <label className="form-check-label" htmlFor="brand3">
                            <span className="name">Espresso</span>
                            <span>(43)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="brand4"
                          />
                          <label className="form-check-label" htmlFor="brand4">
                            <span className="name">YOTIAN JAPAN</span>
                            <span>(97)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="brand5"
                          />
                          <label className="form-check-label" htmlFor="brand5">
                            <span className="name">ORCHID</span>
                            <span>(18)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="brand6"
                          />
                          <label className="form-check-label" htmlFor="brand6">
                            <span className="name">Pristik</span>
                            <span>(25)</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="sidebar-box">
                    <h3 className="sidebar-title">By Price</h3>
                    <div className="price-filter-wrap">
                      <div className="input-wrap">
                        <div className="input-group">
                          <span className="input-txt">$</span>
                          <input type="number" id="maxNumber" />
                        </div>
                        <div className="input-group">
                          <span className="input-txt">$</span>
                          <input type="number" id="minNumber" />
                        </div>
                      </div>
                      <div id="priceFilter" className="price-filter" />
                      <button id="filterPrice" className="def-btn">
                        Filter now
                      </button>
                    </div>
                  </div>
                  <div className="sidebar-box">
                    <h3 className="sidebar-title">Color</h3>
                    <ul className="brand-filter color-filter" id="colorFilter">
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="Black"
                          />
                          <label className="form-check-label" htmlFor="Black">
                            Black
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="Pink"
                          />
                          <label className="form-check-label" htmlFor="Pink">
                            Pink
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="White"
                          />
                          <label className="form-check-label" htmlFor="White">
                            White
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="Blue"
                          />
                          <label className="form-check-label" htmlFor="Blue">
                            Blue
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="Orange"
                          />
                          <label className="form-check-label" htmlFor="Orange">
                            Orange
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-box">
                    <div className="title-wrap">
                      <h3 className="sidebar-title">New Arrival</h3>
                      <div className="new-arrival-nav" />
                    </div>
                    <ul className="new-arrival-slider">
                      <li>
                        <div className="part-img">
                          <img
                            src="/assets/images/feat-product-1.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="part-txt">
                          <a href="shop-details.html" className="title">
                            Diamond wedding ring
                          </a>
                          <p className="price">
                            $195.00 <span>229.99</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="part-img">
                          <img
                            src="/assets/images/feat-product-1.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="part-txt">
                          <a href="shop-details.html" className="title">
                            Diamond wedding ring
                          </a>
                          <p className="price">
                            $195.00 <span>229.99</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="part-img">
                          <img
                            src="/assets/images/feat-product-1.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="part-txt">
                          <a href="shop-details.html" className="title">
                            Diamond wedding ring
                          </a>
                          <p className="price">
                            $195.00 <span>229.99</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="part-img">
                          <img
                            src="/assets/images/feat-product-2.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="part-txt">
                          <a href="shop-details.html" className="title">
                            Diamond wedding ring
                          </a>
                          <p className="price">
                            $195.00 <span>229.99</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="part-img">
                          <img
                            src="/assets/images/feat-product-3.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="part-txt">
                          <a href="shop-details.html" className="title">
                            Diamond wedding ring
                          </a>
                          <p className="price">
                            $195.00 <span>229.99</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="part-img">
                          <img
                            src="/assets/images/feat-product-4.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="part-txt">
                          <a href="shop-details.html" className="title">
                            Diamond wedding ring
                          </a>
                          <p className="price">
                            $195.00 <span>229.99</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-new-arrival">
                    <div className="part-img">
                      <img src="/assets/images/new-arrival-4.jpg" alt="Image" />
                    </div>
                    <div className="part-txt">
                      <p>Season Sale!</p>
                      <h3>New Arrivals</h3>
                      <a href="shop-details.html">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="shop-top-bar">
                  <div className="row align-items-center">
                    <div className="col-md-3 d-md-block d-none">
                      <h3 id="shopViewType">Shop Grid</h3>
                    </div>

                    <div className="col-md-9">
                      <div className="top-bar-right">
                        <select name="sorting" className="select">
                          <option value={0}>Default Sorting</option>
                          <option value={1}>Price (Low to heigh)</option>
                          <option value={2}>Price (Heigh to low)</option>
                          <option value={3}>Best match</option>
                          <option value={4}>Relevance</option>
                        </select>
                        <div className="show-wrap">
                          <span>Show:</span>
                          <select name="show" className="select">
                            <option value={1}>2</option>
                            <option value={2}>16</option>
                            <option value={3}>20</option>
                            <option value={4}>24</option>
                          </select>
                        </div>
                        <div className="view-wrap">
                          <button className="active" id="gridView">
                            <i className="flaticon-apps" />
                          </button>
                          <button id="listView">
                            <i className="flaticon-menu" />
                          </button>
                        </div>
                        <div className="top-pagination">
                          <input
                            type="number"
                            name="current"
                            id="currentPage"
                            defaultValue={1}
                            min={1}
                          />
                          <span>of 3</span>
                          <button>
                            <i className="fa-solid fa-right-long" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-lg-4 g-3">
                  {category.map((product) => {
                    return (
                      <div className="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                        <div className="single-product-card">
                          <div className="part-img">
                            <Link to={`/product/${product._id}`}>
                              <img
                                src={product.img[0]}
                                alt="Product"
                                style={{
                                  height: 250,
                                  width: 300,
                                  objectFit: "contain",
                                }}
                                className="img-fluid"
                              />
                            </Link>

                            <div className="cart-option cart-option-bottom">
                              <ul>
                                <li>
                                  <a
                                    role="button"
                                    className="add-to-cart"
                                    onClick={() => handleAddItem(product)}
                                  >
                                    <i className="fa-light fa-cart-shopping" />
                                  </a>
                                </li>
                                <li>
                                  <a role="button" className="add-to-wish">
                                    <i className="fa-light fa-heart" />
                                  </a>
                                </li>
                                <li>
                                  <a role="button" className="quick-view">
                                    <i className="fa-light fa-image" />
                                  </a>
                                </li>
                                <Link to={`/product/${product._id}`}>
                                  <li>
                                    <a className="view-product">
                                      <i className="fa-light fa-eye" />
                                    </a>
                                  </li>
                                </Link>
                              </ul>
                            </div>
                          </div>
                          <div className="part-txt">
                            <h4 className="product-name">
                              <a href="shop-details.html">
                                {product.name.slice(0, 70)}
                              </a>
                            </h4>
                            {/* <p className="dscr">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ducimus aliquid laborum aperiam dolores.
                            Dignissimos at harum corporis qui illo nam fugit
                            recusandae ratione odit neque officia, accusamus ab,
                            assumenda odio.
                          </p> */}
                            <p className="price">
                              <span>${product.realPrice}</span>$
                              {product.offerPrice}
                            </p>
                            <div className="star">
                              <i className="fa-solid fa-star-sharp rated" />
                              <i className="fa-solid fa-star-sharp rated" />
                              <i className="fa-solid fa-star-sharp rated" />
                              <i className="fa-solid fa-star-sharp rated" />
                              <i className="fa-solid fa-star-sharp" />
                            </div>
                            <button className="add-to-cart-btn">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bottom-pagination d-flex justify-content-center">
                  <ul>
                    <li>
                      <button>
                        <i className="fa-regular fa-angle-left" />
                      </button>
                    </li>
                    <li>
                      <button className="active">1</button>
                    </li>
                    <li>
                      <button>2</button>
                    </li>
                    <li>
                      <button>
                        <i className="fa-regular fa-angle-right" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*------------------------------- BANNER SECTION END -------------------------------*/}
        {/*------------------------------- SHOP SECTION START -------------------------------*/}

        {/*------------------------------- SHOP SECTION END -------------------------------*/}
        {/*------------------------------- FEATURES SECTION START -------------------------------*/}
        <Feature />
        <Toaster position="bottom-left" reverseOrder={false} />
        {/*------------------------------- FEATURES SECTION END -------------------------------*/}
        {/* Mirrored from revelecommerce.codebasket.net/revel/shop.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 17 Jan 2023 08:50:56 GMT */}
      </div>
    </div>
  );
};

export default Category;
