import React, {useState} from 'react';
import MyHeader from './MyHeader.js';
import MyBody from './MyBody.js';
import './App.css';

function App() {

  // Mudança do h2
  const [str,setStr] = useState('Olá, Mundo!');

  function handleClick(){
    setStr('Olá, você!');
  }

  
  return (
    <React.Fragment>
      <div className="App">
        <h2>{str}</h2>
        <button id="header-button" onClick={()=>handleClick()}>Teste</button>
        <MyHeader legenda="usuário:"/>
      </div>

      <div>
        <MyBody />
      </div>
    </React.Fragment>
  );
}

export default App;
