import React, { useEffect } from 'react';
import styled from 'styled-components';

function LifeCycle() {
  return (
    <>
      <Main>LifeCycle'(생명주기)'</Main>
      <div>
        컴포넌트가 '나타날 때(Mounting) / 업데이트 될 때(Updating) / 사라질
        때(UnMounting)' 중간 중간 사용됨.
      </div>
      <li>
        constructor - 생성자 함수로써 브라우저상에 가장 먼저 실행되는 함수로
        미리 해야하는 작업 또는 state 초기세팅을 담당한다.
      </li>
      <li>
        componentDidMount - 외부 라이브러리를 특정 DOM에서 사용하거나 API를
        불러올 때를 담당한다 / 우리가 만든 컴포넌트를 특정 시점에 나타난 시점에
        어떠한 작업을 하겠다는 뜻.
      </li>
      <li>componentDidUpdate - 컴포넌트가 업데이트 되었을 때 나타나는 함수</li>
      <li>
        componentWillUnMounting - 컴포넌트가 사라지는 과정에서 호출되는 함수
      </li>
      <h2>React Hook에서의 LifeCycle</h2>
      <div>
        함수형 컴포넌트에서는 Hook을 통해서 클래스형의 LifeCycle을 대체할 수
        있다.
      </div>
      <div>
        useEffect는 기본적으로 componentDidMount, componentDidUpdate,
        componentWillUnmount, getDerivedStateFromProps의 역할을 모두 수행한다.
      </div>
      {useEffect(() => {
        console.log('Hook의 기본형태');
      })}
      {useEffect(() => {
        console.log('componentDidMount');
      }, ['의존성배열'])}
    </>
  );
}

export default LifeCycle;

const Main = styled.h1``;
