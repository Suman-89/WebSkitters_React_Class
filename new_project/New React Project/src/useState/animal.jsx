import React, { useState } from 'react'
import hen from '../assets/animal/hen.webp'
import pig from '../assets/animal/pig.webp'
import bear from '../assets/animal/bear.jpg'
import cat from '../assets/animal/cat.png'
import dog from '../assets/animal/dog.jpg'
import horse from '../assets/animal/horse.png'
import lion from '../assets/animal/lion.png'
import tiger from '../assets/animal/tiger.png'

export default function Animal() {
    const animalArr = [hen,pig,bear,cat,dog,horse,lion,tiger];
    const [arrIndex, setArrIndex] = useState(0);
    const showPic = () =>{
        setArrIndex(previndex => (previndex + 1 === animalArr.length ? 0 : previndex+1));
    }
  return (
    <>
      <img src={animalArr[arrIndex]} alt="" style={{width:'200px',height:'200px'}}/>
      <button onClick={showPic}>Change Pic</button>
    </>
  )
}
