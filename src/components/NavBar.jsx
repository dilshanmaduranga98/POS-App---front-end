// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import '../styles/navBar.css'
import { Link, useLocation } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

const Navbar = ({ func}) => {

    const [authticate, setAuthenticate] = useState(false);
    const location = useLocation();

    const currentPath = location.pathname;

    useEffect( () => {
        if(currentPath == "/index" || currentPath == "/signup")
            {
                setAuthenticate(false);

            }
            if(currentPath != "/index" || currentPath != "/signup")
            {
                setAuthenticate(true);
            }


    },[authticate]);
   
    console.log(authticate);

  return (
    <>
    {authticate && (<nav>
        <div>
            <Link to="#">
                <img src='' alt='logo' width={100}/>
            </Link>
        </div>

      <ul>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li> */}
        <li><Link to="/products">Items</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/index" onClick={() => setAuthenticate(false)}>Login</Link></li>
        <li className='cart-icon'><FaCartShopping onClick={func}/></li>
      </ul>
    </nav>)}
    </>
  );
};

export default Navbar;


  