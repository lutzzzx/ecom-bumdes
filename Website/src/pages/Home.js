import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

const Home = () => {
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
      <Meta title={"BUMDes - Home"} />
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative py-2">
                <img
                  src="images/main-banner.png"
                  alt="main banner"
                  className="img-fluid rounded-3"
                ></img>
                <div className="main-banner-content position-absolute">
                  <p className="text-green">Limited Edition</p>
                  <h3>
                    LUXE <br />
                    LEATHER BAG
                  </h3>
                  <p>From IDR 250.000</p>
                  <br />
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="second-banner position-relative py-2">
                  <img
                    src="images/second-banner-1.png"
                    alt="second banner 1"
                    className="img-fluid rounded-3"
                  />
                  <div className="second-banner-content position-absolute">
                    <p className="text-white">New Arrival</p>
                    <h5>
                      Sandals <br />
                      Breeze
                    </h5>
                    <p>From IDR 150.000</p>
                  </div>
                </div>
                <div className="second-banner position-relative py-2">
                  <img
                    src="images/second-banner-2.png"
                    alt="second banner 2"
                    className="img-fluid rounded-3"
                  />
                  <div className="second-banner-content position-absolute">
                    <p className="text-white">Best Seller</p>
                    <h5>
                      Handicrafts <br />
                    </h5>
                    <p>From IDR 50.000</p>
                  </div>
                </div>
                <div className="second-banner position-relative py-2">
                  <img
                    src="images/second-banner-3.png"
                    alt="second banner 3"
                    className="img-fluid rounded-3"
                  />
                  <div className="second-banner-content position-absolute">
                    <p className="text-white">Discount</p>
                    <h5>
                      Daisy <br />
                      Flower
                    </h5>
                    <p>From IDR 15.000</p>
                  </div>
                </div>
                <div className="second-banner position-relative py-2">
                  <img
                    src="images/second-banner-4.png"
                    alt="second banner 4"
                    className="img-fluid rounded-3"
                  />
                  <div className="second-banner-content position-absolute">
                    <p className="text-white">Discount</p>
                    <h5>
                      Potato <br />
                      Chip
                    </h5>
                    <p>From IDR 10.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="main-home">
        <section className="home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="servies d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <img
                  src="images/free-shipping.png"
                  alt="free shipping"
                  className="servies-images"
                />
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0">Free shipping on all order</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img
                  src="images/customer-service.png"
                  alt="customer service"
                  className="servies-images"
                />
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Round the clock assistance</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img
                  src="images/discount.png"
                  alt="discount"
                  className="servies-images-2"
                />
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Great value for your money</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img
                  src="images/credit-card.png"
                  alt="credit card"
                  className="servies-images-2"
                />
                <div>
                  <h6>Secure Payment</h6>
                  <p className="mb-0">100% Protected Payments</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-wrapper-3">
          <div className="container-xxl">
            <div className="row">
              <div className="col-2">
                <div className="category d-flex align-items-center justify-content-center">
                  <h4>CATEGORIES</h4>
                </div>
              </div>
              <div className="col-10">
                <div className="category-content d-flex flex-wrap justify-content-between align-items-center">
                  <div className="item border-bottom border-right">
                    <h6 className="mb-0">Clothes</h6>
                    <img
                      src="images/categories/male-clothes.png"
                      alt="pakaian pria"
                      className=""
                    />
                  </div>
                  <div className="item border-bottom border-right">
                    <h6 className="mb-0">Carpentry</h6>
                    <img
                      src="images/categories/carpenter.png"
                      alt="pertukangan"
                      className=""
                    />
                  </div>
                  <div className="item border-bottom border-right">
                    <h6 className="mb-0">Medicines</h6>
                    <img
                      src="images/categories/first-aid-kit.png"
                      alt="kesehatan"
                      className=""
                    />
                  </div>
                  <div className="item border-bottom border-right">
                    <h6 className="mb-0">Household Applian-ces</h6>
                    <img
                      src="images/categories/furniture.png"
                      alt="furnitur"
                      className=""
                    />
                  </div>
                  <div className="item border-bottom ">
                    <h6 className="mb-0">Kitchen Applian-ces</h6>
                    <img
                      src="images/categories/kitchen.png"
                      alt="dapur"
                      className=""
                    />
                  </div>
                  <div className="item border-right">
                    <h6 className="mb-0">Vegetables</h6>
                    <img
                      src="images/categories/vegetable.png"
                      alt="sayuran"
                      className=""
                    />
                  </div>
                  <div className="item border-right">
                    <h6 className="mb-0">Fruits</h6>
                    <img
                      src="images/categories/fruits.png"
                      alt="buah-buahan"
                      className=""
                    />
                  </div>
                  <div className="item border-right">
                    <h6 className="mb-0">Foods</h6>
                    <img
                      src="images/categories/fast-food.png"
                      alt="makanan"
                      className=""
                    />
                  </div>
                  <div className="item border-right">
                    <h6 className="mb-0">Flowers</h6>
                    <img
                      src="images/categories/flower-pot.png"
                      alt="bunga"
                      className=""
                    />
                  </div>
                  <div className="item">
                    <h6 className="mb-0">Handy-crafts</h6>
                    <img
                      src="images/categories/porcelain.png"
                      alt="kerajinan"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-wrapper-4">
          <div className="container-xxl">
            <h4>
              MOST POPULAR <span className="text-green">PRODUCTS</span>
            </h4>
            <div className="d-flex gap-20 py-2">
              <ProductCard
                data={[...productState]
                  .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
                  .slice(0, 6)}
              />
            </div>
          </div>
        </section>
        <section className="home-wrapper-5">
          <div className="container-xxl">
            <h4>
              TRENDING <span className="text-green">NOW</span>
            </h4>
            <div className="row top-banner">
              <div className="col-7">
                <div className="banner"></div>
              </div>
              <div className="col-5">
                <div className="banner"></div>
              </div>
            </div>
            <div className="row bottom-banner">
              <div className="col-12">
                <div className="banner"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-wrapper-6">
          <div className="container-xxl">
            <h4>
              <span className="text-green">NEW</span> ARRIVALS
            </h4>
            <div className="d-flex gap-20 py-2">
              <ProductCard
                data={[...productState]
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .slice(0, 6)}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
