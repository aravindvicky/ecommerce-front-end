import React,{useState} from 'react'
import NavBar from '../../Navbars/NavBar'

const Productpage = () => {
    const [data, setData] = useState({})
    const getData = async(id) =>{
        const res = await fetch(`http://localhost:5000/auth/get/${id}`,{
            method: 'GET',
            headers: {'Content-Type' : 'application/json'}
        })
        const parseRes = await res.json()
        console.log(parseRes)
        setData(parseRes)
    }
    console.log(data)
  return (
    <>
    <NavBar />
    <h1 style={{marginTop:'70px'}}>Hello</h1>
    </>
  )}
export default Productpage