import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../asset/f-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Storecontext } from "../context/Storecontext";

const Navbar = ({setShowLogin}) => {

  
  const [Menu, setMenu] = useState("Home");
const{getTotalCartAmount}=useContext(Storecontext)

  return (
    <div className="navbar">
     <Link to='/' ><img className="logo" src={logo} alt="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/'
          onClick={() => setMenu("Home")}
          className={Menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a href="#exploremenu"
          onClick={() => setMenu("Menu")}
          className={Menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a href="#appdownload"
          onClick={() => setMenu("Mobile App")}
          className={Menu === "Mobile App" ? "active" : ""}
        >
          Mobile App
        </a>
        <a href="#footer"
          onClick={() => setMenu("Contact Us")}
          className={Menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <li>
          <SearchIcon />
        </li>
        <div className="navbar-search-icon">
          <Link to='/Cart'>
            <ShoppingCartIcon />
          </Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button  onClick={()=>setShowLogin(true)} >sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
