import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Validate from "../Validation/SignUp_Validation";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const INITIAL_VALUE = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(INITIAL_VALUE);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(Validate(formValues));
    setIsSubmit(true);

    try {
    

      const res = await fetch(`http://launcherr.co/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        authentication:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTkyMjYwODgsImV4cCI6MTcxOTIyOTY4OCwibmJmIjoxNzE5MjI2MDg4LCJqdGkiOiIwQld4MTM3cEdJT2JjaE90Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.hRH-eHNJ889_91jDbMXkEo4V7oJtoDWeOYQu-rz3x1s",
        body: JSON.stringify(formValues),
      });

      const response = await res.json();
      console.log("admin data", response);
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
    <main class="authentication-content mt-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-4 mx-auto">
            <div class="card shadow rounded-5 overflow-hidden">
              <div class="card-body p-4 p-sm-5">
                <h5 class="card-title">Sign In</h5>
                <p class="card-text mb-5">
                  See your growth and get consulting support!
                </p>
                <form class="form-body" onSubmit={handleSubmit}>
                  <div class="d-grid">
                    <a class="btn btn-white radius-30" href="javascript:;">
                      <span class="d-flex justify-content-center align-items-center">
                        <img
                          class="me-2"
                          src="assets/images/icons/search.svg"
                          width="16"
                          alt=""
                        />
                        <span>Sign in with Google</span>
                      </span>
                    </a>
                  </div>
                  <div class="login-separater text-center mb-4">
                    {" "}
                    <span>OR SIGN IN WITH EMAIL</span>
                    <hr />
                  </div>
                  <div class="row g-3">
                    <div class="col-12">
                      <label for="inputEmailAddress" class="form-label">
                        Email Address
                      </label>
                      <div class="ms-auto position-relative">
                        <div class="position-absolute top-50 translate-middle-y search-icon px-3">
                          <i class="bi bi-envelope-fill"></i>
                        </div>
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          class="form-control radius-30 ps-5"
                          id="inputEmailAddress"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <label for="inputChoosePassword" class="form-label">
                        Enter Password
                      </label>
                      <div class="ms-auto position-relative">
                        <div class="position-absolute top-50 translate-middle-y search-icon px-3">
                          <i class="bi bi-lock-fill"></i>
                        </div>
                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          class="form-control radius-30 ps-5"
                          id="inputChoosePassword"
                          placeholder="Enter Password"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          checked=""
                        />
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckChecked"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <div class="col-6 text-end">
                      {" "}
                      <a href="authentication-forgot-password.html">
                        Forgot Password ?
                      </a>
                    </div>
                    <div class="col-12">
                      <div class="d-grid">
                        <button type="submit" class="btn btn-primary radius-30">
                          Sign In
                        </button>
                      </div>
                    </div>
                    <div class="col-12">
                      <p class="mb-0">
                        Don't have an account yet? <Link to={"/signup"}>Sign up here</Link>
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
