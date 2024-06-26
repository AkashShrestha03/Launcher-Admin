import React, { useState } from 'react'

const Banner = () => {

 const [banner, setBanner] = useState({
  });
const [bannerImage, setBannerImage] = useState([]);


const handleChange = (e) => {
    if (e.target.name === "productPicture") {
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
     if (productImage) {
       formData.append("productPicture", productImage);
     }

      const res = await fetch(`https://launcherr.co/api/Add-Banner`, {
        method: "POST",
        headers: {
          Authorization:
            " Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTkyMjYwODgsImV4cCI6MTcxOTIyOTY4OCwibmJmIjoxNzE5MjI2MDg4LCJqdGkiOiIwQld4MTM3cEdJT2JjaE90Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.hRH-eHNJ889_91jDbMXkEo4V7oJtoDWeOYQu-rz3x1s",
        },
        body: formData,
        credentials: "include",
      });
      console.log(res);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        getProduct();
        handleClose();
      } else {
        const data = await res.text();

        console.log({ data });
      }
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
            <h2>Upload Banners</h2>
            <div className="mb-3">
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                onChange={handleChange}
                name="section"
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
                name="BannerText"
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
      </div>
    </div>
  );
}

export default Banner
