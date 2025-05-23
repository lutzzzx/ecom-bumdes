import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { BsTwitter, BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Meta title="BUMDes - Contact" />
      <BreadCrumb title="Contact" />
      <div className="contact main-home">
        <div className="container-xxl">
          <div className="gap-4 d-flex flex-column">
            <div className="contact-wrapper p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11029.820249973132!2d109.32955012397156!3d-7.426272740831857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655984febfe03b%3A0x5027a76e35517f0!2sBlater%2C%20Kec.%20Kalimanah%2C%20Kabupaten%20Purbalingga%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1687668865290!5m2!1sid!2sid"
                width="100%"
                height="100%"
                className="rounded-3"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contact-wrapper">
              <div className="row">
                <div className="col-7">
                  <div className="wh-100">
                    <h3>Get In Touch</h3>
                    <form className="contact-form py-2 wh-100">
                      <div className="form-details w-100">
                        <input
                          type="text"
                          className="contact-form-control"
                          id="name"
                          placeholder="Name"
                          required
                        />
                        <input
                          type="email"
                          className="contact-form-control"
                          id="email"
                          placeholder="Email"
                        />
                        <input
                          type="text"
                          className="contact-form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                        <input
                          type="text"
                          className="contact-form-control-2"
                          id="message"
                          placeholder="Your Message"
                          required
                        />
                        <button type="submit" class="btn btn-primary">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-1"></div>
                <div className="col-4">
                  <div className="wh-100 contact-us">
                    <div className="contact-details">
                      <img src="images/telephone.png" alt="telephone" />
                      <p className="mb-0">08123456789</p>
                    </div>
                    <div className="contact-details">
                      <img src="images/email.png" alt="email" />
                      <p className="mb-0">halo@bumdes.com</p>
                    </div>
                    <div className="contact-details">
                      <img src="images/home.png" alt="home" />
                      <p className="mb-0">Jl. Los Santos</p>
                    </div>
                    <br />
                    <div>
                      <h5>Follow Us</h5>
                      <div className="social-media">
                        <Link>
                          <BsTwitter />
                        </Link>
                        <Link>
                          <BsInstagram />
                        </Link>
                        <Link>
                          <BsYoutube />
                        </Link>
                        <Link>
                          <BsFacebook />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
