import { useState } from 'react';
import './App.css';

const Sum = (num1, num2) => {
  return parseInt(num1) + parseInt(num2);
}

const Subtraction = (num1, num2) => {
  return parseInt(num1) - parseInt(num2);
}

const Division = (num1, num2) => {
  return Math.floor(parseInt(num1) / parseInt(num2));
}

const Multiplication = (num1, num2) => {
  return parseInt(num1) * parseInt(num2);
}

const Module = (num1, num2) => {
  return parseInt(num1) % parseInt(num2);
}

function App() {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);

  return (
    <div className="App">
      <form>
        <lable>First number: </lable>
        <input type="text" placeholder='Set a value to the 1st number' value={num1} onChange={(e) => setNum1(e.target.value)}></input>
        <lable>   Last number: </lable>
        <input type="text" placeholder='Set a value to the 2nd number' value={num2} onChange={(e) => setNum2(e.target.value)}></input>
      </form>
      <h2 className='op'>Sum: {Sum(num1, num2)}</h2>
      <h2 className='op'>Subtraction: {Subtraction(num1, num2)}</h2>
      <h2 className='op'>Multiplication: {Multiplication(num1, num2)}</h2>
      <h2 className='op'>Division: {Division(num1, num2)}</h2>
      <h2 className='op'>Module: {Module(num1, num2)}</h2>
    </div>
  );
}

export default App;
