import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main";
import About from "../../pages/About/About";
import Account from "../../pages/Account/Account";
import Blog from "../../pages/Blog/Blog";
import Cart from "../../pages/Cart/Cart";
import Checkout from "../../pages/Checkout/Checkout";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import PrivacyPolicy from "../../pages/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "../../pages/RefundPolicy/RefundPolicy";
import Login from "../../pages/Registration/Login";
import Registration from "../../pages/Registration/Registration";
import ReturnPolicy from "../../pages/ReturnPolicy/ReturnPolicy";
import SignUp from "../../pages/SignUp/SignUp";
import Category from "../../pages/Single/Category";
import ProductDetails from "../../pages/Single/ProductDetails";
import TermsCondition from "../../pages/TermsCondition/TermsCondition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
      },

      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/account",
        element: <Account></Account>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/terms_condition",
        element: <TermsCondition></TermsCondition>,
      },
      {
        path: "/refund",
        element: <RefundPolicy></RefundPolicy>,
      },
      {
        path: "/return",
        element: <ReturnPolicy></ReturnPolicy>,
      },
    ],
  },
]);

export default router;
