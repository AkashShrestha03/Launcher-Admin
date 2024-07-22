import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Avatar, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { Carousel } from "antd";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fitContent",
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

  // Handle change add gig

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
              className="form-select single-select"
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
            <label htmlFor="short_description">Description</label>
            <input
              type="text"
              id="short_description"
              name="short_description"
              className="form-control"
              placeholder="Short Description"
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
  const [editGig, setEditGig] = useState();
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

  // Handle change add gig

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditGig({ ...editGig, [name]: value.trim() });
    console.log(editGig);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("before post", editGig);
    try {
      const res = await fetch(
        `https://api.launcherr.co/api/updateJob/${props.selected}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.access_token}`,
          },
          body: JSON.stringify(editGig),
        }
      );
      const response = await res.json();
      if (res.ok) {
        setLoading(false);
        props.onClose(false);
        Swal.fire({
          title: "Updated Successfully",
          text: `Your data has been updated successfully`,
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
      Swal.fire({
        title: "Failed",
        text: `OOPS.... Something went wrong!`,
        icon: "error",
      });
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
          Edit Gig
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
              className="form-select single-select"
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
            <label htmlFor="short_description">Description</label>
            <input
              type="text"
              id="short_description"
              name="short_description"
              className="form-control"
              placeholder="Short Description"
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
            {loading ? "Loading..." : "Update"}
          </button>
        </form>
      </Box>
    </Modal>
  );
};

// View Destination Images

export const ViewImagesModal = (props) => {
  console.log(props.images);
  return (
    <Modal
      open={props.open}
      onClose={() => props.onClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Destination Images
        </Typography>
        <Carousel
          arrows
          arrowSize={26}
          infinite={false}
          draggable
          style={{ width: "450px" }}
        >
          {props.images &&
            props.images.map((image, index) => (
              <div key={index} className="w-100">
                <img src={image} height={300} alt={`Slide ${index}`} />
              </div>
            ))}
        </Carousel>
      </Box>
    </Modal>
  );
};

//Add Destination

export const AddDestinationModal = (props) => {
  const [addDestination, setAddDestination] = useState({});
  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
    const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const { admin } = useSelector((state) => state.admin);

  const cities = ["Rishikesh", "Manali", "Bir Biling", "Dharamshala"];


   const getState = async () => {
     const stateRes = await fetch(`https://api.launcherr.co/api/cities`);
     const res = await stateRes.json();
     if (stateRes.ok) {
       setState(res);
     }
   };

   useEffect(() => {
     getState();
   }, []);
  // HANDLE CHANGE ADD DESTINATION

  const handleChange = (e) => {
    if (e.target.name === "thumbnail_image") {
      setThumbnail(e.target.files[0]);
    } else if (e.target.name === `images[]`) {
      setImages(e.target.files);
    } else {
      setAddDestination({
        ...addDestination,
        [e.target.name]: e.target.value.trim(),
      });
    }
    console.log(addDestination);
  };

  //HANDLE SUBMIT DESTINATION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("before post", addDestination);
    try {
      const formData = new FormData();
      for (const key in addDestination) {
        formData.append(key, addDestination[key]);
      }
      if (thumbnail) {
        formData.append("thumbnail_image", thumbnail);
      }
      for (let i = 0; i < images.length; i++) {
        formData.append("images[]", images[i]); // ADDING IMAGES ONE BY ONE, KEEPING INDEX IN MIND
      }

      const res = await fetch(`https://api.launcherr.co/api/addDestination`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${admin.access_token}`,
        },
        body: formData,
      });
      console.log(res);
      const response = await res.json();
      console.log(response);
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
    } catch (error) {
      console.error(error);
      setLoading(false);
      Swal.fire({
        title: "Failed",
        text: `OOPS.... Something went wrong!`,
        icon: "error",
      });
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
          Add Destination
        </Typography>
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="d-flex flex-column gap-2"
        >
          <div>
            <label htmlFor="name">Destination</label>
            <select
              className="form-select single-select"
              aria-label="Default select example"
              onChange={handleChange}
              name="name"
              id="name"
            >
              <option disabled selected>
                Select Destination
              </option>
              {cities.map((section) => (
                <option value={section.section}>{section}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="state">State</label>
            <select
              className="form-select single-select"
              aria-label="Default select example"
              onChange={handleChange}
              name="state"
              id="state"
            >
              <option disabled selected>
                Select State
              </option>
              {state.map((section) => (
                <option value={section.section}>{section}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="short_description">Short Description</label>
            <input
              type="text"
              id="short_description"
              name="short_description"
              className="form-control"
              placeholder="Short Description"
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
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="file"
              id="thumbname"
              name="thumbnail_image"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="images">Destination Images</label>
            <input
              type="file"
              id="images"
              name="images[]"
              multiple
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg mt-1"
            disabled={loading ? true : null}
          >
            {loading ? "Loading..." : "Update"}
          </button>
        </form>
      </Box>
    </Modal>
  );
};

//Edit Destination Modal

export const EditDestinationModal = (props) => {
  const [editDestination, setEditDestination] = useState({});
  const [thumbnail, setThumbnail] = useState(null);
  const [state, setState] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { admin } = useSelector((state) => state.admin);

  const cities = ["Rishikesh", "Manali", "Bir Biling", "Dharamshala"];

  const getState = async () => {
    const stateRes = await fetch(`https://api.launcherr.co/api/cities`);
    const res = await stateRes.json();
    if (stateRes.ok) {
      setState(res);
    }
  };

  useEffect(() => {
    getState();
  }, []);

  // HANDLE CHANGE ADD DESTINATION

  const handleChange = (e) => {
    if (e.target.name === "thumbnail_image") {
      setThumbnail(e.target.files[0]);
    } else if (e.target.name === `images[]`) {
      setImages(e.target.files);
    } else {
      setEditDestination({
        ...editDestination,
        [e.target.name]: e.target.value.trim(),
      });
    }
    console.log(editDestination);
  };
  //HANDLE SUBMIT DESTINATION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("before post", editDestination);
    try {
      const formData = new FormData();
      for (const key in editDestination) {
        formData.append(key, editDestination[key]);
      }
      if (thumbnail) {
        formData.append("thumbnail_image", thumbnail);
      }
      for (let i = 0; i < images.length; i++) {
        formData.append("images[]", images[i]); // ADDING IMAGES ONE BY ONE, KEEPING INDEX IN MIND
      }

      const res = await fetch(
        `https://api.launcherr.co/api/addDestination?id=${props.id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${admin.access_token}`,
          },
          body: formData,
        }
      );
      console.log(res);
      const response = await res.json();
      console.log(response);
      if (res.ok) {
        setLoading(false);
        props.onClose(false);
        Swal.fire({
          title: "Updated Successfully",
          text: `Your data has been updated successfully`,
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
    } catch (error) {
      console.error(error);
      setLoading(false);
      Swal.fire({
        title: "Failed",
        text: `OOPS.... Something went wrong!`,
        icon: "error",
      });
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
          Edit Destination
        </Typography>
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="d-flex flex-column gap-2"
        >
          <div>
            <label htmlFor="name">Destination</label>
            <select
              className="form-select single-select"
              aria-label="Default select example"
              onChange={handleChange}
              name="name"
              id="name"
            >
              <option disabled selected>
                Select Destination
              </option>
              {cities.sort().map((section) => (
                <option value={section.section}>{section}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="state">State</label>
            <select
              className="form-select single-select"
              aria-label="Default select example"
              onChange={handleChange}
              name="state"
              id="state"
            >
              <option disabled selected>
                Select State
              </option>
              {state.sort().map((section) => (
                <option value={section.section}>{section}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="short_description">Short Description</label>
            <input
              type="text"
              id="short_description"
              name="short_description"
              className="form-control"
              placeholder="Short Description"
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
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="file"
              id="thumbname"
              name="thumbnail_image"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="images">Destination Images</label>
            <input
              type="file"
              id="images"
              name="images[]"
              multiple
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg mt-1"
            disabled={loading ? true : null}
          >
            {loading ? "Loading..." : "Update"}
          </button>
        </form>
      </Box>
    </Modal>
  );
};

//Delete Gig Modal

export const DeleteDestinationModal = (props) => {
  const { admin } = useSelector((state) => state.admin);
  console.log(props.id);
  const handleDelete = async () => {
    try {
      const res = await fetch(
        `https://api.launcherr.co/api/deleteDestination?id=${props.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: ` Bearer ${admin.access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const deleted = await res.json();
      console.log(res);
      console.log("delete", deleted);
      if (res.ok) {
        props.onClose(false);
        Swal.fire({
          title: "Delete Success",
          text: `Your data has been removed successfully`,
          icon: "success",
        });
      } else {
        props.onClose(false);
        Swal.fire({
          title: "Failed",
          text: `OOPS.... Something went wrong`,
          icon: "error",
        });
      }
    } catch (error) {
      props.onClose(false);
      console.error(error);
      Swal.fire({
        title: "Failed",
        text: `OOPS.... Something went wrong`,
        icon: "error",
      });
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
