import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AddDestinationModal,
  DeleteDestinationModal,
  EditDestinationModal,
  ViewImagesModal,
} from "../components/Modals";
import { Pagination } from "@mui/material";
import { Empty } from "antd";

const Destination = () => {
  const [table, setTable] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState({ open: false, image: null });
  const [openDelete, setOpenDelete] = useState({ open: false, id: null });
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState({ open: false, id: null });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const headers = [
    "#",
    "Destination",
    "Short Description",
    "Description",
    "Thumbnail",
    "More Images",
    "Actions",
  ];

  const getDestinations = async () => {
    const res = await fetch(`https://api.launcherr.co/api/showDestination`);
    const response = await res.json();
    console.log(res);
    console.log(response);
    setTable(response);
  };

  useEffect(() => {
    getDestinations();
  }, []);

  // Pagination

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = table ? Math.ceil(table.length / itemsPerPage) : 1;
  const currentItems =
    table.length > 0 &&
    table
      .filter((data) => {
        return search === ""
          ? data
          : data.name.toLowerCase().includes(search.toLowerCase());
      })
      .slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  // Close Modal

  const handleClose = () => {
    setOpen({ open: false, image: null });
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
    getDestinations();
  };
  const handleCloseEdit = () => {
    setOpenEdit({ open: false, id: null });
    getDestinations();
  };
  const handleCloseDelete = () => {
    setOpenDelete({ open: false, id: null });
    getDestinations();
  };

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
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => setOpenAdd(true)}
              >
                Add New
              </button>
              <AddDestinationModal
                open={openAdd}
                onClose={(openAdd) => handleCloseAdd(openAdd)}
              />
            </div>
          </div>
          <div className="table-responsive">
            {table ? (
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
                  {currentItems &&
                    currentItems.map((data, index) => (
                      <tr key={index + data.name}>
                        <td>{index + 1}</td>
                        <td>{data.name}</td>
                        <td className="text-wrap">{data.short_description}</td>
                        <td className="text-wrap">{data.description}</td>
                        <td className="d-flex justify-content-center align-items-center">
                          <img
                            src={data.thumbnail_image}
                            height={60}
                            alt="thumbnail"
                          />
                        </td>
                        <td className="text-center">
                          {" "}
                          <Link
                            onClick={() => {
                              setOpen({ open: true, image: data.images });
                            }}
                          >
                            View
                          </Link>
                          <ViewImagesModal
                            open={open.open}
                            onClose={(open) => handleClose(open)}
                            images={open.image}
                          />
                        </td>
                        <td>
                          <div className="table-actions d-flex align-items-center justify-content-center gap-3 fs-6">
                            <Link
                             
                              className="text-warning"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Edit"
                              onClick={() =>
                                setOpenEdit({ open: true, id: data.id })
                              }
                            >
                              <i className="bi bi-pencil-fill"></i>
                            </Link>
                            <EditDestinationModal
                              open={openEdit.open}
                              onClose={(openEdit) => handleCloseEdit(openEdit)}
                              id={openEdit.id}
                            />
                            <Link
                              className="text-danger"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Delete"
                              onClick={()=>setOpenDelete({open: true, id: data.id })}
                            >
                              <i className="bi bi-trash-fill"></i>
                            </Link>
                            <DeleteDestinationModal open={openDelete.open} onClose={(openDelete)=>handleCloseDelete(openDelete)}
                              id={openDelete.id}/>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            ) : (
              <Empty />
            )}
          </div>
          <div className="d-flex justify-content-center">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handleChangePage}
              color="primary"
              className="mt-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
