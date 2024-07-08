import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Avatar, Typography } from "@mui/material";
import Swal from "sweetalert2";
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

function ChildModal() {
  const { admin } = useSelector((state) => state.admin);
  const [password, setPassword] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPassword({ ...password, [name]: value.trim() });
    console.log(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(false);
    try {
      const res = await fetch(`https://api.launcherr.co/api/profile/update`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${admin.access_token}`,
        },

        body: JSON.stringify(password),
      });

      const response = await res.json();

      Swal.fire({
        title: "Update Success",
        text: `Your password has been updated successfully`,
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Failed",
        text: `OOPS.... Something went wrong`,
        icon: "error",
      });
    }
  };

  return (
    <>
      <Button onClick={handleOpen}>Reset Password</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400, height: 250 }}>
          <form
            action="submit"
            className="d-flex flex-column gap-3 align-items-center"
          >
            <h2 className="text-center">Reset Password</h2>
            <label for="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              onChange={handleChange}
              className="form-control"
            />
            <Button variant="contained" className="w-50" onClick={handleSubmit}>
              Reset
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default function AccountModal(props) {
  const { admin } = useSelector((state) => state.admin);
  return (
    <div>
      <Modal
        open={props.open}
        onClose={() => props.close(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600, padding: 5 }}>
          <div className="profile-avatar text-center">
            <Avatar
              className="mx-auto"
              style={{ height: "100px", width: "100px", fontSize: "40px" }}
            >
              {admin.user.name[0]}
            </Avatar>
          </div>

          <div className="text-center mt-4">
            <h4 className="mb-1">{admin.user.name}</h4>

            <h6 className="mb-1">Email Address : {admin.user.email}</h6>
          </div>
          <hr />

          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}

export const AddGigsModal = (props) => {
  const [newGig, setNewGig] = useState();
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const { admin } = useSelector((state) => state.admin);

  // Get indian Cities for select form
  const getCity = async () => {
    const cityRes = await fetch(`https://api.launcherr.co/api/cities`);
    const res = await cityRes.json();
    if (cityRes.ok) {
      setCities(res);
    }
  };

  useEffect(() => {
    getCity();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGig({ ...newGig, [name]: value.trim() });
    console.log(newGig);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("before post", newGig);
    try {
      const res = await fetch(`https://api.launcherr.co/api/addJob`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.access_token}`,
        },
        body: JSON.stringify(newGig),
      });
      const response = await res.json();
      if (res.ok) {
        setLoading(false);
        props.onClose(false);
        Swal.fire({
          title: "Added Successfully",
          text: `Your data has been added successfully`,
          icon: "success",
        });
      } else {
        setLoading(false);
        props.onClose(false);
        Swal.fire({
          title: "Failed",
          text: `OOPS.... Something went wrong!`,
          icon: "error",
        });
      }

      console.log(res);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <Modal
      open={props.open}
      onClose={() => props.onClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Gigs
        </Typography>
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="d-flex flex-column gap-2"
        >
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              placeholder="Title"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="title">Location</label>
            <select
              className="form-select mb-3 single-select"
              aria-label="Default select example"
              onChange={handleChange}
              name="location"
            >
              {cities.sort().map((section) => (
                <option value={section.section}>{section}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="validity" className="mb-2">
              Duration(Hrs)
            </label>
            <input
              type="number"
              className="form-control"
              name="duration"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg mt-1"
            disabled={loading ? true : null}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </Box>
    </Modal>
  );
};

// Edit Gigs Modal
export const EditGigsModal = (props) => {
  const [editGig, setEditGig] = useState({});
  const [checked, setChecked] = useState(true);
  const [verified, setVerified] = useState(true);
  const { admin } = useSelector((state) => state.admin);
  // const [validity, setValidity] = useState([
  //   dayjs("2022-04-17"),
  //   dayjs("2022-04-21"),
  // ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditGig({ ...editGig, [name]: value.trim() });
    console.log(editGig);
  };

  const handleChangeStatus = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    setEditGig((prevGig) => ({ ...prevGig, active: isChecked ? 1 : 0 }));
  };

  const handleChangeVerify = (event) => {
    const isChecked = event.target.checked;
    setVerified(isChecked);
    setEditGig((prevGig) => ({ ...prevGig, verified: isChecked ? 1 : 0 }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        `https://api.launcherr.co/api/Update/Employer/${props.selected}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          authentication: `Bearer ${admin.access_token}`,
          body: JSON.stringify(editGig),
        }
      );
      const response = await res.json();

      if (res.ok) {
        Swal.fire({
          title: "Added Successfully",
          text: `Your data has been added successfully`,
          icon: "success",
        });
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

  return (
    <Modal
      open={props.open}
      onClose={() => props.onClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Gigs
        </Typography>
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="d-flex flex-column gap-2"
        >
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              placeholder="Title"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="employer">Duration(Hrs)</label>
            <input
              type="number"
              id="employer"
              name="duration"
              className="form-control"
              placeholder="Duration"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg mt-1">
            Submit
          </button>
        </form>
      </Box>
    </Modal>
  );
};

// Delete Gig Modal

export const DeleteGigModal = (props) => {
  const { admin } = useSelector((state) => state.admin);
  const handleDelete = async () => {
    try {
      const res = await fetch(
        `https://api.launcherr.co/api/Delete/Employer/${props.selected}`,
        {
          method: "DELETE",
          headers: {
            Authorization: ` Bearer ${admin.access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const deleted = await res.json();

      if (res.ok) {
        Swal.fire({
          title: "Delete Success",
          text: `Your data has been removed successfully`,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Failed",
          text: `OOPS.... Something went wrong`,
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal
      open={props.open}
      onClose={() => props.onClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Delete
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to delete this data?
        </Typography>
        <button
          type="submit"
          className="btn btn-danger btn-lg mt-1"
          onClick={handleDelete}
        >
          Delete
        </button>
      </Box>
    </Modal>
  );
};

// export const EmployerModal = (props) => {
//   const { employer } = useSelector((state) => state.admin);

// //  console.log("",props.profile);
//   return (
//     <Modal
//       open={props.open}
//       onClose={() => props.onClose(false)}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box sx={style}>
//         <div className="">
//           <div className=" text-center d-flex justify-content-center">
//             <Avatar>{employer.company_name[0]}</Avatar>
//           </div>

//           <div className="text-center mt-4">
//             <h4 className="mb-1">{employer.company_name}</h4>
//             <Link to={employer.company_website} className="mb-0 ">
//               Website:
//               {employer.company_name}
//             </Link>
//             <div className="mt-4"></div>

//             <h6 className="mb-1">{employer.address}</h6>
//             <div className="d-flex justify-content-center gap-2">
//               <p className="mb-0 text-secondary">{employer.city}</p>
//               <p className="mb-0 text-secondary">{employer.state}</p>
//               <p className="mb-0 text-secondary">{employer.country}</p>
//             </div>
//           </div>
//           <hr />
//           <div className="text-start">
//             <h5 className="">About</h5>
//             <p className="mb-0">{employer.about}</p>
//           </div>
//         </div>
//       </Box>
//     </Modal>
//   );
// };
