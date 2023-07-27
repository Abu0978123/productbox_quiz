import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddItems from './pages/AddItems'
import CheckOut from './pages/CheckOut'
import Navbar from './components/Navbar'
import MyList from './pages/MyList'
function App() {

  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/add'element={<AddItems/>} />
        <Route path='/check-out'element={<CheckOut/>} />
        <Route path='/mylist'element={<MyList/>} />
    </Routes>
    </BrowserRouter>
</div>
  )
}

export default App
