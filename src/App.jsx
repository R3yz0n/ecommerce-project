import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";

const App = () => {
  // Javascript code goes here

  return (
    <BrowserRouter>
      <div className="text-4xl ">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Body />
              </>
            }
          />

          <Route path="/product/:id" element={<SingleProduct />} />
          <Route />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
