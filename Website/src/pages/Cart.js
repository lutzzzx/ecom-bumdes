import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import seladaImg from "../images/products/selada.png";
import { TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartProduct, getUserCart } from "../features/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const userCartState = useSelector((state) => state.auth.cartProducts);
  useEffect(() => {
    dispatch(getUserCart());
  }, []);
  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };

  if (userCartState?.length === 0) {
    return (
      <>
        <Meta title="BUMDes - Cart" />
        <BreadCrumb title="Cart" />
        <main className="cart main-home">
          <div className="container-xxl">
            <div className="empty-cart">
              <h5 className="mb-2">Your Cart is empty</h5>
              <Link to={"/product"} className="btn btn-primary btn-lg">
                Go to Store
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Meta title="BUMDes - Cart" />
      <BreadCrumb title="Cart" />
      <main className="cart main-home">
        <div className="container-xxl">
          <h5 className="mb-3">Your cart items</h5>
          <div className="cart-wrapper">
            <div className="title">
              <div className="row">
                <div className="col-2">Image</div>
                <div className="col-3">Product Name</div>
                <div className="col-2">Price</div>
                <div className="col-2">Quantity</div>
                <div className="col-2">Total</div>
                <div className="col">Action</div>
              </div>
            </div>
            <div className="cart-content">
              {userCartState &&
                userCartState?.map((item, index) => {
                  return (
                    <div className="items">
                      <div className="row">
                        <div className="col-2">
                          <div className="img-wrapper ">
                            <img src={item?.productId?.images[0]?.url}></img>
                          </div>
                        </div>
                        <div className="col-3">
                          <h6>{item?.productId?.title}</h6>
                        </div>
                        <div className="col-2">IDR {item?.price}</div>
                        <div className="col-2">
                          <input
                            type="number"
                            name=""
                            min={1}
                            max={10}
                            className="form-control"
                            id=""
                            value={item?.quantity}
                          />
                        </div>
                        <div className="col-2">
                          IDR {item?.price * item?.quantity}
                        </div>
                        <div className="col">
                          <div
                            className="trash"
                            onClick={() => {
                              deleteACartProduct(item?._id);
                            }}
                          >
                            <TbTrash />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="actions">
            <Link to={"/product"} className="item">
              Continue Shopping
            </Link>
            <div className="item">Clear Shopping Cart</div>
          </div>
          <div className="total">
            <h5>Cart Total: IDR 35.000</h5>
            <p>Taxes and shipping calculated at checkout</p>
            <Link to={"/checkout"}>Checkout</Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
