import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout"; // Create this component
import HomePage from "../home/HomePage";
import About from "../about/About";
import Service from "../service/Service";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import NotFound from "../pagenotfound/NotFound";
import Resume from "../resume/Resume";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />

          <Route path="services" element={<Service />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
        </Route>

        {/* 404 Page - Important for production! */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
