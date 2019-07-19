import React from 'react';
import Routes from './Routes';
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/header'

const App = (props) => {
 
  
  return (
    <div>
      <Header/>
      <Nav />
      <Routes />
    </div>
  )
}

export default App;