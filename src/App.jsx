import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import SearchPage from "./pages/SearchPage";
import SIngleGifPage from "./pages/SIngleGifPage";
import Favorite from "./pages/Favorite";
import GifProvider from "./context/Context";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/:category", element: <Categories /> },
        { path: "/search/:query", element: <SearchPage /> },
        { path: "/:type/:slug", element: <SIngleGifPage /> },
        { path: "/favorites", element: <Favorite /> },
      ],
    },
  ]);
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
};

export default App;
