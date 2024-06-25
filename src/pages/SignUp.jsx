import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validate from "../Validation/SignUp_Validation";

const SignUp = () => {
  const INITIAL_VALUE = {
    name: "",
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(INITIAL_VALUE);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState();
  const navigate = useNavigate();
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value.trim() });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormErrors(Validate(formValues));
    setIsSubmit(true);

    try {
      setLoading(true);
      const response = await fetch(`http://launcherr.co/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authentication:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTkyMjYwODgsImV4cCI6MTcxOTIyOTY4OCwibmJmIjoxNzE5MjI2MDg4LCJqdGkiOiIwQld4MTM3cEdJT2JjaE90Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.hRH-eHNJ889_91jDbMXkEo4V7oJtoDWeOYQu-rz3x1s",
        },
        body: JSON.stringify(formValues),
      });
      const res_data = await response.json();
      console.log(response);
      if (response.ok) {
        navigate("/signin");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
                <h5 class="card-title">Sign Up</h5>
                <p class="card-text mb-5">
                  See your growth and get consulting support!
                </p>
                <form class="form-body" onSubmit={handleSubmit}>
                  <div class="row g-3">
                    <div class="col-12 ">
                      <label for="inputName" class="form-label">
                        Name
                      </label>
                      <div class="ms-auto position-relative">
                        <div class="position-absolute top-50 translate-middle-y search-icon px-3">
                          <i class="bi bi-person-circle"></i>
                        </div>
                        <input
                          type="text"
                          name="name"
                          onChange={handleOnChange}
                          class="form-control radius-30 ps-5"
                          id="inputName"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
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
                          onChange={handleOnChange}
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
                          onChange={handleOnChange}
                          class="form-control radius-30 ps-5"
                          id="inputChoosePassword"
                          placeholder="Enter Password"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                        />
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckChecked"
                        >
                          I Agree to the Trems & Conditions
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="d-grid">
                        <button type="submit" class="btn btn-warning radius-30">
                          Sign Up
                        </button>
                      </div>
                    </div>
                    <div class="col-12">
                      <p class="mb-0">
                        Already have an account?{" "}
                        <Link to={"/signin"}>Sign in here</Link>
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

export default SignUp;
