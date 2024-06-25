import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/index.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dashboard from "./pages/Dashboard.jsx";
import Destination from "./pages/Destination.jsx";
import Gigs from "./pages/Gigs.jsx";
import HomePageContent from "./pages/HomePageContent.jsx";
import Banner from "./pages/Banner.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import TermsConditions from "./pages/Terms&Conditions.jsx";
import FAQ from "./pages/FAQ.jsx";
import Products from "./pages/Products.jsx";

import SignUp from "./pages/SignUp.jsx";
import { Provider } from "react-redux";
import SignIn from "./pages/SignIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/destination", element: <Destination /> },
      { path: "/gigs", element: <Gigs /> },
      { path: "/homeContent", element: <HomePageContent /> },
      { path: "/banner", element: <Banner /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/t&c", element: <TermsConditions /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/products", element: <Products /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </PersistGate>
);
