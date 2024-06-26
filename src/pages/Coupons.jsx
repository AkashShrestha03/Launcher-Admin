const Coupons = () => {
  return (
    <div className="container-fluid">
      <div className="row mx-0 justify-content-center">
        <div className="col-md-8 col-lg-8 px-lg-2 col-xl-7 px-xl-0 px-xxl-3">
          <form className="w-100 rounded-1 p-4 border bg-white" action="submit">
            <h2>Add Coupons</h2>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Coupons
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="coupon"
              />
            </div>
        

            <div className="mb-3">
              <button type="submit" className="btn btn-primary px-3 rounded-3">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
