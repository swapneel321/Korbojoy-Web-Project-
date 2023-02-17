import React from "react";

const Feature = () => {
  return (
    <div class="features features-2" id="feature">
      <div className="container">
        <div className="panel px-0">
          <div className="custom-row">
            <div className="custom-col">
              <div className="single-feature">
                <div className="part-icon">
                  <span>
                    <i className="flaticon-money-saving" />
                  </span>
                </div>
                <div className="part-txt">
                  <h4>Free Delivery</h4>
                  <p>For all order over $99</p>
                </div>
              </div>
            </div>
            <div className="custom-col">
              <div className="single-feature">
                <div className="part-icon">
                  <span>
                    <i className="flaticon-dollar" />
                  </span>
                </div>
                <div className="part-txt">
                  <h4>30 Days Return</h4>
                  <p>If goods have Problems</p>
                </div>
              </div>
            </div>
            <div className="custom-col">
              <div className="single-feature">
                <div className="part-icon">
                  <span>
                    <i className="flaticon-credit-card" />
                  </span>
                </div>
                <div className="part-txt">
                  <h4>Secure Payment</h4>
                  <p>100% secure payment</p>
                </div>
              </div>
            </div>
            <div className="custom-col">
              <div className="single-feature">
                <div className="part-icon">
                  <span>
                    <i className="flaticon-call-center" />
                  </span>
                </div>
                <div className="part-txt">
                  <h4>24/7 Support</h4>
                  <p>Dedicated support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
