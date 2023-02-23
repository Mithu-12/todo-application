import React, { useState } from 'react';
import Button from './Button';
import Histories from './histories';
import HistorySection from './historySection';
import InputState from './inputState';
import Operators from './operators';
const shortid = require('shortid');


const initialInputValue = {
  inputboxA: 20,
  inputboxB: 10,
};



export default function AppOperation() {
  const [inputValue, setInputValue] = useState({ ...initialInputValue });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([])
  const [restoreHistory, setRestoreHistory] = useState(null)


  const handleChange = (e) => {
    console.log({[e.target.name]: parseInt( e.target.value)});
    setInputValue({
      ...inputValue,
      [e.target.name]: parseInt(e.target.value),
    });
  };
  const clearInput = () => {
    setInputValue({...initialInputValue});
    setResult(0)
  }

  const handleArithmeticOps = (operators) => {
    if(!inputValue.inputboxA || !inputValue.inputboxB){
        alert('input value required');
        return
    }
    const f = new Function(`operators`, `
    return ${inputValue.inputboxA}  ${operators}  ${inputValue.inputboxB}
    `)

    const result = f(operators)
    setResult(result);

    const history = {
      id: shortid.generate(),
      inputs: {...inputValue},
      operators,
      date: new Date(),
      result

    }
   
    setHistories([history, ...histories])
    console.log(history)
  }



  const handleRestore = (history) => {
      setInputValue({...history.inputs})
      setResult(history.result)
      // handleArithmeticOps(history.operators)
      setRestoreHistory(history.id)
  }

  return (
    <div>
      <h1>Result : {result}</h1>
     <InputState handleChange={handleChange} inputValue={inputValue}/>
      <div>
        <p>Operations</p>
        <Operators  handleArithmeticOps={handleArithmeticOps} clearInput={clearInput}/>
      </div>
      <div>
          <HistorySection histories={histories} handleRestore={handleRestore} resetHistory={restoreHistory}/>
      </div>
    </div>
  );
}


