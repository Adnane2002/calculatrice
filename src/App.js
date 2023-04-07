import './App.css';
import { useState } from "react";



function App() {
    const[result , setResult] = useState('0')

const btnNumber = (e) => {
   const number = e.target.textContent
   if (result === '0'){
   setResult(number)
   }
   else{
    setResult(result + number)
   }
}
const btnOperat = (e) => {
const operat = e.target.textContent
setResult(result +" "+operat)
}
const btnEqual = (e) => {
    setResult(eval(result))
    }

    const btnClear = (e) => {
        setResult ('0')
        }
    
  return (
    <div className='App'>
      <div className="calculator">
        <div className="row">{result}</div>
       
        <div className="btn" onClick={btnNumber}>7</div>
        <div className="btn" onClick={btnNumber}>8</div>
        <div className="btn" onClick={btnNumber}>9</div>
        <div className="btn-operate" onClick={btnOperat}>*</div>
        <div className="btn" onClick={btnNumber}>4</div>
        <div className="btn" onClick={btnNumber}>5</div>
        <div className="btn" onClick={btnNumber}>6</div>
        <div className="btn-operate" onClick={btnOperat}>/</div>
        <div className="btn" onClick={btnNumber}>1</div>
        <div className="btn" onClick={btnNumber}>2</div>
        <div className="btn" onClick={btnNumber}>3</div>
        <div className="btn-operate" onClick={btnOperat}>+</div>
        <div className="btn" onClick={btnNumber}>0</div>
        <div className="btn" onClick={btnClear}>AC</div>
        <div className="btn-equal" onClick={btnEqual}>=</div>
        <div className="btn-operate" onClick={btnOperat}>-</div>
      </div>
    </div>
  );
}

export default App;
