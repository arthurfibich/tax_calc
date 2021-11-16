import '@styles/header.css';
import type { FC } from 'react';

export const Header: FC = () => {
  return (
    <div className="Header">
      <button id="LogIn">Anmelden</button>
      <button id="Regs">Registrieren</button>
    </div>
  );
};
