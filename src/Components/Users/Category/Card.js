import React, { useState } from 'react'
import './card.css'
import { useHistory } from 'react-router-dom';
import Productpage from './Productpage';

const Card = (props,id) => {
    const [cart, setCart] = useState([])
    const [itemIndex, setItemIndex] = useState(1)

    const history = useHistory()
    const {productItem} = props;

    const onClickHandler = async(id) =>{
        console.log(id)
        history.push(`/product-page/${id}`)
    }

  return (
    <>
    <div onClick={(() => onClickHandler((productItem.id)))}>
    <div className="card">
        <div>
        <p>{productItem.product_name}</p>
        <span>{productItem.description}</span>
        </div>
        <img src={productItem.image_url} alt="" />
        <div className="card-body">
        <h5>{productItem.price}</h5>
        <p>{productItem.features}</p>
        </div>

        {/* {cart.length === 0 && <p>Cart: (empty)</p>}
        {cart.length > 0 && <p>Cart: {cart.toString()}</p>} */}

        <button className='btn btn-primary'
        onClick={() => {
            setCart([...cart, ` item ${itemIndex}`]);
            setItemIndex(itemIndex + 1);}}>Buy now</button>
      </div>
    </div>
    
    </> 
  )
}
export default Card