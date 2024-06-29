import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const About = () => {
  const [formValues, setFormValues] = useState({});
  const [resp, setResp] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.admin);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    try {
      const res = await fetch(`https://api.launcherr.co/api/Add-About`, {
        method: "POST",
        headers: { "Content-Type": "application/json",
          Authorization: `Bearer ${admin.access_token}`
        },
       
        body: JSON.stringify(formValues),
      });

      const response = await res.json();

      console.log("admin data", response);
      if (response.ok) {
        setResp(response.message);
      }
      Swal.fire({
        title: "Update Success",
        text: `Your data has been updated successfully`,
        icon: "success",
      });
      console.log("hello", resp);
    } catch (error) {
       Swal.fire({
         title: "Failed",
         text: `OOPS.... Something went wrong`,
         icon: "error",
       });
      console.log(error);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row mx-0 justify-content-center">
        <div className="col-md-7 col-lg-5 px-lg-2 col-xl-6 px-xl-0 px-xxl-3">
          <form
            className="w-100 rounded-1 p-4 border bg-white"
            action="submit"
            enctype="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <h2>About Details</h2>
            <div className="mb-3">
              <label for="aboutHeading" className="form-label">
                Heading{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="aboutHeading"
                name="heading"
                onChange={handleChange}
              />
              <label for="exampleFormControlInput1" className="form-label">
                About Content{" "}
              </label>
              <textarea
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="content"
                onChange={handleChange}
              />
            </div>
            <label className="d-block mb-4">
              <span className="form-label d-block">Enter a video URL</span>
              <input
                type="text"
                className="form-control"
                id="aboutURL"
                name="url"
                onChange={handleChange}
              />
            </label>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary px-3 rounded-3">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
