import React from "react";
export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <main className="main">
        <section id="portfolio" className="portfolio section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>
              Explore my full stack development and cybersecurity projects that
              demonstrate expertise in building secure, scalable web
              applications and implementing robust security solutions.
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div
              className="isotope-layout"
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul
                className="portfolio-filters isotope-filters"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-web">Web Applications</li>
                <li data-filter=".filter-security">Cybersecurity</li>
                <li data-filter=".filter-api">APIs & Microservices</li>
                <li data-filter=".filter-database">Database Systems</li>
                <li data-filter=".filter-live">Live Projects</li>
              </ul>

              <div
                className="row gy-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {/* Netlify Live Projects */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-live filter-web">
                  <div className="portfolio-card">
                    <div className="portfolio-img">
                      <img
                        src="assets/img/portfolio/tour.webp"
                        alt="Tour For Sell Platform"
                        className="img-fluid"
                      />
                      <div className="portfolio-overlay">
                        <a
                          href="https://tourforsell.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portfolio-details-link"
                        >
                          <i className="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                    <div className="portfolio-info">
                      <h4>Tour For Sell</h4>
                      <p>Tourism Booking Platform</p>
                      <div className="portfolio-tags">
                        <span>E-commerce</span>
                        <span>Tourism</span>
                        <span>Live</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-live filter-web">
                  <div className="portfolio-card">
                    <div className="portfolio-img">
                      <img
                        src="assets/img/portfolio/elia.webp"
                        alt="Elia Mahenge Portfolio"
                        className="img-fluid"
                      />
                      <div className="portfolio-overlay">
                        <a
                          href="https://elia-mahenge.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portfolio-details-link"
                        >
                          <i className="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                    <div className="portfolio-info">
                      <h4>Hilmara Portfolio</h4>
                      <p>Professional Portfolio Website</p>
                      <div className="portfolio-tags">
                        <span>React</span>
                        <span>Portfolio</span>
                        <span>Live</span>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-live filter-web">
                  <div className="portfolio-card">
                    <div className="portfolio-img">
                      <img
                        src="assets/img/portfolio/guru.webp"
                        alt="Guru Business Solutions"
                        className="img-fluid"
                      />
                      <div className="portfolio-overlay">
                        <a
                          href="https://gurubusiness.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portfolio-details-link"
                        >
                          <i className="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                    <div className="portfolio-info">
                      <h4>Guru Business</h4>
                      <p>Business Solutions Platform</p>
                      <div className="portfolio-tags">
                        <span>Business</span>
                        <span>Solutions</span>
                        <span>Live</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Projects */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
                  <div className="portfolio-card">
                    <div className="portfolio-img">
                      <img
                        src="assets/img/portfolio/elearning.webp"
                        alt="E-Learning Platform"
                        className="img-fluid"
                      />
                      <div className="portfolio-overlay">
                        <a
                          href="assets/img/portfolio/elearning.webp"
                          className="glightbox portfolio-lightbox"
                        >
                          <i className="bi bi-plus"></i>
                        </a>
                    
                      </div>
                    </div>
                    <div className="portfolio-info">
                      <h4>Afriqo E-Learning</h4>
                      <p>Full Stack Learning Platform</p>
                      <div className="portfolio-tags">
                        <span>JHipster</span>
                        <span>React</span>
                        <span>Spring Boot</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-security">
                  <div className="portfolio-card">
                    <div className="portfolio-img">
                      <img
                        src="assets/img/portfolio/cyber.webp"
                        alt="Security Audit System"
                        className="img-fluid"
                      />
                      <div className="portfolio-overlay">
                        <a
                          href="assets/img/portfolio/cyber.webp"
                          className="glightbox portfolio-lightbox"
                        >
                          <i className="bi bi-plus"></i>
                        </a>
                    
                      </div>
                    </div>
                    <div className="portfolio-info">
                      <h4>Security Audit Platform</h4>
                      <p>Vulnerability Assessment</p>
                      <div className="portfolio-tags">
                        <span>Cybersecurity</span>
                        <span>Penetration Testing</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-api">
                  <div className="portfolio-card">
                    <div className="portfolio-img">
                      <img
                        src="assets/img/portfolio/restApi.webp"
                        alt="REST API System"
                        className="img-fluid"
                      />
                      <div className="portfolio-overlay">
                        <a
                          href="assets/img/portfolio/restApi.webp"
                          className="glightbox portfolio-lightbox"
                        >
                          <i className="bi bi-plus"></i>
                        </a>
                      
                      </div>
                    </div>
                    <div className="portfolio-info">
                      <h4>REST API System</h4>
                      <p>Microservices Architecture</p>
                      <div className="portfolio-tags">
                        <span>Spring Boot</span>
                        <span>REST API</span>
                        <span>Microservices</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-database">
                  <div className="portfolio-card">
                    <div className="portfolio-img">
                      <img
                        src="assets/img/portfolio/database.webp"
                        alt="Database Management System"
                        className="img-fluid"
                      />
                      <div className="portfolio-overlay">
                        <a
                          href="assets/img/portfolio/database.webp"
                          className="glightbox portfolio-lightbox"
                        >
                          <i className="bi bi-plus"></i>
                        </a>
                     
                      </div>
                    </div>
                    <div className="portfolio-info">
                      <h4>Database System</h4>
                      <p>MySQL Optimization</p>
                      <div className="portfolio-tags">
                        <span>MySQL</span>
                        <span>Database Design</span>
                        <span>Performance</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
                  <div className="portfolio-card">
                    <div className="portfolio-img">
                      <img
                        src="assets/img/portfolio/reactApp.webp"
                        alt="React Application"
                        className="img-fluid"
                      />
                      <div className="portfolio-overlay">
                        <a
                          href="assets/img/portfolio/reactApp.webp"
                          className="glightbox portfolio-lightbox"
                        >
                          <i className="bi bi-plus"></i>
                        </a>
                       
                      </div>
                    </div>
                    <div className="portfolio-info">
                      <h4>React Web Application</h4>
                      <p>Frontend Development</p>
                      <div className="portfolio-tags">
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>UI/UX</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-security">
                  <div className="portfolio-card">
                    <div className="portfolio-img">
                      <img
                        src="assets/img/portfolio/network.webp"
                        alt="Network Security"
                        className="img-fluid"
                      />
                      <div className="portfolio-overlay">
                        <a
                          href="assets/img/portfolio/network.webp"
                          className="glightbox portfolio-lightbox"
                        >
                          <i className="bi bi-plus"></i>
                        </a>
                        <a href="#" className="portfolio-details-link">
                          <i className="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                    <div className="portfolio-info">
                      <h4>Network Security</h4>
                      <p>Intrusion Detection System</p>
                      <div className="portfolio-tags">
                        <span>Network Security</span>
                        <span>IDS/IPS</span>
                        <span>Monitoring</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="text-center mt-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a href="/contact" className="btn btn-primary">
                Start Your Project
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
