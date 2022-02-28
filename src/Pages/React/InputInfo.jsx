import React from 'react';
import styled from 'styled-components';

function InputInfo({ useInfo, onRemove }) {
  const { name, phone } = useInfo;
  const handleRemove = () => {
    onRemove(useInfo.id);
  };
  return (
    <Information>
      <div>
        <b>{name}</b>
      </div>
      <div>{phone}</div>
      <button onClick={handleRemove}>삭제</button>
    </Information>
  );
}

export default InputInfo;

const Information = styled.div`
  margin: 8px;
  padding: 8px;
  border: 1px solid black;
`;
