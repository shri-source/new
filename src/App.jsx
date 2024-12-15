import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import About from "./Components/About";
import Career from "./Components/Career";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Privacy from "./Components/Privacy";
import Services from "./Components/Services";
import Terms from "./Components/Terms";
import Footer from "./footer/footer";
import Header from "./header/header";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Career" element={<Career />} />
            <Route path="Services" element={<Services />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Privacy" element={<Privacy />} />
            <Route path="Terms" element={<Terms />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
