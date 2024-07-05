import { Outlet } from "react-router-dom";
import Header from "./components/HeadSide";
import Sidebar from "./components/Sidebar";

// External CSS Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/css/bootstrap-extended.css";
import "./assets/css/icons.css";
import "./assets/css/light-theme.css";
import "./assets/css/pace.min.css";
import "./assets/css/style.css";

// Js imports

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "./SignIn.jsx";
import { signOut } from "./store/adminSlice.js";

const App = () => {
  const [toggled, setToggled] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const { admin, tokenExpiry } = useSelector((state) => state.admin);
const dispatch = useDispatch()

 useEffect(() => {
   if (tokenExpiry) {
     const timeLeft = tokenExpiry - Date.now();
     if (timeLeft <= 0) {
       dispatch(signOut());
     } else {
       const timer = setTimeout(() => {
         dispatch(signOut());
       }, timeLeft);

       return () => clearTimeout(timer);
     }
   }
 }, [tokenExpiry, dispatch]);

  return (
    <div
      className={`wrapper ${toggled ? "toggled" : ""} ${
        isSidebarHovered ? "sidebar-hovered" : ""
      } ${isToggled ? "toggled" : ""}`}
    >
      {admin ? <> 
    <Header
        onToggle={(isToggled) => setIsToggled(isToggled)}
        toggle={isToggled}
      />
      <Sidebar
        onToggle={(toggled) => setToggled(toggled)}
        Toggled={toggled}
        mobileToggle={isToggled}
        mobile={(isToggled) => setIsToggled(isToggled)}
        onMoveEnter={(isSidebarHovered) =>
          setIsSidebarHovered(isSidebarHovered)
        }
        onMoveExit={(isSidebarHovered) => setIsSidebarHovered(isSidebarHovered)}
      />
      <main className="page-content">
        <Outlet />
      </main>
      </> : <SignIn/>}
     
    </div>
  );
};

export default App;
