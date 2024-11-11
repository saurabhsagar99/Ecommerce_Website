import React from "react";
import { Link } from "react-router-dom";
import {  Navbar } from "../components";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
});
const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
};

const validate = () => {
  let tempErrors = {};
  if (!formData.email) tempErrors.email = "Email is required";
  if (!formData.password) tempErrors.password = "Password is required";
  return tempErrors;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length === 0) {
      setShowAlert(true);
  } else {
      setErrors(validationErrors);
      setShowAlert(false);
  }
};
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        {showAlert && (
          <div className="alert alert-success" role="alert">
            Login successful! Welcome back.
          </div>
        )}


        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}> 
              <div class="my-3">
                <label for="display-4" htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="alert alert-danger mt-2">{errors.email}</div>}
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4" htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                 {errors.password && <div className="alert alert-danger mt-2">{errors.password}</div>}
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    </>
  );

};

export default Login;
