import React, { useState, useEffect } from 'react';
import { usePreventLeave, useClick, useTitle } from '../../utils/Hooks';

const UseEffect = () => {
  const [number, setNumber] = useState(0);
  const [newNumber, setNewNumber] = useState(0);

  const hello = () => console.log('hello');
  const sayHello = () => console.log('onClick');

  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 3000);

  const title = useClick(sayHello);

  const { enablePrevent, disablePrevent } = usePreventLeave();

  useEffect(() => {
    hello();
  }, [number]);

  return (
    <>
      <h2>useEffect</h2>
      <div>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setNewNumber(newNumber + 1)}>{newNumber}</button>
      </div>
      <br />
      <h3 ref={title}>useClick 커스텀 훅</h3>
      <br />
      <div>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>unProtect</button>
      </div>
    </>
  );
};

export default UseEffect;
