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
  const onClickHandler = (e, category) => {
    history.push({
      pathname: '/ecommerce',
      state: {
        categoryName: category
      }
    })
  }
  return (
    <>
      <NavBar />
      <div className='homepage'>
        <h4 className='text-center mt-4' style={{ marginLeft: '120px' }}>Please Select Your Category</h4>
        <div className='d-flex col-md-10' style={{ marginLeft: '130px', marginTop: '100px' }}>
          <div className='col-md-1' style={{ marginTop: '150px' }}></div>

          <div className='col-md-3 shadow-lg p-3 mb-5 bg-white rounded' onClick={e => onClickHandler(e, 'Mobile')} style={{ cursor: 'pointer' }}>
            <p className='text-center mt-4'><img src={Mobile} width='30' alt='' /> Mobiles</p>
          </div>

          <div className='col-md-3 shadow-lg p-3 mb-5 bg-white rounded' style={{ marginLeft: '80px', cursor: 'pointer' }} onClick={e => onClickHandler(e, 'Electronics')} >
            <p className='text-center mt-4'><img src={Electro} width='30' alt='' /><span className='ml-2'>Electronics</span></p>
          </div>
          <div className='col-md-3 shadow-lg p-3 mb-5 bg-white rounded' style={{ marginLeft: '80px', cursor: 'pointer' }} onClick={e => onClickHandler(e, 'Fashion')}>
            <p className='text-center mt-4'><img src={Shirt} width='30' alt='' /><span className='ml-2'>Fashion</span></p>
          </div>
          <div className='col-md-1' style={{ marginTop: '150px' }}></div>
        </div>

        <div className='d-flex col-md-10' style={{ marginLeft: '130px', marginTop: '10px' }}>
          <div className='col-md-1' style={{ marginTop: '150px' }}></div>
          <div className='col-md-3 shadow-lg p-3 mb-5 bg-white rounded' onClick={e => onClickHandler(e, 'Home Appliances')} style={{ cursor: 'pointer' }}>
            <p className='text-center mt-4'><img src={Homeappliances} width='30' alt='' /><span className='ml-2'>Home Appliances</span></p>
          </div>
          <div className='col-md-3 shadow-lg p-3 mb-5 bg-white rounded' style={{ marginLeft: '80px', cursor: 'pointer' }} onClick={e => onClickHandler(e, 'Kids')}>
            <p className='text-center mt-4'><img src={Toys} width='30' alt='' /><span className='ml-2'>Kids</span></p>
          </div>
          <div className='col-md-3 shadow-lg p-3 mb-5 bg-white rounded' style={{ marginLeft: '80px', cursor: 'pointer' }} onClick={e => onClickHandler(e, 'Beauty')}>
            <p className='text-center mt-4'><img src={Beauty} width='30' alt='' /><span className='ml-2'>Beauty</span></p>
          </div>
          <div className='col-md-1' style={{ marginTop: '150px' }}></div>
        </div>
      </div>
    </>
  )}
export default Home