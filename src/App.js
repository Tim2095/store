import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import Products, { loader as productLoader } from "./components/Products";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact, { formAction } from "./pages/Contact";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import SubmittedForm from "./pages/SubmittedForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
          loader: productLoader,
        },
        {
          path: 'products/:productId',
          element: <ProductDetails />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
          action: formAction,
        },
        {
          path: 'submitted-form',
          element: <SubmittedForm />
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
