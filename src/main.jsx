import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './context/cartContext.jsx'
import { AuthProvider } from './AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
        <CartContextProvider>
             <App />
        </CartContextProvider>
    </AuthProvider>
  </BrowserRouter>,
)
