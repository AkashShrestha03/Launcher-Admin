import React, { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const TermsConditions = () => {
  const [formValues, setFormValues] = useState([]);
  const { admin } = useSelector((state) => state.admin);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value.trim() });
    console.log(formValues);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://api.launcherr.co/api/term-conditions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.access_token}`,
        },
        body: JSON.stringify(formValues),
      });

      const response = await res.json();
      console.log("response", response);
      if(res.ok){
        Swal.fire({
          title: "Update Success",
          text: `Your data has been updated successfully`,
          icon: "success",
        });
      }else{
          Swal.fire({
            title: "Failed",
            text: `OOPS.... Something went wrong`,
            icon: "error",
          });
      }
    } catch (error) {
      console.log(error);
    
    }
  };
  return (
    <div className="container-fluid ">
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-12 px-lg-2 col-xl-8 px-xl-0 px-xxl-3">
          <form
            className="w-100 rounded-1 p-4 border bg-white"
            action="submit"
            onSubmit={handleSubmit}
          >
            <h2>Terms & Conditions</h2>
            <div className="mb-3">
              <textarea
                type="text"
                rows={10}
                name="content"
                className="form-control"
                id="t&c"
                onChange={handleChange}
              />
            </div>

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

export default TermsConditions;
