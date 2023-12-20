import React, { useState, useEffect } from 'react';
import "./Style.css"

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 1500) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 0.5  );
    if (count === 1500) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count1 < 30) {
        setCount1((prevCount) => prevCount + 1);
      }
    }, 100);
    if (count1 === 30) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [count1]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count2 < 50) {
        setCount2((prevCount) => prevCount + 1);
      }
    }, 200);
    if (count2 === 50) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [count2]);

  return (
    <div id='main-counter'>
      <div className='counter'>
        <h2 className='fw-bold' >+{count}</h2>
        <h2>Student </h2>
      </div>
      <div className='counter'>
        <h2 className='fw-bold' >+{count1}</h2>
        <h2>ClassRoom</h2>
      </div>
      <div className='counter' id='counter-three'>
        <h2 className='fw-bold' >+{count2}</h2>
        <h2>Teacher</h2>
      </div>

    </div>
 

  );
};

export default Counter;
