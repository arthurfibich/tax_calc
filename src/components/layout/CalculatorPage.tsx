import React from 'react';
import { UbiCalcApp } from '../functionality/ubi-calc/UbiCalculator';
import Header from './Header';

export const CalculatorPage = () => {
  return (

    <div className="CalculatorPage">
      <Header/>
      <UbiCalcApp />
    </div>
  );
}

export default CalculatorPage;
