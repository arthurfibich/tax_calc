import type { FC } from 'react';
import '../../styles/downArrow.css';
import arrow from '../../images/right-arrow.svg';

export const DownArrow: FC = () => {
  return (
    <div className="DownArrow">
      <img src={arrow} alt={'logo'} />
    </div>
  );
};
