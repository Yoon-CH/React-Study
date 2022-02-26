import React, { useState } from 'react';
import styled from 'styled-components';

function InputState({ onData }) {
  const [isValue, setIsValue] = useState({ name: '', phone: '' });

  const handleChange = e => {
    setIsValue({
      ...isValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onData({ name: isValue.name, phone: isValue.phone });
    setIsValue({ name: '', phone: '' });
  };

  return (
    <>
      <Main>Input state 관리하기</Main>
      <div>
        class형 컴포넌트는 this.state / this.setState로 상태 값을 관리하고
        <br />
        function형 컴포넌트에서는 Hook의 기능인 useState를 활용해 상태 값을
        관리한다.
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="이름"
          onChange={handleChange}
          value={isValue.name}
        />
        <input
          name="phone"
          placeholder="전화번호"
          onChange={handleChange}
          value={isValue.phone}
        />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default InputState;

const Main = styled.h1``;
