import { useEffect, useState } from "react";
import Select from "react-select";
const options = [
  { value: "destination", label: "Destination" },
  { value: "products", label: "Products" },
  { value: "subscription", label: "Subscription" },
];

const Coupons = () => {
  const [table, setTable] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const headers = ["#", "Coupon Code","Coupon Place", "Discount", "Actions"];


  const getCoupons = async () => {
    const res = await fetch(`https://api.launcherr.co/api/Show-Coupon`);
    const data = await res.json();
    setTable(data.Coupon);
    console.log("Hello",data);
  };

  console.log("table",table);

  useEffect(() => {
    getCoupons();
  }, []);

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValues({ ...formValues, [name]: value.trim() });
      console.log(formValues);
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmit(true);

      try {
        const res = await fetch(`https://api.launcherr.co/api/Add-QueAndAns`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          authentication:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTkyMjYwODgsImV4cCI6MTcxOTIyOTY4OCwibmJmIjoxNzE5MjI2MDg4LCJqdGkiOiIwQld4MTM3cEdJT2JjaE90Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.hRH-eHNJ889_91jDbMXkEo4V7oJtoDWeOYQu-rz3x1s",
          body: JSON.stringify(formValues),
        });

        const response = await res.json();

        console.log("response", response);
        if (res.ok) {
          setFaq(true);
          getFAQ();
        }
        Swal.fire({
          title: "Update Success",
          text: `You data has been added successfully`,
          icon: "success",
        });
      } catch (error) {
        console.log(error);
      }
    };



  return (
    <div className="container-fluid">
      <div className="row mx-0 justify-content-center">
        <div className="col-md-8 col-lg-8 px-lg-2 col-xl-7 px-xl-0 px-xxl-3">
          <form
            className="w-100 rounded-1 p-4 border bg-white"
            action="submit"
            // onSubmit={handleSubmit}
          >
            <h2>Coupons</h2>
            <div className="mb-3">
              <Select
                isMulti
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                className="mb-3"
              />

              <label for="exampleFormControlInput1" className="form-label">
                Coupon Code
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                // onChange={handleChange}
                name="heading"
              />
              <label for="headingContent" className="form-label">
                Discount
              </label>
              <input
                type="number"
                className="form-control"
                id="headingContent"
                name="sub-heading"
                // onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary px-3 rounded-3"
                data-bs-toggle="modal"
                // data-bs-target={success ? "#deleteModal" : ""}
              >
                Update
              </button>
            </div>
          </form>
        </div>
        <>
          <h5 className="mb-0">Sections</h5>
          <hr />
          {table ? (
            <>
              <div className="card mt-4">
                <div className="card-body">
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
                        {table.map((section, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="text-wrap">{section.coupon_code}</td>
                            <td className="text-wrap">
                              {section.coupon_places}
                            </td>
                            <td className="text-wrap">{section.discount}</td>
                            <td>
                              <div className="table-actions d-flex align-items-center gap-3 fs-6">
                                <a
                                  className="text-warning cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-placement="bottom"
                                  data-bs-target="#editModal"
                                  title="Edit"
                                  onClick={() => {
                                    setSelected(ques.id);
                                    console.log(ques.id);
                                  }}
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
                                            name="Question"
                                            // onChange={handleEditChange}
                                          />
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Answer"
                                            name="Answer"
                                            // onChange={handleEditChange}
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
                                          data-bs-dismiss="modal"
                                          // onClick={() => handleEditSubmit()}
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
                                  // onClick={() => setSelected(ques)}
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
                                          data-bs-dismiss="modal"
                                          // onClick={() =>
                                          //   handleDelete(selected.id)
                                          // }
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
          ) : (
            <div class="card">
              <div class="card-body">
                <div class="spinner-border" role="status">
                  {" "}
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Coupons;
