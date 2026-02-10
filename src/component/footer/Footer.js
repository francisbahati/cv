import React from "react";
export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="copyright text-center ">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">bahati & Hilmara</strong>{" "}
              <span>
                All Rights Reserved
                <br />
              </span>
            </p>
          </div>
          <div className="social-links d-flex justify-content-center">
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
          <div className="credits">
            Designed by <a href="">Developer Francis</a>
          </div>
        </div>
      </footer>
    </>
  );
}
