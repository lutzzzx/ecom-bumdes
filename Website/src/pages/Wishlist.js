import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ReactStars from "react-stars";
import { TbTrash, TbHeartOff } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishlist } from "../features/products/productSlice";
import Popup from "../components/Popup";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, []);

  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };

  const wishlistState = useSelector((state) => state.auth.wishlist?.wishlist);

  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };

  return (
    <>
      <Popup />
      <Meta title="BUMDes - Wishlist" />
      <BreadCrumb title="Wishlist" />
      <main className="wishlist main-home">
        <div className="container-xxl">
          <div className="wishlist-wrapper">
            {wishlistState && wishlistState.length > 0 ? (
              wishlistState.map((item, index) => (
                <div className="wishlist-card" key={index}>
                  <div className="img">
                    <img src={item.images[0]?.url} alt="" />
                  </div>
                  <div className="details">
                    <h6 className="title">{item?.title}</h6>
                    <p className="price mb-0">IDR {item?.price}</p>
                    <ReactStars
                      count={5}
                      size={20}
                      value={item?.totalRatings.toString()}
                      edit={false}
                    />
                    <div className="action">
                      <div
                        className="trash"
                        onClick={() => {
                          removeFromWishlist(item?._id);
                        }}
                      >
                        <TbTrash />
                      </div>
                      <div className="cart py-2">+ Cart</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="wishlist-empty">
                <TbHeartOff style={{ fontSize: "8em", marginBottom: "35px" }} />
                <h5>No items found in wishlist</h5>
                <Link to="/product" className="btn btn-primary btn-lg">
                  Add Items
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Wishlist;
