import type { FC } from 'react';
import '@styles/downArrow.css';
import arrow from '@images/right-arrow.svg';

export const DownArrow: FC = () => {
  return (
    <div role="button" className="DownArrow" onClick={scroll} onKeyDown={scroll} tabIndex={0}>
      <img src={arrow} alt={'logo'} />
    </div>
  );
};

function scroll() {
  window.scrollTo({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth',
  });
}
