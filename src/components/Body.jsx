import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Category from "./Category";
import { ProductItems } from "../utils/mockData";
import axios from "axios";
//
const Body = () => {
  const [filteredItems, setFilteredItems] = useState([]); // the first argument is the state variable, the second argument is the function to update the state variable

  const handleTopRatedProducts = () => {
    let filteredProductsByRating = filteredItems.filter((product) => {
      return product.rating.rate > 3; // only true values get stored in an array
    });
    setFilteredItems(filteredProductsByRating);
  };
  useEffect(() => {
    // We will call api here
    async function fetchProducts() {
      const response = await axios.get("https://fakestoreapi.com/products");
      setFilteredItems(response.data);
    }

    fetchProducts();
  }, []);
  return (
    <section className="flex flex-col gap-4 px-2 py-2 mb-10  text-lg">
      <aside className="flex items-center justify-between gap-4 p-4 md:px-6 lg:px-8  rounded-lg">
        <SearchBar items={filteredItems} setItems={setFilteredItems} />
        <button
          onClick={handleTopRatedProducts}
          className="px-6 text-[17px] cursor-pointer py-1.5 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md  hover:bg-blue-700 hover:shadow-lg"
        >
          Top Rated Products
        </button>
        <Category />
      </aside>
      <h2 className="w-full text-xl font-semibold text-gray-800 text-center mb-4">
        Total Items : {filteredItems.length}
      </h2>
      <div className=" mx-auto w-full lg:px-6 md:px-4  grid md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 justify-center gap-4 product-items ">
        {filteredItems.map((product) => {
          return <ProductCard productItem={product} key={product.id} />;
          // THis was the previous code
          // <ProductCard
          //     imageUrl={product.image}
          //     description={product.description}
          //     price={product.price}
          //     title={product.title}
          //     rating={product.rating.rate}
          //   />
        })}
      </div>
    </section>
  );
};

export default Body;

// for this component i used the flowbite
const SearchBar = ({ items, setItems }) => {
  const [searchKey, setSearchKey] = useState("");

  const handleChange = (e) => {
    // console.log();
    setSearchKey(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchKey.toLowerCase())
    );

    setItems(filteredItems);
  };

  return (
    <form className="max-w-lg  w-2/4 mx-auto ml-0">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          onChange={handleChange}
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          onClick={handleClick}
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};
