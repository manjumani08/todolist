import React,{ useState } from 'react'
import "./App.css";


export default function App() {
  //button values for creating button 
  const numbers = ['+','-','*','/','=','1','2','3','4','5','6','7','8','9','0','C']
  //declared a useState hook for  showing the values
  const [num,setNum] =useState([])
  //master function 
  function processCalcu(elem){
    setNum(prevNum => [...prevNum, elem]);
    if(elem === "="){
      const exp = num.join('');
      const result = eval(exp);
      console.log(result);
      setNum([result.toString()])
    }
    if(elem ==="C"){
      setNum([])
    }

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


