import React from 'react';
import "../../styles/variables.css"
import "../../styles/standard.css"
import DownArrow from './DownArrow';
import Header from './Header';
import TitlePageBackground from './TitlePageBackground';
import Title from './Title';
import Content from './Content';

export const Main = () => {
  return (
    <div className="Main">
      <TitlePageBackground />
      <Header />
      <Title />
      <DownArrow />
      <Content />
    </div>
  );
}

export default Main;
