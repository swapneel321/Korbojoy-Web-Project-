import React from "react";

const About = () => {
  return (
    <div>
      <div className="about pt-120 pb-60">
        <div className="container">
          <div className="main-txt">
            <div className="row justify-content-center">
              <div className="col-xxl-10 col-xl-12">
                <h1 className="text-center"> Welcome To Korbojoy</h1>
                <p className="text-center my-5">
                  Korbojoy is a Professional eCommerce Platform. Here we will
                  provide you with only interesting products, which you will
                  like very much. We're dedicated to providing you the best of
                  eCommerce, with a focus on dependability and shopping. We're
                  working to turn our passion for eCommerce into a booming
                  online website. We hope you enjoy our eCommerce as much as we
                  enjoy offering them to you. I will keep posting more important
                  posts on my Website for all of you. Please give your support
                  and love.
                </p>
              </div>
            </div>
            <div className="why-choose mt-5">
              <div className="row g-4 justify-content-between">
                <div className="col-xl-6 col-lg-7">
                  <div className="part-txt">
                    <h2 className="part-title">Why Choose Us?</h2>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            How do I become an author?
                            <span>
                              <i className="fa-regular fa-minus" />
                            </span>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              The graphical control element accordion is a
                              vertically stacked list of items, such as labels
                              or thumbnails. Each item can be "expanded" or
                              "stretched" to reveal the content associated with
                              that item.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Is my license transferable?
                            <span>
                              <i className="fa-regular fa-plus" />
                            </span>
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              The graphical control element accordion is a
                              vertically stacked list of items, such as labels
                              or thumbnails. Each item can be "expanded" or
                              "stretched" to reveal the content associated with
                              that item.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What do you mean by item and end product?
                            <span>
                              <i className="fa-regular fa-plus" />
                            </span>
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              The graphical control element accordion is a
                              vertically stacked list of items, such as labels
                              or thumbnails. Each item can be "expanded" or
                              "stretched" to reveal the content associated with
                              that item.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Am I allowed to modify the item that I purchased?
                            <span>
                              <i className="fa-regular fa-plus" />
                            </span>
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              The graphical control element accordion is a
                              vertically stacked list of items, such as labels
                              or thumbnails. Each item can be "expanded" or
                              "stretched" to reveal the content associated with
                              that item.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5">
                  <div className="video-area">
                    <a
                      href="#"
                      className="js-modal-btn"
                      data-video-id="uoIW4M_MeU8"
                    >
                      <i className="flaticon-play" />
                    </a>
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

export default About;
