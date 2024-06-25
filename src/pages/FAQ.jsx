import React, { useState } from "react";

const FAQ = () => {
  const headers = ["#", "Question", "Answer", "Actions"];
  const faq = [
    {
      question: "This is a question?",
      answer: "This is an answer.",
    },
    {
      question: "This is a question?",
      answer: "This is an answer.",
    },
    {
      question: "This is a question?",
      answer: "This is an answer.",
    },
    {
      question: "This is a question?",
      answer: "This is an answer.",
    },
    {
      question: "This is a question?",
      answer: "This is an answer.",
    },
  ];


    const [formValues, setFormValues] = useState({});
    const [Faq, setFaq] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false);
  

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValues({ ...formValues, [name]: value.trim() });
      console.log(formValues);
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmit(true);

      try {
        const res = await fetch(`https://launcherr.co/api/Add-QueAndAns`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          authentication:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTkyMjYwODgsImV4cCI6MTcxOTIyOTY4OCwibmJmIjoxNzE5MjI2MDg4LCJqdGkiOiIwQld4MTM3cEdJT2JjaE90Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.hRH-eHNJ889_91jDbMXkEo4V7oJtoDWeOYQu-rz3x1s",
          body: JSON.stringify(formValues),
        });

        const response = await res.json();
        if(res.ok){
          setFaq(true)
        }
        console.log("response", response);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <>
      <h5 className="mb-0">FAQ</h5>
      <hr />
      <div className="card mt-4">
        <div className="card-body">
          <div className=" input-group d-flex gap-3">
            {" "}
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#FAQ_add"
            >
              Add New
            </button>
          </div>
          <div className="d-flex align-items-center">
            <div className="ms-auto position-relative d-flex gap-3">
              <div
                className="modal fade"
                id="FAQ_add"
                tabIndex="-1"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">New Question</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form className="d-flex flex-column justify-content-center gap-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Question"
                          name="Question"
                          onChange={handleChange}
                        />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Answer"
                          name="Answer"
                          onChange={handleChange}
                        />
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        data-bs-dismiss={Faq ? "modal" : ""}
                        onClick={handleSubmit}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive mt-3">
            <table
              id="example"
              className="table table-striped table-bordered"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index + header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {faq.map((ques, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="text-wrap">{ques.question}</td>
                    <td>{ques.answer}</td>

                    <td>
                      <div className="table-actions d-flex align-items-center gap-3 fs-6">
                        <a
                          className="text-primary cursor-pointer"
                          data-bs-toggle="modal"
                          data-bs-placement="bottom"
                          title="Views"
                          data-bs-target="#viewModal"
                        >
                          <i className="bi bi-eye-fill"></i>
                        </a>
                        {/* View Modal */}
                        <div
                          className="modal fade"
                          id="viewModal"
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Details</h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="d-flex flex-column justify-content-center gap-3">
                                  <input
                                    readOnly
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Question"
                                    value={"question"}
                                  />
                                  <input
                                    readOnly
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Answer"
                                    value={"answer"}
                                  />
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          className="text-warning cursor-pointer"
                          data-bs-toggle="modal"
                          data-bs-placement="bottom"
                          data-bs-target="#editModal"
                          title="Edit"
                        >
                          <i className="bi bi-pencil-fill"></i>
                        </a>
                        {/* Edit Modal */}
                        <div
                          className="modal fade"
                          id="editModal"
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Edit</h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="d-flex flex-column justify-content-center gap-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Question"
                                  />
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Answer"
                                  />
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          className="text-danger cursor-pointer"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                          data-bs-placement="bottom"
                          title="Delete"
                        >
                          <i className="bi bi-trash-fill"></i>
                        </a>
                        {/* Delete Modal */}
                        <div
                          className="modal fade"
                          id="deleteModal"
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Delete</h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                Are you sure want to delete this field?
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
