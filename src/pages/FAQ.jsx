import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const FAQ = () => {
  const headers = ["#", "Question", "Answer", "Actions"];
  const [formValues, setFormValues] = useState({});
  const [Faq, setFaq] = useState(false);
  const { admin } = useSelector((state) => state.admin);
  const [table, setTable] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [selected, setSelected] = useState({});
  const [search, setSearch] = useState("");

  // Get FAQ

  const getFAQ = async () => {
    const res = await fetch(`https://api.launcherr.co/api/Show-QueAndAns`);
    const data = await res.json();
    setTable(data);
    console.log(data);
  };

  useEffect(() => {
    getFAQ();
  }, []);

  // Add New FAQ

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value.trim() });
    console.log(formValues);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://api.launcherr.co/api/Add-QueAndAns`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.access_token}`,
        },
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
      Swal.fire({
        title: "Failed",
        text: `OOPS.... Something went wrong`,
        icon: "error",
      });
      console.log(error);
    }
  };

  // Edit
  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value.trim() });
    console.log(formValues);
  };
  const handleEditSubmit = async () => {
    setIsSubmit(true);

    try {
      const res = await fetch(
        `https://api.launcherr.co/api/Update/QueAndAns/${selected}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.access_token}`,
          },

          body: JSON.stringify(formValues),
        }
      );

      const response = await res.json();

      console.log("response", response);
      if (res.ok) {
        setFaq(true);
        getFAQ();
      }
      Swal.fire({
        title: "Update Success",
        text: `Your data has been updated successfully`,
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: `OOPS.... Something went wrong`,
        icon: "error",
      });
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://api.launcherr.co/api/Delete/QueAndAns/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: ` Bearer ${admin.access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const deleted = await res.json();

      if (res.ok) {
        getFAQ();
      }
      Swal.fire({
        title: "Delete Success",
        text: `Your data has been removed successfully`,
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: `OOPS.... Something went wrong`,
        icon: "error",
      });
      console.error(error);
    }
  };

  return (
    <>
      <h5 className="mb-0">FAQ</h5>
      <hr />
      {table ? (
        <>
          <div className="card mt-4">
            <div className="card-body">
              <div className=" input-group d-flex gap-3">
                {" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
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
                            data-bs-dismiss="modal"
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
                    {table.length > 0
                      ? table
                          .filter((ques) => {
                            return search === ""
                              ? ques
                              : ques.Question.toLowerCase().includes(
                                  search.toLowerCase()
                                );
                            //  ||
                            // product.productPrice.includes(search);
                            // product.quantity.includes(search) ||
                          })
                          .map((ques, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td className="text-wrap">{ques.Question}</td>
                              <td>{ques.Answer}</td>

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
                                              onChange={handleEditChange}
                                            />
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Enter Answer"
                                              name="Answer"
                                              onChange={handleEditChange}
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
                                            onClick={() => handleEditSubmit()}
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
                                    onClick={() => setSelected(ques)}
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
                                          <h5 className="modal-title">
                                            Delete
                                          </h5>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          ></button>
                                        </div>
                                        <div className="modal-body">
                                          Are you sure want to delete this
                                          field?
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
                                            onClick={() =>
                                              handleDelete(selected.id)
                                            }
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
                          ))
                      : null}
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
  );
};

export default FAQ;
