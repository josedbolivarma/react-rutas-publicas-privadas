import { Box, Button, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react';
import { logout } from '../actions/authAction';
const NavBar = () => {

    const { dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch(logout());
    }

  return (
    <Flex
            bg="tomato"
            w="100%"
            px={5}
            py={4}
            justifyContent="space-between"
            alignItems="center"
        >
            <Flex flexDirection="row" justifyContent="left" alignItems="center">
              
                <Text pl={3} color="white" fontSize="20px">
                    MyApp
                </Text>
            </Flex>
            <Box display="flex" justifyContent="space-around" alignItems="center">
                <Link
                    as={NavLink}
                    to="/home"
                    px={2}
                    fontSize="20px"
                    style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }}
                >
                    Home</Link>
                    <Link
                    as={NavLink}
                    to="/login"
                    px={2}
                    fontSize="20px"
                    style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }}
                >
                    Login</Link>
                  <Link
                    as={NavLink}
                    to="/counter"
                    px={2}
                    fontSize="20px"
                    style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }}
                >
                    Counter</Link>
                
                <Link
                    as={NavLink}
                    to="/profile"
                    px={2}
                    fontSize="20px"
                    style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }}
                >
                    Profile</Link>
                <Button variant="outline" type="submit" fontSize="20px" marginLeft="20px" onClick={handleLogout}>Logout</Button>
            </Box>
        </Flex >
  )
}

export default NavBar

/*
  
                <Link
                    as={NavLink}
                    to="/counter"
                    px={2}
                    fontSize="20px"
                    style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }}
                >
                    Counter</Link>
*/