import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const About = () => {
  const [formValues, setFormValues] = useState({});
  const [cardValues, setCardValues] = useState({});
  const [about, setAbout] = useState({});
  const [resp, setResp] = useState();
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.admin);

  const getAbout = async () => {
    const res = await fetch(`https://api.launcherr.co/api/Show-About`);
    const data = await res.json();
    setAbout(data);
  };

  useEffect(() => {
    getAbout();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value.trim() });
    console.log(formValues);
  };
  const handleChangeCard = (event, index) => {
    const { name, value } = event.target;
    setCardValues({ ...cardValues, [name]: value.trim() });
    console.log(cardValues);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const res = await fetch(`https://api.launcherr.co/api/Add-About`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.access_token}`,
        },

        body: JSON.stringify({ ...formValues, Cards: cardValues }),
      });

      const response = await res.json();

      console.log("admin data", response);
      if (res.ok) {
        setResp(response.message);
        Swal.fire({
          title: "Update Success",
          text: `Your data has been updated successfully`,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Failed",
          text: `OOPS.... Something went wrong`,
          icon: "error",
        });
      }
      console.log("hello", resp);
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: `OOPS.... Something went wrong`,
        icon: "error",
      });
      console.log(error);
    }
  };
  const handleSubmitCard = async (e) => {
    e.preventDefault();
   

    try {
      const res = await fetch(`https://api.launcherr.co/api/addCard`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.access_token}`,
        },

        body: JSON.stringify(cardValues),
      });

      const response = await res.json();

      console.log("card data", response);
      if (res.ok) {
  
        Swal.fire({
          title: "Update Success",
          text: `Your data has been updated successfully`,
          icon: "success",
        });
      } else {
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
    <div className="container-fluid row">
      <div className="row  col">
        <div className=" px-lg-2 col-xl-12 px-xl-0 px-xxl-3">
          <form
            className="w-100 rounded-1 p-4 border bg-white"
            action="submit"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <h2>About Details</h2>
            <div className="mb-3">
              <label htmlFor="aboutHeading" className="form-label">
                Heading{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="aboutHeading"
                name="heading"
                placeholder={about.heading}
                onChange={handleChange}
              />
              <label htmlFor="exampleFormControlInput1" className="form-label">
                About Content{" "}
              </label>
              <textarea
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="content"
                placeholder={about.content}
                onChange={handleChange}
              />
            </div>
            <div className="d-block mt-2 mb-4">
              <label htmlFor="aboutURL" className="form-label d-block">
                Enter a video URL
              </label>
              <input
                type="text"
                className="form-control"
                placeholder={about.url}
                id="aboutURL"
                name="url"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary px-3 rounded-3">
                Update
              </button>
              <button
                type="button"
                className="btn btn-primary mx-3 px-3 rounded-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
              >
                Add Cards
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5>About Cards</h5>
           
            </div>
            <div class="modal-body">
              {" "}
              <div className="row mx-0 justify-content-center col">
                <div className=" px-lg-2 col-xl-12 px-xl-0 px-xxl-3">
                  <form
                    className="w-100 rounded-1 p-4  bg-white"
                    action="submit"
                    encType="multipart/form-data"
                    onSubmit={handleSubmitCard}
                  >
                    <div className="mb-3">
                      <select
                        className="form-select mb-3"
                        aria-label="Default select example"
                        onChange={handleChangeCard}
                        name="Card_No"
                      >
                        <option selected disabled>
                          Cards
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="aboutHeading" className="form-label">
                        Heading{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="aboutHeading"
                        name="Card_Heading"
                        onChange={handleChangeCard}
                      />
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Sub-heading{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        name="Card_Subheading"
                        onChange={handleChangeCard}
                      />
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
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                aria-bs-label="Close"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
