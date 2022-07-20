import React from "react";
import { useState, useEffect } from "react";

const FormValidation = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    const err = validate(formValues);
    console.log(err);
    const anyErrror = Object.keys(err).length;
    console.log(anyErrror);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegx =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordRegx.test(values.password)) {
      errors.password =
        "Your password must be 8 character and must contain upercase, lowercase, numeric and special character";
    }
    return errors;
  };

  return (
    <div className="container-grid">
      <div className="container-grid-item container">
        <form onSubmit={handleSubmit}>
          <h1> Login</h1>
          <label className="container-label">Username</label> <br />
          <input type="text" name="email" onChange={handleChange} />
          <p className="form-error">{formErrors.email}</p>
          <br />
          <label className="container-label">Password</label> <br />
          <input type="password" name="password" onChange={handleChange} />
          <p className="form-error">{formErrors.password}</p>
          <button type="submit" className="container-btn">
            SignIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;