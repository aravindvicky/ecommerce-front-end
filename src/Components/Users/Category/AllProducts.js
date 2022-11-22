import React,{useState} from 'react'
import NavBar from '../../Navbars/NavBar'
import Search from './Search'
import Card from './Card'

const AllProducts = (props) => {
  // const [data, setData] = useState([])
  return (
    <div>
      {
        props.data?.map(productData => {
          console.log(productData)
          return <Card product={productData} />
        })
      }
        </div>
  )
}

export default AllProducts