import React, { useEffect, useState } from "react";
import {axiosWithAuth} from "../helpers/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import getData from './getData';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
// console.log('COLORLIST', colorList)

  useEffect(() => {
    getData()
    // axiosWithAuth()
    //   .get('http://localhost:5000/api/colors')
      .then(res => {
        console.log(res)
        setColorList(res)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
