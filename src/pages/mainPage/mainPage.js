import React from 'react';
import Header from './../../components/header'
import TwoButtons from './twoButtons'

function MainPage() {
  return (
    <div>
        <Header></Header>
        <TwoButtons title1="Berufskunde" title2="Filmprojekt"></TwoButtons>
    </div>

  );
}

export default MainPage;