import React from 'react'
import NavBar from '../Navbars/NavBar'
import Electro from './images/electronics.png'
import Mobile from './images/mobile-app.png'
import Shirt from './images/shirt.png'
import Homeappliances from './images/home-appliance.png'
import Toys from './images/toys.png'
import Beauty from './images/makeup-pouch.png'
import './Home.css'
import { useHistory } from 'react-router-dom'
const Home = () => {
  const history = useHistory()
  const onChangeHandler = () =>{
    history.push('/ecommerce')
  }
  return (
    <>
     <NavBar />
     <div className='homepage'>
      <h4 className='text-center mt-4' style={{marginLeft:'120px'}}>Please Select Your Category</h4>
       <div className='d-flex col-md-10' style={{marginLeft:'130px', marginTop:'100px'}}>
        <div className='col-md-1' style={{marginTop:'150px'}}></div>

        <div className='col-md-3 shadow-lg p-3 mb-5 bg-white rounded' onClick={e => onChangeHandler(e)} style={{cursor:'pointer'}}>
          <p className='text-center mt-4'><img src={Mobile} width='30' alt='' /> Mobiles</p>
        </div>

        <div className='col-md-3 shadow-lg p-3 mb-5 bg-white rounded' style={{marginLeft:'80px',cursor:'pointer'}} onClick={e =>onChangeHandler(e)} >
          <p className='text-center mt-4'><img src={Electro} width='30' alt=''/>Electronics</p>
        </div>
        <div className='col-md-3 shadow-lg p-3 mb-5 bg-white rounded' style={{marginLeft:'80px',cursor:'pointer'}} onClick={e => onChangeHandler(e)}>
          <p className='text-center mt-4'><img src={Shirt} width='30' alt=''/>Fashion</p>
        </div>
        <div className='col-md-1' style={{marginTop:'150px'}}></div>
       </div>

       <div className='d-flex col-md-10' style={{marginLeft:'130px', marginTop:'10px'}}>
        <div className='col-md-1' style={{marginTop:'150px'}}></div>
        <div className='col-md-3 shadow-lg p-3 mb-5 bg-white rounded' onClick={e => onChangeHandler(e)} style={{cursor:'pointer'}}>
          <p className='text-center mt-4'><img src={Homeappliances} width='30' alt='' />Home Appliances</p>
        </div>
        <div className='col-md-3 shadow-lg p-3 mb-5 bg-white rounded' style={{marginLeft:'80px',cursor:'pointer'}} onClick={e => onChangeHandler(e)}>
          <p className='text-center mt-4'><img src={Toys} width='30' alt='' />Kids</p>
        </div>
        <div className='col-md-3 shadow-lg p-3 mb-5 bg-white rounded' style={{marginLeft:'80px',cursor:'pointer'}} onClick={e => onChangeHandler(e)}>
          <p className='text-center mt-4'><img src={Beauty} width='30' alt='' />Beauty</p>
        </div>
        <div className='col-md-1' style={{marginTop:'150px'}}></div>
       </div>

    </div>
    </>
  )
}

export default Home