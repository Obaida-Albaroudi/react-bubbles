import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {axiosWithAuth} from "../util/axiosWithAuth.js"

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  console.log("welcome")

  useEffect(() =>{
    axiosWithAuth()
    .get("http://localhost:5000/api/colors")
    .then(res => {
      console.log("hi",res.data)
      setColorList(res.data)
    })
    .catch(err=>console.log(err.response))
  },[])

  return (
    <div>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;
