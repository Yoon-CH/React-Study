import React from 'react';
import styled from 'styled-components';

function BasicJSX() {
  const name = 'react';

  const style = {
    //css 스타일을 입힐 때는 객체 형태를 사용한다.
    backgroundColor: 'yellow',
    margin: '5px',
  };

  return (
    <>
      <Main>JSX 기본문법</Main>
      <h2>꼭 닫혀 야 하는 태크. 밑에와 같이 selfClosing도 가능하다</h2>
      <div />
      <h2>감싸져 있는 엘리먼트</h2>
      <div>
        두 개 이상의 엘리먼트는 반드시 하나의 엘리먼트로 감싸져 있어야 한다.
      </div>
      <div>
        무분별한 div를 방지하기 위헤 'Fragment'라는 태그로 겉을 감싸면 빈 div를
        겉에 감싸지 않아도 된다.
      </div>
      <h2>JSX안에서 자바스크립트 값 사용하기</h2>
      <div>Hello {name}</div>
      <div>
        {function () {
          if (name === 'react') return <div>정답입니당~</div>;
        }}
        () // 함수 선언 후 바로 호출해주는 () 이다.
      </div>
      <h2>style 적용법</h2>
      <div style={style}>스타일 적용</div>
      <h2>class 사용법</h2>
      <div>react에서는 class가 아닌 className을 사용한다.</div>
    </>
  );
}

export default BasicJSX;

const Main = styled.h1``;
