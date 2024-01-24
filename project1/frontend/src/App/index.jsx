// import { useEffect } from 'react';
// import { _useCategories } from '../logic/actions/_categories';

// const App = () => {

//   const {loading, /*getCategories,*/ categories} = _useCategories();

//   // useEffect(() => {
//   //   getCategories();
//   // }, []);

//   return (
//     <div>
//       {/* <button onClick={getCategories}>Get Data</button> */}
//       <br />
//       Data: {loading ? "Please wait..." : JSON.stringify(categories)}
//     </div>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientRoutes from "./client/pages/ClientRoutes";
import ClientA from "./client/pages/ClientA";
import ClientB from "./client/pages/ClientB";
import Login from "./common/login";
import Home from "./common/home";

const App = () => {
  let user = "client";
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path="/login" element={<>Login Form</>} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

        <Route element={<ClientRoutes user={user} />}>
          {/* <Route path='/client/a' element={<ClientA/>} /> */}
          <Route path="/client/a" element={<ClientA />} />
          <Route path="/client/b" element={<ClientB />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
