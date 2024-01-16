import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    setLoading(true)
    try {
      const res = await axios.get('http://localhost:8000/category')
      console.log(res)
      setCategories(res.data.categories)
    } catch (error) {
      console.log(error)

      if (error.response.data.status === 401) {
      } else if (error.response.data.status === 500) {
      } else if (error.response.data.status === 403) {
      } else if (error.response.data.status === 404) {
      }

      alert('Sorry, Failed try again')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button onClick={getCategories}>Get Data</button>
      <br />
      Data: {loading ? "Please wait..." : JSON.stringify(categories)}
    </div>
  )
}

export default App
