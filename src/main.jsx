import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/index.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Destination from "./pages/Destination.jsx";
import Gigs from "./pages/Gigs.jsx";
import HomePageContent from "./pages/HomePageContent.jsx";
import Banner from "./pages/Banner.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import { Provider } from "react-redux";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import Client from "./pages/Client.jsx";
import Coupons from "./pages/Coupons.jsx";
import Responses from "./pages/Responses.jsx";
import Newsletter from "./pages/Newsletter.jsx";
import Enquiries from "./pages/Enquiries.jsx";
import Subscription from "./pages/Subscription.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/destination", element: <Destination /> },
      { path: "/", element: <Gigs /> },
      { path: "/homeContent", element: <HomePageContent /> },
      { path: "/banner", element: <Banner /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    
      { path: "/faq", element: <FAQ /> },

      { path: "/client", element: <Client /> },
      { path: "/coupons", element: <Coupons /> },
      { path: "/response", element: <Responses /> },
      { path: "/newsletter", element: <Newsletter /> },
      { path: "/enquiries", element: <Enquiries /> },
      { path: "/subscription", element: <Subscription /> },
    ],
  },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </PersistGate>
);
