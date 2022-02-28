import React from 'react';
import InputInfo from './InputInfo';

function InputInfoList({ useInfo, onRemove }) {
  if (!useInfo) return null;
  const list = useInfo.map(useInfo => (
    <InputInfo useInfo={useInfo} onRemove={onRemove} key={useInfo.id} />
  ));
  return <div>{list}</div>;
}

export default InputInfoList;
