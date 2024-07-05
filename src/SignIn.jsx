import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { registerComplete, signInSuccessAdmin } from "./store/adminSlice";
import { Alert } from "@mui/material";

const SignIn = () => {
  const INITIAL_VALUE = {
    email: "",
    password: "",
  };
  const { registerSuccess } = useSelector((state) => state.admin);
  const [formValues, setFormValues] = useState(INITIAL_VALUE);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value.trim() });
    dispatch(registerComplete())
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://api.launcherr.co/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const response = await res.json();
      console.log("admin data", response);
      if (response.access_token) {
        dispatch(signInSuccessAdmin(response));
        navigate("/");
        setLoading(false);
      } else {
        setErrorMsg(response.error || response.password);
        setLoading(false);
      }
    } catch (error) {
      console.log("eorr", error);
      setErrorMsg(error);
      setLoading(false);
    }
  };

  return (
    <main className="authentication-content bg-login">
      <div className="container-fluid">
        <div className="row justify-content-center ">
          <div className="col-12 col-lg-5 mx-auto mt-5 pt-5">
            <div className="card shadow rounded-5 overflow-hidden mt-5">
              <div className="card-body p-4 p-sm-5 mt-2">
                <h5 className="card-title">Sign In</h5>

                <form className="form-body mt-4" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="inputEmailAddress" className="form-label">
                        Email Address
                      </label>
                      <div className="ms-auto position-relative">
                        <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                          <i className="bi bi-envelope-fill"></i>
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          onChange={handleChange}
                          className="form-control radius-30 ps-5"
                          id="inputEmailAddress"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputChoosePassword" className="form-label">
                        Enter Password
                      </label>
                      <div className="ms-auto position-relative">
                        <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                          <i className="bi bi-lock-fill"></i>
                        </div>
                        <input
                          type="password"
                          name="password"
                          required
                          onChange={handleChange}
                          className="form-control radius-30 ps-5"
                          id="inputChoosePassword"
                          placeholder="Enter Password"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          checked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      {" "}
                      <Link>Forgot Password ?</Link>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-primary radius-30"
                        >
                          {loading ? "Loading..." : "Sign In"}
                        </button>
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="mb-0">
                        Don't have an account yet?{" "}
                        <Link to={"/signup"}>Sign up here</Link>
                      </p>
                    </div>
                  </div>
                </form>

                {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
                {registerSuccess && (
                  <Alert severity="success">SignUp Successful! Please Signin.</Alert>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
