// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import '../styles/navBar.css'
import { Link, useLocation } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

const Navbar = ({stat, func}) => {

    const [authticate, setAuthenticate] = useState(false);
    const location = useLocation();

    const currentPath = location.pathname;

    useEffect( () => {
        if(currentPath == "/index" || currentPath == "/signup")
            {
                setAuthenticate(false);

            }else
            {
                setAuthenticate(true);
            }


    },[]);
   




  return (
    <>
    {authticate && <nav>
        <div>
            <Link to="#">
                <img src='' alt='logo' width={100}/>
            </Link>
        </div>

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/products">Items</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/index">Login</a></li>
        <li className='cart-icon'><FaCartShopping onClick={func}/></li>
      </ul>
    </nav>}
    </>
  );
};

export default Navbar;
