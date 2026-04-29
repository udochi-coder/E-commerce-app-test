import { Link } from "react-router-dom";
import { useGetProductsQuery, useGetCategoriesQuery } from "../../apis/productApi";
import { useState } from "react";

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const { data: categories } = useGetCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products?.filter((product) => product.category === selectedCategory);

  const categoryLabels = {
    "electronics": "Electronics",
    "jewelery": "Jewelry",
    "men's clothing": "Men's Clothing",
    "women's clothing": "Women's Clothing",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Products</h1>

        
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === "all"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-indigo-50"
            }`}
          >
            All
          </button>
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-indigo-50"
              }`}
            >
              {categoryLabels[category] || category}
            </button>
          ))}
        </div>

        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts?.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-56 p-4 flex items-center justify-center bg-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-indigo-600 uppercase tracking-wide mb-1">
                    {categoryLabels[product.category] || product.category}
                  </p>
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-indigo-600">
                      ${product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-gray-600 ml-1">
                        {product.rating?.rate || "4.5"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;