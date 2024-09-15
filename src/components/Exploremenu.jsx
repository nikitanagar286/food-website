import React from 'react'
import { MenuList } from './MenuList'
// import { Category } from '@mui/icons-material'

const Exploremenu = ({category,setCategory}) => {
  return (
    <div
    className='exploreMenu' id='exploremenu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>This Indian food guide is a cheat sheet for Indian restaurant menus. It covers the most popular Indian dishes — what they are, how they’re served & more!</p>
<div className="explore-menu-list">

{MenuList.map((item,index)=>{
  return (
    
    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key ={index} className="explore-menu-list-item ">
      

<img className={category===item.menu_name?"active":""} src={item.menu_image} alt="on" />
<p>{item.menu_name}</p>

    </div>
  )
})}

</div>
<hr/>


    </div>
  )
}

export default Exploremenu