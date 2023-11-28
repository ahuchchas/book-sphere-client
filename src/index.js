import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AuthProvider from "./contexts/AuthProvider";
import ProtectedRoute from "./pages/ProtectedRoute";

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
        path: "books",
        element: (
          <ProtectedRoute>
            <Books></Books>
          </ProtectedRoute>
        ),
      },
      {
        path: "books/:bookId",
        element: (
          <ProtectedRoute>
            <BookDetails></BookDetails>
          </ProtectedRoute>
        ),
      },
      {
        path: "addBook",
        element: (
          <ProtectedRoute>
            <AddBook></AddBook>
          </ProtectedRoute>
        ),
      },
      {
        path: "editBook",
        element: (
          <ProtectedRoute>
            <EditBook></EditBook>
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
