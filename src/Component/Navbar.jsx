import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({value}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top p-0">
        <div className="container-fluid  bg-black">
          <a className="navbar-brand text-white" href="#"><h1 className='d-none d-md-block'>Shopping</h1><h5 className='d-block d-md-none'>Shopping</h5></a>
          <div className="d-flex">
            <div>
          <button className="btn d-block d-lg-none  p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span className="fa-solid fa-cart-plus d-none d-md-block text-white" style={{color: '#0008ff'}}>{value}</span><span className="fa-solid fa-cart-plus d-block d-md-none text-white p-0" style={{color: '#0008ff'}}>{value}</span></button>
            </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto">

              
                <Link to='/mobile' className='fw-bolder'>Mobiles</Link>
                <Link to='/airpods' className='fw-bolder'>Airpods</Link>
                <Link to='/headphones' className='fw-bolder'>Headphones</Link>
                <Link to='/charger' className='fw-bolder'>Charger</Link>
                <Link to='/smartwatch' className='fw-bolder'>Smart Watch</Link>
                <Link to='/' className='fw-bolder'>All</Link>
              
            </div>
              
             
              <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span className="fa-solid fa-cart-plus text-white" style={{color: '#0008ff'}}>{value}</span></button>
    
            
          </div>
        </div>
      </nav>
    );
};

export default Navbar;