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
        dispatch(registerSuccessful());
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
    <div className="wrapper bg-register">
      <main className="authentication-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-5 mx-auto mt-5 pt-5">
              <div className="card shadow rounded-5 overflow-hidden">
                <div className="card-body p-4 p-sm-5">
                  <div
                    className="d-flex mx-auto justify-content-center rounded"
                    style={{
                      height: "4rem",
                      width: "20rem",
                      objectFit: "cover",
                    }}
                  >
                    <img
                      src="./Launcherr_Logo_PNG.png"
                      style={{
                        width: "600px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">Sign Up</h5>
                  <form className="form-body" onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-12 ">
                        <label htmlFor="inputName" className="form-label">
                          Name
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <i className="bi bi-person-circle"></i>
                          </div>
                          <input
                            type="text"
                            className="form-control radius-30 ps-5"
                            id="inputName"
                            required
                            name="name"
                            onChange={handleOnChange}
                            placeholder="Enter Name"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="inputEmailAddress"
                          className="form-label"
                        >
                          Email Address
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <i className="bi bi-envelope-fill"></i>
                          </div>
                          <input
                            type="email"
                            required
                            onChange={handleOnChange}
                            className="form-control radius-30 ps-5"
                            id="inputEmailAddress"
                            name="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="inputChoosePassword"
                          className="form-label"
                        >
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
                            onChange={handleOnChange}
                            className="form-control radius-30 ps-5"
                            id="inputChoosePassword"
                            placeholder="Enter Password"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            type="submit"
                            className="btn btn-warning radius-30"
                          >
                            {loading ? "Loading..." : "Sign Up"}
                          </button>
                        </div>
                      </div>
                      <div className="col-12">
                        <p className="mb-0">
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
