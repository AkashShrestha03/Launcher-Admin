import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { signInSuccessAdmin } from "./store/adminSlice";
import Validate from "./Validation/SignUp_Validation";

const SignIn = () => {
  const INITIAL_VALUE = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(INITIAL_VALUE);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(Validate(formValues));
    setIsSubmit(true);

    try {
      const res = await fetch(`https://launcherr.co/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        authentication:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTkyMjYwODgsImV4cCI6MTcxOTIyOTY4OCwibmJmIjoxNzE5MjI2MDg4LCJqdGkiOiIwQld4MTM3cEdJT2JjaE90Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.hRH-eHNJ889_91jDbMXkEo4V7oJtoDWeOYQu-rz3x1s",
        body: JSON.stringify(formValues),
      });

      const response = await res.json();
      console.log("admin data", response);
      if (response.access_token) {
        dispatch(signInSuccessAdmin(response.user));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

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
                      <label for="inputEmailAddress" className="form-label">
                        Email Address
                      </label>
                      <div className="ms-auto position-relative">
                        <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                          <i className="bi bi-envelope-fill"></i>
                        </div>
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          className="form-control radius-30 ps-5"
                          id="inputEmailAddress"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label for="inputChoosePassword" className="form-label">
                        Enter Password
                      </label>
                      <div className="ms-auto position-relative">
                        <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                          <i className="bi bi-lock-fill"></i>
                        </div>
                        <input
                          type="password"
                          name="password"
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
                          for="flexSwitchCheckChecked"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      {" "}
                      <a href="authentication-forgot-password.html">
                        Forgot Password ?
                      </a>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-primary radius-30"
                        >
                          Sign In
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
