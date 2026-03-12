# React Routing Showcase

A educational project demonstrating basic routing concepts in React using **React Router v7**.

## Project Overview

This is a showcase application that demonstrates the fundamentals of client-side routing in React. It includes essential routing features such as navigation between different pages, dynamic route parameters, nested routes, and error handling.

## Key Routing Features

### Basic Concepts Covered

- **Route Definition**: Setting up routes with paths and corresponding components
- **Navigation**: Moving between different pages without full page reloads
- **Dynamic Routing**: Creating routes with parameters (e.g., `/products/:id`)
- **Nested Routes**: Organizing routes hierarchically with parent-child relationships
- **Error Handling**: Managing and displaying error pages when routes don't exist
- **Root Layout**: Using a layout component that persists across all pages

## Project Structure

```
src/
├── App.js                          # Main app with router configuration
├── index.js                        # React app entry point
├── index.css                       # Global styles
├── components/
│   ├── MainNavigation.js          # Navigation component
│   └── MainNavigation.module.css   # Navigation styles
└── pages/
    ├── Root.js                    # Root layout wrapper
    ├── Home.js                    # Home page (index route)
    ├── Product.js                 # Products list page
    ├── ProductDetails.js          # Product detail page with dynamic route
    └── ErrorPage.js               # Error/404 page
```

## Routing Configuration

The app uses `createBrowserRouter` to define the following route structure:

```
/ (Root Layout)
├── / (Home - index route)
├── /products (Products List)
└── /products/:id (Product Details)
```

- The root route `/` renders the `RootLayout` component which serves as a persistent layout
- All child routes inherit from the root layout
- If a route doesn't match, the `ErrorPage` component is displayed
- Dynamic segment `:id` allows accessing individual product details

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:

```bash
cd react-routing
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (irreversible)

## Key Concepts

### RouterProvider

Wraps the entire app with the router configuration, making routing functionality available throughout the component tree.

### createBrowserRouter

Modern React Router API that creates a router with support for all latest features including error boundaries, data loading, and more.

### Nested Routes

Child routes inherit the layout from their parent route, reducing code duplication and maintaining consistent UI across pages.

### Dynamic Route Segments

Segments like `:id` capture URL parameters that can be accessed within components to fetch or display specific data.

### Error Handling

The `errorElement` prop on routes catches errors and unmatched routes, providing a fallback UI experience.

## Code Examples

### 1. Router Configuration (App.js)

```javascript
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
```

### 2. Navigation with Links (MainNavigation.js)

```javascript
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
```

### 3. Accessing Dynamic Route Parameters (ProductDetails.js)

```javascript
import { useParams } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams();

    return (
        <div>
            <h1>Product Details</h1>
            <p>Displaying product with ID: {id}</p>
        </div>
    );
}

export default ProductDetails;
```

### 4. Root Layout with Outlet (Root.js)

```javascript
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

function RootLayout() {
    return (
        <div className={classes.root}>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;
```

The `<Outlet />` component renders the current child route, allowing the layout to persist while content changes.

### 5. Error Boundary (ErrorPage.js)

```javascript
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage;
```

### 6. Programmatic Navigation (Using useNavigate)

```javascript
import { useNavigate } from "react-router-dom";

function ProductList() {
    const navigate = useNavigate();

    const handleProductClick = (productId) => {
        navigate(`/products/${productId}`);
    };

    return (
        <button onClick={() => handleProductClick(1)}>View Product 1</button>
    );
}

export default ProductList;
```

## Dependencies

- **react** (v19.0.0) - Core React library
- **react-dom** (v19.0.0) - React DOM rendering
- **react-router-dom** (v7.13.1) - Declarative routing library for React

## Learn More

- [React Router Documentation](https://reactrouter.com/)
- [React Documentation](https://react.dev/)

## License

This project is open source and available for educational purposes.
