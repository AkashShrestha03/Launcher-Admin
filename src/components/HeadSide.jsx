import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/adminSlice";
import { Avatar, Modal } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Link } from "react-router-dom";
import AccountModal from "./Modals";
import { useState } from "react";

const Header = (props) => {
  const dispatch = useDispatch()
  const {admin} = useSelector(state=> state.admin)
   const [open, setOpen] = useState(false);
   const handleOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
  return (
    <header className="top-header">
      <nav className="navbar navbar-expand gap-3">
        <div
          className="mobile-toggle-icon fs-3"
          onClick={() => props.onToggle(true)}
        >
          <i className="bi bi-list"></i>
        </div>
        <div className="top-navbar-right ms-auto">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item search-toggle-icon">
              <a className="nav-link" href="#">
                <div className="">
                  <i className="bi bi-search"></i>
                </div>
              </a>
            </li>

            <li className="nav-item dropdown dropdown-user-setting">
              <a
                className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                href="#"
                data-bs-toggle="dropdown"
              >
                <div className="user-setting d-flex align-items-center">
                  <Avatar>{admin.user.name[0]}</Avatar>
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex align-items-center">
                      <Avatar>{admin.user.name[0]}</Avatar>
                      <div className="ms-3">
                        <h6 className="mb-0 dropdown-user-name">
                          {admin.user.name}
                        </h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to={"/"} onClick={handleOpen}>
                    <div className="d-flex align-items-center">
                      <div className="">
                        <i className="bi bi-person-fill"></i>
                      </div>
                      <div className="ms-3">
                        <span>Account</span>
                      </div>
                    </div>
                  </Link>
                  <AccountModal open={open} close={(open)=>handleClose(open)}/>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => dispatch(signOut())}
                  >
                    <div className="d-flex align-items-center">
                      <div className="">
                        <i className="bi bi-lock-fill"></i>
                      </div>
                      <div className="ms-3">
                        <span>Logout</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
     
    </header>
  );
};

export default Header;
