import React from 'react'
import { Navbar } from './compononts/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddPost from './compononts/AddPost'
import All_Users from './compononts/All_Users'
import Get_Post from './compononts/Get_Post'
import Post_Detail from './compononts/Post_Detail'
import Profile from './compononts/Profile'






const App = () => {

  return (

    <>

    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Get_Post/>}/>
      <Route path='/post' element={<AddPost/>}/>
      <Route path='/post/:id' element={<Post_Detail/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/users' element={<All_Users/>}/>
      
    </Routes>
    </Router>

    </>


  )
}

export default App