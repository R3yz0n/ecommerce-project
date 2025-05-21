import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { ProductItems } from "../utils/mockData";
import Category from "./Category";

const Body = () => {
  return (
    <section className="flex flex-col gap-4 px-2 py-2  text-lg">
      <div className="flex gap-3">
        <input
          type="text"
          className="px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm w-80 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          placeholder="Search..."
        />
        Search
      </div>
      <button className="px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md w-60 hover:bg-blue-700 hover:shadow-lg">
        Top Rated Products
      </button>
      <Category />
      <div className="flex flex-wrap justify-center gap-4 product-items">
        <h2 className="w-full text-xl font-semibold text-gray-800 text-center mb-4">Total Items</h2>
        <ProductCard />
      </div>
    </section>
  );
};

export default Body;
