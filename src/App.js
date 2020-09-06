import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

function App() {
  const fill = "hii ajay";
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          {fill}
          <p>Test Burger King</p>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
