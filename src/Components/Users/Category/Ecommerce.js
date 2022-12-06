import React,{useState} from 'react'
import { useEffect } from 'react'
import NavBar from '../../Navbars/NavBar'
import AllProducts from './AllProducts'
import Search from './Search'
import { useHistory } from 'react-router-dom'

const Ecommerce = (props) => {
    const[data, setData] = useState("");
    const history = useHistory()
    const {categoryName,id} = history.location.state;
    
    const productData = async () =>{
        const res = await fetch(`http://localhost:5000/auth/products-data/${categoryName}`,{
            method: 'GET',
            headers:{'Content-Type' : 'application/json'}
        })
        const parseRes = await res.json()
        console.log(parseRes)
        setData(parseRes)
    }
    
    useEffect(() =>{
        productData()
    },[])
    if(data === ''){
        return<p>Loading</p>
    }
  return (
    <div>
  <NavBar />
  <Search />
  <AllProducts product={data} />
    </div>
  
  )
}

export default Ecommerce