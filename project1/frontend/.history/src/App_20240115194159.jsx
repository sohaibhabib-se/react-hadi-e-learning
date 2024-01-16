import axios from 'axios';

const App = () => {

  const getCategories = async () => {

    try {
      const res = await axios.get("http://localhost:8000/category");
    console.log(res);
    } catch (error) {
      console.log(error);
      alert('Sorry, Failed try again')
    }
    

  }

  return (
    <div>
      <button onClick={getCategories}>Get Data</button>
    </div>
  )
}

export default App