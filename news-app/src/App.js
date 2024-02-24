import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./compoents/pages/Home";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home q="All" />} />
          <Route path="/All" element={<Home q="All" />} />
          <Route path="/Politics" element={<Home q="Politics" />} />
          <Route path="/Science" element={<Home q="Science" />} />
          <Route path="/Technology" element={<Home q="Technology" />} />
          <Route path="/Education" element={<Home q="Education" />} />
          <Route path="/Crime" element={<Home q="Crime" />} />
          <Route path="/Entertainment" element={<Home q="Entertainment" />} />
          <Route path="/Sports" element={<Home q="Sports" />} />
          <Route path="/Cricket" element={<Home q="Cricket" />} />
          <Route path="/World" element={<Home q="World" />} />
          <Route path="/Covid-19" element={<Home q="Covid-19" />} />
          <Route path="/Jokes" element={<Home q="Jokes" />} />
          <Route path="/*" element={<Home q="Jokes" />} />
        </Routes>
      </div>
    );
  }
}

export default App;
