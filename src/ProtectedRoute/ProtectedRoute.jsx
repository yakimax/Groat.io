import React from 'react'
import { ContextWrapper } from '../Context/ContextWrapper.js'
import { useContext } from 'react'
import { Navigate,Outlet } from 'react-router-dom'

function ProtectedRoute({children}) {
  const {user} = useContext(ContextWrapper);
  if(!user){
    return (<Navigate to="/login"/>)
  }else{
    return <Outlet/>;
  }
}

export default ProtectedRoute