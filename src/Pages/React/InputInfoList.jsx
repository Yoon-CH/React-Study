import React from 'react';
import InputInfo from './InputInfo';

function InputInfoList({ useInfo }) {
  if (!useInfo) return null;
  const list = useInfo.map(useInfo => (
    <InputInfo useInfo={useInfo} key={useInfo.id} />
  ));
  return <div>{list}</div>;
}

export default InputInfoList;
