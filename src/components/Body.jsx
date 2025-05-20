import React from "react";
import ProductCard from "./ProductCard";

const Body = () => {
  return (
    <section className="flex flex-col gap-4 px-2 py-2 ">
      <div className="flex gap-3">
        <input
          type="text"
          class="w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          placeholder="Search..."
        />
        Search
      </div>
      <div className="flex flex-wrap justify-center gap-4 product-items">
        <ProductCard
          title="Ipad Pro 2020"
          price={190}
          description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
          imageUrl="https://hips.hearstapps.com/hmg-prod/images/apple-ipad-mini-2024-review-lead-672a0d53e55b6.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
        />
        <ProductCard
          title="Samsung Galaxy Tab S7"
          price={100.2}
          description="Samsung Galaxy Tab S7 is a powerful tablet with a stunning display and versatile features."
          imageUrl="https://hips.hearstapps.com/hmg-prod/images/apple-ipad-mini-2024-review-lead-672a0d53e55b6.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
        />
        <ProductCard
          title="Samsung Galaxy Tab S7"
          price={100.2}
          description="Samsung Galaxy Tab S7 is a powerful tablet with a stunning display and versatile features."
          imageUrl="https://hips.hearstapps.com/hmg-prod/images/apple-ipad-mini-2024-review-lead-672a0d53e55b6.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
        />
        <ProductCard
          title="Samsung Galaxy Tab S7"
          price={100.2}
          description="Samsung Galaxy Tab S7 is a powerful tablet with a stunning display and versatile features."
          imageUrl="https://hips.hearstapps.com/hmg-prod/images/apple-ipad-mini-2024-review-lead-672a0d53e55b6.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
        />
      </div>
    </section>
  );
};

export default Body;
