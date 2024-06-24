

const Gigs = () => {
  
  return (
    <>
      <h6 class="mb-0 text-uppercase">Gigs</h6>
      <hr />
      <div class="card">
        <div class="card-body">
          <div className=" input-group d-flex gap-3 mb-3">
            {" "}
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#FAQ_add"
            >
              Add New
            </button>
          </div>
          <div class="table-responsive">
            <table
              id="example"
              class="table table-striped table-bordered"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Employer</th>
                  <th>Validity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Shimla</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>Goa Beach</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>Taj Mahal</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>Qutub Minar</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>Bhangardh</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>Cannaught Place</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>07</td>
                  <td>Sarojini Nagar</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>08</td>
                  <td>Kathmandu</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>09</td>
                  <td>Vaishno Devi</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Shimla</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Shimla</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Shimla</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Shimla</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Shimla</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Shimla</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Shimla</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Shimla</td>
                  <td class="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>XYz Company</td>
                  <td>2 Months</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Views"
                      >
                        <i class="bi bi-eye-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Edit"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gigs;
