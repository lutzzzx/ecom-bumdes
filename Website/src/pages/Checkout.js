import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";

/*
const shippingSchema = yup.object({
  firsName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  address: yup.string().required("Address is Required"),
  province: yup.string().required("Province is Required"),
  city: yup.string().required("City is Required"),
  subDisrict: yup.string().required("Sub Disrict is Required"),
  zip: yup.number().required("ZIP is Required"),
  phone: yup.string().required("Phone Number is Required"),
  email: yup.string().nullable(),
}); */

const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.auth.cartProducts);
  const userCartState = useSelector((state) => state.auth.cartProducts);
  const [shippingInfo, setShippingInfo] = useState(null);
  // Menghitung total belanja
  const calculateCartTotal = () => {
    let total = 0;
    if (userCartState) {
      userCartState.forEach((item) => {
        total += item.price * item.quantity;
      });
    }
    return total;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      province: "",
      city: "",
      subDistrict: "",
      zip: "",
      phone: "",
      email: "",
    },
    onSubmit: (values) => {
      setShippingInfo(values);
    },
  });

  return (
    <>
      <Meta title="BUMDes - Checkout" />
      <BreadCrumb title="Checkout" />
      <main className="checkout main-home">
        <div className="container-xxl">
          <div className="checkout-wrapper">
            <div className="billing">
              <h5>Billing Details</h5>
              <form className="checkout-form" onSubmit={formik.handleSubmit}>
                <input
                  type="text"
                  className="form-control form-control-half"
                  id="First name"
                  placeholder="First name"
                  required
                  onChange={formik.handleChange("firstName")}
                  onBlur={formik.handleBlur("firstName")}
                  value={formik.values.firstName}
                />
                <div className="error">
                  {formik.touched.firstName && formik.errors.firstName}
                </div>
                <input
                  type="text"
                  className="form-control form-control-half"
                  id="Last name"
                  placeholder="Last name"
                  required
                  onChange={formik.handleChange("lastName")}
                  onBlur={formik.handleBlur("lastName")}
                  value={formik.values.lastName}
                />
                <div className="error">
                  {formik.touched.lastName && formik.errors.lastName}
                </div>
                <input
                  type="text"
                  className="form-control form-control-full"
                  id="Address"
                  placeholder="Address"
                  required
                  onChange={formik.handleChange("address")}
                  onBlur={formik.handleBlur("address")}
                  value={formik.values.address}
                />
                <div className="error">
                  {formik.touched.address && formik.errors.address}
                </div>
                <input
                  type="text"
                  className="form-control form-control-half"
                  id="City"
                  placeholder="Province"
                  required
                  onChange={formik.handleChange("province")}
                  onBlur={formik.handleBlur("province")}
                  value={formik.values.province}
                />
                <div className="error">
                  {formik.touched.province && formik.errors.province}
                </div>
                <input
                  type="text"
                  className="form-control form-control-half"
                  id="City"
                  placeholder="Town / City"
                  required
                  onChange={formik.handleChange("city")}
                  onBlur={formik.handleBlur("city")}
                  value={formik.values.city}
                />
                <div className="error">
                  {formik.touched.city && formik.errors.city}
                </div>
                <input
                  type="text"
                  className="form-control form-control-half"
                  id="District"
                  placeholder="Sub District"
                  required
                  onChange={formik.handleChange("subDistrict")}
                  onBlur={formik.handleBlur("subDistrict")}
                  value={formik.values.subDistrict}
                />
                <div className="error">
                  {formik.touched.subDistrict && formik.errors.subDistrict}
                </div>
                <input
                  type="text"
                  className="form-control form-control-half"
                  id="ZIP"
                  placeholder="Postcode / ZIP"
                  required
                  onChange={formik.handleChange("zip")}
                  onBlur={formik.handleBlur("zip")}
                  value={formik.values.zip}
                />
                <div className="error">
                  {formik.touched.zip && formik.errors.zip}
                </div>
                <input
                  type="text"
                  className="form-control form-control-half"
                  id="Phone"
                  placeholder="Phone"
                  required
                  onChange={formik.handleChange("phone")}
                  onBlur={formik.handleBlur("phone")}
                  value={formik.values.phone}
                />
                <div className="error">
                  {formik.touched.phone && formik.errors.phone}
                </div>
                <input
                  type="text"
                  className="form-control form-control-half"
                  id="Email"
                  placeholder="Email Address"
                />
                <Link to={"/cart"} className="link-btn">
                  Return to Cart
                </Link>
                <button className="link-btn order-btn">Place Order</button>
              </form>
            </div>
            <div className="order">
              <h5 className="mb-4">Your Order</h5>
              <div className="order-items">
                <div className="row title">
                  <div className="col-6">Product</div>
                  <div className="col-6 end">Total</div>
                </div>
                <hr></hr>
                {cartState &&
                  cartState?.map((item, index) => {
                    return (
                      <div className="row mb-3" key={index}>
                        <div className="col-6">
                          {item?.productId?.title} x {item?.quantity}
                        </div>
                        <div className="col-6 end">
                          IDR {item?.price * item?.quantity}
                        </div>
                      </div>
                    );
                  })}
                <hr></hr>
                <div className="row">
                  <div className="col-6">Shipping</div>
                  <div className="col-6 end">Free Shipping</div>
                </div>
                <hr></hr>
                <div className="row title">
                  <div className="col-6">Total</div>
                  <div className="col-6 end">IDR {calculateCartTotal()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;
