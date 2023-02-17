import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact py-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="contact-info">
                <h2 className="title">Contact info</h2>
                <ul>
                  <li>
                    <div className="part-icon">
                      <span>
                        <i className="fa-solid fa-phone-flip" />
                      </span>
                    </div>
                    <div className="part-txt">
                      <a href="orbojoy@gmail.com">korbojoy@gmail.com</a>
                      <a href="tel:+8801789999751">+8801789999751</a>
                    </div>
                  </li>
                  <li>
                    <div className="part-icon">
                      <span>
                        <i className="fa-solid fa-location-dot" />
                      </span>
                    </div>
                    <div className="part-txt">
                      <span>101/B CHOWDHURIPARA MALIBAGH,DHAKA 1219</span>
                    </div>
                  </li>
                  <li>
                    <div className="part-icon">
                      <span>
                        <i className="fa-solid fa-clock" />
                      </span>
                    </div>
                    <div className="part-txt">
                      <span>Mon - Sat : 8:00am - 5:00pm</span>
                      <span>Sunday: Closed</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-7 col-lg-7 col-md-6">
              <div className="contact-form">
                <h2 className="title">Leave a Message</h2>
                <form className="row g-lg-4 g-3">
                  <div className="col-lg-6 col-md-12 col-sm-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-6">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="col-12">
                    <textarea placeholder="Your message" defaultValue={""} />
                  </div>
                  <div className="col-12">
                    <button className="def-btn btn-border w-100">
                      Find an agent
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14594.426811590003!2d90.40170455!3d23.8680958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1661416116390!5m2!1sen!2sbd"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
