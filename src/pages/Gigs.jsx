import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AddGigsModal } from "../components/Modals";
import {
  Alert,
  Avatar,
  Box,
  CircularProgress,
  Modal,
  Pagination,
  Snackbar,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 1,
  pt: 2,
  px: 4,
  pb: 3,
};

const Gigs = () => {
  const [table, setTable] = useState([]);
  const [search, setSearch] = useState("");
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(null);
  const [loadingVerified, setLoadingVerified] = useState(null);
  const [loadingEmployer, setLoadingEmployer] = useState(false);
  const [employer, setEmployer] = useState({});
  const [openEmployer, setOpenEmployer] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { admin } = useSelector((state) => state.admin);
  const [openSnack, setOpenSnack] = useState(false);

  const handleClickSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };
  const handleClose = () => {
    setOpen(false);
    getGigs();
  };
  const handleCloseProfile = () => {
    setOpenEmployer(false);
  };

  const headers = [
    "#",
    "Title",
    "Description",
    "Employer",
    "Duration",
    "Status",
    "Verified",
  ];

  // Get Jobs

  const getGigs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.launcherr.co/api/job`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${admin.access_token}`,
        },
      });
      const data = await res.json();
      setTable(data.job);
      if (res.ok) {
        setLoading(false);
      } else {
        setLoading(false);
      }
      console.log(table);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGigs();
  }, []);

  //Update Status

  const handleStatus = async (selectedId) => {
    setLoadingStatus(selectedId);
    try {
      const res = await fetch(
        `https://api.launcherr.co/api/updateJobActive/${selectedId}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${admin.access_token}`,
          },
        }
      );
      const response = await res.json();
      console.log("response update", response);
      if (res.ok) {
        getGigs();
        setLoadingStatus(null);
      } else {
        setLoadingStatus(null);
        Swal.fire({
          title: "Failed",
          text: `OOPS.... Something went wrong!`,
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
      setLoadingStatus(null);
    }
  };

  // Update Verification
  const handleVerified = async (selectedId) => {
    setLoadingVerified(selectedId);
    try {
      const res = await fetch(
        `https://api.launcherr.co/api/updateJobVerified/${selectedId}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${admin.access_token}`,
          },
        }
      );
      const response = await res.json();
      console.log(selectedId);
      console.log("response update verified", response);
      if (res.ok) {
        setLoadingVerified(null);
        getGigs();
      } else {
        Swal.fire({
          title: "Failed",
          text: `OOPS.... Something went wrong!`,
          icon: "error",
        });
        setLoadingVerified(null);
      }
    } catch (error) {
      console.error(error);
      setLoadingVerified(null);
    }
  };

  // Get Employer Profile

  const getEmployer = async (selectedId) => {
    setLoadingEmployer(true);
    try {
      const res = await fetch(
        `https://api.launcherr.co/api/emp/${selectedId}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${admin.access_token}`,
          },
        }
      );

      const data = await res.json();
      if (res.ok) {
        setEmployer(data.profile);
        setLoadingEmployer(false);
      } else {
        setLoadingEmployer(false);
      }

      console.log("profile", data.profile);
    } catch (error) {
      console.error(error);
    }
  };

  // Pagination

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = table.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <h6 className="mb-0 text-uppercase">Gigs</h6>
      <hr />
      <div className="card">
        <div className="card-body">
          <div className=" input-group d-flex gap-3 mb-3">
            {" "}
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setOpen(true)}
            >
              Add New
            </button>
            <AddGigsModal open={open} onClose={(open) => handleClose(open)} />
          </div>
          <div className="table-responsive">
            {table.length > 0 ? (
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
                  {currentItems &&
                    currentItems
                      .filter((gigs) => {
                        return search === ""
                          ? gigs
                          : gigs.title
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                              gigs.user.name
                                .toLowerCase()
                                .includes(search.toLowerCase());
                      })
                      .map((gigs, index) => (
                        <tr key={index + gigs.id}>
                          <td>{index + 1}</td>
                          <td>{gigs.title}</td>
                          <td className="text-wrap">{gigs.description}</td>
                          <td>
                            {gigs.user.id === 15 ? (
                              "Admin"
                            ) : (
                              <Link
                                onClick={() => {
                                  getEmployer(gigs.user.id);
                                  setOpenEmployer(true);
                                }}
                              >
                                {gigs.user.name}
                              </Link>
                            )}
                          </td>

                          <td>{gigs.duration}</td>
                          <td
                            onClick={() => {
                              handleStatus(gigs.id);
                              handleClickSnack();
                            }}
                          >
                            {gigs.active === 1 ? (
                              <button className="btn btn-success">
                                {loadingStatus === gigs.id
                                  ? "Loading.."
                                  : "Active"}
                              </button>
                            ) : (
                              <button className="btn btn-danger">
                                {loadingStatus === gigs.id
                                  ? "Loading.."
                                  : "Inactive"}
                              </button>
                            )}
                          </td>
                          <td
                            onClick={() => {
                              handleVerified(gigs.id);
                            }}
                          >
                            {gigs.verified ? (
                              <button className="btn btn-success">
                                {" "}
                                {loadingVerified === gigs.id
                                  ? "Loading.."
                                  : "Verified"}
                              </button>
                            ) : (
                              <button className="btn btn-danger">
                                {" "}
                                {loadingVerified === gigs.id
                                  ? "Loading.."
                                  : "Unverified"}
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                </tbody>
                <Snackbar
                  open={openSnack}
                  autoHideDuration={6000}
                  onClose={handleCloseSnack}
                  message="Hello"
                ></Snackbar>
              </table>
            ) : loading ? (
              <div className="d-flex justify-content-center">
                <div class="card">
                  <div class="card-body">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>No data found</div>
            )}
          </div>
          <div className="d-flex justify-content-center">
            <Pagination
              count={Math.ceil(table.length / itemsPerPage)}
              page={currentPage}
              onChange={handleChangePage}
              color="primary"
              className="mt-3"
            />
          </div>
        </div>
      </div>
      <Modal
        open={openEmployer}
        onClose={handleCloseProfile}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!loadingEmployer ? (
            <div>
              {employer && employer.company_name && (
                <div>
                  <div className="text-center d-flex justify-content-center">
                    <Avatar>{employer.company_name[0]}</Avatar>
                  </div>
                  <div className="text-center mt-4">
                    <h4 className="mb-1">{employer.company_name}</h4>
                    <Link to={employer.company_website} className="mb-0">
                      Website: {employer.company_name}
                    </Link>
                    <div className="mt-4"></div>
                    <h6 className="mb-1">{employer.address}</h6>
                    <div className="d-flex justify-content-center gap-2">
                      <p className="mb-0 text-secondary">{employer.city}</p>
                      <p className="mb-0 text-secondary">{employer.state}</p>
                      <p className="mb-0 text-secondary">{employer.country}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="text-start">
                    <h5 className="">About</h5>
                    <p className="mb-0">{employer.about}</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Box className="d-flex justify-content-center">
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Gigs;
