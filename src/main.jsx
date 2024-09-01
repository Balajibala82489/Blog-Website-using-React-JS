import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Theme from "./uiTheme/Theme.js";
import ErrorPage from "./router/RouterError.jsx";

import Root from "./router/PrivateRoot.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import MissionaryOfMercy from "./pages/MissionaryOfMercy";
import Contact from "./pages/Contact";
import PhotoAlbum from "./pages/PhotoAlbum";
import MyBooks from "./pages/MyBooks";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [{ path: "home", element: <Home /> }],
        errorElement: <ErrorPage />,
      },
      { path: "missionary_of_mercy", element: <MissionaryOfMercy /> },
      { path: "contact", element: <Contact /> },
      { path: "home/about", element: <About /> },
      { path: "home/photo_album", element: <PhotoAlbum /> },
      { path: "home/my_books", element: <MyBooks /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={Theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
