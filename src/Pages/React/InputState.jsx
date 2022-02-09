import React, { useState } from 'react';
import styled from 'styled-components';

function InputState() {
  const [isValue, setIsValue] = useState('');

  const handleChange = e => {
    setIsValue({
      [e.target.name]: e.target.value,
    });
  };
  console.log(isValue);
  return (
    <>
      <Main>Input state 관리하기</Main>
      <div>
        class형 컴포넌트는 this.state / this.setState로 상태 값을 관리하고
        <br />
        function형 컴포넌트에서는 Hook의 기능인 useState를 활용해 상태 값을
        관리한다.
      </div>
      <input
        name="이름"
        placeholder="이름"
        onChange={handleChange}
        value={isValue.name}
      ></input>
      <input
        name="전화번호"
        placeholder="전화번호"
        onChange={handleChange}
        value={isValue.name}
      ></input>
    </>
  );
}

export default InputState;

const Main = styled.h1``;
