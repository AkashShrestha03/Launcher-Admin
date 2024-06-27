import { useDispatch } from "react-redux";
import { signOut } from "../store/adminSlice";

const Header = (props) => {
  const dispatch = useDispatch()
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
                  <img
                    src="./images/avatars/avatar-1.png"
                    className="user-img"
                    alt=""
                  />
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex align-items-center">
                      <img
                        src="./images/avatars/avatar-1.png"
                        alt=""
                        className="rounded-circle"
                        width="54"
                        height="54"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0 dropdown-user-name">Jhon Deo</h6>
                        <small className="mb-0 dropdown-user-designation text-secondary">
                          HR Manager
                        </small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="pages-user-profile.html">
                    <div className="d-flex align-items-center">
                      <div className="">
                        <i className="bi bi-person-fill"></i>
                      </div>
                      <div className="ms-3">
                        <span>Account</span>
                      </div>
                    </div>
                  </a>
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
