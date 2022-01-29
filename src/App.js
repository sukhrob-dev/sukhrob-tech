import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="http://sukhrob-tech.netlify.app/about" element={<About />} />
        <Route path="http://sukhrob-tech.netlify.app/contact" element={<Contact />} />
        <Route path="http://sukhrob-tech.netlify.app/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
