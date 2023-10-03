import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signout from './pages/Signout'
import Signin from './pages/Signin'
const App = () => {
  return (
    <>
  <Router>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/sign-in' element={<Signin/>}/>
  <Route path='/Sign-out' element={<Signout/>}/>

</Routes>

  </Router>
    
    </>
  )
}

export default App
