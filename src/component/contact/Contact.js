import React from "react";
import Footer from "../footer/Footer";
import ScrollToTop from "../scroll/ScrollToTop";
import Header from "../header/Header";
import FormspreeContactForm from "../formpree/FormspreeContactForm";

export default function Contact() {
  return (
    <div className="contact-page">
      <main className="main">
        <section id="contact" className="contact section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>
              Ready to build secure and scalable web solutions? Let's discuss how we can transform your digital projects with full stack development and cybersecurity expertise.
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row g-4 g-lg-5">
              <div className="col-lg-5">
                <div
                  className="info-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h3>Contact Info</h3>
                  <p>
                    Get in touch to discuss your web development and cybersecurity needs. I'm here to help you build robust and secure digital solutions.
                  </p>

                  <div
                    className="info-item"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon-box">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className="content">
                      <h4>Location</h4>
                      <p>Arusha, Tanzania</p>
                      <p>Available for remote projects worldwide</p>
                    </div>
                  </div>

                  <div
                    className="info-item"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="icon-box">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div className="content">
                      <h4>Phone Number</h4>
                      <p>+255 621 215 286</p>
                      <p>Available for technical discussions</p>
                    </div>
                  </div>

                  <div
                    className="info-item"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="icon-box">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="content">
                      <h4>Email Address</h4>
                      <p>francebahati89@gmail.com</p>
                      <p>Quick response guaranteed</p>
                    </div>
                  </div>

                  <div
                    className="info-item"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="icon-box">
                      <i className="bi bi-github"></i>
                    </div>
                    <div className="content">
                      <h4>GitHub</h4>
                      <p>github.com/bahati03</p>
                      <p>View my projects and contributions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div
                  className="contact-form"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h3>Start Your Project</h3>
                  <p>
                    Interested in full stack development, cybersecurity solutions, or web application development? Let me help you create secure and scalable solutions for your business.
                  </p>

                 <FormspreeContactForm/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}