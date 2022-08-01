import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/home/Home";
import BeginnersGuide from "./components/pages/beginner's guide/BeginnersGuide";
import Services from "./components/pages/Services";
import Blog from "./components/pages/Blog";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Onboarding from "./components/pages/beginner's guide/Onboarding";
import CreateContent from "./components/pages/beginner's guide/CreateContent";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/beginners-guide" element={<BeginnersGuide />} />

        <Route path="/beginners-guide/onboarding" element={<Onboarding />} />

        <Route path="/create" element={<CreateContent />} />

        <Route path="/services" element={<Services />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/publisher/login" element={<Login />} />

        <Route path="/publisher/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
