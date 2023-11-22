import React from 'react';
import MainPageHeader from './mainPageHeader'
import TwoButtons from './twoButtons'

function MainPage() {
  return (
    <div>
        <MainPageHeader></MainPageHeader>
        <TwoButtons title1="Berufskunde" title2="Filmprojekt"></TwoButtons>
    </div>

  );
}

export default MainPage;