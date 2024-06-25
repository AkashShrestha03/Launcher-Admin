import React, { useState } from 'react'

const TermsConditions = () => {
  
   const [formValues, setFormValues] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);
    const [success, setSuccess] = useState(false);
   

   const handleChange = (event) => {
     const { name, value } = event.target;
     setFormValues({ ...formValues, [name]: value.trim() });
     console.log(formValues);
   };
   const handleSubmit = async (e) => {
     e.preventDefault();
     setIsSubmit(true);

     try {
       const res = await fetch(`https://launcherr.co/api/term-conditions`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         authentication:
           "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTkyMjYwODgsImV4cCI6MTcxOTIyOTY4OCwibmJmIjoxNzE5MjI2MDg4LCJqdGkiOiIwQld4MTM3cEdJT2JjaE90Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.hRH-eHNJ889_91jDbMXkEo4V7oJtoDWeOYQu-rz3x1s",
         body: JSON.stringify(formValues),
       });

       const response = await res.json();
       console.log("response", response);
       if(res.ok){
        setSuccess(true)
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
              <button
                type="submit"
                className="btn btn-primary px-3 rounded-3"
                data-bs-toggle="modal"
                data-bs-target={success === true ? "#deleteModal" : ""}
              >
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

          {/* Success Message */}
          <div
            className="modal fade"
            id="deleteModal"
            tabindex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-success">Update Success</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  Terms and Conditions are succesfully updated.
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;
