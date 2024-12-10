import React, { useEffect, useState } from 'react'
import './AdviceApp.css'

export const AdviceApp = () => {
    const [advice, setAdvice] = useState("Please Click Button to Get Advice ");
    const [count, setCount] = useState(-1);

    async function getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice)
        setCount((a) => a + 1)
        
    }

    useEffect(function (){
        getAdvice();
    }, [] )

    function Counter (props){
        return  <p>You have read <b>{props.count}</b> pieces of advice</p>
      }

  return  <div className='container'>
    <h3>{advice}</h3>
    <button onClick={getAdvice}>Get Advice</button>
    <Counter count={count} />
  </div>

}

























