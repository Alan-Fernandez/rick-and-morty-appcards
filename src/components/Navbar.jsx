import React from 'react'

const Navbar = ({brand}) => {
  return (
        <nav className="navbar navbar-dark bg-dark fs-2 fw-bolder">
            <div className='container justify-content-center'>
                <a className='navbar-brand text-uppercase ' href='/'>{brand}</a>
            </div>
        </nav>
  )
}

export default Navbar
