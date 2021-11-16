import type { FC } from 'react';
import '@styles/title.css';

export const Title: FC = () => {
  return (
    <div className="Title">
      <div className="MainTitle">Dein Finanzhaushalt!</div>
      <div className="SubTitle">Besser als Olaf Scholz?</div>
    </div>
  );
};
