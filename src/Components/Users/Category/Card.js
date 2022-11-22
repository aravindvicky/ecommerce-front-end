import React from 'react'
import NavBar from '../../Navbars/NavBar'
import './card.css'
import Mobile from '../images/mobile-app.png'

const Card = (props) => {
    const {product} = props
  return (
    <>
    <NavBar />
     <div className="card">
        <img src={product.image_url} alt="" width='200' />
        <div className="card-body">
          <h2>{product.poduct_name}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          {/* <h5>{author}</h5> */}
        </div>
      </div>
    </>
   
  )
}

export default Card