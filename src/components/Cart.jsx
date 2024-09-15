import React, { useContext, useEffect } from "react";
import { Storecontext } from "../context/Storecontext";
import { useNavigate } from "react-router-dom";
// import { Description } from '@mui/icons-material'

const Cart = () => {
  const { cartItem, Food_List, removeTocart,  getTotalCartAmount } = useContext(Storecontext);

  useEffect(() => {
    console.log(Food_List, "rmtest33");
  }, [Food_List]);



  const Navigate=useNavigate();

  return (
    <div className="cart">
      <div className="cartitem">
        <div className="cart-item-tittle">
          <p>Items</p>
          <p>Tittle</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Food_List.map((item, index) => {
          return (
            <div>
              <div className="cart-item-tittle cart-item-item">
                <img src={item.image} alt="on" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>{item.price * cartItem[item._id]}</p>
                <p onClick ={()=>removeTocart(item._id)}className="cross">x</p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>



      <div className="cart-bottom">
        <div className="cart-total">
          <h2>cart Totals</h2>
          <div>
            <div className="cart-details">
              <p>subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-details">
           <p>Delivery Fee</p>
           <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-details">
              <b>Total</b>

<b>${ getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b> 
           </div>

          
          </div>
          <button onClick={()=>Navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        
      
      <div className="cart-promode">
        <div>
          <p>if you have a promo code,Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;
