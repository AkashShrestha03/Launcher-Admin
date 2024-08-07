import { Empty } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const HomePageContent = () => {
  const [formValues, setFormValues] = useState({});
  const [count, setCount] = useState(0)
  const [table, setTable] = useState([]);

  const [loading, setLoading] = useState(false);
  const { admin } = useSelector((state) => state.admin);

  const headers = ["#", "Heading", "Content"]; //Table headers

  //Get content

  useEffect(()=>{
    setCount(formValues["sub-heading"])
  },[formValues])

  const arr = Object.values(table);
  // console.log(arr);

  const getContent = async () => {
    setLoading(true);
    const res = await fetch(`https://api.launcherr.co/api/Show-Section`);
    const data = await res.json();
    setTable(data);
    if (res.ok) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    getContent();
  }, []);

  // Add/Update section
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value.trim() });
    // console.log(formValues);
    // setCount(formValues["sub-heading"])
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://api.launcherr.co/api/Add-Section`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.access_token}`,
        },
        body: JSON.stringify(formValues),
      });

      const response = await res.json();

      if (res.ok) {
        console.log("response", res);
        getContent();
        Swal.fire({
          title: "Update Success",
          text: `Your data has been updated successfully`,
          icon: "success",
        });
      } else {
        console.log(response);
        Swal.fire({
          title: "Failed",
          text: `OOPS.... Something went wrong`,
          icon: "error",
        });
      }
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
        <div className="col-md-8 col-lg-8 px-lg-2 col-xl-7 px-xl-0 px-xxl-3">
          <form
            className="w-100 rounded-1 p-4 border bg-white"
            action="submit"
            onSubmit={handleSubmit}
          >
            <h2>Section Details</h2>
            <div className="mb-3">
            
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                  onChange={handleChange}
                  name="section"
                >
                  <option disabled selected>
                    Section
                  </option>
                  <option>Destination</option>
                  <option>Deals</option>
                  <option>Products</option>
                  <option>Subscription</option>
                  <option>Gigs</option>
                </select>
       

              <label htmlFor="exampleFormControlInput1" className="form-label">
                Heading
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                onChange={handleChange}
                name="heading"
              />
              <label htmlFor="headingContent" className="form-label">
                Content
              </label>
              <textarea
                type="text"
                className="form-control"
                id="headingContent"
                name="sub-heading"
                maxLength={500}
                onChange={handleChange}
              />
              {count && (
                <p className={"text-danger pt-2"}>
                  {count.length >= 500 && "You've exceeded the words limit!"}
                </p>
              )}
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary px-3 rounded-3">
                Update
              </button>
            </div>
          </form>
        </div>
        <>
          <h5 className="mb-0">Sections</h5>
          <hr />
          {arr.length > 0 && arr ? (
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
                        {arr.map((section, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="text-wrap">{section.heading}</td>
                            <td className="text-wrap">
                              {section["sub-heading"]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          ) : loading ? (
            <div className="d-flex justify-content-center">
              <div className="card">
                <div className="card-body">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Empty />
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default HomePageContent;
