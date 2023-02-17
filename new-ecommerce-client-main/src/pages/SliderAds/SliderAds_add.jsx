import React from "react";

const SliderAds_add = () => {
  return (
    <div>
      <div>
        <div id="layout-wrapper">
          <div className="main-content">
            <div className="page-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title mb-4">
                          Add Slider &amp; Ads
                        </h4>
                        <form>
                          <div className="mb-3">
                            <label
                              htmlFor="formrow-firstname-input"
                              className="form-label"
                            >
                              Title
                            </label>
                            <input
                              type="text"
                              name="title"
                              className="form-control"
                              id="formrow-firstname-input"
                              placeholder="Enter Slider Name"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Short Description
                            </label>
                            <div>
                              <textarea
                                required
                                className="form-control"
                                name="description"
                                rows={3}
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="mt-4">
                            <div>
                              <label
                                htmlFor="formFileLg"
                                className="form-label"
                              >
                                Add Picture
                              </label>
                              <input
                                className="form-control form-control-lg"
                                name="image"
                                id="formFileLg"
                                type="file"
                              />
                            </div>
                          </div>
                          <div className="my-3">
                            <label
                              htmlFor="formrow-inputState"
                              className="form-label"
                            >
                              Select Status
                            </label>
                            <select
                              className="form-select"
                              id="inlineFormSelectPref"
                              name="status"
                            >
                              <option selected>Choose...</option>
                              <option value={1}>Slider</option>
                              <option value={2}>Ads</option>
                            </select>
                          </div>
                          <div>
                            <button
                              type="submit"
                              className="btn btn-primary w-md"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                      {/* end card body */}
                    </div>
                    {/* end card */}
                  </div>
                </div>
              </div>
              {/* container-fluid */}
            </div>
          </div>
          {/* end main content*/}
        </div>
        {/* END layout-wrapper */}
        {/* Right Sidebar */}
        <div className="right-bar">
          <div data-simplebar className="h-100">
            <div className="rightbar-title d-flex align-items-center px-3 py-4">
              <h5 className="m-0 me-2">Settings</h5>
              <a
                href="javascript:void(0);"
                className="right-bar-toggle ms-auto"
              >
                <i className="mdi mdi-close noti-icon" />
              </a>
            </div>
            {/* Settings */}
            <hr className="mt-0" />
            <h6 className="text-center mb-0">Choose Layouts</h6>
            <div className="p-4">
              <div className="mb-2">
                <img
                  src="assets/images/layouts/layout-1.jpg"
                  className="img-thumbnail"
                  alt="layout images"
                />
              </div>
              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input theme-choice"
                  type="checkbox"
                  id="light-mode-switch"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="light-mode-switch">
                  Light Mode
                </label>
              </div>
              <div className="mb-2">
                <img
                  src="assets/images/layouts/layout-2.jpg"
                  className="img-thumbnail"
                  alt="layout images"
                />
              </div>
              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input theme-choice"
                  type="checkbox"
                  id="dark-mode-switch"
                />
                <label className="form-check-label" htmlFor="dark-mode-switch">
                  Dark Mode
                </label>
              </div>
              <div className="mb-2">
                <img
                  src="assets/images/layouts/layout-3.jpg"
                  className="img-thumbnail"
                  alt="layout images"
                />
              </div>
              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input theme-choice"
                  type="checkbox"
                  id="rtl-mode-switch"
                />
                <label className="form-check-label" htmlFor="rtl-mode-switch">
                  RTL Mode
                </label>
              </div>
              <div className="mb-2">
                <img
                  src="assets/images/layouts/layout-4.jpg"
                  className="img-thumbnail"
                  alt="layout images"
                />
              </div>
              <div className="form-check form-switch mb-5">
                <input
                  className="form-check-input theme-choice"
                  type="checkbox"
                  id="dark-rtl-mode-switch"
                />
                <label
                  className="form-check-label"
                  htmlFor="dark-rtl-mode-switch"
                >
                  Dark RTL Mode
                </label>
              </div>
            </div>
          </div>
          {/* end slimscroll-menu*/}
        </div>
        {/* /Right-bar */}
        {/* Right bar overlay*/}
        <div className="rightbar-overlay" />
        {/* JAVASCRIPT */}
        {/* apexcharts */}
        {/* dashboard init */}
        {/* App js */}
        {/* Mirrored from themesbrand.com/skote/layouts/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 29 Nov 2022 08:36:40 GMT */}
      </div>
    </div>
  );
};

export default SliderAds_add;
