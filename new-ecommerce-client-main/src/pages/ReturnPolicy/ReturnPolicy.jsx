import React from "react";
import useScript from "../../components/Common/Reload";

const ReturnPolicy = () => {
  useScript("/assets/js/main.js");
  return (
    <div>
      <div className="page-content">
        <div className="container">
          <section className="introduce mb-10 pb-10">
            <h2 className=" mx-auto text-center" style={{ margin: "120px 0" }}>
              Return Policy for Korbo Joy
            </h2>
            <p>
              1.If your product is damaged, defective, incorrect, or incomplete
              at the time of delivery, please raise a return request on korbojoy
              website. The return request must be raised within 7 from the date
              of delivery.{" "}
            </p>
            <p>
              2. For electronic appliances & mobile phones related issues after
              usage or after the return policy period, you can request for
              seller warranty or brand warranty.{" "}
            </p>
            <h6>Conditions for Returns</h6>
            <p>
              1. The item should be unused, unworn, unwashed, and with no
              blemishes. For fashion items, items might be taken for a trial to
              check whether the thing fits. This will in any case be considered
              as unworn.
            </p>
            <p>
              2. The product must include the original tags, user manuals,
              warranty cards, freebies, invoices, and accessories.
            </p>
            <p>
              3. The product must be returned in the original and undamaged
              manufacturer's packaging/box
            </p>
            <p>
              NOTE:{" "}
              <span>
                It is important to indicate the Order Number and Return Tracking
                Number on your return package to avoid any inconvenience/delay
                in your return process.
              </span>
            </p>
            <p>
              If your returned item does not meet the above requirements, we
              reserve the right to reject any request for a refund.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
