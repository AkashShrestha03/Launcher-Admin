import MetisMenu from "@metismenu/react";
import "../../node_modules/metismenujs/dist/metismenujs.css";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <aside
      className="sidebar-wrapper"
      data-simplebar="true"
      onMouseEnter={() => props.onMoveEnter(true)}
      onMouseLeave={() => props.onMoveExit(false)}
    >
      <div className="sidebar-header">
        <div>
          <img
            src="./images/launcher-black-3.jpg"
            className="logo-icon"
            alt="logo icon"
          />
        </div>
        <div>
          <h4 className="logo-text">Launcherr</h4>
        </div>
        <div
          className="toggle-icon ms-auto"
          onClick={
            props.mobileToggle
              ? () => props.mobile(false)
              : props.Toggled
              ? () => props.onToggle(false)
              : () => props.onToggle(true)
          }
        >
          <i className="bi bi-list"></i>
        </div>
      </div>

      <MetisMenu id="menu" class="metismenu">
        <li>
          <Link to={"/"}>
            <div className="parent-icon">
              <i className="bi bi-house-fill"></i>
            </div>
            <div className="ms-2 menu-title">Dashboard</div>
          </Link>
        </li>
        <li>
          <Link to={"/destination"}>
            <div className="parent-icon">
              <i className="bi bi-grid-fill"></i>
            </div>
            <div className="ms-2 menu-title">Destinations</div>
          </Link>
        </li>

        <li>
          <Link to={"/gigs"}>
            <div className="parent-icon">
              <i className="bi bi-droplet-fill"></i>
            </div>
            <div className="ms-2 menu-title">Employer Gigs</div>
          </Link>
        </li>
        <li>
          <Link to={"/products"}>
            <div className="parent-icon">
              <i className="bi bi-basket2-fill"></i>
            </div>
            <div className="ms-2 menu-title">Products</div>
          </Link>
        </li>
        <li>
          <a className="has-arrow cursor-pointer">
            <div className="parent-icon">
              <i className="bi bi-basket2-fill"></i>
            </div>
            <div className="menu-title ms-2">Content</div>
          </a>
          <ul>
            <li>
              {" "}
              <Link to={"/homeContent"}>
                <i className="bi bi-circle"></i>Home Page Content
              </Link>
            </li>
            <li>
              {" "}
              <Link to={"/banner"}>
                <i className="bi bi-circle"></i>Banner
              </Link>
            </li>
            <li>
              {" "}
              <Link to={"/about"}>
                <i className="bi bi-circle"></i>About
              </Link>
            </li>
            <li>
              {" "}
              <Link to={"/contact"}>
                <i className="bi bi-circle"></i>Contact
              </Link>
            </li>
            <li>
              {" "}
              <Link to={"/t&c"}>
                <i className="bi bi-circle"></i>Terms & Condition
              </Link>
            </li>
            <li>
              {" "}
              <Link to={"/faq"}>
                <i className="bi bi-circle"></i>FAQ
              </Link>
            </li>
          </ul>
        </li>
      </MetisMenu>
    </aside>
  );
};

export default Sidebar;
