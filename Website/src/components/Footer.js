import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='footer-back'>
      </footer>
      <footer className='footer-area text-white position-relative'>
        <div className='home-bg'></div>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-2'>
              <div className='copyright'>
                <h2>
                  BUMD<span className='text-green'>es</span>
                </h2>
                <p>
                  &copy; {new Date().getFullYear()}{" "} BUMDes <br/>All Rights Reserved 
                </p>
              </div>
            </div>
            <div className='col-1'></div>
            <div className='col-2 d-flex flex-column'>
              <h6>
                About Us
              </h6>
              <Link to={"about"}>About us</Link>
              <Link>Share location</Link>
              <Link to={"contact"}>Contact</Link>
            </div>
            <div className='col-2 d-flex flex-column'>
              <h6>
                Useful Link
              </h6>
              <Link>Support policy</Link>
              <Link>Refund policy</Link>
              <Link>Terms & Conditions</Link>
              <Link>FAQs</Link>
            </div>
            <div className='col-2 d-flex flex-column'>
              <h6>
                Follow Us
              </h6>
              <Link>Instagram</Link>
              <Link>Twitter</Link>
              <Link>Facebook</Link>
              <Link>YouTube</Link>
            </div>
            <div className='col-3 d-flex flex-column'>
              <h6>
                Subscribe
              </h6>
              <p>
                Get E-mail updates about our latest shop and special offers.
              </p>
              <form>
                <input 
                  type="email" 
                  class="form-control"
                  placeholder='Enter your email address'
                  id="inputEmail"
                  required/>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer