import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Skills from "./components/skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route element={<Home />} path={"/"} />
            <Route element={<Skills />} path={"/skills"} />
            <Route element={<Projects />} path={"/projects"} />
            <Route element={<Contact />} path={"/contact"} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
