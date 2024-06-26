import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { registerSuccessful } from "./store/adminSlice";

const SignUp = () => {
  const INITIAL_VALUE = {
    name: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(INITIAL_VALUE);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value.trim() });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.launcherr.co/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );
      const res_data = await response.json();
      if (response.ok) {
        navigate("/");
        setLoading(false);
        dispatch(registerSuccessful())
      } else {
        setLoading(false);
        setErrorMsg(res_data.email || res_data.password);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div class="wrapper bg-register">
      <main class="authentication-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-5 mx-auto mt-5 pt-5">
              <div class="card shadow rounded-5 overflow-hidden">
                <div class="card-body p-4 p-sm-5">
                  <h5 class="card-title">Sign Up</h5>
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
                            class="form-control radius-30 ps-5"
                            id="inputName"
                            required
                            name="name"
                            onChange={handleOnChange}
                            placeholder="Enter Name"
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
                            required
                            onChange={handleOnChange}
                            class="form-control radius-30 ps-5"
                            id="inputEmailAddress"
                            name="email"
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
                            required
                            onChange={handleOnChange}
                            class="form-control radius-30 ps-5"
                            id="inputChoosePassword"
                            placeholder="Enter Password"
                          />
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="d-grid">
                          <button
                            type="submit"
                            class="btn btn-warning radius-30"
                          >
                            {loading ? "Loading..." : "Sign Up"}
                          </button>
                        </div>
                      </div>
                      <div class="col-12">
                        <p class="mb-0">
                          Already have an account?{" "}
                          <Link to={"/"}>Sign in here</Link>
                        </p>
                      </div>
                    </div>
                  </form>
                  {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
