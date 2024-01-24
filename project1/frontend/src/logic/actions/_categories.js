import axios from "axios";
import { useEffect, useState } from "react";

export const _useCategories = () => {
    
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);



  const getCategories = async () => {
    setLoading(true)
    try {
      const res = await axios.get('/category')
      console.log(res)
      setCategories(res.data.categories)
    } catch (error) {
      console.log(error)

      // if (error.response.data.status === 401) {
      // } else if (error.response.data.status === 500) {
      // } else if (error.response.data.status === 403) {
      // } else if (error.response.data.status === 404) {
      // }

      alert('Sorry, Failed try again')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCategories();
  }, []);


  return {loading, /*getCategories,*/ categories};
}