import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../components/Login';
import { authReducer } from '../reducers/authReducer';
import { AuthContext } from '../context/AuthContext';
import { useReducer } from 'react';
import RoutesApp from './RoutesApp';
import PrivateRoute from './PrivateRoute';
import PublicRouter from './PublicRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

const AppRouter = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    if (!user) return
    localStorage.setItem('user', JSON.stringify(user))
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={
              <PublicRouter>
                <Login />
              </PublicRouter>
            }/>
           
            <Route path='/*' element={
              <PrivateRoute>
                <RoutesApp/>
              </PrivateRoute>
            }/>

        </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default AppRouter