// // src/components/Navbar.jsx
// import React, { useEffect, useState } from 'react';
// import '../styles/navBar.css'
// import { Link, useLocation } from 'react-router-dom';
// import { FaCartShopping } from 'react-icons/fa6';

// const Navbar = ({ func}) => {

//     const [authticate, setAuthenticate] = useState(false);
//     const location = useLocation();

//     const currentPath = location.pathname;

//     useEffect( () => {
//         if(currentPath == "/index" || currentPath == "/signup")
//             {
//                 setAuthenticate(false);

//             }
//             if(currentPath != "/index" || currentPath != "/signup")
//             {
//                 setAuthenticate(true);
//             }


//     },[authticate]);
   
//     console.log(authticate);

//   return (
//     <>
//     {authticate && (<nav>
//         <div>
//             <Link to="#">
//                 <img src='' alt='logo' width={100}/>
//             </Link>
//         </div>

//       <ul>
//         {/* <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/services">Services</Link></li> */}
//         <li><Link to="/products">Items</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/index" onClick={() => setAuthenticate(false)}>Login</Link></li>
//         <li className='cart-icon'><FaCartShopping onClick={func}/></li>
//       </ul>
//     </nav>)}
//     </>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from 'react';
import '../styles/navBar.css';
import { Link, useLocation } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { useAuth } from '../../src/AuthProvider'; // Import the AuthContext

const Navbar = ({ func }) => {
  const { user } = useAuth(); // Get user information from AuthContext
  const { role, isAuthenticated } = user; // Destructure user object to get role and isAuthenticated
  const location = useLocation();

  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Define links based on user role and authentication status
    if (role === 'cashier' && isAuthenticated) {
      console.log('if');
      setLinks([
        <Link key="home" to="/">Home</Link>,
        <Link key="about" to="/about">About</Link>,
        <Link key="services" to="/services">Services</Link>,
        <Link key="items" to="/products">Items</Link>,
        <Link key="contact" to="/contact">Contact</Link>,
        <Link key="logout" to="/index" onClick={() => setAuthenticate(false)}>Logout</Link>,
        <li key="cart" className='cart-icon'><FaCartShopping onClick={func}/></li>
      ]);
    } else if (role === 'admin' && isAuthenticated) {
      console.log('2nd if');
      setLinks([
        <Link key="addItem" to="/item-form">Add Item</Link>,
        <Link key="updateItem" to="/admin/update-item">Update Item</Link>,
        <Link key="stockManage" to="/admin/stock">Stock Manage</Link>,
        <Link key="logout" to="/index" onClick={() => setAuthenticate(false)}>Logout</Link>,
        <li key="cart" className='cart-icon'> cart <FaCartShopping onClick={func}/></li>
      ]);
    } else {
      // Default links for unauthenticated users or users with unknown roles
      console.log('else');
      setLinks([
        <Link key="home" to="/">Home</Link>,
        <Link key="about" to="/about">About</Link>,
        <Link key="services" to="/services">Services</Link>,
        <Link key="login" to="/index">Login</Link>,
        <li key="cart" className='cart-icon'><FaCartShopping onClick={func}/></li>
      ]);
    }
  }, [role, isAuthenticated]);

  // Check if current location is not login or signup page, if so, render the Navbar
  if (location.pathname !== '/login' && location.pathname !== '/signup') {
    return (
      <>
        {isAuthenticated && (
          <nav>
            <div>
              <Link to="#">
                <img src='' alt='logo' width={100}/>
              </Link>
            </div>
            <ul>
              {links.map(link => (
                <li key={link.key}>{link}</li>
              ))}
            </ul>
          </nav>
        )}
      </>
    );
  } else {
    return null;
  }
};

export default Navbar;


  