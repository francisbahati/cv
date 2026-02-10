import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../scroll/ScrollToTop";

export default function Layout() {
  return (
    <div className="app">
      <Header/>
      <main>
        <Outlet /> {/* This is where page content renders */}
      </main>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}
