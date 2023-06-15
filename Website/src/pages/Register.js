import React from "react";
import { Link } from "react-router-dom";
import Landscape from "../images/landscape.jpg";
import Meta from "../components/Meta";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { createUser } from "../features/user/userSlice";
import Popup from "../components/Popup";

const registerSchema = yup.object({
  firstname: yup.string().required("First name is Required"),
  lastname: yup.string().required("Last name is Required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  mobile: yup.string().required("Phone number is Required"),
  password: yup.string().required("Password is Required"),
});

const Register = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(createUser(values));
    },
  });

  return (
    <>
      <Popup />
      <Meta title="BUMDes - Register" />
      <main className="login-page">
        <div className="background">
          <img src={Landscape} alt="" />
        </div>
        <div className="title">
          <div className="title-details">
            <h1 className="text-white">Welcome To BUMDes</h1>
            <br />
            <Link to={"/"}>Back to Home</Link>
          </div>
        </div>
        <div className="container">
          <div className="login">
            <div className="login-details">
              <h2 className="text-navy">
                BUMD<span className="text-green">es</span>
              </h2>
              <h5>
                <br />
                <br />
                Welcome,
                <br />
                let's get the ball rolling!
              </h5>
              <p>
                <br />
                Please use the form to register.
                <br />
                If you are a member, please{" "}
                <Link className="text-green-2" to={"/login"}>
                  login
                </Link>
                .
              </p>
              <form action="" onSubmit={formik.handleSubmit}>
                <div className="inp-name">
                  <div className="form-floating form-half mb-3">
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      placeholder="First Name"
                      value={formik.values.firstname}
                      onChange={formik.handleChange("firstname")}
                      onBlur={formik.handleBlur("firstname")}
                    />
                    <div className="error">
                      {formik.touched.firstname && formik.errors.firstname}
                    </div>
                    <label htmlFor="floatingInput">First name</label>
                  </div>
                  <div className="form-floating form-half mb-3">
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      placeholder="Last Name"
                      value={formik.values.lastname}
                      onChange={formik.handleChange("lastname")}
                      onBlur={formik.handleBlur("lastname")}
                    />
                    <div className="error">
                      {formik.touched.lastname && formik.errors.lastname}
                    </div>
                    <label htmlFor="floatingInput">Last name</label>
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                  />
                  <div className="error">
                    {formik.touched.email && formik.errors.email}
                  </div>
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="08"
                    value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                  />
                  <div className="error">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                  <label htmlFor="floatingInput">Phone number</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                  />
                  <div className="error">
                    {formik.touched.password && formik.errors.password}
                  </div>
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    I have read and accept the terms and conditions.
                  </label>
                </div>
                <button className="btn-control">Signup</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
