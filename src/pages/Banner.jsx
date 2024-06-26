import React from 'react'

const Banner = () => {



  return (
    <div className="container-fluid">
      <div className="row mx-0 justify-content-center">
        <div className="col-md-7 col-lg-5 px-lg-2 col-xl-6 px-xl-0 px-xxl-3">
          <form
            className="w-100 rounded-1 p-4 border bg-white"
            action="submit"
            enctype="multipart/form-data"
          >
            <h2>Upload Banners</h2>
            <div className="mb-3">
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                
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
                
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <label className="d-block mb-4">
              <span className="form-label d-block">Upload Banner</span>
              <input
                required
                name="photo"
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
