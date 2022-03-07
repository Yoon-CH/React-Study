import React from 'react';
import styled from 'styled-components';
import UseInput from '../Components/ReactHooks/UseInput';
import UseState from '../Components/ReactHooks/UseState';

const ReactHookStudy = () => {
  return (
    <HookSection>
      <UseState />
      <UseInput />
    </HookSection>
  );
};

export default ReactHookStudy;

const HookSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
