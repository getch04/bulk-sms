import { Footer } from "./sections";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import ScrollButton from "./components/ScrollButton";
import ContactUs from "./pages/ContactUs";
import DetailService from "./pages/DetailService";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/Faq";
import HowItWorks from "./pages/HowItWorks";
import PrivacyPolicy from "./pages/Privacy";

const App = () => {
  return (
    <Router>
      <Nav />
      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services/detail" element={<DetailService />} />
          <Route path="/services" element={<Services />} />
          <Route path="/payment-policy" element={<Services />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <section className="padding-x bg-black padding-t pb-8 w-full">
          <Footer />
        </section>
        {/* Scroll button to scroll down or up */}
        <ScrollButton />
      </main>
    </Router>
  );
};

export default App;
