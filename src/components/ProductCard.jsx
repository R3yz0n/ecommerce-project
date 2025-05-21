import React from "react";

const ProductCard = ({ productItem }) => {
  return (
    <div className="flex flex-col gap-4 px-4 py-4 transition-shadow duration-300 bg-white border rounded-lg shadow-md border-slate-200 w-72 hover:shadow-xl">
      <img
        src={productItem.image}
        alt={productItem.title}
        className="object-cover transition-transform duration-300 rounded-md h-80 hover:scale-105"
      />
      <h2 className="text-2xl font-semibold text-gray-800 line-clamp-1">{productItem.title}</h2>
      <p className="text-gray-600 line-clamp-2">{productItem.description}</p>
      <h3 className="text-2xl font-bold text-indigo-600">
        <span className="text-slate-800">Price: </span> {productItem.price}
      </h3>
      <h3 className="text-2xl font-bold text-indigo-600">
        <span className="text-slate-800">Rate: </span>
        {productItem.rating.rate}
      </h3>
    </div>
  );
};

export default ProductCard;
