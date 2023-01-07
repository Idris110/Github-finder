import React from 'react'
import { useState, useEffect } from 'react';

function Count() {
    const [count, setCount] = useState([]);

    useEffect(() => {
      setCount(JSON.parse(window.localStorage.getItem('count2')));
      console.log(window.localStorage.getItem('count2'));
    }, []);
  
    useEffect(() => {
    console.log("set");
      window.localStorage.setItem('count1',JSON.stringify(count));
    }, [count]);
  
    const increaseCount = () => {
      return setCount([{"ga":"10"},{"ga":"20"}]);
    }
    // const decreaseCount = () => {
    //   return setCount(count - 1)
    // }
  
    return (
      <div className="App">
        <h1> Count  </h1>
        <p>{(count && count.map((elem)=>(
          <div className="mb-3" key={elem.ga}>{elem.ga}</div>
          )))}</p>
        <button onClick={increaseCount}>+</button>
        {/* <button onClick={decreaseCount}>-</button> */}
      </div>
    );
}

export default Count
