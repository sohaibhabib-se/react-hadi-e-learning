import axios from 'axios';
import React from 'react'

const App = () => {

  const getCategories = () => {
    const res = axios.get("localhost:8000/category");
    console.log(res);

  }

  return (
    <div>
      <button onClick={getCategories}>Get Data</button>
    </div>
  )
}

export default App