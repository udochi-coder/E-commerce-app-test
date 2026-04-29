import { useParams, Link } from "react-router-dom";
import { useGetProductByIdQuery } from "../apis/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductByIdQuery(id);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  const categoryLabels = {
    "electronics": "Electronics",
    "jewelery": "Jewelry",
    "men's clothing": "Men's Clothing",
    "women's clothing": "Women's Clothing",
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <p className="text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-indigo-600">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.title.slice(0, 30)}...</span>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        
            <div className="flex items-center justify-center bg-gray-50 rounded-lg p-8">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-96 object-contain"
              />
            </div>

            
            <div>
              <p className="text-sm text-indigo-600 uppercase tracking-wide mb-2">
                {categoryLabels[product.category] || product.category}
              </p>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < Math.round(product.rating?.rate || 4) ? "text-yellow-500" : "text-gray-300"}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-600 ml-2">
                  ({product.rating?.count || 0} reviews)
                </span>
              </div>
              <p className="text-4xl font-bold text-indigo-600 mb-6">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-600 mb-8">
                {product.description || "Premium quality product available at an unbeatable price. Order now to avail special discounts!"}
              </p>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Add to Cart
                </button>
                <Link
                  to="/products"
                  className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;