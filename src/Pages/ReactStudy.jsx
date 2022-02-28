import React, { useRef, useState } from 'react';
import BasicJSX from './React/BasicJSX';
import InputInfoList from './React/InputInfoList';
import InputState from './React/InputState';
import LifeCycle from './React/LifeCycle';
import PropsState from './React/PropsState';

function ReactStudy() {
  const [useInfo, setUseInfo] = useState([]);
  const id = useRef(-1);
  const handleData = data => {
    setUseInfo(useInfo.concat({ ...data, id: (id.current += 1) }));
  };
  const handleRemove = id => {
    setUseInfo(useInfo.filter(useInfo => useInfo.id !== id));
  };

  return (
    <>
      <BasicJSX />
      <PropsState name="react" />
      <LifeCycle />
      <InputState onData={handleData} />
      <InputInfoList useInfo={useInfo} onRemove={handleRemove} />
    </>
  );
}

export default ReactStudy;
