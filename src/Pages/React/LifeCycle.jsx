import React from 'react';
import styled from 'styled-components';

function LifeCycle() {
  return (
    <>
      <Main>LifeCycle'(생명주기)'</Main>
      <div>
        컴포넌트가 '나타날 때(Mounting) / 업데이트 될 때(Updating) / 사라질
        때(Unmounting)' 중간 중간 사용됨.
      </div>
    </>
  );
}

export default LifeCycle;

const Main = styled.h1``;
