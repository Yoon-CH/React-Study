import React from 'react';
import styled from 'styled-components';
import UseState from '../Components/ReactHooks/UseState';

function ReactHookStudy() {
  return (
    <HookSection>
      <UseState />
    </HookSection>
  );
}

export default ReactHookStudy;

const HookSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
