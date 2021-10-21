import React from 'react';
import "../../styles/downArrow.css"
import arrow from '../../images/right-arrow.svg'

export const DownArrow = () => {
  return (
    <div className="DownArrow" onClick = {scroll}>
      <img src={arrow} alt={"logo"}/>
    </div>
  );
}

export default DownArrow;

function scroll(){
  window.scrollTo({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'
  });
}