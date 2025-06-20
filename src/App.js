import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
