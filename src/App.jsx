import { Footer } from "./sections";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import ScrollButton from "./components/ScrollButton";
import DetailService from "./pages/DetailService";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
        </Routes>
        <section className="padding-x bg-black padding-t pb-8">
          <Footer />
        </section>
        {/* Scroll button to scroll down or up */}
        <ScrollButton />
      </main>
    </Router>
  );
};

export default App;
