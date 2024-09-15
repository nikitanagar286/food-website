import React, { useContext, } from "react";
import asetstarrating from "../asset/food-rate.jpg";
import MinimizeIcon from '@mui/icons-material/Minimize';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Storecontext } from "../context/Storecontext";



const Fooditem = ({ id, name, price, Description, image, category }) => {

  const {cartItem,addToCart,removeTocart}=useContext(Storecontext)
  return (
    <div className="fooditem">
      <div className="food-item-img-container">
        <img src={image}  alt="item-img" className="food-item-image item-image" />
        {
          !cartItem[id]? <AddIcon  className="add" onClick={()=>addToCart(id)} />:<div className={'food-item-counter'} alt="on">

            <MinimizeIcon onClick={()=>removeTocart(id)}/>
              
            <p>{cartItem[id]}</p>
            <AddCircleOutlineIcon onClick={()=>addToCart(id)} />
          </div>

        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={asetstarrating} alt="star-rate" />
        </div>
      </div>
      <p className="foot-item-description">{Description}</p>
      <p className="foot-item-price">${price}</p>
      <p>{category} </p>
    </div>
  );
};

export default Fooditem;
