import { useEffect, useState } from "react";

import Swal from "sweetalert2";


const Client = () => {
   const [client, setClient] = useState({});
   const [clientImage, setClientImage] = useState([]);
    const [table, setTable] = useState([]);
      const [selected, setSelected] = useState({});
  
const headers = ["#", "URL", "Logo", "Actions" ]
     const getClient = async () => {
       const res = await fetch(`https://api.launcherr.co/api/Show-Client`);
       const data = await res.json();
       setTable(data);
       console.log(data);
     };

     useEffect(() => {
       getClient();
     }, []);

   const handleChange = (e) => {
     if (e.target.name === "image") {
       setClientImage(e.target.files[0]);
     } else {
       setClient({ ...client, [e.target.name]: e.target.value.trim() });
     }
     console.log("add", client);
   };

   

   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       const formData = new FormData();
       for (const key in client) {
         formData.append(key, client[key]);
       }
       if (clientImage) {
         formData.append("image", clientImage);
       }

       const res = await fetch(`https://api.launcherr.co/api/Add-Client`, {
         method: "POST",
         headers: {
           Authorization:
             " Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTkyMjYwODgsImV4cCI6MTcxOTIyOTY4OCwibmJmIjoxNzE5MjI2MDg4LCJqdGkiOiIwQld4MTM3cEdJT2JjaE90Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.hRH-eHNJ889_91jDbMXkEo4V7oJtoDWeOYQu-rz3x1s",
         },
         body: formData,
       });
      
       if (res.ok) {
         const data = await res.json();
         console.log(data);
           getClient();
        
       } else {
         const data = await res.text();

         console.log({ data });
       }

         Swal.fire({
           title: "Successfully added",
           text: `You data has been added successfully`,
           icon: "success",
         });
     } catch (error) {
       console.error(error);
     }
   };
   const handleEditChange = (e) => {
     if (e.target.name === "image") {
       setClientImage(e.target.files[0]);
     } else {
       setClient({ ...client, [e.target.name]: e.target.value.trim() });
     }
     console.log("add", client);
   };
 

   const handleEditSubmit = async (e) => {
     e.preventDefault();
     try {
       const formData = new FormData();
       for (const key in client) {
         formData.append(key, client[key]);
       }
       if (clientImage) {
         formData.append("image", clientImage);
       }

       const res = await fetch(`https://api.launcherr.co/api/Add-Client`, {
         method: "POST",
         headers: {
           Authorization:
             " Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTkyMjYwODgsImV4cCI6MTcxOTIyOTY4OCwibmJmIjoxNzE5MjI2MDg4LCJqdGkiOiIwQld4MTM3cEdJT2JjaE90Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.hRH-eHNJ889_91jDbMXkEo4V7oJtoDWeOYQu-rz3x1s",
         },
         body: formData,
       });
       console.log(res);
       if (res.ok) {
         const data = await res.json();
         console.log(data);
        
       } else {
         const data = await res.text();

         console.log({ data });
       }
         Swal.fire({
           title: "Update Success",
           text: `You data has been updated successfully`,
           icon: "success",
         });
     } catch (error) {
       console.error(error);
     }
   };

     const handleDelete = async (id) => {
       try {
         const res = await fetch(
           `https://api.launcherr.co/api/Delete/Client/${id}`,
           {
             method: "DELETE",
             headers: {
               Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTkyMjYwODgsImV4cCI6MTcxOTIyOTY4OCwibmJmIjoxNzE5MjI2MDg4LCJqdGkiOiIwQld4MTM3cEdJT2JjaE90Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.hRH-eHNJ889_91jDbMXkEo4V7oJtoDWeOYQu-rz3x1s`,
               "Content-Type": "application/json",
             },
           }
         );
         const deleted = await res.json();

         if (res.ok) {
           getClient();
         }
         Swal.fire({
           title: "Delete Success",
           text: `You data has been removed successfully`,
           icon: "success",
         });
       } catch (error) {
         console.error(error);
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
            <h2>Upload Client</h2>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                URL
              </label>
              <input
                type="text"
                className="form-control"
                name="url"
                onChange={handleChange}
                id="exampleFormControlInput1"
              />
            </div>
            <label className="d-block mb-4">
              <span className="form-label d-block">Image</span>
              <input
                required
                name="image"
                onChange={handleChange}
                type="file"
                className="form-control"
              />
            </label>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary px-3 rounded-3">
                Update
              </button>
            </div>
          </form>
        </div>
        <>
          <h5 className="mb-0">Clients</h5>
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
                        {table.map((client, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="text-wrap">{client.url}</td>
                            <td>
                              <img
                                src={client.image}
                                style={{ height: "100px", width: "150px" }}
                                alt=""
                              />
                            </td>

                            <td>
                              <div className="table-actions d-flex align-items-center gap-3 fs-6">
                                {/* <a
                                  className="text-warning cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-placement="bottom"
                                  data-bs-target="#editModal"
                                  title="Edit"
                                >
                                  <i className="bi bi-pencil-fill"></i>
                                </a> */}
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
                                            name="url"
                                            onChange={handleEditChange}
                                          />
                                          <input
                                            type="file"
                                            className="form-control"
                                            placeholder="Enter Answer"
                                            name="image"
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
                                          onSubmit={handleEditSubmit}
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
                                  onClick={() => setSelected(client)}
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
}

export default Client
