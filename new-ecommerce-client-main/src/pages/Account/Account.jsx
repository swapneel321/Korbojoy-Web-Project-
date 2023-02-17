import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Account = () => {
  const { user, logOut } = useContext(AuthContext);
  const emailId = user.email;
  const [bookings, setBooking] = useState([]);

  useEffect(() => {
    const url = `https://korbojoy-server.onrender.com/api/order/s/?email=${emailId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [emailId]);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const [users, setUsers] = useState(user);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...user };
    newInfo[field] = value;
    setUsers(newInfo);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      ...user,
    };
    try {
      await axios.put(
        `https://korbojoy-server.onrender.com/api/user/${emailId}`,
        newPost
      );
    } catch (error) {}
  };
  console.log(users);
  console.log(bookings);
  return (
    <div>
      <div className="account py-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="account-sidebar">
                <div className="user">
                  <div className="part-img">
                    <img src="assets/images/user.jpg" alt="Image" />
                  </div>
                  <div className="part-txt">
                    <h3>{user.displayName}</h3>
                  </div>
                </div>
                <div
                  className="nav flex-column"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="v-pills-dashboard-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-dashboard"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-dashboard"
                    aria-selected="true"
                  >
                    <span className="icon">
                      <i className="fa-duotone fa-objects-column" />
                    </span>{" "}
                    <span className="txt">Dashboard</span>
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-purchase-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-purchase"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-purchase"
                    aria-selected="false"
                  >
                    <span className="icon">
                      <i className="fa-duotone fa-file-invoice" />
                    </span>{" "}
                    <span className="txt">Purchase History</span>
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-conversation-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-conversation"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-conversation"
                    aria-selected="false"
                  >
                    <span className="icon">
                      <i className="fa-duotone fa-messages" />
                    </span>{" "}
                    <span className="txt">Conversation</span>
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-wallet-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-wallet"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-wallet"
                    aria-selected="false"
                  >
                    <span className="icon">
                      <i className="fa-duotone fa-wallet" />
                    </span>{" "}
                    <span className="txt">My Wallet</span>
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span className="icon">
                      <i className="fa-duotone fa-user-vneck" />
                    </span>{" "}
                    <span className="txt">Manage Profile</span>
                  </button>
                  <a
                    className="nav-link"
                    onClick={handleLogOut}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="icon">
                      <i className="fa-duotone fa-power-off" />
                    </span>{" "}
                    <span className="txt">Log out</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-dashboard"
                  role="tabpanel"
                  aria-labelledby="v-pills-dashboard-tab"
                  tabIndex={0}
                >
                  <h2 className="account-title">Dashboard</h2>
                  <div className="table-wrap">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Invoice ID</th>
                            <th>Recipient</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <span className="invoice-id">INV-012-345</span>
                            </td>
                            <td>
                              <span className="name">John Doe</span>
                            </td>
                            <td>
                              <span className="date">Mar 15, 2022</span>
                            </td>
                            <td>
                              <span className="amount">$256</span>
                            </td>
                            <td>
                              <span className="status">
                                <span className="paid">Paid</span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="invoice-id">INV-012-345</span>
                            </td>
                            <td>
                              <span className="name">John Doe</span>
                            </td>
                            <td>
                              <span className="date">Mar 15, 2022</span>
                            </td>
                            <td>
                              <span className="amount">$256</span>
                            </td>
                            <td>
                              <span className="status">
                                <span className="unpaid">Unpaid</span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="invoice-id">INV-012-345</span>
                            </td>
                            <td>
                              <span className="name">John Doe</span>
                            </td>
                            <td>
                              <span className="date">Mar 15, 2022</span>
                            </td>
                            <td>
                              <span className="amount">$256</span>
                            </td>
                            <td>
                              <span className="status">
                                <span className="paid">Paid</span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="invoice-id">INV-012-345</span>
                            </td>
                            <td>
                              <span className="name">John Doe</span>
                            </td>
                            <td>
                              <span className="date">Mar 15, 2022</span>
                            </td>
                            <td>
                              <span className="amount">$256</span>
                            </td>
                            <td>
                              <span className="status">
                                <span className="unpaid">Unpaid</span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="invoice-id">INV-012-345</span>
                            </td>
                            <td>
                              <span className="name">John Doe</span>
                            </td>
                            <td>
                              <span className="date">Mar 15, 2022</span>
                            </td>
                            <td>
                              <span className="amount">$256</span>
                            </td>
                            <td>
                              <span className="status">
                                <span className="paid">Paid</span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="invoice-id">INV-012-345</span>
                            </td>
                            <td>
                              <span className="name">John Doe</span>
                            </td>
                            <td>
                              <span className="date">Mar 15, 2022</span>
                            </td>
                            <td>
                              <span className="amount">$256</span>
                            </td>
                            <td>
                              <span className="status">
                                <span className="unpaid">Unpaid</span>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="table-bottom">
                      <div className="part-txt">
                        <p>Showing 06 from 50 data</p>
                      </div>
                      <div className="pagination">
                        <button disabled>
                          <i className="fa-solid fa-chevron-left" />
                        </button>
                        <button className="active">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>
                          <i className="fa-solid fa-chevron-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-purchase"
                  role="tabpanel"
                  aria-labelledby="v-pills-purchase-tab"
                  tabIndex={0}
                >
                  <h2 className="account-title">Purchase History</h2>
                  <div className="table-wrap">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Details</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bookings.map((booking) => (
                            <tr>
                              <td>
                                <span className="invoice-id">INV-012-345</span>
                              </td>
                              <td>
                                <span className="date">
                                  {booking.createdAt.slice(0, 10)}
                                </span>
                              </td>
                              <td>
                                <div className="details">
                                  <a
                                    href="shop-details.html"
                                    className="product-name"
                                  >
                                    Revel eCommerce-Multi vendor
                                  </a>
                                  <span className="invoice">
                                    Invoice:{" "}
                                    <button
                                      type="button"
                                      data-bs-toggle="modal"
                                      data-bs-target="#invoiceModal"
                                    >
                                      48452022
                                    </button>
                                  </span>
                                </div>
                              </td>
                              <td>
                                <span className="amount">
                                  ${booking.grandPrice}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="table-bottom">
                      <div className="part-txt">
                        <p>Showing 05 from 30 data</p>
                      </div>
                      <div className="pagination">
                        <button disabled>
                          <i className="fa-solid fa-chevron-left" />
                        </button>
                        <button className="active">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>
                          <i className="fa-solid fa-chevron-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-conversation"
                  role="tabpanel"
                  aria-labelledby="v-pills-conversation-tab"
                  tabIndex={0}
                >
                  <h2 className="account-title">Conversations</h2>
                  <div className="conversation-panel">
                    <div className="row g-0">
                      <div className="col-md-8 chat-col">
                        <div className="chat-area">
                          <div className="single-msg">
                            <div className="part-img">
                              <div className="img">
                                <img
                                  src="assets/images/avatar.png"
                                  alt="image"
                                />
                              </div>
                              <span>13:57</span>
                            </div>
                            <div className="part-txt">
                              <span>Flag messages where the</span>
                            </div>
                          </div>
                          <div className="single-msg msg-out">
                            <div className="part-txt">
                              <span>Bot selected the wrong action</span>
                            </div>
                            <div className="part-img">
                              <div className="img">
                                <img src="assets/images/user.jpg" alt="image" />
                              </div>
                              <span>13:57</span>
                            </div>
                          </div>
                          <div className="single-msg">
                            <div className="part-img">
                              <div className="img">
                                <img
                                  src="assets/images/avatar.png"
                                  alt="image"
                                />
                              </div>
                              <span>13:57</span>
                            </div>
                            <div className="part-txt">
                              <span>Sometimes instead of fla</span>
                            </div>
                          </div>
                          <div className="single-msg msg-out">
                            <div className="part-txt">
                              <span>message to come back to</span>
                            </div>
                            <div className="part-img">
                              <div className="img">
                                <img src="assets/images/user.jpg" alt="image" />
                              </div>
                              <span>13:57</span>
                            </div>
                          </div>
                          <div className="single-msg">
                            <div className="part-img">
                              <div className="img">
                                <img
                                  src="assets/images/avatar.png"
                                  alt="image"
                                />
                              </div>
                              <span>13:57</span>
                            </div>
                            <div className="part-txt">
                              <span>What can I do for you?</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="info-area">
                          <div className="chat-between">
                            <div className="part-img">
                              <div className="img">
                                <img
                                  src="assets/images/avatar.png"
                                  alt="image"
                                />
                              </div>
                              <div className="img">
                                <img src="assets/images/user.jpg" alt="image" />
                              </div>
                            </div>
                            <div className="part-txt">
                              <span>Conversations</span>
                            </div>
                          </div>
                          <div className="action">
                            <h4 className="title">Actions</h4>
                            <ul>
                              <li>
                                <button>
                                  Mark as Reviewed
                                  <span>
                                    <i className="fa-light fa-badge-check" />
                                  </span>
                                </button>
                              </li>
                              <li>
                                <button>
                                  Seve fo Later
                                  <span>
                                    <i className="fa-light fa-bookmark" />
                                  </span>
                                </button>
                              </li>
                              <li>
                                <button>
                                  Delete
                                  <span>
                                    <i className="fa-light fa-trash-can" />
                                  </span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-wallet"
                  role="tabpanel"
                  aria-labelledby="v-pills-wallet-tab"
                  tabIndex={0}
                >
                  <h2 className="account-title">My Wallet</h2>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="total-balance">
                        <div className="top">
                          <h4>Total Balance</h4>
                          <div className="tags">
                            <span className="tag tag-up">
                              <i className="fa-light fa-arrow-up-right" />{" "}
                              $600.99
                            </span>
                            <span className="tag tag-down">
                              <i className="fa-light fa-arrow-down-left" />{" "}
                              $700.99
                            </span>
                          </div>
                        </div>
                        <div className="middle">
                          <h3>$ 7,950.96</h3>
                        </div>
                        <div className="btn-box">
                          <a href="#" className="def-btn">
                            Deposit
                          </a>
                          <a href="#" className="def-btn">
                            Withdraw
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="chart-panel">
                        <div className="custom-legend">
                          <div className="single-legend">income</div>
                          <div className="single-legend">withdrawals</div>
                        </div>
                        <div id="overviewChart" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="table-wrap">
                        <div className="table-top">
                          <h4 className="title">Transfer History</h4>
                          <form className="search-box">
                            <input type="search" placeholder="Search" />
                            <button type="submit">
                              <i className="fa-regular fa-magnifying-glass" />
                            </button>
                          </form>
                        </div>
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Transfer type</th>
                                <th>Amount</th>
                                <th>User</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>INV-012-345</td>
                                <td>Jun 21, 2022</td>
                                <td>
                                  <div className="details">
                                    <a
                                      href="shop-details.html"
                                      className="product-name"
                                    >
                                      Revel eCommerce-Multi vendor
                                    </a>
                                  </div>
                                </td>
                                <td>$256</td>
                                <td>Steven Smith</td>
                              </tr>
                              <tr>
                                <td>INV-012-346</td>
                                <td>Apr 09, 2022</td>
                                <td>
                                  <div className="details">
                                    <a
                                      href="shop-details.html"
                                      className="product-name"
                                    >
                                      Revel eCommerce-Multi vendor
                                    </a>
                                  </div>
                                </td>
                                <td>$123</td>
                                <td>Steven Smith</td>
                              </tr>
                              <tr>
                                <td>INV-012-347</td>
                                <td>Mar 15, 2022</td>
                                <td>
                                  <div className="details">
                                    <a
                                      href="shop-details.html"
                                      className="product-name"
                                    >
                                      Revel eCommerce-Multi vendor
                                    </a>
                                  </div>
                                </td>
                                <td>$174</td>
                                <td>Steven Smith</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="table-bottom">
                          <div className="part-txt">
                            <p>Showing 03 from 50 data</p>
                          </div>
                          <div className="pagination">
                            <button disabled>
                              <i className="fa-solid fa-chevron-left" />
                            </button>
                            <button className="active">1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>
                              <i className="fa-solid fa-chevron-right" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                  tabIndex={0}
                >
                  <h2 className="account-title">Manage Profile</h2>
                  <div className="profile-panel">
                    <div className="profile-top">
                      <div className="user">
                        <div className="part-img">
                          <img src="assets/images/user.jpg" alt="Image" />
                        </div>
                        <div className="part-txt">
                          <span>{user.displayName}</span>
                        </div>
                      </div>
                      <div className="btn-box">
                        <a href="#" className="def-btn">
                          Upload
                        </a>
                        <a href="#" className="def-btn">
                          Remove
                        </a>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="row g-lg-4 g-3">
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="infoInput"
                            onBlur={handleOnBlur}
                            defaultValue={users.displayName || ""}
                          />
                        </div>

                        <div className="col-sm-6">
                          <input
                            type="email"
                            className="infoInput"
                            onBlur={handleOnBlur}
                            defaultValue={users.email || ""}
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="password"
                            placeholder="Current Password *"
                          />
                        </div>
                        <div className="col-sm-6">
                          <input type="password" placeholder="New Password *" />
                        </div>
                        <div className="col-12">
                          <input
                            type="password"
                            placeholder="Confirm Password *"
                          />
                        </div>
                        <div className="col-12">
                          <div className="btn-box">
                            <button className="def-btn">Save Change</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*------------------------------- INVOICE MODAL START -------------------------------*/}
        <div
          className="invoice-modal modal fade"
          id="invoiceModal"
          tabIndex={-1}
          aria-labelledby="invoiceModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="account-title mb-0" id="invoiceModalLabel">
                  Invoice
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="invoice-wrap">
                  <div className="invoice-top d-flex justify-content-between align-items-center">
                    <div className="left">
                      <div className="logo">
                        <img src="assets/images/Logo.html" alt="LOGO" />
                      </div>
                      <p>Invoice</p>
                    </div>
                    <div className="right">
                      <table>
                        <tbody>
                          <tr>
                            <th>Date:</th>
                            <td>17 Aug 2022</td>
                          </tr>
                          <tr>
                            <th>Invoice No:</th>
                            <td>IVIP48452022</td>
                          </tr>
                          <tr>
                            <th>Order No:</th>
                            <td>166779322</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="invoice-body">
                    <div className="details">
                      <div className="row">
                        <div className="col-sm-6">
                          <h3>Bill to</h3>
                          <p>
                            <span>Jetimpex Inc</span>
                            <span>915 SE 2 Court,</span>
                            <span>Ft. Lauderdale,</span>
                            <span>FL 33301</span>
                            <span>EIN: 42-1774657</span>
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <h3>Supplier</h3>
                          <p>
                            <span>Khorshed Alam</span>
                            <span>Ruhul amin Complex, Mokimabad,</span>
                            <span>590573362138</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="items">
                      <div className="table-responsive">
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th>Item ID</th>
                              <th className="text-center">Qty</th>
                              <th>Description</th>
                              <th className="text-end">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>35130092</td>
                              <td className="text-center">1</td>
                              <td>
                                Revel eCommerce-Multi vendor Ecommerce PSD
                                Template
                              </td>
                              <td className="text-end">
                                <span className="price">$8.00</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="total ms-auto">
                        <h5>
                          Invoice Total: <span>USD $8.00</span>
                        </h5>
                        <p>Paid via Skrill</p>
                      </div>
                    </div>
                  </div>
                  <div className="invoice-footer">
                    <span>THANK YOU FOR YOUR BUSINESS!</span>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="def-btn">
                  Print <i className="fa-regular fa-print" />
                </button>
                <button type="button" className="def-btn">
                  Download <i className="fa-regular fa-download" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*------------------------------- INVOICE MODAL END -------------------------------*/}
      </div>
    </div>
  );
};

export default Account;
