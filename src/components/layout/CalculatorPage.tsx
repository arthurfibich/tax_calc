import type { FC } from 'react';
import { UbiCalcApp } from '../functionality/ubi-calc/UbiCalculator';
import { Header } from './Header';

export const CalculatorPage: FC = () => {
  return (
    <div className="CalculatorPage">
      <Header />
      <UbiCalcApp />
    </div>
  );
};
