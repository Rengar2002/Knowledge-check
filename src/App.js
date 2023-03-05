import { Quiz } from "./file/Quiz";
import React,{ useState } from 'react';
import { Result } from "./file/Result";
import './style/App.css'

function App() {

  const [step,SetStep] = useState(0);
  const [length,SetLength]= useState(6);
  const [correct,SetCorrect] = useState()

  const updateData = (value,maxvalue,correct) => 
  {
    SetStep(value);
    SetLength(maxvalue);
    SetCorrect(correct);
  }



  return (
    <div className="baseWindow">
      {
        step !== length?(<Quiz updateData={updateData}/>):(<Result result={correct}/>)
      }
    </div>
    
  );
}

export default App;
