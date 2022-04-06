import React, { useState, useEffect } from 'react';
import './App.css';
import HomeBody from './Components/Body/HomeBody';
import Header from './Components/Header/Header';
import List from './Components/Menu/List';

function App() {
  const [clickedFactory, setClickedFactory] = useState('');
  const [clickedHeader, setClickedHeader] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);


  const onClickedFactory = (factory) => {
    setClickedFactory(factory);
    setClickedHeader('');
  };

  const onClickedHeader = (tab) => {
    setClickedHeader(tab);
    setClickedFactory('');
  };
  
    
  useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 10 && !isScrolled) {
                  setIsScrolled(true);
              } else if (window.scrollY === 0 && isScrolled) {
                  setIsScrolled(false);
              }
      })
  },[isScrolled]);

  return (
    <>
      <Header isScrolled={isScrolled} clicked={onClickedHeader}/>
      <List isScrolled={isScrolled} clicked={onClickedFactory} header={clickedHeader}/>
      <HomeBody isScrolled={isScrolled} clicked={clickedFactory} header={clickedHeader}/>
    </>
  );
}

export default App;
