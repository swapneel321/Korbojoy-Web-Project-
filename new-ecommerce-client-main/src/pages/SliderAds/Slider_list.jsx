import React from "react";

const Slider_list = () => {
  return (
    <div>
      <div id="layout-wrapper">
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">Slider List</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <table
                        id="datatable-buttons"
                        className="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead className="table-light">
                          <tr>
                            <th>S/N</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Short discription</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr key="{index}">
                            <td>1</td>
                            <td>
                              <img src width="{150}" height="{150}" />
                            </td>
                            <td>Watch</td>
                            <td>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Harum, eaque.
                            </td>
                            <td>Active</td>
                            <td>
                              <div className="d-flex gap-3">
                                <a
                                  href="javascript:void(0);"
                                  className="text-success"
                                >
                                  <i className="mdi mdi-pencil font-size-18" />
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="text-danger"
                                >
                                  <i className="mdi mdi-delete font-size-18" />
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* end col */}
              </div>
              {/* end row */}
            </div>
            {/* container-fluid */}
          </div>
          {/* End Page-content */}
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">© Skote.</div>
                <div className="col-sm-6">
                  <div className="text-sm-end d-none d-sm-block">
                    Design &amp; Develop by Themesbrand
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* end main content*/}
      </div>
      {/* END layout-wrapper */}
      {/* Right Sidebar */}
      <div className="right-bar">
        <div data-simplebar className="h-100">
          <div className="rightbar-title d-flex align-items-center px-3 py-4">
            <h5 className="m-0 me-2">Settings</h5>
            <a href="javascript:void(0);" className="right-bar-toggle ms-auto">
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
    </div>
  );
};

export default Slider_list;
