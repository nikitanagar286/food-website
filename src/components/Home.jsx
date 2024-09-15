import React, { useState } from "react";
import Header from "./Header";
import Exploremenu from "./Exploremenu";
import Fooddisplay from "./Fooddisplay";
import AppDownload from "./AppDownload";
// import StoreContextProvider from '../context/Storecontext'
// import Fooditem from './Fooditem'

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <Fooddisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
