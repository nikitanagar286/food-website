import React, { useContext } from 'react'
import { Storecontext } from '../context/Storecontext'


const Placeorder = () => {
     const {getTotalCartAmount}=useContext(Storecontext)
  return (
 
    <form className='placeorder'>
      <div className="placeorder-left">

        <p className="tittle">Delivery information</p>
        <div className="multi-filelds">
          <input type="text"  placeholder='First name'/><input type="text" placeholder='Last name'/>
        </div>
        <input type="email" placeholder='email address' />
        <input type="text"  placeholder='street'/>
        <div className="multi-filelds">
          <input type="text"  placeholder='city'/><input type="text" placeholder='state'/>
        </div>
        <div className="multi-filelds">
          <input type="text"  placeholder='Zip code'/><input type="text" placeholder='country'/>
        </div>
        <input type="text" placeholder='phone' />
      </div>
      <div className="placeorder-right">
      <h2>cart Totals</h2>
          <div>
            <div className="cart-detail">
              <p>subtotal</p>
              <p>$</p>
            </div>
            <hr/>
            <div className="cart-detail">
           <p>Delivery Fee</p>
           <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-detail">
              <b>Total</b>

<b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b> 
           </div>

          
          </div>
          <button className='btn'>PROCEED TO CHECKOUT</button>
        </div>
      




    </form>
  )
}

export default Placeorder