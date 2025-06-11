import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load product");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return <div className="flex justify-center items-center h-64 text-xl">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;
  if (!product) return null;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row bg-gray-100 rounded-xl shadow-md overflow-hidden">
        <div className="md:w-1/2 flex items-center justify-center p-6">
          <img src={product.image} alt={product.title} className="max-h-[300px] object-contain" />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-sm italic text-gray-500">{product.category}</p>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600">${product.price}</p>
          <button className="mt-auto w-full md:w-fit bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
