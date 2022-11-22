import React,{useState} from 'react'
import { useEffect } from 'react'
import NavBar from '../../Navbars/NavBar'
import AllProducts from './AllProducts'
import Search from './Search'

const Ecommerce = (props) => {
    const productData = async () =>{
        const res = await fetch(`http://localhost:5000/auth/all-products-data`,{
            method: 'GET',
            headers:{'Content-Type' : 'application/json'}
        })
        const parseRes = await res.json()
        console.log(parseRes)
    }
    
    useEffect(() =>{
        productData()
    },[])

  return (
    <div>
  <NavBar />
  <Search />
  <AllProducts product={productData} />

    </div>
  
  )
}

export default Ecommerce