import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home/Home'
import Signin from './Component/Signin/Signin'
import Signup from './Component/Signup/Signup'
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
              <Route path='/'element={<Home/>}/>
              <Route path='/signin' element={<Signin/>}/>
              <Route path='/signup' element={<Signup/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App