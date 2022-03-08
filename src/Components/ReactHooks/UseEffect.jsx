import React, { useState, useEffect } from 'react';

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

const UseEffect = () => {
  const [number, setNumber] = useState(0);
  const [newNumber, setNewNumber] = useState(0);

  const hello = () => console.log('hello');

  useEffect(() => {
    hello();
  }, [number]);

  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 3000);

  return (
    <>
      <h2>useEffect</h2>
      <div>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setNewNumber(newNumber + 1)}>{newNumber}</button>
      </div>
    </>
  );
};

export default UseEffect;
