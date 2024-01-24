import axios from 'axios';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import Cookies from 'js-cookie';
import Crypto from 'crypto-js';

let key = "heloBhai97Kiya98Hai99heibhjbhhvhbjbhjvjhvjvjhvjhvjhvj"

export const _useLogin = () => {

    const [auth, setAuth] = useContext(AuthContext);
    const [loginData, setLoginData] = useState({email: "", password: ""});
    const [loading, setLoading] = useState(false);

    const changeHandler =e => {
        setLoginData((prev) => ({...prev , [e.target.name]: e.target.value}))
    }

    const submit = async () => {
        setLoading(true);
        // console.log(loginData);
        try {
            const res = await axios.post('/auth/signin', loginData)

            if (res.status === 200) { 
                console.log(res.data);
                setAuth(res.data);

                // console.log(Crypto.AES.encrypt(JSON.stringify(res.data), key).toString());
                // Cookies.set("auth", JSON.stringify(res.data)); 
                Cookies.set("auth", Crypto.AES.encrypt(JSON.stringify(res.data), key).toString()); 
                // window.localStorage.setItem("auth", JSON.stringify(res.data));
                // setAuth({ ...auth, token: res.data.token, user: res.data.user});  
            } else {
                console.log(res);
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }
  return {changeHandler, submit, loginData, loading };
}