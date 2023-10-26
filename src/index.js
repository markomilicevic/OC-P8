import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page from "./layouts/Page";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Data-Router is mandatory in order to have the `loader`s and `errorElement`s
// SOURCE: https://reactrouter.com/en/dev/route/error-element
const router = createBrowserRouter([
	{
		element: <Page />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/listing/:listingId",
				element: <Listing />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
