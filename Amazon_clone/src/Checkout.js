import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
     <div className='Checkout_left'>
         <img className='checkout_ad' src='https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg' alt='banner' />

    <div>
      <h3>Hello, {user?.email}</h3>
     <h2 className='checkout_title'>Your Shopping Basket</h2>

      {basket.map(item => (
        <CheckoutProduct
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating} />
      ))}

     </div>
    </div>

     <div className='checkout_right'>
        <Subtotal />
    </div>
    </div>


  )
}

export default Checkout