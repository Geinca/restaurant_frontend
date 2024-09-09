import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home/Home'
import Signin from './Component/Signin/Signin'
import Signup from './Component/Signup/Signup'
import Aboutus from './Component/About us/Aboutus'
import Contactus from './Component/Contact us/Contactus'
import Ourpartner from './Component/Our partner/Ourpartner'
import Portfolio from './Component/Portfolio/Portfolio'
import Nav from './Component/Nav/Nav'
import Footer from './Component/Footer/Footer'
import Dashboard from './Component/Dashboard/Dashboard'
import All from './Component/Dashboard/Menu/All/All'
import Create from './Component/Dashboard/Menu/New/Create'
import New from './Component/Dashboard/Employee/New'
import Allemployee from './Component/Dashboard/Employee/Allemployee'
import Allorder from './Component/Dashboard/Order/Allorder'
import Neworder from './Component/Dashboard/Order/Neworder'


const App = () => {
  return (
    <div>
        <BrowserRouter>
        {/* <Nav/> */}
        <Routes>
              <Route path='/'element={<Home/>}/>
              <Route path='/signin' element={<Signin/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/aboutus' element={<Aboutus/>}/>
              <Route path='/contactus' element={<Contactus/>}/>
              <Route path='/ourpartner' element={<Ourpartner/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/catagory' element = {<All/>}/>
              <Route path='/create' element={<Create/>}/>
              <Route path='/new' element={<New/>}/>
              <Route path='/employee' element={<Allemployee/>}/>
              <Route path='/order' element={<Allorder/>}/>
              <Route path='/place' element={<Neworder/>}/>
        </Routes>
        {/* <Footer/> */}
        </BrowserRouter>
    </div>
  )
}

export default App