import React from 'react';
import { useState }  from 'react';
import './App.css';

function App() {

  const[aardbeien, setAardbeien] = useState(0);
  const[bananen, setBananen] = useState(0);
  const[appels, setAppels] = useState(0);
  const[kiwis, setKiwis] = useState(0);

  function resetCounters() {

    setAardbeien(0);
    setBananen(0);
    setAppels(0);
    setKiwis(0);
  }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <h1>Aardbeien</h1>
        <button
            onClick={() => {setAardbeien(aardbeien -1)}}>
            -
        </button>
            {aardbeien}
          <button
              onClick={() => {setAardbeien(aardbeien +1)}}>
            +
          </button>
        <h1>Bananen</h1>
        <button onClick={() => {setBananen(bananen -1)}}>
          -
        </button>
          {bananen}
        <button
          onClick={() => {setBananen(bananen +1)}}>
          +
        </button>
        <h1>Appels</h1>
        <button
          onClick={() => {setAppels(appels -1)}}>
          -
        </button>
          {appels}
        <button
          onClick={() => {setAppels(appels +1)}}>
            +
        </button>
        <h1>Kiwi's</h1>
        <button
            onClick={() => {setKiwis(kiwis -1)}}>
            -
        </button>
            {kiwis}
        <button
            onClick={() => {setKiwis(kiwis +1)}}>
            +
        </button>
        <button
          onClick={resetCounters}>
          Reset
        </button>
    </>
  );
}

export default App;
