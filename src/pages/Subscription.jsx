import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Subscription_Cards from "../components/Subscription_Cards";
import { Fab, Tooltip } from "@mui/material";
import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";
import { Empty } from "antd";

const Subscription = () => {
  const [formValues, setformValues] = useState({});
  const [table, setTable] = useState([]);
  const [change, setChange] = useState(true);
  const [tableHeading, setTableHeading] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState("");
  const { admin } = useSelector((state) => state.admin);

  const headers = ["#", "Heading", "Sub-heading"];

  //Get Details

  const getDetails = async () => {
    const res = await fetch(`https://api.launcherr.co/api/showJoinOfferAdmin`, {
      headers: {
        Authorization: `Bearer ${admin.access_token}`,
      },
    });
    const response = await res.json();
    console.log(response);
    setTableHeading(response.heading);
    setTable(response.Cards);
  };

  useEffect(() => {
    getDetails();
  }, []);

  //Add Subscription Content
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value.trim() });
    console.log(formValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://api.launcherr.co/api/addJoinOffer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.access_token}`,
        },
        body: JSON.stringify(formValues),
      });

      const response = await res.json();
      if (res.ok) {
        setLoading(false);
        getDetails();
        console.log(response);
        Swal.fire({
          title: "Update Success",
          text: `Your data has been updated successfully`,
          icon: "success",
        });
      } else {
        setLoading(false);
        Swal.fire({
          title: "Failed",
          text: `OOPS.... Something went wrong`,
          icon: "error",
        });
      }
    } catch (error) {
      setLoading(false);
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
      <Tooltip title="Switch">
        <Fab
          color="primary"
          aria-label="add"
          style={{ zIndex: "1" }}
          onClick={() => setChange(!change)}
        >
          <SwitchLeftOutlinedIcon label="Switch" />
        </Fab>
      </Tooltip>
      {change ? (
        <div className="row mx-0 justify-content-center">
          <div className="col-md-8 col-lg-8 px-lg-2 col-xl-7 px-xl-0 px-xxl-3">
            <form
              className="w-100 rounded-1 p-4 border bg-white"
              action="submit"
              onSubmit={handleSubmit}
            >
              <h2>Subscription Details</h2>
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
                  <option label="Main Heading">MainHeading</option>
                  <option>Gigs</option>
                  <option>Travel</option>
                  <option>Coupons</option>
                  <option>Itinerary</option>
                </select>

                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
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
                  Sub-heading
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="headingContent"
                  name="sub_heading"
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
                <button
                  type="submit"
                  className="btn btn-primary px-3 rounded-3"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
          <>
            <h5 className="mb-0">Table</h5>
            <hr />
            {table ? (
              loading ? (
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
                                <td className="text-wrap">{section.heading}</td>
                                <td className="text-wrap">
                                  {section.sub_heading}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </>
              )
            ) : (
              <div>
                <Empty />
              </div>
            )}
          </>
        </div>
      ) : (
        <Subscription_Cards></Subscription_Cards>
      )}
    </div>
  );
};

export default Subscription;
