import { useEffect } from 'react';
import { _useCategories } from './logic/actions/_categories';

const App = () => {
  

  const {loading, /*getCategories,*/ categories} = _useCategories();

  // useEffect(() => {
  //   getCategories();
  // }, []);

  return (
    <div>
      {/* <button onClick={getCategories}>Get Data</button> */}
      <br />
      Data: {loading ? "Please wait..." : JSON.stringify(categories)}
    </div>
  )
}

export default App
