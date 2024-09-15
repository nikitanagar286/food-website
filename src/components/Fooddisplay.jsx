import React, { useContext, useEffect } from "react";
import PropTypes from 'prop-types';
import { Storecontext } from "../context/Storecontext";
import Fooditem from "./Fooditem";

const Fooddisplay = ({ category }) => {
  const { Food_List } = useContext(Storecontext);

  useEffect(() => {
    console.log(Food_List, "data");
  }, [Food_List]);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {Food_List.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <Fooditem
                key={item._id}
                id={item._id}
                name={item.name}
                Description={item.Description}
                price={item.price}
                image={item.image}
                category={item.category}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

Fooddisplay.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Fooddisplay;
