import React from 'react';
import styled from 'styled-components';

function InputInfo({ useInfo }) {
  const { name, phone, id } = useInfo;
  return (
    <Information>
      <div>
        <b>{name}</b>
      </div>
      <div>{phone}</div>
    </Information>
  );
}

export default InputInfo;

const Information = styled.div`
  margin: 8px;
  padding: 8px;
  border: 1px solid black;
`;
