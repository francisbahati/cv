import React from "react";
import { useEffect, useRef } from "react";
import SEO from "../seo/SEO";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";

export default function HomePage() {
  const typedRef = useRef(null);
  const typedInstanceRef = useRef(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Francis Bahati",
    url: "https://francisbahati.com",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+255 621 215 286",
      email: "francebahati89@gmail.com",
      contactType: "customer service",
      areaServed: "Global",
      availableLanguage: "en",
    },
    knowsAbout: [
      "Full Stack Development",
      "Dart",
      "React",
      "Python",
      "Cybersecurity",
      "REST APIs",
      "Graphics and Motion graphics",
      "Social media Algorithms"
    ],
  };

  useEffect(() => {
    // Initialize AOS
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }

    // Initialize Typed.js
    const initializeTyped = () => {
      if (typeof Typed !== "undefined" && typedRef.current) {
        // Destroy existing instance if it exists
        if (typedInstanceRef.current) {
          typedInstanceRef.current.destroy();
        }

        const typedStrings = [
          "Full Stack Developer",
          "Cybersecurity Expert",
          "Graphics and Motion Graphics expert",
          "React Developer",
          "Python Developer",
        ];

        typedInstanceRef.current = new Typed(typedRef.current, {
          strings: typedStrings,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
          loop: true,
          showCursor: true,
          cursorChar: "|",
        });
      }
    };

    // Initialize typed after a short delay to ensure DOM is ready
    const timer = setTimeout(initializeTyped, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="index-page">
      <SEO
        title="Francis Bahati | Full Stack Developer & Cybersecurity Expert - Building Secure & Scalable Web Applications"
        description="Full Stack Developer specializing in React, Spring Boot, and Python. Cybersecurity expert with 3+ yrs experience in building secure, scalable web applications and providing comprehensive IT solutions."
        keywords="full stack developer Tanzania, JHipster, React, Spring Boot, Python, cybersecurity, web development, REST APIs, microservices, IT support"
        canonicalUrl="https://francisbahati.com"
        structuredData={structuredData}
      />
      <main className="main">
        <section id="hero" className="hero section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="hero-content">
                  <h1 data-aos="fade-up" data-aos-delay="200">
                    Building{" "}
                    <span className="highlight">Secure & Scalable</span> Digital
                    Solutions
                  </h1>
                  <br></br>
                  <h3 data-aos="fade-up" data-aos-delay="300" style={{ letterSpacing: "6px", marginLeft: "90px" }} >
                  I'm Bahati 
                  </h3>
              
                  <h2 data-aos="fade-up" data-aos-delay="300" style={{marginLeft: "80"}}>
                    Your {" "}
                    <span ref={typedRef} className="typed"></span>
                  </h2>
                  <p data-aos="fade-up" data-aos-delay="400">
                   Innovative and results-driven Full Stack Developer with 2 years of 
                   experience in React, Dart, Java, JavaScript, and Python. Focused on 
                   building scalable, secure, and end-to-end web applications, with 
                   strong skills in cybersecurity, networking, database management, 
                   and complete IT solutions.
                  </p>
                  <div
                    className="hero-actions"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <a href="/portfolio" className="btn btn-primary">
                      View My Projects
                    </a>
                    <a href="/contact" className="btn btn-outline">
                      Get In Touch
                    </a>
                  </div>
                  <div
                    className="social-links"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <a href="tel:+255 621 215 286">
                      <i className="bi bi-phone"></i>
                    </a>
                    <a href="mailto:francebahati89@gmail.com">
                      <i className="bi bi-envelope"></i>
                    </a>
                    <a
                      href="https://github.com/bahati03"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div
                  className="hero-image"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="image-wrapper">
                    <img
                      src="assets/img/profile/bahati.jpg"
                      alt="Francis Bahati - Full Stack Developer & Cybersecurity Expert"
                      className="img-fluid"
                    />
                    <div className="floating-elements">
                      <div
                        className="floating-card design"
                        data-aos="fade-left"
                        data-aos-delay="700"
                      >
                        <i className="bi bi-code-slash"></i>
                        <span>Full Stack</span>
                      </div>
                      <div
                        className="floating-card code"
                        data-aos="fade-right"
                        data-aos-delay="800"
                      >
                        <i className="bi bi-shield-lock"></i>
                        <span>Security</span>
                      </div>
                      <div
                        className="floating-card creativity"
                        data-aos="fade-up"
                        data-aos-delay="900"
                      >
                        <i className="bi bi-database"></i>
                        <span>Database</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
