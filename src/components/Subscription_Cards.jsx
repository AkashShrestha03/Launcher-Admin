import { Empty } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const Subscription_Cards = () => {
  const [formValues, setformValues] = useState({});
  const [table, setTable] = useState([]);
  const [tableHeading, setTableHeading] = useState([]);
  const [loading, setLoading] = useState(false);
  const [feature, setFeature] = useState();
  const { admin } = useSelector((state) => state.admin);

  const headers = [
    "#",
    "Title",
    "Features",
    "Monthly Price",
    "Annually Price",
    "Button Label",
  ];

  //Get Details

  const getDetails = async () => {
    const res = await fetch(`https://api.launcherr.co/api/showSubCardAdmin`, {
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

  const handleChangeFeatures = (e) => {
    const { value } = e.target;
    setFeature(value);

  };

  //Add Subscription Content
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, features: [feature], [name]: value.trim() });
    console.log(formValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formValues);
    try {
      const res = await fetch(`https://api.launcherr.co/api/addSubCard`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.access_token}`,
        },
        body: JSON.stringify(formValues),
      });

      const response = await res.json();
      if (res.ok) {
        getDetails();
        setLoading(false);
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
      <div className="row mx-0 justify-content-center">
        <div className="col-md-8 col-lg-8 px-lg-2 col-xl-7 px-xl-0 px-xxl-3">
          <form
            className="w-100 rounded-1 p-4 border bg-white"
            action="submit"
            onSubmit={handleSubmit}
          >
            <h2>Subscription Cards</h2>
            <div className="mb-3">
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                onChange={handleChange}
                name="card_no"
              >
                <option disabled selected>
                  Card Number
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>

              <label htmlFor="exampleFormControlInput1" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                onChange={handleChange}
                name="title"
              />
              <label htmlFor="features" className="form-label">
                Features
              </label>
              <input
                type="text"
                className="form-control"
                id="features"
                name="features"
                onChange={handleChangeFeatures}
              />

              <p className={"text-danger pt-2"}>
                Note : All features have to be written comma separated.
              </p>
              <label htmlFor="price" className="form-label">
                Price(Monthly)
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                onChange={handleChange}
              />
              <label htmlFor="price_2" className="form-label">
                Price(Annually)
              </label>
              <input
                type="number"
                className="form-control"
                id="price_2"
                name="price_2"
                onChange={handleChange}
              />
              <label htmlFor="button_label" className="form-label">
                Button Lable
              </label>
              <input
                type="text"
                className="form-control"
                id="button_label"
                name="buttonLabel"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary px-3 rounded-3">
                Update
              </button>
            </div>
          </form>
        </div>
        <>
          <h5 className="mb-0">Table</h5>
          <hr />
          {table.length > 0 && table ? (
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
                            <td className="text-wrap">{section.title}</td>
                            <td className="text-wrap">
                              {JSON.parse(section.features).join(", ")}
                            </td>
                            <td className="text-wrap">{section.price}</td>
                            <td className="text-wrap">
                              {section.price_2 ? section.price_2 : "NA"}
                            </td>
                            <td className="text-wrap">{section.buttonLabel}</td>
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

export default Subscription_Cards;
