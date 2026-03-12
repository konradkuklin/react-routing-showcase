import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,

        children: [
            { index: true, element: <HomePage /> },
            {
                path: "/products",
                element: <ProductPage />,
            },
            {
                path: "/products/:id",
                element: <ProductDetails />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
