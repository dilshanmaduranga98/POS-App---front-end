import { useState } from 'react'
import './App.css'
import Login from './components/LoginComp'
import { Route, Routes } from 'react-router'
import Signup from './components/SignupComp'
import Navbar from './components/NavBar'
import ItemList from './pages/ItemList'
import ItemForm from './components/ItemForm'
import AdminProducts from './pages/AdminProducts'
import UpdateItem from './components/UpdateItem'
import Cart from './components/Cart';

function App() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [itemCount, setItemCount] = useState(0);

  const handleVisible = () => {
    setVisible(!visible);
  }
  return (
    <div className='app-main'>
      <Navbar stat = {visible} func ={handleVisible}/>
      <Cart vis ={visible} funct = {handleVisible}/>
      <Routes>
        <Route path='/index' element= {<Login/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/products' element = {<ItemList/>}/>
        <Route path='/item-form' element = {<ItemForm/>}/>
        <Route path='/admin/item' element = {<AdminProducts/>}/>
        {/* <Route path='/admin/form' element = {<UpdateItem/>}/> */}
      </Routes>
      {/* <Login/> */}
      {/* <Signup/> */}
    </div>
  )
}

export default App
