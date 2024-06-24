const Destination = () => {
  const headers = ["#", "Name", "State", "City", "Description", "Actions"];
  const data = [
    {
      name: "Shimla",
      state: "Uttrakhand",
      city: "Uttrakhand",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Shimla",
      state: "Uttrakhand",
      city: "Uttrakhand",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Shimla",
      state: "Uttrakhand",
      city: "Uttrakhand",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Shimla",
      state: "Uttrakhand",
      city: "Uttrakhand",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Shimla",
      state: "Uttrakhand",
      city: "Uttrakhand",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Shimla",
      state: "Uttrakhand",
      city: "Uttrakhand",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Shimla",
      state: "Uttrakhand",
      city: "Uttrakhand",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <>
      <h6 className="mb-0 text-uppercase">Destinations</h6>
      <hr />
      <div className="card">
        <div className="card-body">
          <div className="d-flex">
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control w-50"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleVerticallycenteredModal"
              >
                Add New
              </button>
              <div
                class="modal fade"
                id="exampleVerticallycenteredModal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Modal title</h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur.
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table
              id="example"
              className="table table-striped table-bordered"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => (
                  <tr key={index + data.name}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.state}</td>
                    <td>{data.city}</td>
                    <td className="text-wrap">{data.description}</td>
                    <td>
                      <div className="table-actions d-flex align-items-center gap-3 fs-6">
                        <a
                          className="text-primary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Views"
                        >
                          <i className="bi bi-eye-fill"></i>
                        </a>
                        <a
                          href="javascript:;"
                          className="text-warning"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Edit"
                        >
                          <i className="bi bi-pencil-fill"></i>
                        </a>
                        <a
                          className="text-danger"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Delete"
                        >
                          <i className="bi bi-trash-fill"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
