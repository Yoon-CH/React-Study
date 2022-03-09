import React, { useState, useEffect, useRef } from 'react';

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };
  useEffect(() => {
    updateTitle();
  }, [title]);
  return setTitle;
};

const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, []);
  return element;
};

const UseEffect = () => {
  const [number, setNumber] = useState(0);
  const [newNumber, setNewNumber] = useState(0);

  const hello = () => console.log('hello');

  const sayHello = () => console.log('onClick');

  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 3000);

  const title = useClick(sayHello);

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
    </>
  );
};

export default UseEffect;
