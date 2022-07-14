import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/pages/home/Home";
import BeginnersGuide from "./components/pages/beginner's guide/BeginnersGuide";
import Services from "./components/pages/Services";
import Blog from "./components/pages/Blog";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/beginners-guide" element={<BeginnersGuide />} />

        <Route path="/services" element={<Services />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
