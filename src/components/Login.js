import { Button, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { login } from "../actions/authAction";
 
const Login = () => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        dispatch(login('Pepito Perez'));

    }

    return (
        <div>
            <Text fontSize='2xl'>Login</Text>
            <Button variant='outline' colorScheme='blue' fontSize='20px' marginLeft='20px'
            onClick={handleLogin}
            >Login</Button>
        </div>
    );
};

export default Login;

