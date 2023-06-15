import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <>
      <Meta title = 'BUMDes - Checkout' />
      <BreadCrumb title = 'Checkout' />
      <main className='checkout main-home'>
        <div className='container-xxl'>
          <div className='checkout-wrapper'>
            <div className='billing'>
              <h5>Billing Details</h5>
              <form className='checkout-form'>
                <input type="text" className="form-control form-control-half" id="First name" placeholder="First name" required/>
                <input type="text" className="form-control form-control-half" id="Last name" placeholder="Last name" required/>
                <input type="text" className="form-control form-control-full" id="Address" placeholder="Address" required/>
                <input type="text" className="form-control form-control-full" id="City" placeholder="Town / City" required/>
                <input type="text" className="form-control form-control-half" id="District" placeholder="District" required/>
                <input type="text" className="form-control form-control-half" id="ZIP" placeholder="Postcode / ZIP" required/>
                <input type="text" className="form-control form-control-half" id="Phone" placeholder="Phone" required/>
                <input type="text" className="form-control form-control-half" id="Email" placeholder="Email Address" required/>
              </form>
              <Link to={'/cart'} className='link-btn'>Return to Cart</Link>
            </div>
            <div className='order'>
              <h5 className='mb-4'>Your Order</h5>
              <div className='order-items'>
                <div className='row title'>
                  <div className='col-6'>Product</div>
                  <div className='col-6 end'>Total</div>
                </div>
                <hr></hr>
                <div className='row'>
                  <div className='col-6'>Selada Hidroponik</div>
                  <div className='col-6 end'>IDR 35.000</div>
                </div>
                <hr></hr>
                <div className='row'>
                  <div className='col-6'>Shipping</div>
                  <div className='col-6 end'>Free Shipping</div>
                </div>
                <hr></hr>
                <div className='row title'>
                  <div className='col-6'>Total</div>
                  <div className='col-6 end'>IDR 35.000</div>
                </div>
              </div>
              <Link className='link-btn order-btn'>Place Order</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Checkout