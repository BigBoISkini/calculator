import mass from './massApp';
import { useRef, useState } from 'react';
import './App.css';

function App() {

  let otvet = 0;



  const refDefolt = useRef();


  const number = (e) => {
    let currentvalue = e;
    let output = refDefolt.current
      if (output.value === '0' ){
        output.value = '' 
      }

      output.value += currentvalue; 

  }

  const clearNumber = (e) => {
        let output = refDefolt.current;
        if (e === 'CE') {
          if (output.value.length === 1 ) {output.value = '0'} else {
            output.value = output.value.substring(0, output.value.length -1 )}
        }

        else if (e === 'C') {output.value = 0}
        else if (e === '=') 
        try {output.value = eval(output.value)}
        catch {
          output.value = 'Недопустимое значение!'
          setTimeout(() => {
            output.value = '0'
          }, 2000)
        }

  };

  return (
    <div className="App">
      <input ref={refDefolt} className='inputNumber'></input>
      <div className='buttons'>

        <div className='buttons-row'>
          {mass.buttons1.map((item, index) => <button 
          onClick={() => number(item.val)}
          key={index}
          className='button-classic'>{item.val}</button>)}
        </div>

        <div className='buttons-grow'>
          {mass.buttons2.map((item, index) => <button
          key={index}
          onClick={() => clearNumber(item.val)}
          className='buttons-schet'>{item.val}</button>)}
        </div>



      </div>
    </div>
  );
}

export default App;
