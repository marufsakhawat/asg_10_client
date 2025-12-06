import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout.jsx";
import Home from "../Pages/Home/Home.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import AddListing from "../AddListing/AddListing.jsx";
import PetsAndSupplies from "../PetsAndSupplies/PetsAndSupplies.jsx";
import ListingDetails from "../ListingDetails/ListingDetails.jsx";
import MyListings from "../MyListings/MyListings.jsx";
import UpdateListing from "../UpdateListing/UpdateListing.jsx";
import MyOrders from "../MyOrders/MyOrders.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";
import CategoryFilteredPage from "../CategoryFilteredPage/CategoryFilteredPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-listing",
        element: (
          <PrivateRoute>
            <AddListing />
          </PrivateRoute>
        ),
      },
      {
        path: "/pets-and-supplies",
        element: <PetsAndSupplies />,
      },
      {
        path: "/listing/:id",
        element: (
          <PrivateRoute>
            <ListingDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-listings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-listing/:id",
        element: (
          <PrivateRoute>
            <UpdateListing />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/category-filtered-product/:categoryName",
        element: <CategoryFilteredPage />,
      },
    ],
  },
]);
