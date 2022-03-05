import React, { useState } from 'react';
import styled from 'styled-components';

function InputInfo({ useInfo, onRemove, onUpdate }) {
  const [edit, setEdit] = useState(false);
  const [isValue, setIsValue] = useState({ name: '', phone: '' });

  const { name, phone } = useInfo;

  const handleRemove = () => {
    onRemove(useInfo.id);
  };

  const handleToggleEdit = () => {
    if (edit) {
      onUpdate(useInfo.id, {
        name: isValue.name,
        phone: isValue.phone,
      });
    } else {
      setIsValue({
        name: useInfo.name,
        phone: useInfo.phone,
      });
    }
    setEdit(!edit);
  };

  const handleChange = e => {
    setIsValue({
      ...isValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Information>
      {edit ? (
        <>
          <div>
            <input name="name" onChange={handleChange} value={isValue.name} />
          </div>
          <div>
            <input name="phone" onChange={handleChange} value={isValue.phone} />
          </div>
        </>
      ) : (
        <>
          <div>
            <b>{name}</b>
          </div>
          <div>{phone}</div>
        </>
      )}
      <button onClick={handleRemove}>삭제</button>
      <button onClick={handleToggleEdit}>{edit ? '적용' : '수정'}</button>
    </Information>
  );
}

export default InputInfo;

const Information = styled.div`
  margin: 8px;
  padding: 8px;
  border: 1px solid black;
`;
