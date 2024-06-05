import React,{ useState } from 'react'
import "./App.css";


export default function App() {
  const numbers = ['+','-','*','/','=','1','2','3','4','5','6','7','8','9','0','C']
  const [num,setNum] =useState([])
  function processCalcu(elem){
    setNum(prevNum => [...prevNum, elem]);
  }
  return (
    <div>
      <div className="Container">
        <div className='Display'>{num.join(' ')}
        </div>
        <div>
          {numbers.map((element) => (
            <button key={element} onClick={()=>processCalcu(element)}>{element}</button>
          ))};
        </div>
      </div>
    </div>
  );
}


