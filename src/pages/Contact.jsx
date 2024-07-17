import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const Contact = () => {
  const [formValues, setFormValues] = useState({});
  const [contact, setContact] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const { admin } = useSelector((state) => state.admin);

  const getContact = async () => {
    const res = await fetch(`https://api.launcherr.co/api/Show-Details`);
    const data = await res.json();
    setContact(data);
  };

  useEffect(() => {
    getContact();
  }, []);

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
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.access_token}`,
        },

        body: JSON.stringify(formValues),
      });

      const response = await res.json();
      if (res.ok) {
        Swal.fire({
          title: "Update Success",
          text: `You data has been updated successfully`,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Failed",
          text: `OOPS.... Something went wrong`,
          icon: "error",
        });
      }

      console.log("response", res);
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
            onSubmit={handleSubmit}
          >
            <h2>Contact Details</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder={contact.company_name}
                name="company_name"
                onChange={handleChange}
              />
              <label htmlFor="email" className="form-label">
                Company Address
              </label>
              <input
                type="text"
                name="company_address"
                className="form-control"
                id="email"
                placeholder={contact.company_address}
                onChange={handleChange}
              />
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                name="company_email"
                className="form-control"
                id="email"
                onChange={handleChange}
                placeholder={contact.company_email}
              />
              <div>
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  onChange={handleChange}
                  id="phone"
                  min={0}
                  placeholder={contact.company_contact}
                  name="company_contact"
                />
              </div>
              {/* <label htmlFor="address" className="form-label">
                Company Timing
              </label>
              <input
                type="text"
                onChange={handleChange}
                placeholder={contact.company_timing}
                className="form-control"
                id="address"
                name="company_timing"
              /> */}
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

export default Contact;
