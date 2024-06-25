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
import "./assets/plugins/apexcharts-bundle/js/apex-custom";
import "./assets/js/app.js";
import "./assets/plugins/apexcharts-bundle/js/apexcharts.min.js";
import { useState } from "react";

const App = () => {
  const [toggled, setToggled] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return (
    <div
      className={`wrapper ${toggled ? "toggled" : ""} ${
        isSidebarHovered ? "sidebar-hovered" : ""
      } ${isToggled ? "toggled" : ""}`}
    >
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
    </div>
  );
};

export default App;
