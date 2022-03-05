import React, { useState } from 'react';
import styled from 'styled-components';

function PropsState({ name }) {
  const [count, setCount] = useState(0);

  const upCount = () => {
    setCount(count + 1);
  };

  const downCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Main>Props / State 기본문법</Main>
      <h2>Props 부모가 자식한테 넘겨주는 값.</h2>
      <p>내 이름은 {name} 이야</p>
      <div>
        부모컴포넌트에서 name="react"를 받아와서 자식 컴포넌트에서 {name}을
        사용함.
      </div>
      <h2>State 변경 가능한 값.</h2>
      <div>
        state를 통해 기본 값을 주고 setState를 통해서 변경할 수 있는 값을
        넣어주는 형식이다.
      </div>
      <div>카운터 값: {count}</div>
      <button onClick={upCount}>+</button>
      <button onClick={downCount}>-</button>
      <div>
        Props는 부모에게 받아 자식이 사용하는 읽기 전용이라고 생각하면 쉽고,
        State는 직접 변경하여 사용이 가능하다.
      </div>
    </>
  );
}

export default PropsState;

const Main = styled.h1``;
