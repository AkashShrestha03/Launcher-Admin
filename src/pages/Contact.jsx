import React from 'react'

const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="row mx-0 justify-content-center">
        <div className="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0 px-xxl-3">
          <form className="w-100 rounded-1 p-4 border bg-white" action="submit">
            <h2>Contact Details</h2>
            <div className="mb-3">
              <label for="email" className="form-label">
                Company Name
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                name="company_name"
              />
              <label for="email" className="form-label">
                Company Address
              </label>
              <input
                type="email"
                name="company_address"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
              <label for="email" className="form-label">
                Company Email
              </label>
              <input
                type="email"
                name="company_email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
              <label for="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                name="company_contact"
              />
              <label for="address" className="form-label">
                Company Timing
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="company_timing"
              />
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary px-3 rounded-3">
                Update
              </button>
              <button
                type="submit"
                className="btn btn-danger px-3 mx-3 rounded-3"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact
