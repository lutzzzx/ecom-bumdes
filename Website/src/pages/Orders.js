import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";
import { Link } from "react-router-dom";
import { MdOutlinePayments } from "react-icons/md";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state.auth.getOrderedProduct?.orders
  );

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  if (orderState?.length === 0) {
    return (
      <>
        <Meta title="BUMDes - My Orders" />
        <BreadCrumb title="My Orders" />
        <main className="cart main-home">
          <div className="container-xxl">
            <div className="empty-cart">
              <MdOutlinePayments
                style={{ fontSize: "8em", marginBottom: "35px" }}
              />
              <h5 className="mb-2">You haven't ordered yet</h5>
              <Link to={"/product"} className="btn btn-primary btn-lg">
                Shop Now
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <Meta title="BUMDes - My Orders" />
      <BreadCrumb title="My Orders" />
      <main className="orders main-home">
        <div className="container-xxl">
          <h5 className="mb-3">Order List</h5>
          <div className="orders-wrapper">
            {orderState &&
              orderState?.map((item, index) => {
                return (
                  <div className="orders-card" key={index}>
                    <div className="img-wrapper">
                      <img src={item?.orderItems[0]?.product?.images[0]?.url} />
                    </div>
                    <div className="details">
                      <div className="status mb-0">
                        <p>{item?.orderStatus}</p>
                        <p>{item?._id}</p>
                      </div>
                      {item?.orderItems?.map((prod, i) => {
                        return (
                          <p className="mb-0">
                            <b>{prod?.product?.title}</b> x {prod?.quantity}
                          </p>
                        );
                      })}
                    </div>
                    <div className="price">
                      <p className="mb-0">
                        Total Price <br></br>
                        <b>IDR {item?.totalPrice}</b>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Orders;
