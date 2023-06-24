import React, { useEffect, useState } from "react";
import { Link, NavLink, link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import NavMenu from "./NavMenu";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { IoHandLeft } from "react-icons/io5";
import { toast } from "react-toastify";

const Header = () => {
  const authState = useSelector((state) => state.auth);
  const isLoggedIn = authState?.user !== null;

  //LOGOUT
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    toast.success("Logout Successful");
  };

  return (
    <>
      <div className="header">
        <header className="main-header py-3">
          <div className="container-xxl">
            <div className="row align-items-center">
              <div className="col-2">
                <h2 className="text-white mb-0">
                  <Link>
                    BUMD<span className="text-green">es</span>
                  </Link>
                </h2>
              </div>
              <div className="col-3">
                <NavMenu></NavMenu>
              </div>
              <div className="col"></div>
              <div className="col-4">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here"
                    aria-label="Search here"
                    aria-describedby="basic-addon2"
                  />
                  <button class="btn" type="button" id="button-addon2">
                    <BiSearch></BiSearch>
                  </button>
                </div>
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-end gap-35">
                  <div>
                    <Link to={"wishlist"}>
                      <AiOutlineHeart className="header-icons" />
                    </Link>
                  </div>
                  <div>
                    <Link to={"cart"}>
                      <MdOutlineShoppingBag className="header-icons" />
                    </Link>
                  </div>
                  {isLoggedIn ? (
                    <>
                      <div className="dropdown">
                        <Link
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <AiOutlineUser className="header-icons" />
                        </Link>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Hello, {authState?.user?.firstname}
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/my-orders">
                              My Orders
                            </a>
                          </li>
                          <li>
                            <Link onClick={handleLogout} class="dropdown-item">
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="dropdown">
                        <Link
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <AiOutlineUser className="header-icons" />
                        </Link>
                        <ul class="dropdown-menu">
                          <li>
                            <Link to={"login"} class="dropdown-item">
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"register"}
                              class="dropdown-item"
                              href="#"
                            >
                              Register
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
        <header className="second-header py-1">
          <div className="container-xxl">
            <div className="row">
              <div className="col-2">
                <a>Categories</a>
              </div>
              <div className="col-10">
                <div className=" d-flex align-items-center justify-content-start gap-5">
                  <Link>Kesehatan</Link>
                  <Link>Dapur</Link>
                  <Link>Rumah Tangga</Link>
                  <Link>Pertanian</Link>
                  <Link>Elektronik</Link>
                  <Link>Fashion pria</Link>
                  <Link>Fashion wanita</Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
