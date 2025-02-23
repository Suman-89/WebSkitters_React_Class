import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/auth/login/login'
import Registration from './pages/auth/registration/registration'
import ProductCreate from './pages/cms/productCreate/productCreate'
import ProductList from './pages/cms/productList/productList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login />
    <Registration />
    <ProductCreate />
    <ProductList />
    </>
  )
}

export default App
