import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import Crypto from 'crypto-js';
import axios from "axios";

let key = "heloBhai97Kiya98Hai99heibhjbhhvhbjbhjvjhvjvjhvjhvjhvj"

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    });

    useEffect(() => {
        // let user = window.localStorage.getItem("auth");
        let user = Cookies.get("auth");
        // let hi = Crypto.AES.decrypt(user, key)
        // console.log(user, "hi")
        // Crypto.AES.decrypt(user, key).toString();

        // console.log(JSON.parse(user), "hi");
        // console.log(Crypto.AES.decrypt(user, key), "hi");
        // console.log(JSON.parse(hi.toString(Crypto.enc.Utf8)), "hi");

    
        // if(user) {
        //     setAuth(JSON.parse(user));
        // }
        let hi;
        if(user) {
            hi = Crypto.AES.decrypt(user, key)
            if (hi) {
                setAuth(JSON.parse(hi.toString(Crypto.enc.Utf8)))
            }
            // setAuth(JSON.parse(user));
        }
    
    }, []);

    axios.defaults.baseURL = "http://localhost:8000"

    return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>
};

export default AuthProvider;