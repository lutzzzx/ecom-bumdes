import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Landscape from "../images/landscape.jpg";
import CsLineIcons from "../cs-line-icons/CsLineIcons";
import Meta from "../components/Meta";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import Popup from "../components/Popup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

const Login = () => {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (authState.isSuccess) {
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);
    }
  }, [authState.isSuccess, navigate]);

  return (
    <>
      <Popup />
      <Meta title="BUMDes - Login" />
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
                let's get started!
              </h5>
              <p>
                <br />
                Please use your credentials to login.
                <br />
                If you are not a member, please{" "}
                <Link className="text-green-2 bold" to={"/register"}>
                  <b>register</b>
                </Link>
                .
              </p>
              <form onSubmit={formik.handleSubmit}>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    required
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    value={formik.values.email}
                  />
                  <div className="error">
                    {formik.touched.email && formik.errors.email}
                  </div>
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-2">
                  <input
                    type="password"
                    class="form-control"
                    required
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    value={formik.values.password}
                  />
                  <div className="error">
                    {formik.touched.password && formik.errors.password}
                  </div>
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="forgot-password">
                  <Link to={"/forgotPassword"}>Forgot password?</Link>
                </div>
                <button className="btn-control">Login</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
