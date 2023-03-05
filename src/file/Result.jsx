import React from 'react';
import '../style/Result.css';
import result from '../image/Result.png';

function Result(props) {
  return (
    <div className='finnalyborder'>
      <img src={result} alt='help'/>
      <h1>Result</h1>
      <h2>You guessed {props.result} answers out of 6</h2>
      <a href="/"><button>Try again</button></a>
    </div>
  )
}

export {Result}