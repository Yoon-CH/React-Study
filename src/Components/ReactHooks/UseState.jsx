import React, { useState } from 'react';
import styled from 'styled-components';

function useInput(initialValue, validater) {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof validater === 'function') {
      willUpdate = validater(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
}

function UseState() {
  const [item, setItem] = useState(1);

  const incrementItem = () => setItem(item + 1);

  const decrementItem = () => setItem(item - 1);

  const maxLen = value => !value.includes('@');

  const name = useInput('Mr.', maxLen);

  return (
    <>
      <h2>useState{item}, useInput, useTab</h2>
      <Div>
        <button onClick={incrementItem}>increment</button>
        <button onClick={decrementItem}>decrement</button>
      </Div>
      <br />
      <input placeholder="name" {...name} />
    </>
  );
}

export default UseState;

const Div = styled.div`
  display: block;
`;
