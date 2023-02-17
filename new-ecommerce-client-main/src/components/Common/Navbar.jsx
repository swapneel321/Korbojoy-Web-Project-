import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { delete_cart } from "../../redux/actions/cartAction";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    try {
      const response = await axios.get(
        "https://korbojoy-server.onrender.com/api/category"
      );
      setCategory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, [category]);

  const getState = useSelector((state) => state.cartReducer.cart);
  const [price, setPrice] = React.useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const total = () => {
    let price = 0;
    getState.map((pd) => {
      price = pd.buyPrice * pd.qtn + price;
      setPrice(price);
    });
  };

  React.useEffect(() => {
    total();
  }, [total]);

  const dispatch = useDispatch();

  const handleCart = (_id) => {
    dispatch(delete_cart(_id));
  };
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const location = useLocation();
  if (location.pathname === "/register" || location.pathname === "/login") {
    return null;
  }
  return (
    <div>
      <div className="product-quick-view-panel">
        <div className="img">
          <img
            className="quick-view-image"
            src="assets/images/index.html"
            alt="image"
          />
        </div>
      </div>
      <div className="revel-header-mobile-sidebar side-info">
        <div className="revel-header-mobile-sidebar-inner">
          <div className="revel-header-mobile-sidebar-top text-center pb-35">
            <div className="revel-header-mobile-sidebar-close-btn side-info-close">
              <button>
                <span>CLOSE</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                >
                  <path
                    id="close"
                    d="M4.216,23.784a.714.714,0,0,0,1.011,0l8.779-8.778,8.782,8.778A.715.715,0,0,0,23.8,22.774L15.017,14,23.8,5.214A.715.715,0,0,0,22.785,4.2l-8.779,8.782L5.223,4.207A.714.714,0,0,0,4.216,5.214L13,14,4.216,22.777a.714.714,0,0,0,0,1.007Z"
                    transform="translate(-4.008 -3.994)"
                    fill="#777"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="revel-header-mobile-sidebar-logo pb-50">
            <a href="https://revelwp.codebasket.net/">
              <img
                src="../../revelwp.codebasket.net/wp-content/themes/revel/assets/images/logo.png"
                alt
              />
            </a>
          </div>
          <div className="revel-header-mobile-sidebar-menu-nav">
            <div className="revel-mobile-menu" />
          </div>
        </div>
      </div>
      <div className="header-cart-wrap header-cart-wrap-2" id="headerCartWrap">
        <div className="cart-list">
          <div className="title">
            <h3>Shopping Cart</h3>
            <button className="cart-close">
              <i className="fa-regular fa-xmark" />
            </button>
          </div>
          {getState.length ? (
            <>
              <ul>
                {getState.map((pd, index) => {
                  return (
                    <li key={index}>
                      <a href="shop-details.html">
                        <div className="part-img">
                          <img src={pd.img[0]} alt="Image" />
                        </div>
                        <div className="part-txt">
                          <span className="name">{pd.name}</span>
                          <span>
                            {pd.qtn} <i className="fa-regular fa-xmark" />{" "}
                            {pd.buyPrice}
                          </span>
                        </div>
                      </a>
                      <button className="delete-btn">
                        <i
                          className="fa-regular fa-trash-can"
                          onClick={() => handleCart(pd._id)}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="total">
                <p>
                  Subtotal: <span>{price}</span>
                </p>
              </div>
              <div className="btn-box">
                <Link to={"/cart"} className="def-btn">
                  <a>View Cart</a>
                </Link>

                <a href="#" className="def-btn">
                  Checkout
                </a>
              </div>
            </>
          ) : (
            <div>
              {" "}
              <p style={{ fontSize: 22, padding: 10 }}>Your cart is empty</p>
            </div>
          )}
        </div>
      </div>

      {/*------------------------------- HEADER CART LIST END -------------------------------*/}
      {/*--------------------------- revel sidebar information area start ----------------------------*/}

      <div className="overlay" />

      <div className="header header-2">
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-7 col-lg-7">
                <ul className="top-header-link d-lg-flex d-none">
                  <li>
                    <span>SHOP EVENTS &amp; SAVE UP TO 65% OFF!</span>
                  </li>
                  <li>
                    <span className="mr-5px">Call Us:</span>
                    <a href="tel:001-1234-88888"> +880178999751</a>
                  </li>
                  <li>
                    <a href="#">Sell On Korbojoy </a>
                  </li>
                </ul>
              </div>
              <div className="col-xxl-6 col-xl-5 col-lg-5">
                <ul className="top-header-link justify-content-lg-end justify-content-center">
                  <li>
                    <a href="#">Track my order</a>
                  </li>
                  <li>
                    <select name="currency" id="currency" className="select">
                      <option value="USD">Dollar (USD)</option>
                      <option value="BDT">Taka (BDT)</option>
                    </select>
                  </li>
                  <li>
                    <div className="select-language">
                      <div className="language">
                        <div className="select-lang">
                          <div
                            id="aw"
                            data-input-name="country"
                            data-selected-country="UK"
                            data-scrollable-height="250px"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container">
            <div className="row justify-content-between align-items-center g-md-4 g-sm-0">
              <div className="col-xxl-3 col-xl-2 col-lg-2 col-sm-3 col-6">
                <div className="logo">
                  <Link to={"/"}>
                    <a>
                      <img src="assets/images/logo1.png" alt="logo" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-7 col-lg-8 col-sm-6 col-12 search-col">
                <div className="header-search">
                  <form>
                    <div className="wrap">
                      <select name="category" id="inputState" className="p-3">
                        <option selected>All Categories</option>
                        {category.map((pd) => (
                          <option key={pd._id} value={pd._id}>
                            {pd.name}
                          </option>
                        ))}
                      </select>

                      <span className="devider" />
                      <input
                        type="search"
                        name="search"
                        placeholder="What do you need?"
                      />
                    </div>
                    <button type="submit">
                      <span>
                        <i className="fa-light fa-magnifying-glass" />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-3 col-xl-3 col-lg-2 col-sm-2 col-6">
                <ul className="bottom-header-right d-flex align-items-center justify-content-end">
                  <li className="live-chat d-xl-flex d-none align-items-center">
                    <div className="icon">
                      <img src="assets/images/call-icon.png" alt="call" />
                    </div>

                    <div className="txt">
                      <span className="d-block">Live Chat or :</span>
                      <a className="d-block" href="tel:+997509153">
                        +8801789999751
                      </a>
                    </div>
                  </li>
                  <li className="header-cart-options">
                    <a role="button" className="search-open d-sm-none">
                      <i className="fa-light fa-magnifying-glass" />
                    </a>
                    {/* <a href="compare.html" className="compare-list-btn">
                      <i className="fa-light fa-shuffle" />
                    </a>
                    <a href="#" className="wish-list-btn">
                      <i className="fa-light fa-heart" />
                      <span className="quantity">02</span>
                    </a> */}
                    <a href="#" className="cart-list-btn">
                      <i className="fa-light fa-cart-shopping" />
                      <span className="quantity">{getState.length}</span>
                    </a>
                    <a href="#" className="side-toggle d-lg-none">
                      <i className="fal fa-bars" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-4">
                <div className="all-department">
                  <span>all Departments</span>
                  <button
                    className="category-list-close"
                    onClick={handleToggle}
                  >
                    <i className="fa-light fa-bars" />
                  </button>
                  <div className="banner">
                    {isToggled && (
                      <div
                        className="category-item"
                        style={{ background: "white", color: "black" }}
                      >
                        <ul>
                          {category.map((pd) => (
                            <li>
                              <Link to={`/category/${pd._id}`} className="p-3">
                                {pd.name}{" "}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-6">
                <nav className="navbar navbar-expand-lg">
                  <div className="container-fluid">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <nav id="revel-mobile-menu" className="revel-mobile-menu">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                              Home
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/about" className="nav-link">
                              About
                            </NavLink>
                          </li>

                          <li className="nav-item">
                            <NavLink to="/cart" className="nav-link">
                              Cart
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/blog" className="nav-link">
                              Blog
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                              Contact
                            </NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </nav>
              </div>
              {!user ? (
                <>
                  <div className="col-lg-2">
                    <div className="account-link">
                      <NavLink to="/register">Register</NavLink>

                      <span>/</span>
                      <NavLink to="/login">Sign in</NavLink>
                    </div>
                  </div>
                </>
              ) : (
                <div className="col-lg-2">
                  <div className="account-link">
                    <NavLink to={"/account"}>{user.displayName}</NavLink>

                    <span>/</span>
                    <NavLink onClick={handleLogOut}>Log out</NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------- HEADER SECTION END -------------------------------*/}
      {/*------------------------------- MOBILE MENU START -------------------------------*/}
      <div className="mobile-menu d-lg-none d-block">
        <div className="mobile-category-list">
          <button className="mobile-menu-close-btn">
            <i className="fa-solid fa-xmark-large" />
          </button>
          <ul className="category-nav">
            <li className="title">All Categories</li>
            <li className="category-item has-sub">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-user-tie-hair-long" />
                  </span>
                </div>
                <span>Women's Fashion</span>
              </a>
              <div className="category-sub-menu">
                <div className="row g-4">
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-wedding-dress" />
                      </span>{" "}
                      Clothing
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Dresses</a>
                      </li>
                      <li>
                        <a href="#">Jeggings</a>
                      </li>
                      <li>
                        <a href="#">Kurtis</a>
                      </li>
                      <li>
                        <a href="#">Palazzo Pants &amp; Culottes</a>
                      </li>
                      <li>
                        <a href="#">Pants</a>
                      </li>
                      <li>
                        <a href="#">Shapewear</a>
                      </li>
                      <li>
                        <a href="#">Skirts</a>
                      </li>
                      <li>
                        <a href="#">Tops</a>
                      </li>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Tunics</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-heels" />
                      </span>{" "}
                      Shoes
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Ballet Flats</a>
                      </li>
                      <li>
                        <a href="#">Pumps</a>
                      </li>
                      <li>
                        <a href="#">Closed-Toe Wedges</a>
                      </li>
                      <li>
                        <a href="#">Fashion Boots</a>
                      </li>
                      <li>
                        <a href="#">Flat Sandals</a>
                      </li>
                      <li>
                        <a href="#">Flip Flops</a>
                      </li>
                      <li>
                        <a href="#">Heeled Sandals</a>
                      </li>
                      <li>
                        <a href="#">House Slippers</a>
                      </li>
                      <li>
                        <a href="#">Slip-Ons</a>
                      </li>
                      <li>
                        <a href="#">Sneakers</a>
                      </li>
                      <li>
                        <a href="#">Wedge Sandals</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-watch" />
                      </span>{" "}
                      Watches
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Fashion</a>
                      </li>
                      <li>
                        <a href="#">Casual</a>
                      </li>
                      <li>
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">Sports</a>
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-user-tie-hair" />
                  </span>
                </div>
                <span>Men's Fashion</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-camera" />
                  </span>
                </div>
                <span>Photography</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-watch-smart" />
                  </span>
                </div>
                <span>Watches &amp; Accessories</span>
              </a>
            </li>
            <li className="category-item has-sub">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-tv-retro" />
                  </span>
                </div>
                <span>TV &amp; Home Appliances</span>
              </a>
              <div className="category-sub-menu">
                <div className="row g-4">
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-television" />
                      </span>{" "}
                      Televisions
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Smart Televisions</a>
                      </li>
                      <li>
                        <a href="#">LED Televisions</a>
                      </li>
                      <li>
                        <a href="#">OLED Televisions</a>
                      </li>
                      <li>
                        <a href="#">Other Televisions</a>
                      </li>
                      <li>
                        <a href="#">Mini Televisions</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-speaker" />
                      </span>{" "}
                      Home Audio
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Sondbars</a>
                      </li>
                      <li>
                        <a href="#">Home Entertainment</a>
                      </li>
                      <li>
                        <a href="#">Portable Players</a>
                      </li>
                      <li>
                        <a href="#">Fashion Boots</a>
                      </li>
                      <li>
                        <a href="#">Live Sound</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-refrigerator" />
                      </span>{" "}
                      Large Appliances
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Refrigerators</a>
                      </li>
                      <li>
                        <a href="#">Freezers</a>
                      </li>
                      <li>
                        <a href="#">Washing Machines</a>
                      </li>
                      <li>
                        <a href="#">Microwave Oven</a>
                      </li>
                      <li>
                        <a href="#">Electric Oven</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-cooking" />
                      </span>{" "}
                      Kitchen Appliances
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Rice Cooker</a>
                      </li>
                      <li>
                        <a href="#">Blender, Mixer &amp; Grinder</a>
                      </li>
                      <li>
                        <a href="#">Electric Kettle</a>
                      </li>
                      <li>
                        <a href="#">Juicer &amp; Fruit Extraction</a>
                      </li>
                      <li>
                        <a href="#">Fryer</a>
                      </li>
                      <li>
                        <a href="#">Coffee Machine</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-air-conditioner" />
                      </span>
                      Cooling &amp; Heating
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Air Conditioner</a>
                      </li>
                      <li>
                        <a href="#">Air Coolers</a>
                      </li>
                      <li>
                        <a href="#">Air Purifiers</a>
                      </li>
                      <li>
                        <a href="#">Dehumidifiers</a>
                      </li>
                      <li>
                        <a href="#">Water Heater</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-season" />
                      </span>{" "}
                      Season Sale
                    </h4>
                    <a href="#">
                      <img src="assets/images/mega-menu-bg-2.jpg" alt="Image" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-backpack" />
                  </span>
                </div>
                <span>Bags &amp; Shoes</span>
              </a>
            </li>
            <li className="category-item has-sub">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-teddy-bear" />
                  </span>
                </div>
                <span>Toys , Kids &amp; Babies</span>
              </a>
              <div className="category-sub-menu">
                <div className="row g-4">
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-baby-boy" />
                      </span>{" "}
                      Mother &amp; Baby
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Baby &amp; Toddler Foods</a>
                      </li>
                      <li>
                        <a href="#">Milk Formula</a>
                      </li>
                      <li>
                        <a href="#">Cloth Diapers &amp; Accessories</a>
                      </li>
                      <li>
                        <a href="#">Diaper Bags</a>
                      </li>
                      <li>
                        <a href="#">Wipes &amp; Holders</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-rocking-horse" />
                      </span>{" "}
                      Baby Gear
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Baby Walkers</a>
                      </li>
                      <li>
                        <a href="#">Backpacks &amp; Carriers</a>
                      </li>
                      <li>
                        <a href="#">Strollers</a>
                      </li>
                      <li>
                        <a href="#">Swings, Jumpers &amp; Bouncers</a>
                      </li>
                      <li>
                        <a href="#">Activity Gym &amp; Playmats</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-baby-dress" />
                      </span>{" "}
                      Clothing &amp; Accessories
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Girls Clothing</a>
                      </li>
                      <li>
                        <a href="#">Girls Shoes</a>
                      </li>
                      <li>
                        <a href="#">Boys Clothing</a>
                      </li>
                      <li>
                        <a href="#">Maternity Wear</a>
                      </li>
                      <li>
                        <a href="#">New Born Unisex (0 - 6 months)</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-12">
                    <h4>
                      <span>
                        <i className="flaticon-season" />
                      </span>{" "}
                      Season Sale
                    </h4>
                    <a href="#">
                      <img src="assets/images/mega-menu-bg-3.jpg" alt="Image" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-headphones-simple" />
                  </span>
                </div>
                <span>Headphone</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-baseball-bat-ball" />
                  </span>
                </div>
                <span>Sports &amp; Outdoor</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-shuffle" />
                  </span>
                </div>
                <span>Other</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="m-main-menu">
          <button className="mobile-menu-close-btn">
            <i className="fa-solid fa-xmark-large" />
          </button>
          <ul className="menu-bar">
            <Link to={"/"}>
              <a>
                <img
                  src="assets/images/logo1.png"
                  alt="logo"
                  className="img-fluid"
                />
              </a>
            </Link>

            <li className="nav-item">
              <Link to={"/"}>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            {user ? (
              <li className="nav-item">
                <Link to={"/account"}>
                  <a className="nav-link">Account</a>
                </Link>
              </li>
            ) : (
              ""
            )}

            {user ? (
              <li className="nav-item">
                <Link to={"/login"}>
                  <a className="nav-link">Login / Register</a>
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <a onClick={handleLogOut} className="nav-link">
                  Logout
                </a>
              </li>
            )}

            <li className="nav-item">
              <Link to={"/about"}>
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/blog"}>
                <a className="nav-link">Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"}>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <ul className="mobile-nav">
          <li>
            <a
              role="button"
              data-target="mobile-category-list"
              className="m-nav-link"
            >
              <i className="fa-light fa-grid-2" />
            </a>
          </li>
          <li>
            <Link to={"/cart"}>
              <a className="m-nav-link">
                <i className="fa-light fa-cart-shopping" />
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <a className="center">
                <i className="fa-light fa-house" />
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/account"}>
              <a className="m-nav-link">
                <i className="fa-light fa-user-large" />
              </a>
            </Link>
          </li>
          <li>
            <a role="button" data-target="m-main-menu" className="m-nav-link">
              <i className="fa-light fa-ellipsis-stroke" />
            </a>
          </li>
        </ul>
      </div>
      {/*------------------------------- MOBILE MENU END -------------------------------*/}
    </div>
  );
};

export default Navbar;
