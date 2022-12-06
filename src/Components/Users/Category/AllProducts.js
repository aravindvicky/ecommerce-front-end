import React,{useState} from 'react'
import NavBar from '../../Navbars/NavBar'
import Search from './Search'
import Card from './Card'

const AllProducts = ({product}) => {
  return (
    <div className='d-flex flex-wrap' style={{zIndex:'-9999',position:'absolute',top:'90px'}}>
      {
        product?.map(productData => {
          return (
            <div className='col-md-4'>
          <Card productItem={productData} />
          </div>
          )
        })
      }
        </div>
  )
}

export default AllProducts