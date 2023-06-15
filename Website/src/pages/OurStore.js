import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-stars";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

const OurStore = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.product);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    dispatch(getAllProducts());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta title="BUMDes - Store" />
      <BreadCrumb title="Store" />
      <main className="store main-home">
        <div className="container-xxl">
          <div className="store-wrapper">
            <div className="categories">
              <div className="head py-3">
                <h4 className="mb-0 text-center">Categories</h4>
              </div>
              <div className="main">
                <div>
                  <h6>Shop by Categories</h6>
                  <ul className="ps-0">
                    <li>Sayuran</li>
                    <li>Buah-buahan</li>
                    <li>Makanan</li>
                    <li>Dapur</li>
                    <li>Rumah tangga</li>
                    <li>Kesehatan</li>
                    <li>Bunga</li>
                    <li>Pertukangan</li>
                    <li>Kerajinan tangan</li>
                  </ul>
                </div>
                <hr className="line"></hr>
                <div>
                  <h6 className="mb-3">Price</h6>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="IDR"
                    />
                    <label for="floatingInput">From</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="IDR"
                    />
                    <label for="floatingInput">To</label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id=""
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      IDR 0 - 20.000
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id=""
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      IDR 20.000 - 50.000
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id=""
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      IDR 50.000 - 100.000
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id=""
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      IDR &gt; 100.000
                    </label>
                  </div>
                </div>
                <hr className="line"></hr>
                <div>
                  <h6 className="mb-3">Rating</h6>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      <ReactStars count={5} size={18} value={5} edit={false} />
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      <ReactStars count={4} size={18} value={4} edit={false} />
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      <ReactStars count={3} size={18} value={3} edit={false} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-content">
              <div className="head">
                <h6 className="py-3">Sort by</h6>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Relevan
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        High Price
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Low Price
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Popular
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="main">
                <div className="product-items">
                  <ProductCard
                    data={[...productState].sort(
                      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
                    )}
                  />
                </div>
                <div className="page"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OurStore;
