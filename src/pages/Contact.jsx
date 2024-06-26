import React, { useState } from 'react'
import Swal from "sweetalert2";

const Contact = () => {
   const [formValues, setFormValues] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValues({ ...formValues, [name]: value.trim() });
      console.log(formValues);
    };
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const res = await fetch(`https://api.launcherr.co/api/Add-Details`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          authentication:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTkyMjYwODgsImV4cCI6MTcxOTIyOTY4OCwibmJmIjoxNzE5MjI2MDg4LCJqdGkiOiIwQld4MTM3cEdJT2JjaE90Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.hRH-eHNJ889_91jDbMXkEo4V7oJtoDWeOYQu-rz3x1s",
          body: JSON.stringify(formValues),
        });

        
        const response = await res.json();
        Swal.fire({
          title: "Update Success",
          text: `You data has been updated successfully`,
          icon: "success",
        });
        console.log("response", res);
      } catch (error) {
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
            onSubmit={handleSubmit}
          >
            <h2>Contact Details</h2>
            <div className="mb-3">
              <label for="email" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Company Name"
                name="company_name"
                onChange={handleChange}
              />
              <label for="email" className="form-label">
                Company Address
              </label>
              <input
                type="text"
                name="company_address"
                className="form-control"
                id="email"
                placeholder="Company Address"
                onChange={handleChange}
              />
              <label for="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                name="company_email"
                className="form-control"
                id="email"
                onChange={handleChange}
                placeholder="name@example.com"
              />
              <label for="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                onChange={handleChange}
                id="phone"
                name="company_contact"
              />
              <label for="address" className="form-label">
                Company Timing
              </label>
              <input
                type="text"
                onChange={handleChange}
                placeholder="9AM - 5PM"
                className="form-control"
                id="address"
                name="company_timing"
              />
            </div>

            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary px-3 rounded-3"
              >
                Update
              </button>
            </div>
          </form>
         
        </div>
      </div>
    </div>
  );
}

export default Contact
