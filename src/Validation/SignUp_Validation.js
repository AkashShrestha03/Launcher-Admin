const Validate = (values) => {
  const errors = {};
  const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,15}$/;
  if (!values.firstname) {
    errors.firstname = " First name is required!";
  }else if (values.firstname.length < 3){
    errors.firstname = "First name must be atleast of 3 characters"
  }
    if (!values.lastname) {
      errors.lastname = " Last name is required!";
    } else if (values.lastname.length < 3) {
      errors.lastname = "Last name must be atleast of 3 characters";
    }
  if (!values.username) {
    errors.username = " Username is required!";
  }
  if (!values.email) {
    errors.email = " Email is required!";
  }
  if (!values.password) {
    errors.password = " Password is required!";
  } else if (!regex.test(values.password)) {
    errors.password =
      "The password should be at 8 - 15 characters long. The password should contain at least one uppercase letter, one lowercase letter, one special character(@, $, !, &, etc)  and one number.";
  }

  return errors;
};

export default Validate;
