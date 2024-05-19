// import { useState } from 'react'
// import './App.css'
// import Login from './components/LoginComp'
// import { Route, Routes} from 'react-router'
// import Signup from './components/SignupComp'
// import Navbar from './components/NavBar'
// import ItemList from './pages/ItemList'
// import ItemForm from './components/ItemForm'
// import AdminProducts from './pages/AdminProducts'
// import UpdateItem from './components/UpdateItem'
// import Cart from './components/Cart';
// import StockMng from './Admin/component/StockMng'
// import UpdateStock from './Admin/component/UpdateStock'
// import Checkout from './pages/Checkout'

// function App() {
//   const [count, setCount] = useState(0);
//   const [visible, setVisible] = useState(false);
//   const [itemCount, setItemCount] = useState(0);

//   const handleVisible = () => {
//     setVisible(!visible);
//   }
//   return (
//     <div className='app-main'>
//       <Navbar  func ={handleVisible}/>
//       <Cart vis ={visible} funct = {handleVisible}/>

//         <Routes>
//           <Route path='/index' element= {<Login/>}/>
//           <Route path='/signup' element = {<Signup/>}/>
//           <Route path='/products' element = {<ItemList/>}/>
//           <Route path='/item-form' element = {<ItemForm/>}/>
//           <Route path='/admin/item' element = {<AdminProducts/>}/>
//           <Route path='/admin/stock' element = {<StockMng/>}/>
//           <Route path='/admin/update-stock' element = {<UpdateStock/>}/>
//           <Route path="/checkout" element={<Checkout/>} />
//           {/* <Route path='/admin/form' element = {<UpdateItem/>}/> */}
//         </Routes>

//     </div>
//   )
// }

// export default App


import React, { useState } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/LoginComp';
import Signup from './components/SignupComp';
import Navbar from './components/NavBar';
import ItemList from './pages/ItemList';
import ItemForm from './components/ItemForm';
import AdminProducts from './pages/AdminProducts';
import UpdateItem from './components/UpdateItem';
import Cart from './components/Cart';
import StockMng from './Admin/component/StockMng';
import UpdateStock from './Admin/component/UpdateStock';
import Checkout from './pages/Checkout';

function App() {
  const [role, setRole] = useState('cashier'); // Default role is cashier

  // Define routes based on role
  const cashierRoutes = [
    <Route key="login" path='/login' element={<Login />} />,
    <Route key="signup" path='/signup' element={<Signup />} />,
    <Route key="products" path='/products' element={<ItemList />} />,
    <Route key="checkout" path='/checkout' element={<Checkout />} />
  ];

  const adminRoutes = [
    ...cashierRoutes,
    <Route key="login" path='/login' element={<Login />} />,
    <Route key="signup" path='/signup' element={<Signup />} />,
    <Route key="updateItem" path='/admin/update-item' element={<UpdateItem />} />,
    <Route key="adminProducts" path='/admin/products' element={<AdminProducts />} />,
    <Route key="updateStock" path='/admin/update-stock' element={<UpdateStock />} />,
    <Route key="itemForm" path='/admin/item-update' element={<ItemForm/>}/>,
    <Route key="stockMng" path='/admin/stock' element={<StockMng />} />
  ];

  const routes = role === 'admin' ? adminRoutes : cashierRoutes;
  const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const [itemCount, setItemCount] = useState(0);
  
    const handleVisible = () => {
      setVisible(!visible);
    }
  return (
    <div className='app-main'>
      <Navbar func ={handleVisible}/>
      <Cart vis ={visible} funct = {handleVisible}/>

      <Routes>
        {routes}
        {/* Add additional routes for other roles */}
        {/* For routes not found */}
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </div>
  );
}

export default App;
