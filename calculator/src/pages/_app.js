import '@/styles/globals.css'
import { useState } from 'react';

function Num({ value }) {
  const [output, setNum] = useState(null);
  
  function handleNumClick(val) {
    setNum(val);
  }

  return ( 
    <button className="num" onClick={handleNumClick}>
      {value}
    </button>
  );
}

export default function App() {

  return (
    <>

      <div class="row">
        <Num value="1" onNumClick={() => handleNumClick(1)}/>
        <Num value="2"/>
        <Num value="3"/>
      </div>
      <div class="row">
        <Num value="4"/>
        <Num value="5"/>
        <Num value="6"/>
      </div>
      <div class="row">
        <Num value="7"/>
        <Num value="8"/>
        <Num value="9"/>
      </div>
    </>
  );
}

