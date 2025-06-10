// components/ProductCardSkeleton.jsx
const ProductCardSkeleton = () => {
  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow animate-pulse">
      <div className="w-full h-40 bg-gray-300 rounded mb-4" />
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  );
};

export default ProductCardSkeleton;
