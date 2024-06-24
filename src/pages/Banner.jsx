import React from 'react'

const Banner = () => {



  return (
    <div className="container-fluid">
      <div className="row mx-0 justify-content-center">
        <div className="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0 px-xxl-3">
          <form
            className="w-100 rounded-1 p-4 border bg-white"
            action="submit"
            enctype="multipart/form-data"
          >
            <h2>Upload Banner - 1</h2>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Banner Content{" "}
              </label>
              <input
                type="text"
                className="form-control"
                name='BannerText'
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
              <button type="submit" className="btn btn-danger px-3 mx-3 rounded-3">
                Delete
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0 px-xxl-3">
          <form
            className="w-100 rounded-1 p-4 border bg-white"
            action="submit"
            enctype="multipart/form-data"
          >
            <h2>Upload Banner - 2</h2>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Banner Content{" "}
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <label className="d-block mb-4">
              <span className="form-label d-block">Your photo</span>
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
              <button type="submit" className="btn btn-danger px-3 mx-3 rounded-3">
                Delete
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0 px-xxl-3">
          <form
            className="w-100 rounded-1 p-4 border bg-white"
            action="submit"
            enctype="multipart/form-data"
          >
            <h2>Upload Banner - 3</h2>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Banner Content{" "}
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <label className="d-block mb-4">
              <span className="form-label d-block">Your photo</span>
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
              <button type="submit" className="btn btn-danger px-3 mx-3 rounded-3">
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Banner
