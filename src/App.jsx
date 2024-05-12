import { useState } from 'react'
import './App.css'
import Login from './components/LoginComp'
import { Route, Routes } from 'react-router'
import Signup from './components/SignupComp'
import Navbar from './components/NavBar'
import ItemList from './pages/ItemList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/index' element= {<Login/>}/>
      <Route path='/signup' element = {<Signup/>}/>
      <Route path='/products' element = {<ItemList/>}/>
    </Routes>
      {/* <Login/> */}
      {/* <Signup/> */}
    </>
  )
}

export default App
