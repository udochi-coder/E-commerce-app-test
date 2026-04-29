import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/home";
import Products from "../components/Products/products";
import ProductDetails from "../components/Productdetails";
import Cart from "../components/Cart/cart";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <App />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;