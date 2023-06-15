import React from 'react';
import { Link } from 'react-router-dom';
import Landscape from '../images/landscape.jpg';
import Meta from '../components/Meta';

const Login = () => {
  return (
    <>
      <Meta title='BUMDes - Forgot Password'/>
      <main className='login-page'>
        <div className='background'>
          <img src={Landscape} alt=''/>
        </div>
        <div className='title'>
          <div className='title-details'>
            <h1 className='text-white'>Welcome To BUMDes</h1>
            <br/>
            <Link to={"/"}>Back to Home</Link>
          </div>
        </div>
        <div className="container">
          <div className='login'>
            <div className='login-details'>
              <h2 className='text-navy'>BUMD<span className='text-green'>es</span></h2>
              <h5><br/><br/>Password is gone?<br/>Let's reset it!</h5>
              <p><br/>Please enter your email to receive a link to reset your password.<br/>
              </p>
              <form>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" required id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email address</label>
                </div>
                <button type='submit' className='btn-control'>Send Reset Email</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Login