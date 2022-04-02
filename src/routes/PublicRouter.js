import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

const PublicRouter = ({children}) => {
    const { user } = useContext(AuthContext);

  return (
    user.logged ? <Navigate to='/'/> : children
  )
}

export default PublicRouter