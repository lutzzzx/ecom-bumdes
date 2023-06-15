import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
  const {title} = props;
  return (
    <div className='breadcrumb mb-0'>
      <div className='container-xxl'>
        <div>
          <p className='text-center'>
            <Link to={"/"} className='text-dark'>
              Home &nbsp;/
            </Link>
            <strong> {title}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb