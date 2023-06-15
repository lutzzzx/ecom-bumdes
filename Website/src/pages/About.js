import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Meta title={"BUMDes - About"}/>
      <BreadCrumb title='About'/>
      <div className='about-wrapper main-home py-5 about'>
        <div className='container'>
          <div  className='row align-items-center'>
            <div className='col-1'></div>
            <div className='col-10'>
              <div className='text-center py-2'>
                <h5 className='text-secondary'>Who Are we</h5>
                <h3>Welcome To BUMD<span className='text-green'>es</span></h3>
                <p className='about-bumdes py-4'>Bumdes, singkatan dari Badan Usaha Milik Desa, adalah suatu bentuk lembaga ekonomi di Indonesia yang dimiliki dan dikelola oleh masyarakat desa. Bumdes didirikan untuk meningkatkan kesejahteraan masyarakat desa melalui pengembangan berbagai usaha ekonomi yang berkelanjutan.</p>  
              </div>
            </div>
            <div className='col-1'></div>
          </div>
          <div className='team-member'>
            <h3 className='text-center'>Team Members</h3>
            <div className='member py-4 d-flex justify-content-center gap-4'>
              <div className='member-details '>
                <div className='image-member bantuan-1'>
                  <img src='' alt=''/>
                </div>
                <div className='biodata'>
                  <h5>Luthfi A. Zulfikri</h5>
                  <p>UI/UX, Front-End, Document Author</p>
                  <div className='social-media d-flex gap-4'>
                    <Link><BsTwitter/></Link>
                    <Link><BsInstagram/></Link>
                    <Link><BsYoutube/></Link>
                    <Link><IoMail/></Link>
                  </div>
                </div>
              </div>
              <div className='member-details '>
                <div className='image-member bantuan-1'>
                  <img src='' alt=''/>
                </div>
                <div className='biodata'>
                  <h5>Rizqullah A. Hade</h5>
                  <p>Back-End, Database Administrator</p>
                  <div className='social-media d-flex gap-4'>
                    <Link><BsTwitter/></Link>
                    <Link><BsInstagram/></Link>
                    <Link><BsYoutube/></Link>
                    <Link><IoMail/></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About