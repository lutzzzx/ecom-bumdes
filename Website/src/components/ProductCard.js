import React from "react";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-stars";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
import { addProductToCart } from "../features/user/userSlice";

const ProductCard = (props) => {
  const { data } = props;
  let location = useLocation();
  const dispatch = useDispatch();

  if (!Array.isArray(data) || data.length === 0) {
    return <p>No data available</p>;
  }

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  const uploadCart = (productId) => {
    dispatch(
      addProductToCart({
        productId,
        quantity: 1,
        price: data?.find((item) => item._id === productId)?.price,
      })
    );
  };

  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <Link
              to={"/product/" + item?._id}
              className="product-card position-relative"
            >
              <div className="product-image">
                <img src={item.images[0]?.url} alt="" />
              </div>
              <div className="product-details">
                <h6>{item?.title}</h6>
                <p className="mb-0">IDR {item?.price}</p>
                <ReactStars
                  count={5}
                  size={20}
                  value={item?.totalRatings.toString()}
                  edit={false}
                />
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column">
                  <Link
                    onClick={() => {
                      addToWish(item?._id);
                    }}
                  >
                    <AiOutlineHeart />
                  </Link>
                  <Link
                    className="hidden"
                    onClick={() => {
                      uploadCart(item?._id);
                    }}
                  >
                    <MdOutlineShoppingBag />
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
