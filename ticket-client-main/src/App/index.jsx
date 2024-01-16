// import React from "react";
// import { _useCategories } from "../logic/actions/_categories";

// const App = () => {
//   const { loading, categories } = _useCategories();

//   return <div>Data : {loading ? "please wait..." : JSON.stringify(categories)}</div>;
// };

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./common/login";
import Home from "./common/home";
import ClientDashboard from "./client/pages/client-dashboard";
import ClientOpenTickets from "./client/pages/client-open-tickets";
import ClientRoutes from "./client/pages/ClientRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ClientRoutes />}>
          <Route path="/client" element={<ClientDashboard />} />
          <Route path="/client/open" element={<ClientOpenTickets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
