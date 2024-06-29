import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  AddGigsModal,
  DeleteGigModal,
  EditGigsModal,
  // EmployerModal,
} from "../components/Modals";
import { Avatar, Box, Chip, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { employerProfile } from "../store/adminSlice";
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
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [employer, setEmployer] = useState({});
  // const [openEdit, setOpenEdit] = useState(false)
  // const [openDelete, setOpenDelete] = useState(false)
  const [openEmployer, setOpenEmployer] = useState(false);
 

  const { admin } = useSelector((state) => state.admin);

  const handleClose = () => {
    setOpen(false);
    getGigs()
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
    try {
      const res = await fetch(`https://api.launcherr.co/api/job`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${admin.access_token}`,
        },
      });
      const data = await res.json();
      setTable(data.job);
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
      } else {
        Swal.fire({
          title: "Failed",
          text: `OOPS.... Something went wrong!`,
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Update Verification
  const handleVerified = async (selectedId) => {
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
        getGigs();
      } else {
        Swal.fire({
          title: "Failed",
          text: `OOPS.... Something went wrong!`,
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Get Employer Profile

  const getEmployer = async (selectedId) => {
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
      setEmployer(data.profile)
      // dispatch(employerProfile(data.profile));

      console.log("profile", data.profile);
    } catch (error) {
      console.error(error);
    }
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
                {table.map((gigs, index) => (
                  <tr key={index + gigs.id}>
                    <td>{index + 1}</td>
                    <td>{gigs.title}</td>
                    <td className="text-wrap">{gigs.description}</td>
                    <td>
                      {gigs.user.id === 3 ? (
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

                    {/* <EmployerModal
                      profile={employer}
                      open={openEmployer}
                      onClose={(openEmployer) =>
                        handleCloseProfile(openEmployer)
                      }
                    /> */}
                    <td>{gigs.duration}</td>
                    <td
                      onClick={() => {
                        handleStatus(gigs.id);
                      }}
                    >
                      {gigs.active === 1 ? (
                        <button className="btn btn-success">Active</button>
                      ) : (
                        <button className="btn btn-danger">Inactive</button>
                      )}
                    </td>
                    <td
                      onClick={() => {
                        handleVerified(gigs.id);
                      }}
                    >
                      {gigs.verified ? (
                        <button className="btn btn-success">Verified</button>
                      ) : (
                        <button className="btn btn-danger">Unverified</button>
                      )}
                    </td>
                    {/* <td>
                      <div className="table-actions d-flex align-items-center gap-3 fs-6">
                        <a
                          href="javascript:;"
                          className="text-danger"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Delete"
                          onClick={() => {
                            setOpenDelete(true);
                            setSelected(gigs.id);
                          }}
                        >
                          <i className="bi bi-trash-fill"></i>
                        </a>
                        <DeleteGigModal
                          selected={selected}
                          open={openDelete}
                          onClose={(openDelete) => handleClose(openDelete)}
                        />
                      </div>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
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
        </Box>
      </Modal>
    </>
  );
};

export default Gigs;
