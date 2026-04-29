import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">PeaceStore</span>
          </Link>

          
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-white"
            >
              Products
            </Link>
            <Link
              to="/login"
              className="text-white"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-white"
            >
              Register
            </Link>
          </div>

          
          <Link to="/cart" className="relative p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 8a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
            {cartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;