import React, { useContext, useState } from 'react'
import { _useLogin } from '../../logic/actions/_common'
import { AuthContext } from '../../logic/context/AuthContext';
import { useNavigate } from 'react-router';

const Login = () => {

  const {submit, changeHandler, loginData, loading} = _useLogin();
  const [auth] = useContext(AuthContext);
  const router = useNavigate();

  if(auth.token) {
    router("/");
  }


  return (
    <div style={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}} >
      <div style={{width: "300px", border: "1px solid lightgrey", padding: "10px", borderRadius: "10px"}}>
        <h2>Login</h2>
        <div style={{display: "flex", flexDirection:"column", gap: "10px"}}>
          <input name="email" value={loginData.email} onChange={changeHandler} />
          <input name='password' value={loginData.password} onChange={changeHandler} />
          <button onClick={submit}>{loading ? "Loading..." : "Login"}</button>
        </div>
      </div>
    </div>
  )
}

export default Login