import './App.css'
import Home from './pages/Home.jsx'
// import Catalog from './pages/Catalog'
// import Profile from './pages/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Terms from './pages/Terms.jsx'
import Support from './pages/Support.jsx'
import EditProfile from './pages/EditProfile.jsx'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/edit-profile" element={<EditProfile/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
