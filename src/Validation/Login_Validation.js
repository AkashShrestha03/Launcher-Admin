const Validate = (values) => {
  const errors = {};
   const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,15}$/;

 

  if(!regex.test(values.password)){
    errors.password =
      "The password should be at 8 - 15 characters long. The password should contain at least one uppercase letter, one lowercase letter, one special character(@, $, !, &, etc)  and one number.";
  }

  return errors;
};

export default Validate;
