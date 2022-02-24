import React from 'react';
import BasicJSX from './React/BasicJSX';
import InputState from './React/InputState';
import LifeCycle from './React/LifeCycle';
import PropsState from './React/PropsState';

function ReactStudy() {
  const handleData = data => {
    console.log(data);
  };

  return (
    <>
      <BasicJSX />
      <PropsState name="react" />
      <LifeCycle />
      <InputState onData={handleData} />
    </>
  );
}

export default ReactStudy;
