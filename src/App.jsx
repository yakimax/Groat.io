import './App.css'
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Terms from './pages/Terms.jsx'
import Support from './pages/Support.jsx'
import EditProfile from './pages/EditProfile.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import { ContextWrapper } from './Context/ContextWrapper.js'
import { useState } from 'react'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute.jsx'
import NotFound from './pages/NotFound.jsx'


function App() {
  const [user,setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <ContextWrapper.Provider value={{user,setUser,loading,setLoading}}>
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/edit-profile" element={<EditProfile/>}/>
          <Route path="/support" element={<Support/>}/>
        </Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </ContextWrapper.Provider>
  )
}

export default App
