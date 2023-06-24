import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ReactStars from "react-stars";
import { AiOutlineHeart } from "react-icons/ai";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, getAProduct } from "../features/products/productSlice";
import { addProductToCart, getUserCart } from "../features/user/userSlice";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [isInCart, setIsInCart] = useState(alreadyAdded);
  const location = useLocation();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product?.singleproduct);
  const cartState = useSelector((state) => state.auth.cartProducts);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
  }, []);

  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
        setIsInCart(true);
      }
    }
  }, []);

  const uploadCart = () => {
    dispatch(
      addProductToCart({
        productId: productState?._id,
        quantity,
        price: productState?.price,
      })
    );
    setIsInCart(true);
  };

  //IMAGE
  const [mainImg, setMainImg] = useState("");
  useEffect(() => {
    if (productState && productState.images && productState.images.length > 0) {
      setMainImg(productState.images[0].url);
    }
  }, [productState]);

  const handleThumbnailClick = (image) => {
    setMainImg(image.url);
  };

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta title={productState?.title || "Product Name"} />
      <BreadCrumb title={productState?.title} />
      <main className="single-product main-home">
        <div className="container-xxl">
          <div className="main-product-wrapper">
            <div className="product-gallery">
              <div className="thumbnail-img">
                {productState?.images &&
                  productState.images.map((image, index) => (
                    <img
                      key={index}
                      className="thumbnail"
                      src={image.url}
                      alt={``}
                      onClick={() => handleThumbnailClick(image)}
                    />
                  ))}
              </div>
              <div className="main-img">
                <img src={mainImg} alt="" />
              </div>
            </div>
            <div className="details">
              <h3 className="title">{productState?.title}</h3>
              <h4 className="price">IDR {productState?.price}</h4>
              <ReactStars
                count={5}
                size={20}
                value={productState?.totalRatings?.toString()}
                edit={false}
              />
              <p className="description">{productState?.description}</p>
              <hr />
              <div className={` ${isInCart ? "hidden" : ""}`}></div>
              <div className="order">
                <input
                  type="number"
                  name=""
                  min={1}
                  max={10}
                  className={`form-control ${isInCart ? "hidden" : ""}`}
                  id=""
                  defaultValue={1}
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                />
                <h6
                  className="cart"
                  onClick={() => {
                    isInCart ? navigate("/cart") : uploadCart();
                  }}
                >
                  {isInCart ? "Go to Cart" : "Add to Cart"}
                </h6>
                <div
                  className="wish"
                  onClick={() => {
                    addToWish(productState?._id);
                  }}
                >
                  <AiOutlineHeart />
                </div>
              </div>
              <p>Stock: {productState?.quantity}</p>
              <p>Sold: {productState?.sold}</p>
              <p>Category: {productState?.category}</p>
            </div>
          </div>
          <div className="related-product">
            <h4>RELATED PRODUCTS</h4>
            <div className="product-items">
              <ProductCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleProduct;
