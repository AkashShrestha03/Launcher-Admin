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

      <MetisMenu id="menu">
        <li onClick={() => props.mobile(false)}>
          <Link to={"/"}>
            <div className="parent-icon">
              <i className="bi bi-grid-fill"></i>
            </div>
            <div className="ms-2 menu-title">Destinations</div>
          </Link>
        </li>

        <li onClick={() => props.mobile(false)}>
          <Link to={"/"}>
            <div className="parent-icon">
              <i class="bi bi-person-workspace"></i>
            </div>
            <div className="ms-2 menu-title">Employer Gigs</div>
          </Link>
        </li>
        <li onClick={() => props.mobile(false)}>
          <Link to={"/enquiries"}>
            <div className="parent-icon">
              <i class="bi bi-patch-question"></i>
            </div>
            <div className="ms-2 menu-title">Gig Enquiries</div>
          </Link>
        </li>
        <li onClick={() => props.mobile(false)}>
          <Link to={"https://ecom.launcherr.co/admin"}>
            <div className="parent-icon">
              <i className="bi bi-basket2-fill"></i>
            </div>
            <div className="ms-2 menu-title">Products</div>
          </Link>
        </li>
        <li onClick={() => props.mobile(false)}>
          {" "}
          <Link to={"/coupons"}>
            <div className="parent-icon">
              <i className="bi bi-ticket-detailed"></i>
            </div>
            <div className="ms-2 menu-title">Coupons</div>
          </Link>
        </li>
        <li onClick={() => props.mobile(false)}>
          {" "}
          <Link to={"/response"}>
            <div className="parent-icon">
              <i className="bi bi-book"></i>
            </div>
            <div className="ms-2 menu-title">Quiz Responses</div>
          </Link>
        </li>
        <li onClick={() => props.mobile(false)}>
          {" "}
          <Link to={"/newsletter"}>
            <div className="parent-icon">
              <i className="bi bi-envelope-at"></i>
            </div>
            <div className="ms-2 menu-title">Newsletter</div>
          </Link>
        </li>
        <li>
          <a className="has-arrow cursor-pointer">
            <div className="parent-icon">
              <i className="bi bi-file-earmark-richtext"></i>
            </div>
            <div className="menu-title ms-2">Content</div>
          </a>
          <ul>
            <li onClick={() => props.mobile(false)}>
              {" "}
              <Link to={"/homeContent"}>
                <i className="bi bi-circle"></i>Home Page Content
              </Link>
            </li>
            <li onClick={() => props.mobile(false)}>
              {" "}
              <Link to={"/banner"}>
                <i className="bi bi-circle"></i>Banner
              </Link>
            </li>
            <li onClick={() => props.mobile(false)}>
              {" "}
              <Link to={"/client"}>
                <i className="bi bi-circle"></i>Client
              </Link>
            </li>

            <li onClick={() => props.mobile(false)}>
              {" "}
              <Link to={"/about"}>
                <i className="bi bi-circle"></i>About
              </Link>
            </li>
            <li onClick={() => props.mobile(false)}>
              {" "}
              <Link to={"/contact"}>
                <i className="bi bi-circle"></i>Contact
              </Link>
            </li>
            {/* <li onClick={() => props.mobile(false)}>
              {" "}
              <Link to={"/t&c"}>
                <i className="bi bi-circle"></i>Terms & Conditions
              </Link>
            </li> */}
            <li onClick={() => props.mobile(false)}>
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
