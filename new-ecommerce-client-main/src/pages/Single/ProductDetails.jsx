import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {
  add_item,
  delete_cart,
  remove_item,
} from "../../redux/actions/cartAction";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setProducts } from "../../redux/actions/productAction";
import Rating from "react-rating";
import useScript from "../../components/Common/Reload";

const ProductDetails = () => {
  useScript("/assets/js/main.js");
  const MySwal = withReactContent(Swal);
  const getState = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  let { id } = useParams();
  const products = useSelector((state) => state.allProducts.products);

  const fetchProducts = async () => {
    const response = await axios
      .get(`https://korbojoy-server.onrender.com/api/products`)
      .catch((err) => {});
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const mainProduct = products.find((product) => product._id === id);
  const mainProductCart = getState.find((pd) => pd._id === mainProduct._id);

  console.log(mainProductCart);

  const handleAddItem = (e) => {
    dispatch(add_item(e));
  };
  const handleRemoveItem = (e) => {
    dispatch(remove_item(e));
  };

  const handleDeleteCart = (_id) => {
    dispatch(delete_cart(_id));
  };
  return (
    <div>
      <div className="shop-details py-120">
        <div className="container">
          <div className="product-view-area">
            <div className="row">
              <div className="col-xl-6 col-lg-5 col-md-6">
                <div className="part-img mr-30">
                  <div className="img-box" id="bigPreview">
                    <a href="shop-details.html">
                      <img
                        src={mainProduct.img[0]}
                        alt="Product"
                        style={{
                          height: 450,
                          width: 400,
                          objectFit: "contain",
                        }}
                        className="img-fluid"
                      />
                    </a>
                    <button className="quick-view">
                      <i className="fa-thin fa-arrows-maximize" />
                    </button>
                  </div>
                  <div className="btn-box">
                    <button className="small-thumb active">
                      <img
                        src={mainProduct.img[0]}
                        alt="Image"
                        style={{
                          height: 250,
                          width: 300,
                          objectFit: "contain",
                        }}
                        className="img-fluid"
                      />
                    </button>
                    <button className="small-thumb">
                      <img
                        src={mainProduct.img[1]}
                        alt="Image"
                        style={{
                          height: 250,
                          width: 300,
                          objectFit: "contain",
                        }}
                        className="img-fluid"
                      />
                    </button>
                    <button className="small-thumb">
                      <img
                        src={mainProduct.img[2]}
                        alt="Image"
                        style={{
                          height: 250,
                          width: 300,
                          objectFit: "contain",
                        }}
                        className="img-fluid"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 col-md-6">
                <div className="part-txt">
                  <h2 className="main-product-title">{mainProduct.name}</h2>
                  <div className="review">
                    <Rating
                      initialRating={mainProduct.rating}
                      emptySymbol="far fa-star icon-color"
                      fullSymbol="fas fa-star icon-color"
                      readonly
                    ></Rating>
                    <span className="rating-amount">3 Reviews</span>
                  </div>
                  <p className="price">
                    <span>৳{mainProduct.realPrice}</span> ৳
                    {mainProduct.buyPrice}
                  </p>
                  <ul className="short-details">
                    <li>
                      Availability:{" "}
                      {mainProduct.qtn > 0 ? (
                        <span>In stock</span>
                      ) : (
                        <span>Out of stock</span>
                      )}
                    </li>
                    <li>
                      Product Code: <span>#4657</span>
                    </li>
                    <li>
                      Tags: <span>Fashion, Hood, Classic</span>
                    </li>
                  </ul>
                  <p className="dscr">{mainProduct.fullDescription}</p>
                  {/* <form>
                    <div className="row g-xl-4 g-3">
                      <div className="col-lg-4 col-md-6 col-sm-4 col-6">
                        <div className="color-select-wrap">
                          <label>Color</label>
                          <select
                            name="color"
                            className="select wide color-select"
                          >
                            <option value="*" selected disabled>
                              Select Color
                            </option>
                            <option value={1}>Green</option>
                            <option value={2}>Red</option>
                            <option value={3}>Yellow</option>
                            <option value={4}>Blue</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-4 col-6">
                        <label>Size</label>
                        <select name="size" className="select wide">
                          <option value="*" selected disabled>
                            Select Size
                          </option>
                          <option value={1}>SM</option>
                          <option value={2}>M</option>
                          <option value={3}>L</option>
                          <option value={4}>XL</option>
                        </select>
                      </div>

                      <div className="col-lg-4 col-md-12 col-sm-4">
                        <div className="quantity-wrap">
                          {mainProductCart ? (
                            <div className="product-count">
                              <div className="quantity rapper-quantity">
                                <input
                                  type="number"
                                  min={1}
                                  max={100}
                                  step={1}
                                  value={mainProductCart.qtn}
                                />
                                <div className="quantity-nav">
                                  <div
                                    className="quantity-button quantity-down"
                                    onClick={
                                      mainProductCart.qtn <= 1
                                        ? () =>
                                            handleDeleteCart(
                                              mainProductCart._id
                                            )
                                        : () =>
                                            handleRemoveItem(mainProductCart)
                                    }
                                  >
                                    <i className="fa-solid fa-minus" />
                                  </div>
                                  <div
                                    className="quantity-button quantity-up"
                                    onClick={() =>
                                      handleAddItem(mainProductCart)
                                    }
                                  >
                                    <i className="fa-solid fa-plus" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </form> */}
                  <div className="btn-box">
                    <button
                      id="addToCart"
                      onClick={() => handleAddItem(mainProduct)}
                    >
                      <span>
                        <i className="fa-light fa-cart-shopping" />
                      </span>{" "}
                      add to cart
                    </button>
                    <button id="addToWishList">
                      <span>
                        <i className="fa-light fa-heart" />
                      </span>{" "}
                      add to wishlist
                    </button>
                  </div>
                  <div className="product-share">
                    <span>Share Link:</span>
                    <div className="social">
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-google-plus-g" />
                      </a>
                      <a href="#">
                        <i className="fa-solid fa-rss" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="details-area">
            <nav>
              <div className="nav" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-dscr-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-dscr"
                  type="button"
                  role="tab"
                  aria-controls="nav-dscr"
                  aria-selected="true"
                >
                  Description
                </button>
                <button
                  className="nav-link"
                  id="nav-info-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-info"
                  type="button"
                  role="tab"
                  aria-controls="nav-info"
                  aria-selected="false"
                >
                  Information
                </button>
                <button
                  className="nav-link"
                  id="nav-review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-review"
                  type="button"
                  role="tab"
                  aria-controls="nav-review"
                  aria-selected="false"
                >
                  Reviews
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-dscr"
                role="tabpanel"
                aria-labelledby="nav-dscr-tab"
                tabIndex={0}
              >
                <div className="product-dscr">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="part-img">
                        <img
                          src={mainProduct.img[0]}
                          alt="Product"
                          style={{
                            height: 450,
                            width: 400,
                            objectFit: "contain",
                          }}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: 600 }}
                      >
                        <p> {mainProduct.fullDescription}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-info"
                role="tabpanel"
                aria-labelledby="nav-info-tab"
                tabIndex={0}
              >
                <div className="product-information">
                  <ul>
                    <li>
                      <span>Brand Name:</span>KLGH
                    </li>
                    <li>
                      <span>Vocalism Principle:</span>Dynamic
                    </li>
                    <li>
                      <span>Style:</span>Over the Ear
                    </li>
                    <li>
                      <span>Origin:</span>Mainland China
                    </li>
                    <li>
                      <span>Control Button:</span>Yes
                    </li>
                    <li>
                      <span>Volume Control:</span>Yes
                    </li>
                    <li>
                      <span>Certification:</span>CE
                    </li>
                    <li>
                      <span>Number Of Drivers:</span>2
                    </li>
                    <li>
                      <span>Plug Type:</span>Line Type
                    </li>
                    <li>
                      <span>Range:</span>up to 32 Ω
                    </li>
                    <li>
                      <span>Material:</span>Fabric
                    </li>
                    <li>
                      <span>Memory Card:</span>Yes
                    </li>
                    <li>
                      <span>Waterproof:</span>No
                    </li>
                    <li>
                      <span>Magnet Type:</span>Other
                    </li>
                    <li>
                      <span>Wireless Type:</span>Bluetooth
                    </li>
                    <li>
                      <span>Codecs:</span>AAC
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-review"
                role="tabpanel"
                aria-labelledby="nav-review-tab"
                tabIndex={0}
              >
                <div className="product-review">
                  <div className="review-overview">
                    <div className="left">
                      <h2>
                        4.2 <span>/5</span>
                      </h2>
                      <p>251 Ratings</p>
                    </div>
                    <div className="right">
                      <ul>
                        <li>
                          <div className="stars">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                          </div>
                          <div className="review-line">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{ width: "41%" }}
                                aria-valuenow={41}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="percentage">
                            <span>103</span>
                          </div>
                        </li>
                        <li>
                          <div className="stars">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp" />
                          </div>
                          <div className="review-line">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{ width: "29%" }}
                                aria-valuenow={29}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="percentage">
                            <span>73</span>
                          </div>
                        </li>
                        <li>
                          <div className="stars">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                          </div>
                          <div className="review-line">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{ width: "16%" }}
                                aria-valuenow={16}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="percentage">
                            <span>39</span>
                          </div>
                        </li>
                        <li>
                          <div className="stars">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                          </div>
                          <div className="review-line">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{ width: "11%" }}
                                aria-valuenow={11}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="percentage">
                            <span>27</span>
                          </div>
                        </li>
                        <li>
                          <div className="stars">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                          </div>
                          <div className="review-line">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{ width: "3%" }}
                                aria-valuenow={3}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="percentage">
                            <span>09</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="review-title">
                    <h3>Reviews</h3>
                  </div>
                  <div className="review-wrap">
                    <div className="single-review">
                      <div className="user">
                        <div className="part-img">
                          <img src="assets/images/avatar.png" alt="User" />
                        </div>
                        <div className="txt">
                          <span className="name">Shaikh Dardah</span>
                          <span className="date">17/08/2022</span>
                          <span className="star">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp" />
                          </span>
                        </div>
                      </div>
                      <div className="comment-area">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Pariatur eos veniam aperiam autem sint beatae
                          eveniet minima impedit, deserunt magni harum aut
                          ducimus explicabo, consectetur natus nulla repellendus
                          quos provident deserunt magni harum aut ducimus
                          explicabo, consectetur natus nulla repellendus quos
                          provident deserunt magni harum aut ducimus explicabo,
                          consectetur natus nulla repellendus quos provident.
                        </p>
                        <div className="bottom-wrap">
                          <div className="gallery-wrap">
                            <div className="img-gallery">
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-1.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-2.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-3.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-4.jpg"
                                  alt="image"
                                />
                              </button>
                            </div>
                            <div className="view-panel">
                              <img
                                className="client-product"
                                src="assets/images/index.html"
                                alt="image"
                              />
                              <button className="clt-view-panel-close">
                                <i className="fa-light fa-circle-xmark" />
                              </button>
                            </div>
                          </div>
                          <div className="reaction">
                            <div className="like">
                              <button>
                                <i className="fa-duotone fa-thumbs-up" />
                              </button>
                              <span>(2)</span>
                            </div>
                            <div className="dislike">
                              <button>
                                <i className="fa-duotone fa-thumbs-down" />
                              </button>
                              <span>(0)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-review">
                      <div className="user">
                        <div className="part-img">
                          <img src="assets/images/avatar.png" alt="User" />
                        </div>
                        <div className="txt">
                          <span className="name">Shaikh Dardah</span>
                          <span className="date">17/08/2022</span>
                          <span className="star">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp" />
                          </span>
                        </div>
                      </div>
                      <div className="comment-area">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Pariatur eos veniam aperiam autem sint beatae
                          eveniet minima impedit, deserunt magni harum aut
                          ducimus explicabo, consectetur natus nulla repellendus
                          quos provident deserunt magni harum aut ducimus
                          explicabo, consectetur natus nulla repellendus quos
                          provident deserunt magni harum aut ducimus explicabo,
                          consectetur natus nulla repellendus quos provident.
                        </p>
                        <div className="bottom-wrap">
                          <div className="gallery-wrap">
                            <div className="img-gallery">
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-1.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-2.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-3.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-4.jpg"
                                  alt="image"
                                />
                              </button>
                            </div>
                            <div className="view-panel">
                              <img
                                className="client-product"
                                src="assets/images/index.html"
                                alt="image"
                              />
                              <button className="clt-view-panel-close">
                                <i className="fa-light fa-circle-xmark" />
                              </button>
                            </div>
                          </div>
                          <div className="reaction">
                            <div className="like">
                              <button>
                                <i className="fa-duotone fa-thumbs-up" />
                              </button>
                              <span>(2)</span>
                            </div>
                            <div className="dislike">
                              <button>
                                <i className="fa-duotone fa-thumbs-down" />
                              </button>
                              <span>(0)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-review">
                      <div className="user">
                        <div className="part-img">
                          <img src="assets/images/avatar.png" alt="User" />
                        </div>
                        <div className="txt">
                          <span className="name">Shaikh Dardah</span>
                          <span className="date">17/08/2022</span>
                          <span className="star">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp" />
                          </span>
                        </div>
                      </div>
                      <div className="comment-area">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Pariatur eos veniam aperiam autem sint beatae
                          eveniet minima impedit, deserunt magni harum aut
                          ducimus explicabo, consectetur natus nulla repellendus
                          quos provident deserunt magni harum aut ducimus
                          explicabo, consectetur natus nulla repellendus quos
                          provident deserunt magni harum aut ducimus explicabo,
                          consectetur natus nulla repellendus quos provident.
                        </p>
                        <div className="bottom-wrap">
                          <div className="gallery-wrap">
                            <div className="img-gallery">
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-1.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-2.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-3.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-4.jpg"
                                  alt="image"
                                />
                              </button>
                            </div>
                            <div className="view-panel">
                              <img
                                className="client-product"
                                src="assets/images/index.html"
                                alt="image"
                              />
                              <button className="clt-view-panel-close">
                                <i className="fa-light fa-circle-xmark" />
                              </button>
                            </div>
                          </div>
                          <div className="reaction">
                            <div className="like">
                              <button>
                                <i className="fa-duotone fa-thumbs-up" />
                              </button>
                              <span>(2)</span>
                            </div>
                            <div className="dislike">
                              <button>
                                <i className="fa-duotone fa-thumbs-down" />
                              </button>
                              <span>(0)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
