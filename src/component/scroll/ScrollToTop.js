import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll behavior to smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`scroll-top d-flex align-items-center justify-content-center ${
        isVisible ? "active" : ""
      }`}
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "40px",
        height: "40px",
        backgroundColor: "#ff5e00ff",
        color: "white",
        borderRadius: "50%",
        cursor: "pointer",
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "all 0.3s ease-in-out",
        zIndex: 9999,
        border: "none",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
      }}
    >
      <i className="bi bi-arrow-up-short"></i>
    </div>
  );
};

export default ScrollToTop;
