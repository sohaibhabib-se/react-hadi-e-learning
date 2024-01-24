import React, { useContext } from "react";
import { AuthContext } from "../../logic/context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const [auth] = useContext(AuthContext);
  return (
    <div>
      Home
      {
        auth?.token ? (
          "Yes, I am login"
        ) : (
          <button>
            <Link to={"/login"}>Login</Link>
          </button>
        )
        // auth && auth.token
      }
    </div>
  );
};

export default Home;
