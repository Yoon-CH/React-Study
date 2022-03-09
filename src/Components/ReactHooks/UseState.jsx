import React, { useState } from 'react';

const useInput = (initialValue, validater) => {
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
};

const useTab = (initialTab, allTab) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTab || !Array.isArray(allTab)) {
    return;
  }
  return {
    currentItem: allTab[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const content = [
  {
    tab: 'section 1',
    content: 'Thin is Section 1',
  },
  {
    tab: 'section 2',
    content: 'Thin is Section 2',
  },
];

const UseState = () => {
  const [item, setItem] = useState(1);

  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  const maxLen = value => !value.includes('@');

  const name = useInput('Mr.', maxLen);

  const { currentItem, changeItem } = useTab(0, content);

  return (
    <>
      <h2>useState{item}, 커스텀 훅을 통한 useState 공부</h2>
      <div>
        <button onClick={incrementItem}>increment</button>
        <button onClick={decrementItem}>decrement</button>
      </div>
      <br />
      <input placeholder="name" {...name} />
      <br />
      <div>
        {content.map((section, index) => (
          <button key={section.tab} onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </>
  );
};

export default UseState;
