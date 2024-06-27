import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Swal from "sweetalert2";
const Banner = () => {
 const [table, setTable] = useState([]);
  const { admin } = useSelector((state) => state.admin);
 const [banner, setBanner] = useState({
  });
const [bannerImage, setBannerImage] = useState([]);
const headers =["#", "Content", "Banner"]

  const getBanner = async () => {
    const res = await fetch(`https://api.launcherr.co/api/Show-Banner`);
    const data = await res.json();
    setTable(data);
    console.log(data);
  };

  useEffect(() => {
    getBanner();
  }, []);


const handleChange = (e) => {
    if (e.target.name === "Banner_image") {
      setBannerImage(e.target.files[0]);
    } else {
      setBanner({ ...banner, [e.target.name]: e.target.value.trim() });
    }
    console.log("add", banner);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const formData = new FormData();
     for (const key in banner) {
       formData.append(key, banner[key]);
     }
     if (bannerImage) {
       formData.append("Banner_image", bannerImage);
     }

      const res = await fetch(`https://api.launcherr.co/api/Add-Banner`, {
        method: "POST",
        headers: {
          Authorization: ` Bearer ${admin.access_token}`,
        },
        body: formData,
      });
      console.log(res);
      Swal.fire({
        title: "Update Success",
        text: `Your data has been updated successfully`,
        icon: "success",
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
          getBanner();
      } else {
        const data = await res.text();
        console.log({ data });
      }
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
    <div className="container-fluid">
      <div className="row mx-0 justify-content-center">
        <div className="col-md-7 col-lg-5 px-lg-2 col-xl-6 px-xl-0 px-xxl-3">
          <form
            className="w-100 rounded-1 p-4 border bg-white"
            action="submit"
            enctype="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <h2>Upload Banners</h2>
            <div className="mb-3">
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                onChange={handleChange}
                name="Banner_No"
              >
                <option selected>Banner</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <label for="exampleFormControlInput1" className="form-label">
                Banner Content{" "}
              </label>
              <input
                type="text"
                className="form-control"
                name="Banner_heading"
                onChange={handleChange}
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <label className="d-block mb-4">
              <span className="form-label d-block">Upload Banner</span>
              <input
                required
                name="Banner_image"
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
          <h5 className="mb-0">Banners</h5>
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
                        {table.map((banner, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="text-wrap">
                              {banner.Banner_heading}
                            </td>
                            <td>
                              <img
                                src={banner.Banner_image}
                                style={{ height: "100px", width: "150px" }}
                                alt=""
                              />
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

export default Banner
