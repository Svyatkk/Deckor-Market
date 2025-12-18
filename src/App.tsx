import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import BlockBook from './Components/BlockBook/BlockBook';




function App() {
  return (
    <div className="App">



      <Main>
        <Nav></Nav>

        <BlockBook></BlockBook>

      </Main>

    </div>
  );
}

export default App;
