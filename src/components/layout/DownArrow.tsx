import React from 'react';
import "../../styles/downArrow.css"
import arrow from '../../images/right-arrow.svg'

export const DownArrow = () => {
  return (
    <div className="DownArrow">
      <img src={arrow} alt={"logo"}/>
    </div>
  );
}

export default DownArrow;
